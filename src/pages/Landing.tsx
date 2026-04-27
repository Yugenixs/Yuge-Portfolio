import { Mail, Twitter, Github, ExternalLink, Database, Brain, Code2, BarChart3, Globe, Terminal } from "lucide-react";

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";
const ABOUT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";
const CTA_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";
const PROJECT_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
];

const SKILLS = [
  { icon: Database, label: "Data Engineering", desc: "SQL, PostgreSQL, ETL pipelines" },
  { icon: Brain, label: "Machine Learning", desc: "Scikit-learn, TensorFlow, model training" },
  { icon: BarChart3, label: "Data Visualization", desc: "Matplotlib, Seaborn, Tableau" },
  { icon: Code2, label: "Programming", desc: "Python, R, JavaScript" },
  { icon: Globe, label: "Data Preparation", desc: "Data cleaning, preprocessing, feature engineering" },
  { icon: Terminal, label: "Statistics", desc: "Probability, regression, hypothesis testing" },
];

const PROJECTS = [
  { title: "Proyek 1", desc: "Deskripsi proyek.", tag: "Machine Learning", video: PROJECT_VIDEOS[0] },
  { title: "Proyek 2", desc: "Deskripsi proyek.", tag: "Data Analysis", video: PROJECT_VIDEOS[1] },
  { title: "Proyek 3", desc: "Deskripsi proyek.", tag: "Visualization", video: PROJECT_VIDEOS[2] },
];

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative" style={{ backgroundColor: "#010828", color: "#EFF4FF" }}>
      {/* Texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          backgroundImage: "url('/texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "lighten",
          opacity: 0.6,
        }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{ height: "100svh", borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
      >
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ zIndex: 1, background: "rgba(1,8,40,0.3)" }} />

        <div className="relative w-full h-full flex flex-col" style={{ zIndex: 2, maxWidth: 1831, marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(1rem,4vw,3rem)", paddingRight: "clamp(1rem,4vw,3rem)" }}>

          {/* Header */}
          <div className="flex items-center justify-between pt-8 lg:pt-10">
            <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              yugenix.
            </span>

            {/* Nav */}
            <nav className="liquid-glass hidden lg:flex items-center gap-8" style={{ borderRadius: 28, paddingLeft: 52, paddingRight: 52, paddingTop: 24, paddingBottom: 24 }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  style={{ fontFamily: "'Anton', sans-serif", fontSize: 13, textTransform: "uppercase", color: "#EFF4FF", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.04em", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#6FFF00")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#EFF4FF")}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Desktop social icons */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { Icon: Mail, href: "yugenix555@gmail.com" },
                { Icon: Twitter, href: "https://x.com/yugenixs" },
                { Icon: Github, href: "https://github.com/yugenix" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-glass"
                  style={{ width: 56, height: 56, borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#EFF4FF", transition: "background 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Hero content */}
          <div className="flex-1 flex flex-col justify-end pb-16 lg:pb-20">
            <div className="lg:ml-32 relative" style={{ maxWidth: 860 }}>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(12px,1.2vw,15px)", textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 16 }}>
                Data Science Student
              </p>
              <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px,7vw,90px)", textTransform: "uppercase", lineHeight: 1.0 }}>
                Ilyas Tio
                <br />
                Afrilian
              </h1>

              {/* Cursive accent */}
              <span style={{ fontFamily: "'Condiment', cursive", fontSize: "clamp(24px,3.5vw,48px)", color: "#6FFF00", position: "absolute", right: "-5%", top: "10%", transform: "rotate(-1deg)", mixBlendMode: "exclusion", opacity: 0.9, pointerEvents: "none", whiteSpace: "nowrap" }}>
                yugenix
              </span>

              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(13px,1.1vw,15px)", textTransform: "uppercase", color: "rgba(239,244,255,0.70)", marginTop: 20, maxWidth: 500, lineHeight: 1.7 }}>
                Turning data into insight. Building things that matter. Exploring the universe one dataset at a time.
              </p>

              <button
                onClick={() => scrollTo("projects")}
                style={{ marginTop: 32, fontFamily: "'Anton', sans-serif", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#010828", background: "#6FFF00", border: "none", borderRadius: 100, paddingLeft: 28, paddingRight: 28, paddingTop: 14, paddingBottom: 14, cursor: "pointer", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                See My Work
              </button>
            </div>

            {/* Mobile social */}
            <div className="flex lg:hidden justify-center gap-4 mt-10">
              {[Mail, Twitter, Github].map((Icon, i) => (
                <div key={i} className="liquid-glass" style={{ width: 56, height: 56, borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#EFF4FF" }}>
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ── */}
      <section id="about" className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
          <source src={ABOUT_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ zIndex: 1, background: "rgba(1,8,40,0.45)" }} />

        <div className="relative w-full flex flex-col justify-center" style={{ zIndex: 2, minHeight: "100vh", maxWidth: 1831, marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(1rem,4vw,3rem)", paddingRight: "clamp(1rem,4vw,3rem)", paddingTop: "clamp(4rem,8vh,6rem)", paddingBottom: "clamp(4rem,8vh,6rem)" }}>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            {/* Left: Heading */}
            <div className="relative flex-shrink-0">
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px,5vw,60px)", textTransform: "uppercase", lineHeight: 1.05 }}>
                Hello!
                <br />
                I'm Ilyas
              </h2>
              <span style={{ fontFamily: "'Condiment', cursive", fontSize: "clamp(36px,4.5vw,68px)", color: "#6FFF00", position: "absolute", right: 0, bottom: 0, transform: "rotate(-2deg)", mixBlendMode: "exclusion", opacity: 0.9, pointerEvents: "none" }}>
                yugenix
              </span>
            </div>

            {/* Right: Bio */}
            <div style={{ maxWidth: 560 }}>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(13px,1.1vw,15px)", textTransform: "uppercase", color: "#EFF4FF", lineHeight: 1.8, marginBottom: 20 }}>
                Mahasiswa yang tertarik membongkar pola tersembunyi dalam data dan menerjemahkannya menjadi insight yang relevan dan bisa ditindaklanjuti.
              </p>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(13px,1.1vw,15px)", textTransform: "uppercase", color: "rgba(239,244,255,0.55)", lineHeight: 1.8 }}>
                Currently studying Data Science — building models, writing code, and learning something new every single day.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mt-10">
                {[
                  { num: "∞", label: "Datasets Explored" },
                  { num: "3+", label: "Years Coding" },
                  { num: "∞", label: "Curiosity" },
                ].map((s, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px,3vw,42px)", color: "#6FFF00", lineHeight: 1 }}>{s.num}</p>
                    <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 11, textTransform: "uppercase", color: "rgba(239,244,255,0.55)", marginTop: 4, letterSpacing: "0.1em" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SKILLS ── */}
      <section id="skills" style={{ backgroundColor: "#010828", paddingTop: "clamp(4rem,8vh,7rem)", paddingBottom: "clamp(4rem,8vh,7rem)" }}>
        <div style={{ maxWidth: 1831, marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(1rem,4vw,3rem)", paddingRight: "clamp(1rem,4vw,3rem)" }}>

          {/* Header */}
          <div className="mb-14">
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 12 }}>What I Know</p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px,5vw,60px)", textTransform: "uppercase", lineHeight: 1 }}>
              Skills &{" "}
              <span style={{ fontFamily: "'Condiment', cursive", color: "#6FFF00" }}>Tools</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {SKILLS.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="liquid-glass"
                style={{ borderRadius: 24, padding: 28, transition: "background 0.2s", cursor: "default" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(111,255,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon size={22} color="#6FFF00" />
                </div>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase", color: "#EFF4FF", marginBottom: 8 }}>{label}</p>
                <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "rgba(239,244,255,0.50)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PROJECTS ── */}
      <section id="projects" style={{ backgroundColor: "#010828", paddingTop: "clamp(4rem,8vh,7rem)", paddingBottom: "clamp(4rem,8vh,7rem)" }}>
        <div style={{ maxWidth: 1831, marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(1rem,4vw,3rem)", paddingRight: "clamp(1rem,4vw,3rem)" }}>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-12">
            <div>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 12 }}>My Work</p>
              <h2 style={{ fontFamily: "'Anton', sans-serif", textTransform: "uppercase", lineHeight: 1.05 }}>
                <span style={{ display: "block", fontSize: "clamp(32px,5vw,60px)" }}>Selected</span>
                <span style={{ display: "block", fontSize: "clamp(32px,5vw,60px)", marginLeft: "clamp(3rem,6vw,8rem)" }}>
                  <span style={{ fontFamily: "'Condiment', cursive", color: "#6FFF00" }}>Projects</span>
                </span>
              </h2>
            </div>
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "rgba(239,244,255,0.45)", maxWidth: 280, lineHeight: 1.7 }}>
              Ganti konten di bawah dengan proyek nyata kamu. Edit file Landing.tsx bagian PROJECTS.
            </p>
          </div>

          {/* Project cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 24 }} className="sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="liquid-glass"
                style={{ borderRadius: 32, padding: 18, transition: "background 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
              >
                {/* Video thumbnail */}
                <div style={{ position: "relative", paddingBottom: "62%", borderRadius: 20, overflow: "hidden", backgroundColor: "#010828", marginBottom: 20 }}>
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={p.video} type="video/mp4" />
                  </video>
                  {/* Tag */}
                  <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(111,255,0,0.15)", border: "1px solid rgba(111,255,0,0.3)", borderRadius: 100, paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5 }}>
                    <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 10, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.1em" }}>{p.tag}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-start justify-between">
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 20, textTransform: "uppercase", color: "#EFF4FF", marginBottom: 8 }}>{p.title}</p>
                    <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "rgba(239,244,255,0.50)", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                  <button
                    style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#b724ff 0%,#7c3aed 100%)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(167,139,250,0.4)", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  >
                    <ExternalLink size={14} color="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CONTACT / CTA ── */}
      <section id="contact" className="relative w-full overflow-hidden" style={{ backgroundColor: "#010828" }}>
        <video autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }}>
          <source src={CTA_VIDEO} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col justify-end" style={{ zIndex: 3 }}>
          {/* Bottom-left social icons */}
          <div className="absolute" style={{ left: "8%", bottom: "clamp(3rem,15%,6rem)" }}>
            <div className="liquid-glass flex flex-col" style={{ borderRadius: "clamp(0.5rem,2vw,1.25rem)", overflow: "hidden" }}>
              {[
                { Icon: Mail, href: "yugenix555@gmail.com" },
                { Icon: Twitter, href: "https://x.com/yugenixs" },
                { Icon: Github, href: "https://github.com/yugenix" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: "clamp(3rem,14vw,10.78125rem)", height: "clamp(3rem,10vw,5rem)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EFF4FF", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.10)" : "none", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right text */}
          <div className="relative w-full" style={{ paddingRight: "clamp(1rem,20%,24%)", paddingLeft: "clamp(1rem,15%,18%)", paddingBottom: "clamp(2rem,6vh,5rem)" }}>
            <div className="flex flex-col items-end text-right">
              <div className="relative w-full mb-2">
                <span style={{ fontFamily: "'Condiment', cursive", fontSize: "clamp(17px,4.5vw,68px)", color: "#6FFF00", mixBlendMode: "exclusion", opacity: 0.9, position: "absolute", top: 0, left: 0 }}>
                  Let's connect
                </span>
              </div>
              <div style={{ marginTop: "clamp(2rem,4vw,5rem)" }}>
                <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(16px,4.5vw,60px)", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "clamp(1rem,3vw,3rem)" }}>
                  GOT A PROJECT?
                </h2>
                <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(16px,4.5vw,60px)", textTransform: "uppercase", lineHeight: 1.05 }}>
                  LET'S BUILD
                  <br />
                  SOMETHING
                  <br />
                  TOGETHER.
                </h2>
              </div>
              <a
                href="yugenix555@gmail.com"
                style={{ marginTop: "clamp(1.5rem,3vw,3rem)", fontFamily: "'Anton', sans-serif", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#010828", background: "#6FFF00", borderRadius: 100, paddingLeft: 28, paddingRight: 28, paddingTop: 14, paddingBottom: 14, textDecoration: "none", display: "inline-block", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
    }
                                      
