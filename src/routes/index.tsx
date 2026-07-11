import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Shield,
  Terminal,
  Cpu,
  Lock,
  Bug,
  Award,
  GraduationCap,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Chatbot } from "@/components/Chatbot";
import profileAsset from "@/assets/shehan-profile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shehan Deshapriya — Cyber Security Undergraduate" },
      {
        name: "description",
        content:
          "Portfolio of Shehan Deshapriya, Cyber Security undergraduate at SLTC Research University, Sri Lanka. Projects, skills, and contact.",
      },
      { property: "og:title", content: "Shehan Deshapriya — Cyber Security Portfolio" },
      { property: "og:description", content: "Cyber Security undergraduate. Attackers innovate faster — defenders must think deeper." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const TAGLINES = [
  "Cyber Security Undergraduate",
  "Penetration Tester in Training",
  "Ethical Hacker",
  "Defender of Digital Frontiers",
];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, del, i, words]);

  return text;
}

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { icon: Shield, name: "Network Security", items: ["Firewalls", "IDS/IPS", "VPN", "Zero Trust"] },
  { icon: Bug, name: "Penetration Testing", items: ["Metasploit", "Burp Suite", "Nmap", "OWASP Top 10"] },
  { icon: Terminal, name: "Scripting", items: ["Python", "Bash", "PowerShell"] },
  { icon: Lock, name: "Cryptography", items: ["AES", "RSA", "TLS", "Hashing"] },
  { icon: Cpu, name: "Systems", items: ["Linux", "Windows Server", "Docker", "Cloud"] },
  { icon: Code2, name: "Web Security", items: ["XSS", "SQLi", "CSRF", "SSRF"] },
];

const PROJECTS = [
  {
    title: "To-Do List Manager",
    desc: "A simple GUI-based To-Do List Manager developed using Python that allows users to add, update, and delete tasks efficiently.\nIt helps users organize their daily activities with a clean interface and basic task management features.",
    tags: ["To-Do", "TKinter", "Python"],
  },
  {
    title: "50-Programmes\u00a0",
    desc: "Built a collection of 50 Java programs using IntelliJ IDEA to strengthen core programming concepts such as loops, arrays, object-oriented programming, and problem-solving.\nThis project demonstrates hands-on experience in Java development and improves logical thinking through practical implementation.",
    tags: ["Java", "50_P", "IntelliJ"],
  },
  {
    title: "Phishing Simulator",
    desc: "Educational phishing simulation platform for awareness training, with campaign tracking and reporting dashboard.",
    tags: ["Node.js", "Awareness"],
  },
  {
    title: "CTF Write-ups",
    desc: "Documented solutions and methodologies for TryHackMe & HackTheBox challenges — from beginner to hard rooms.",
    tags: ["CTF", "Writeups", "OSINT"],
  },
];

const ACHIEVEMENTS = [
  "Top 5% on TryHackMe global leaderboard",
  "Finalist — Inter-university CTF competition",
  "Contributor to open-source security tools",
  "Google Cybersecurity Certificate (in progress)",
];

