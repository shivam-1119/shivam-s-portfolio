import { useState, useEffect } from 'react';
import { X, Lock, ShieldCheck, Mail, Trash2, Key, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'messages' | 'projects' | 'config'>('messages');
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      const stored = JSON.parse(
        localStorage.getItem('armanverse_contact_messages') || '[]'
      );
      setMessages(stored);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Safe client-side demo passkey: "arman2026"
    if (passcode.toLowerCase() === 'arman2026') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem('armanverse_contact_messages', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl glass-panel p-6 sm:p-8 border border-purple-500/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Mission Control &bull; Admin Console
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {isAuthenticated ? 'AUTHENTICATED SESSION' : 'RESTRICTED CLEARANCE'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="flex-1 flex flex-col items-center justify-center py-10 max-w-sm mx-auto w-full text-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Key className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white font-display mb-1">Enter Commander Clearance</h4>
            <p className="text-xs text-zinc-400 mb-6">
              Enter admin access key (demo key: <code className="text-purple-300 font-mono">shivam2026</code>)
            </p>

            <div className="w-full space-y-4">
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setAuthError(false);
                }}
                placeholder="Passkey"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-center tracking-widest text-lg font-mono focus:outline-none focus:border-purple-500"
              />

              {authError && (
                <div className="text-xs text-rose-400 flex items-center justify-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Invalid clearance credentials.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl btn-cosmic-primary text-white font-semibold text-sm cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                Unlock Console
              </button>
            </div>
          </form>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 overflow-y-auto space-y-6">
            {/* Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-max">
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${activeTab === 'messages'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                Inbound Transmissions ({messages.length})
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${activeTab === 'projects'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                Planets &amp; Projects ({PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${activeTab === 'config'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                Firebase Security &amp; Config
              </button>
            </div>

            {/* Inbound Messages Tab */}
            {activeTab === 'messages' && (
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 font-mono text-xs border border-dashed border-white/10 rounded-2xl">
                    No transmissions logged yet. Use the Contact form to send a transmission!
                  </div>
                ) : (
                  messages.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-bold text-white">{m.name}</span>
                          <span className="text-xs font-mono text-zinc-400">({m.email})</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-zinc-500">
                            {new Date(m.createdAt).toLocaleDateString()}
                          </span>
                          <button
                            onClick={() => handleDeleteMessage(m.id)}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-950 text-zinc-400 hover:text-rose-400 transition-colors"
                            title="Delete log"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-sky-300">{m.subject}</div>
                      <p className="text-xs text-zinc-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                        {m.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Projects Overview Tab */}
            {activeTab === 'projects' && (
              <div className="space-y-3">
                {PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">{p.title}</div>
                      <div className="text-xs font-mono text-purple-300">{p.planetName} &bull; {p.status}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-zinc-400">
                        {p.liveUrl ? 'Live URL Configured' : 'Offline Prototype'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Firebase Config Tab */}
            {activeTab === 'config' && (
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Production Firebase &amp; Environment Readiness</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Firebase rules enforce read-only public access to portfolio collections and strict authentication on administrative update routes.
                </p>
                <div className="bg-black/60 p-4 rounded-xl border border-white/5 font-mono text-xs text-purple-300">
                  rules_version = '2';<br />
                  service cloud.firestore &#123;<br />
                  &nbsp;&nbsp;match /databases/&#123;database&#125;/documents &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;match /projects/&#123;project&#125; &#123; allow read: if true; allow write: if request.auth != null; &#125;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;match /contacts/&#123;msg&#125; &#123; allow create: if true; allow read, write: if request.auth != null; &#125;<br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
