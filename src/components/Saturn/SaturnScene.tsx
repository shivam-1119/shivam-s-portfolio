import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createSaturnTexture, createSaturnRingTexture } from '../../utils/textureGenerators';

interface SaturnSceneProps {
  reducedMotion?: boolean;
}

export const SaturnScene: React.FC<SaturnSceneProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect device pixel ratio and capabilities
    const isMobile = window.innerWidth < 768;
    const pixelRatio = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03030B, 0.008);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Camera position matching the hero view (Saturn prominently on the right side)
    camera.position.set(isMobile ? 0 : 2.2, isMobile ? 0.5 : 0.8, isMobile ? 8.5 : 7.2);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setIsLowPower(true);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Main Celestial Pivot (Saturn System)
    const saturnSystem = new THREE.Group();
    // Position Saturn to the right side of the screen matching the reference image
    saturnSystem.position.set(isMobile ? 0 : 2.5, isMobile ? -0.2 : 0.3, 0);
    // Saturn's realistic axial tilt is ~26.7 degrees
    saturnSystem.rotation.z = THREE.MathUtils.degToRad(-26.7);
    saturnSystem.rotation.x = THREE.MathUtils.degToRad(12);
    scene.add(saturnSystem);

    // 1. Saturn Planet Sphere
    const saturnRadius = isMobile ? 1.4 : 1.75;
    const planetGeometry = new THREE.SphereGeometry(saturnRadius, isMobile ? 48 : 64, isMobile ? 48 : 64);
    const planetTexture = createSaturnTexture();

    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.85,
      metalness: 0.1,
    });

    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    saturnSystem.add(planetMesh);

    // 2. Atmospheric Rim / Fresnel Glow
    const atmosphereGeometry = new THREE.SphereGeometry(saturnRadius * 1.025, 48, 48);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = dot(viewDir, vNormal);
          fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
          float glow = pow(fresnel, 2.5);
          vec3 glowColor = mix(vec3(0.54, 0.36, 0.96), vec3(0.22, 0.74, 0.97), fresnel * 0.7);
          gl_FragColor = vec4(glowColor, glow * 0.75);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });

    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    saturnSystem.add(atmosphereMesh);

    // 3. Saturn Concentric Ring System
    const innerRadius = saturnRadius * 1.35;
    const outerRadius = saturnRadius * 2.55;
    const thetaSegments = isMobile ? 64 : 128;
    const phiSegments = 24;

    const ringGeometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    for (let j = 0; j <= phiSegments; j++) {
      const r = innerRadius + (outerRadius - innerRadius) * (j / phiSegments);
      const u = j / phiSegments;

      for (let i = 0; i <= thetaSegments; i++) {
        const theta = (i / thetaSegments) * Math.PI * 2;
        const x = r * Math.cos(theta);
        const z = r * Math.sin(theta);
        vertices.push(x, 0, z);
        uvs.push(u, i / thetaSegments);
      }
    }

    for (let j = 0; j < phiSegments; j++) {
      for (let i = 0; i < thetaSegments; i++) {
        const a = j * (thetaSegments + 1) + i;
        const b = (j + 1) * (thetaSegments + 1) + i;
        const c = (j + 1) * (thetaSegments + 1) + (i + 1);
        const d = j * (thetaSegments + 1) + (i + 1);

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    ringGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    ringGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    ringGeometry.setIndex(indices);
    ringGeometry.computeVertexNormals();

    const ringTexture = createSaturnRingTexture();
    const ringMaterial = new THREE.MeshStandardMaterial({
      map: ringTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      roughness: 0.7,
      metalness: 0.15,
      depthWrite: false,
    });

    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.receiveShadow = true;
    ringMesh.castShadow = true;
    saturnSystem.add(ringMesh);

    // 4. Distant Small Moons & Asteroids
    const moonGroup = new THREE.Group();
    saturnSystem.add(moonGroup);

    // Moon 1 (Titan analog)
    const titanGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const titanMat = new THREE.MeshStandardMaterial({
      color: 0xEAB308,
      roughness: 0.9,
    });
    const titan = new THREE.Mesh(titanGeo, titanMat);
    titan.position.set(-3.8, 1.2, -1.5);
    moonGroup.add(titan);

    // Moon 2 (Enceladus analog - icy blue)
    const enceladusGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const enceladusMat = new THREE.MeshStandardMaterial({
      color: 0x93C5FD,
      roughness: 0.3,
    });
    const enceladus = new THREE.Mesh(enceladusGeo, enceladusMat);
    enceladus.position.set(3.4, -1.6, 1.2);
    moonGroup.add(enceladus);

    // Floating Cosmic Asteroids around the foreground and background
    const asteroidGroup = new THREE.Group();
    scene.add(asteroidGroup);

    const asteroidCount = isMobile ? 12 : 24;
    const asteroidMeshes: { mesh: THREE.Mesh; rotSpeed: THREE.Vector3; orbitSpeed: number; angle: number; dist: number; y: number }[] = [];

    for (let i = 0; i < asteroidCount; i++) {
      const size = 0.04 + Math.random() * 0.14;
      const astGeo = new THREE.DodecahedronGeometry(size, 1);
      const astMat = new THREE.MeshStandardMaterial({
        color: 0x58506D,
        roughness: 0.95,
        metalness: 0.1,
      });
      const astMesh = new THREE.Mesh(astGeo, astMat);

      const dist = 3.5 + Math.random() * 5.0;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4.0;

      astMesh.position.set(
        Math.cos(angle) * dist + (isMobile ? 0 : 2.5),
        y,
        Math.sin(angle) * dist
      );

      asteroidGroup.add(astMesh);
      asteroidMeshes.push({
        mesh: astMesh,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        orbitSpeed: 0.0003 + Math.random() * 0.0006,
        angle: angle,
        dist: dist,
        y: y,
      });
    }

    // 5. Lighting Setup
    // Sun light (Directional light from upper left)
    const sunLight = new THREE.DirectionalLight(0xFFF7ED, 2.4);
    sunLight.position.set(-6, 4, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = isMobile ? 1024 : 2048;
    sunLight.shadow.mapSize.height = isMobile ? 1024 : 2048;
    sunLight.shadow.bias = -0.001;
    scene.add(sunLight);

    // Deep purple & blue cosmic ambient light
    const ambientLight = new THREE.AmbientLight(0x1E1035, 1.2);
    scene.add(ambientLight);

    // Neon violet rim light
    const violetLight = new THREE.PointLight(0x8B5CF6, 3.5, 20);
    violetLight.position.set(5, -3, -2);
    scene.add(violetLight);

    // Electric blue accent light
    const blueLight = new THREE.PointLight(0x38BDF8, 2.5, 20);
    blueLight.position.set(-4, -4, 3);
    scene.add(blueLight);

    // Mouse Interaction Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (e.clientX - windowHalfX) * 0.0004;
      targetMouseY = (e.clientY - windowHalfY) * 0.0003;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const mobile = w < 768;

      camera.aspect = w / h;
      camera.fov = mobile ? 52 : 45;
      camera.position.set(mobile ? 0 : 2.2, mobile ? 0.5 : 0.8, mobile ? 8.5 : 7.2);
      camera.updateProjectionMatrix();

      saturnSystem.position.set(mobile ? 0 : 2.5, mobile ? -0.2 : 0.3, 0);

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let isVisible = true;

    // Pause rendering when tab inactive for performance
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const motionMultiplier = reducedMotion ? 0.2 : 1.0;

      // 1. Slow planetary rotation
      planetMesh.rotation.y += delta * 0.06 * motionMultiplier;

      // 2. Independent ring rotation around planet axis
      ringMesh.rotation.y += delta * 0.03 * motionMultiplier;

      // 3. Titan orbit
      titan.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 3.8;
      titan.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 3.8;

      // 4. Asteroid drift & spin
      for (let i = 0; i < asteroidMeshes.length; i++) {
        const item = asteroidMeshes[i];
        item.mesh.rotation.x += item.rotSpeed.x * motionMultiplier;
        item.mesh.rotation.y += item.rotSpeed.y * motionMultiplier;
        item.angle += item.orbitSpeed * motionMultiplier;
        item.mesh.position.x = Math.cos(item.angle) * item.dist + (window.innerWidth < 768 ? 0 : 2.5);
        item.mesh.position.z = Math.sin(item.angle) * item.dist;
      }

      // 5. Mouse Parallax interpolation
      if (!reducedMotion) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
        saturnSystem.rotation.y = THREE.MathUtils.degToRad(-15) + mouseX * 2.0;
        saturnSystem.rotation.x = THREE.MathUtils.degToRad(12) + mouseY * 1.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      planetGeometry.dispose();
      planetMaterial.dispose();
      planetTexture.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  if (isLowPower) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-85"
        style={{ backgroundImage: `url('/images/armanverse-hero-bg.jpg')` }}
      />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
