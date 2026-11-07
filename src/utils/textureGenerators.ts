import * as THREE from 'three';

/**
 * Procedurally generates a photorealistic Saturn surface texture
 * with realistic atmospheric bands, subtle storm turbulence, and color gradients.
 */
export function createSaturnTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Base cosmic planetary gradient
  const baseGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  baseGrad.addColorStop(0.00, '#312347'); // Polar violet-hazel
  baseGrad.addColorStop(0.12, '#664e6b');
  baseGrad.addColorStop(0.25, '#c5a386'); // Amber band
  baseGrad.addColorStop(0.35, '#ecd5b3'); // Cream band
  baseGrad.addColorStop(0.48, '#e0be95'); // Equatorial warm gold
  baseGrad.addColorStop(0.52, '#d4ae83');
  baseGrad.addColorStop(0.65, '#b89270');
  baseGrad.addColorStop(0.78, '#825f6e');
  baseGrad.addColorStop(0.90, '#4b3b5c');
  baseGrad.addColorStop(1.00, '#221936'); // South pole

  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add hundreds of micro atmospheric bands and turbulence
  for (let y = 0; y < canvas.height; y += 2) {
    const bandNoise = Math.sin(y * 0.08) * 0.5 + Math.cos(y * 0.02) * 0.5;
    const alpha = (Math.sin(y * 0.3) * 0.08 + 0.1) * (0.8 + bandNoise * 0.2);

    if (y % 6 === 0) {
      ctx.fillStyle = `rgba(255, 240, 220, ${alpha * 0.7})`;
    } else if (y % 4 === 0) {
      ctx.fillStyle = `rgba(90, 60, 110, ${alpha * 0.8})`;
    } else {
      ctx.fillStyle = `rgba(180, 130, 90, ${alpha * 0.5})`;
    }

    ctx.fillRect(0, y, canvas.width, 2);
  }

  // Subtle stormy swirls
  for (let i = 0; i < 40; i++) {
    const cx = Math.random() * canvas.width;
    const cy = 200 + Math.random() * 600;
    const radiusX = 30 + Math.random() * 80;
    const radiusY = 4 + Math.random() * 12;

    const ellipseGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radiusX);
    ellipseGrad.addColorStop(0, 'rgba(255, 250, 240, 0.25)');
    ellipseGrad.addColorStop(0.5, 'rgba(210, 170, 130, 0.15)');
    ellipseGrad.addColorStop(1, 'transparent');

    ctx.fillStyle = ellipseGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedurally generates Saturn's concentric ring system
 * with Cassini division, Encke gap, and translucent dust particles.
 */
export function createSaturnRingTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  if (!ctx) return new THREE.CanvasTexture(canvas);

  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);

  // Inner faint C Ring (Crepe ring)
  grad.addColorStop(0.00, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(0.08, 'rgba(120, 100, 140, 0.15)');
  grad.addColorStop(0.18, 'rgba(160, 140, 170, 0.35)');

  // B Ring (Brightest, densest)
  grad.addColorStop(0.20, 'rgba(230, 215, 190, 0.9)');
  grad.addColorStop(0.35, 'rgba(255, 245, 225, 0.95)');
  grad.addColorStop(0.50, 'rgba(215, 195, 175, 0.85)');
  grad.addColorStop(0.57, 'rgba(190, 170, 160, 0.7)');

  // Cassini Division (Dark gap)
  grad.addColorStop(0.58, 'rgba(5, 5, 15, 0.05)');
  grad.addColorStop(0.63, 'rgba(2, 2, 8, 0.02)');
  grad.addColorStop(0.64, 'rgba(10, 10, 20, 0.08)');

  // A Ring
  grad.addColorStop(0.66, 'rgba(210, 195, 185, 0.8)');
  grad.addColorStop(0.78, 'rgba(225, 210, 200, 0.85)');
  // Encke division
  grad.addColorStop(0.84, 'rgba(30, 20, 45, 0.1)');
  grad.addColorStop(0.86, 'rgba(200, 185, 175, 0.75)');

  // F Ring (Outermost thin streamer)
  grad.addColorStop(0.92, 'rgba(120, 90, 150, 0.2)');
  grad.addColorStop(0.96, 'rgba(210, 180, 255, 0.6)');
  grad.addColorStop(1.00, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add micro ring striations
  for (let x = 0; x < canvas.width; x += 1) {
    if (Math.random() > 0.4) {
      const alpha = Math.random() * 0.18;
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fillRect(x, 0, 1, canvas.height);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedurally generates a distant rocky moon / asteroid texture
 */
export function createAsteroidTexture(colorHex: string = '#8a8296'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = colorHex;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Craters and rough rocky surface
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = 2 + Math.random() * 18;

    const craterGrad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
    craterGrad.addColorStop(0, 'rgba(20, 15, 30, 0.7)');
    craterGrad.addColorStop(0.8, 'rgba(40, 35, 55, 0.4)');
    craterGrad.addColorStop(1, 'rgba(180, 170, 200, 0.3)');

    ctx.fillStyle = craterGrad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