function Portfolio() {
  const typed = useTyping(TAGLINES);

  return (
    <div className="relative min-h-screen text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-bold text-neon text-glow" style={{ color: "var(--neon)" }}>
            <Terminal size={20} />
            <span>~/shehan</span>
          </a>
          <ul className="hidden gap-6 text-sm md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-muted-foreground transition hover:text-neon" style={{}}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cv.pdf"
            download="Shehan_Deshapriya_CV.pdf"
            className="hidden items-center gap-2 rounded border border-neon/50 px-3 py-1.5 text-xs font-semibold text-neon transition hover:bg-neon/10 box-glow-hover sm:inline-flex"
            style={{ color: "var(--neon)", borderColor: "var(--neon-dim)" }}
          >
            <Download size={14} /> CV
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center animate-fade-up">
            <div className="relative">
              <img
                src={profileAsset.url}
                alt="Shehan Deshapriya"
                className="h-32 w-32 rounded-full object-cover border-2 border-neon box-glow"
                style={{ borderColor: "var(--neon)" }}
              />
              <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background">
                <span className="h-2.5 w-2.5 rounded-full bg-neon animate-pulse" style={{ background: "var(--neon)" }} />
              </span>
            </div>
          </div>
          <p className="mb-4 font-mono text-sm text-neon animate-fade-up" style={{ color: "var(--neon)" }}>
            &gt; initializing_secure_session...
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl animate-fade-up">
            <span className="text-neon text-glow" style={{ color: "var(--neon)" }}>
              Shehan
            </span>{" "}
            Deshapriya
          </h1>
          <div className="mb-6 h-8 text-lg md:text-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-muted-foreground">$ </span>
            <span className="caret">{typed}</span>
          </div>
          <p className="mx-auto mb-2 max-w-2xl text-base italic text-muted-foreground md:text-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            "Attackers innovate faster — defenders must think deeper."
          </p>
          <p className="mb-10 flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <MapPin size={14} /> SLTC Research University · Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="rounded border border-neon/50 bg-neon/10 px-6 py-3 text-sm font-semibold text-neon transition hover:bg-neon/20 box-glow-hover"
              style={{ color: "var(--neon)", borderColor: "var(--neon-dim)" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon/60"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download="Shehan_Deshapriya_CV.pdf"
              className="inline-flex items-center gap-2 rounded bg-neon px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 box-glow animate-pulse-glow"
              style={{ background: "var(--neon)" }}
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="01. About Me" icon={Terminal}>
        <div className="rounded-lg border border-border bg-card p-6 md:p-8 leading-relaxed text-muted-foreground">
          <p className="whitespace-pre-wrap">
            I'm <span className="text-neon" style={{ color: "var(--neon)" }}>Shehan Deshapriya</span> , an undergraduate in Cyber Security at SLTC Research University with a strong passion for protecting digital systems and exploring the evolving landscape of information security. I am particularly interested in ethical hacking, network security, and blue team operations, and I continuously work to strengthen my technical and analytical skills.{"\n\n\n\n"}
            I enjoy learning new technologies, solving real-world security challenges, and actively engaging in both academic and extracurricular activities. Through my involvement in organizations such as SEDS SLTC and participation in events like Stargaze25 and SpaceStack, I have developed teamwork, leadership, and problem-solving abilities.{"\n\n"}
            I am committed to building a solid foundation in cyber security and aim to contribute to creating secure and resilient digital environments in the future.
          </p>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="02. Education" icon={GraduationCap}>
        <div className="rounded-lg border border-border bg-card p-6 md:p-8 box-glow-hover">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-neon" style={{ color: "var(--neon)" }}>
              BSc (Hons) in Cyber Security
            </h3>
            <span className="text-xs text-muted-foreground">2025 Nov — Present</span>
          </div>
          <p className="mt-1 text-sm">SLTC Research University, Sri Lanka</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Focus areas: Network Defense, Ethical Hacking, Digital Forensics, Cryptography, and Secure Software Development.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="03. Skills" icon={Cpu}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.name} className="group rounded-lg border border-border bg-card p-5 box-glow-hover">
              <div className="mb-3 flex items-center gap-3">
                <s.icon size={20} className="text-neon" style={{ color: "var(--neon)" }} />
                <h3 className="font-semibold">{s.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground transition group-hover:border-neon/40 group-hover:text-neon"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="04. Projects" icon={Code2}>
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-card p-6 box-glow-hover">
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-neon" style={{ color: "var(--neon)" }}>
                  {p.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground" />
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded bg-neon/10 px-2 py-0.5 text-xs text-neon" style={{ color: "var(--neon)" }}>
                    #{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub stats */}
        <div className="mt-8 rounded-lg border border-border bg-card p-6 text-center">
          <p className="mb-4 text-sm text-muted-foreground">GitHub Activity</p>
          <img
            src="https://github-readme-stats.vercel.app/api?username=shehanpeiris4803&show_icons=true&theme=chartreuse-dark&hide_border=true&bg_color=00000000"
            alt="GitHub stats"
            className="mx-auto max-w-full"
            loading="lazy"
          />
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="05. Achievements" icon={Award}>
        <ul className="grid gap-3 md:grid-cols-2">
          {ACHIEVEMENTS.map((a) => (
            <li key={a} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 box-glow-hover">
              <Award size={18} className="mt-0.5 shrink-0 text-neon" style={{ color: "var(--neon)" }} />
              <span className="text-sm">{a}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="06. Contact" icon={Mail}>
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="mb-6 text-muted-foreground">
            Got a project, a challenge, or just want to talk security? Drop a message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shehan@example.com"
              className="inline-flex items-center gap-2 rounded border border-neon/50 bg-neon/10 px-5 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20 box-glow-hover"
              style={{ color: "var(--neon)", borderColor: "var(--neon-dim)" }}
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/shehanpeiris4803"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-neon/60"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shehan-peiris-8733b9366/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-neon/60"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="/cv.pdf"
              download="Shehan_Deshapriya_CV.pdf"
              className="inline-flex items-center gap-2 rounded bg-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 box-glow"
              style={{ background: "var(--neon)" }}
            >
              <Download size={16} /> CV
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        <p>
          <span className="text-neon" style={{ color: "var(--neon)" }}>&gt;</span> © {new Date().getFullYear()} Shehan Deshapriya — built with caffeine & curiosity.
        </p>
      </footer>

      <Chatbot />
    </div>
  );
}

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-8 flex items-center gap-3">
        <Icon size={22} className="text-neon" />
        <h2 className="text-2xl font-bold md:text-3xl">
          <span className="text-neon text-glow" style={{ color: "var(--neon)" }}>#</span> {title}
        </h2>
        <div className="ml-4 h-px flex-1 bg-gradient-to-r from-neon/40 to-transparent" style={{ background: "linear-gradient(to right, var(--neon-dim), transparent)" }} />
      </div>
      {children}
    </section>
  );
}
