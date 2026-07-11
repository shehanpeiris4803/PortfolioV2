import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const KB: { keys: string[]; a: string }[] = [
  { keys: ["skill", "tech", "stack", "tool"], a: "Shehan's skills: Network Security, Penetration Testing, Python, Bash, Linux, Wireshark, Burp Suite, Metasploit, Nmap, SIEM, Cryptography, and Web Security (OWASP Top 10)." },
  { keys: ["project"], a: "Featured projects: 1) Home SOC Lab with Wazuh + Suricata, 2) Vulnerability scanner in Python, 3) Phishing awareness simulator, 4) CTF write-ups on TryHackMe & HackTheBox." },
  { keys: ["education", "study", "university", "degree", "sltc"], a: "Shehan is a Cyber Security Undergraduate at SLTC Research University, Sri Lanka." },
  { keys: ["contact", "email", "reach", "hire"], a: "Reach Shehan via the Contact section — email, LinkedIn, and GitHub links are all listed there." },
  { keys: ["cv", "resume", "download"], a: "You can download the CV from the Hero section — click the 'Download CV' button." },
  { keys: ["achievement", "award", "cert"], a: "Achievements include TryHackBox Top 5%, CTF competition finalist, and multiple cybersecurity certifications in progress." },
  { keys: ["location", "where", "sri lanka"], a: "Based in Sri Lanka 🇱🇰." },
  { keys: ["name", "who"], a: "This is Shehan Deshapriya's portfolio — a Cyber Security undergraduate." },
  { keys: ["hi", "hello", "hey", "yo"], a: "Hey there 👋 Ask me about Shehan's skills, projects, education, or contact info!" },
];

function reply(q: string): string {
  const t = q.toLowerCase();
  for (const k of KB) if (k.keys.some((w) => t.includes(w))) return k.a;
  return "I can answer questions about Shehan's skills, projects, education, achievements, or contact info. Try asking about one of those!";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm Shehan's assistant. Ask me about his skills, projects, or how to get in touch." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    const answer = reply(text);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: answer }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon text-primary-foreground animate-pulse-glow hover:scale-110 transition-transform"
        style={{ background: "var(--neon)" }}
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[92vw] max-w-sm flex-col rounded-lg border border-neon/40 bg-card box-glow animate-fade-up overflow-hidden"
          style={{ borderColor: "var(--neon-dim)" }}
        >
          <div className="flex items-center justify-between border-b border-neon/30 bg-background/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon animate-pulse" style={{ background: "var(--neon)" }} />
              <span className="text-sm font-semibold text-neon" style={{ color: "var(--neon)" }}>
                shehan_bot.sh
              </span>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-neon">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    m.role === "user"
                      ? "bg-neon/20 text-foreground border border-neon/40"
                      : "bg-secondary text-foreground border border-border"
                  }`}
                  style={m.role === "user" ? { borderColor: "var(--neon-dim)" } : undefined}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-lg border border-border bg-secondary px-3 py-2">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-neon" style={{ background: "var(--neon)", animationDelay: "0ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-neon" style={{ background: "var(--neon)", animationDelay: "150ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-neon" style={{ background: "var(--neon)", animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-neon/30 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about skills, projects..."
                className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-neon"
              />
              <button
                onClick={send}
                className="rounded-md border border-neon/40 bg-neon/10 px-3 text-neon hover:bg-neon/20 transition"
                style={{ color: "var(--neon)", borderColor: "var(--neon-dim)" }}
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
