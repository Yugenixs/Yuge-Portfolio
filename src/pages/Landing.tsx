import { useState, useEffect, useRef } from "react";
import { Mail, Twitter, Github, ExternalLink, Database, Brain, Code2, BarChart3, Globe, Terminal, Menu, X } from "lucide-react";

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
  { icon: Code2, label: "Programming", desc: "Python, R, C" },
  { icon: Globe, label: "Data Preparation", desc: "Data cleaning, preprocessing, feature engineering" },
  { icon: Terminal, label: "Statistics", desc: "Probability, regression, hypothesis testing" },
];

const PROJECTS = [
  {
    title: "Dashboard Harga Saham IDX",
    desc: "Dashboard interaktif untuk memvisualisasikan pergerakan harga saham 10 perusahaan teratas di Bursa Efek Indonesia.",
    tag: "Visualization",
    href: "https://idx-dashboard.streamlit.app/",
    video: PROJECT_VIDEOS[0],
    image: "/public/idx-dashboard.png",
  },
  {
    title: "EDA Kualitas Udara Jakarta",
    desc: "Exploratory data analysis pada dataset ISPU DKI Jakarta. Visualisasi tren polutan PM2.5 dan korelasi dengan kondisi cuaca.",
    tag: "Data Analysis",
    href: "https://github.com/yugenixs",
    video: PROJECT_VIDEOS[1],
    image: "",
  },
  {
    title: "Proyek 3",
    desc: "deskripsi",
    tag: "Machine Learning",
    href: "https://github.com/yugenixs",
    video: PROJECT_VIDEOS[2],
    image: "",
  },
];

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SOCIAL_LINKS = [
  { Icon: Mail, href: "mailto:yugenix555@gmail.com" },
  { Icon: Twitter, href: "https://x.com/yugenixs" },
  { Icon: Github, href: "https://github.com/yugenixs" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function LazyVideo({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldPlay(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "100%" }}>
      {shouldPlay && (
        <video
          ref={ref}
          loop
          muted
          playsInline
          className={className}
          style={style}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();

  return (
    <div style={{ backgroundColor: "#010828", color: "#EFF4FF", position: "relative" }}>
      {/* ── MOBILE MENU OVERLAY ── */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(1,8,40,0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ position: "absolute", top: 28, right: 24, background: "none", border: "none", cursor: "pointer", color: "#EFF4FF" }}
            aria-label="Tutup menu"
          >
            <X size={28} />
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 32,
                textTransform: "uppercase",
                color: "#EFF4FF",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6FFF00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#EFF4FF")}
            >
              {link}
            </button>
          ))}
          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            {SOCIAL_LINKS.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#EFF4FF",
                  border: "1px solid rgba(255,255,255,0.15)",
                  textDecoration: "none",
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section
        id="home"
        style={{ position: "relative", width: "100%", overflow: "hidden", height: "100svh", borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(1,8,40,0.3)" }} />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
            maxWidth: 1831,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(1rem,4vw,3rem)",
            paddingRight: "clamp(1rem,4vw,3rem)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "clamp(1.5rem,3vw,2.5rem)" }}>
            <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              yugenix.
            </span>

            <nav
              className="liquid-glass"
              style={{
                display: "none",
                alignItems: "center",
                gap: 32,
                borderRadius: 28,
                paddingLeft: 52,
                paddingRight: 52,
                paddingTop: 20,
                paddingBottom: 20,
              }}
              aria-label="Navigasi utama"
              id="desktop-nav"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 13,
                    textTransform: "uppercase",
                    color: "#EFF4FF",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6FFF00")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#EFF4FF")}
                >
                  {link}
                </button>
              ))}
            </nav>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }} id="desktop-social">
              {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="liquid-glass"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EFF4FF",
                    transition: "background 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                  aria-label={href.startsWith("mailto") ? "Email" : href.includes("twitter") || href.includes("x.com") ? "Twitter/X" : "GitHub"}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#EFF4FF", display: "none" }}
              aria-label="Buka menu navigasi"
              id="mobile-hamburger"
            >
              <Menu size={26} />
            </button>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "clamp(3rem,5vw,5rem)" }}>
            <div style={{ position: "relative", maxWidth: 860 }}>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(11px,1.1vw,14px)", textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 14 }}>
                Data Science Student
              </p>
              <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px,7vw,90px)", textTransform: "uppercase", lineHeight: 1.0 }}>
                Ilyas Tio
                <br />
                Afrilian
              </h1>
              <span
                style={{
                  fontFamily: "'Condiment', cursive",
                  fontSize: "clamp(22px,3.2vw,46px)",
                  color: "#6FFF00",
                  position: "absolute",
                  right: "-5%",
                  top: "10%",
                  transform: "rotate(-1deg)",
                  mixBlendMode: "exclusion",
                  opacity: 0.9,
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                yugenix
              </span>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(12px,1vw,14px)", textTransform: "uppercase", color: "rgba(239,244,255,0.65)", marginTop: 18, maxWidth: 480, lineHeight: 1.75 }}>
                Mahasiswa Data Science yang passionate dalam mengubah data menjadi insight yang bermakna.
              </p>

              <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
                <button
                  onClick={() => scrollTo("Projects")}
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#010828",
                    background: "#6FFF00",
                    borderRadius: 100,
                    paddingLeft: 28,
                    paddingRight: 28,
                    paddingTop: 14,
                    paddingBottom: 14,
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  Lihat Proyek
                </button>
                <button
                  onClick={() => scrollTo("Contact")}
                  className="liquid-glass"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#EFF4FF",
                    borderRadius: 100,
                    paddingLeft: 28,
                    paddingRight: 28,
                    paddingTop: 14,
                    paddingBottom: 14,
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
                >
                  Hubungi Saya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        ref={aboutRef as React.RefObject<HTMLElement>}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#010828",
          padding: "clamp(4rem,8vw,8rem) clamp(1rem,4vw,3rem)",
        }}
      >
        <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>
          <div
            style={{
              opacity: aboutInView ? 1 : 0,
              transform: aboutInView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 16 }}>Tentang Saya</p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px,4.5vw,56px)", textTransform: "uppercase", lineHeight: 1.05, marginBottom: 24 }}>
              Turning Data
              <br />
              Into{" "}
              <span style={{ fontFamily: "'Condiment', cursive", color: "#6FFF00", fontSize: "1.15em" }}>Insight</span>
            </h2>
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(12px,1vw,14px)", textTransform: "uppercase", color: "rgba(239,244,255,0.65)", lineHeight: 1.8, maxWidth: 560 }}>
              Saya Ilyas — mahasiswa Data Science yang gemar mengeksplorasi data, membangun model, dan menyajikan cerita dari angka. Saya percaya bahwa data yang baik, bila dipahami dengan benar, bisa mengubah cara kita melihat dunia.
            </p>
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: "clamp(12px,1vw,14px)", textTransform: "uppercase", color: "rgba(239,244,255,0.65)", lineHeight: 1.8, maxWidth: 560, marginTop: 16 }}>
              Saat ini fokus pada machine learning, analisis data, dan visualisasi — dengan Python sebagai senjata utama.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "16/9",
              opacity: aboutInView ? 1 : 0,
              transform: aboutInView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <LazyVideo src={ABOUT_VIDEO} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        ref={skillsRef as React.RefObject<HTMLElement>}
        style={{ padding: "clamp(4rem,8vw,8rem) clamp(1rem,4vw,3rem)", backgroundColor: "#010828" }}
      >
        <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 12 }}>Keahlian</p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px,4.5vw,56px)", textTransform: "uppercase", lineHeight: 1.05 }}>
              What I{" "}
              <span style={{ fontFamily: "'Condiment', cursive", color: "#6FFF00", fontSize: "1.15em" }}>Know</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {SKILLS.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="liquid-glass"
                style={{
                  borderRadius: 20,
                  padding: "24px 28px",
                  opacity: skillsInView ? 1 : 0,
                  transform: skillsInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
              >
                <div style={{ marginBottom: 16, color: "#6FFF00" }}>
                  <Icon size={22} />
                </div>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 17, textTransform: "uppercase", color: "#EFF4FF", marginBottom: 8 }}>{label}</p>
                <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 11, textTransform: "uppercase", color: "rgba(239,244,255,0.50)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        ref={projectsRef as React.RefObject<HTMLElement>}
        style={{ padding: "clamp(4rem,8vw,8rem) clamp(1rem,4vw,3rem)", backgroundColor: "#010828" }}
      >
        <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.15em", marginBottom: 12 }}>Portofolio</p>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px,4.5vw,56px)", textTransform: "uppercase", lineHeight: 1.05 }}>
                Selected{" "}
                <span style={{ fontFamily: "'Condiment', cursive", color: "#6FFF00", fontSize: "1.15em" }}>Projects</span>
              </h2>
            </div>
            <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 11, textTransform: "uppercase", color: "rgba(239,244,255,0.40)", maxWidth: 260, lineHeight: 1.7 }}>
              Proyek-proyek ini adalah hasil eksplorasi dan rasa penasaran yang terus berkembang.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="liquid-glass"
                style={{
                  borderRadius: 28,
                  padding: 18,
                  transition: "background 0.2s",
                  cursor: "pointer",
                  opacity: projectsInView ? 1 : 0,
                  transform: projectsInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
              >
                {/* ── THUMBNAIL: image atau video ── */}
                <div style={{ position: "relative", paddingBottom: "58%", borderRadius: 16, overflow: "hidden", backgroundColor: "#010828", marginBottom: 20 }}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <LazyVideo
                      src={p.video}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                  <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(111,255,0,0.15)", border: "1px solid rgba(111,255,0,0.3)", borderRadius: 100, paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5, zIndex: 2 }}>
                    <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 10, textTransform: "uppercase", color: "#6FFF00", letterSpacing: "0.1em" }}>{p.tag}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase", color: "#EFF4FF", marginBottom: 8 }}>{p.title}</p>
                    <p style={{ fontFamily: "ui-monospace,monospace", fontSize: 11, textTransform: "uppercase", color: "rgba(239,244,255,0.50)", lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lihat proyek ${p.title}`}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#b724ff 0%,#7c3aed 100%)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(167,139,250,0.4)",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                      marginLeft: 14,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.12)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  >
                    <ExternalLink size={14} color="white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ position: "relative", width: "100%", overflow: "hidden", backgroundColor: "#010828" }}>
        <div style={{ position: "relative" }}>
          <LazyVideo
            src={CTA_VIDEO}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <div style={{ padding: "clamp(3rem,6vw,6rem) clamp(1rem,4vw,3rem)", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ maxWidth: 560, textAlign: "right" }}>
            <span style={{ fontFamily: "'Condiment', cursive", fontSize: "clamp(20px,4vw,56px)", color: "#6FFF00", display: "block", marginBottom: 8 }}>
              Let's connect
            </span>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(22px,4vw,52px)", textTransform: "uppercase", lineHeight: 1.05, marginBottom: 32 }}>
              GOT A PROJECT?
              <br />
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              TOGETHER.
            </h2>

            <a
              href="mailto:yugenix555@gmail.com"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#010828",
                background: "#6FFF00",
                borderRadius: 100,
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Hubungi Saya
            </a>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
            {SOCIAL_LINKS.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                className="liquid-glass"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#EFF4FF",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          #desktop-nav { display: flex !important; }
          #mobile-hamburger { display: none !important; }
        }
        @media (max-width: 1023px) {
          #desktop-nav { display: none !important; }
          #desktop-social { display: none !important; }
          #mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
    }
