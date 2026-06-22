import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
    Globe,
  Handshake,
  Lightbulb,
  TrendingUp,
  Building2,
  Youtube,
} from "lucide-react";
import logoPanhari from "../assets/logo-panhari.png";
import adepan from "../assets/adepan.png";
import alcaldiaIbague from "../assets/AlcaldiaIbague.png";
import bonanza from "../assets/bonanza.png";
import brahman from "../assets/brahman.png";
import france from "../assets/France.png";
import gobernacionTolima from "../assets/GobernacionTolima.png";
import jacobo from "../assets/jacobo.png";
import lesaffre from "../assets/lesaffre.png";
import levapan from "../assets/levapan.png";
import luker from "../assets/Luker.png";
import pastelos from "../assets/pastelos.png";
import richs from "../assets/richs.png";
import santillana from "../assets/santillana.png";
import secretos from "../assets/secretos.png";
import sigra from "../assets/sigra.png";
import hero from "../assets/hero.png";
import gallery from "@/assets/subhero.jpeg";
/* ── Brand Tokens ───────────────────────────────────────── */
const C = {
  ocre: "#D48328",
  cafe: "#9A5300",
  naranja: "#F78A1D",
  rojo: "#FF1730",
  beige: "#E7E1CF",
  blanco: "#F8F8F8",
  cafeOscuro: "#6B3800",
  cafeMuyOscuro: "#3A1E00",
  negro: "#1A0A00",
};

const IMGS = {
  hero,
  lobby: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=800&fit=crop&auto=format",
  networking: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?w=1200&h=800&fit=crop&auto=format",
  handshake: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop&auto=format",
  exhibition: "https://images.unsplash.com/photo-1718099066109-81964e5df51f?w=1200&h=800&fit=crop&auto=format",
  gallery ,
  conf: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop&auto=format",
};

/* ── Global Styles ──────────────────────────────────────── */
const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: 'Poppins', sans-serif; overflow-x: hidden; }

  @keyframes scrollLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.4); }
  }
  @keyframes draw-line {
    from { stroke-dashoffset: 400; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes float-in {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(247,138,29,0); }
    50% { box-shadow: 0 0 0 8px rgba(247,138,29,0.12); }
  }

  .node-animate { animation: float-in 0.6s ease both; }
  .dot-pulse { animation: pulse-dot 2.4s ease-in-out infinite; }
  .btn-glow:hover { animation: glow-pulse 1s ease; }

  @media (max-width: 900px) {
    .nav-links, .nav-cta { display: none !important; }
    .hamburger { display: flex !important; }
    .hero-grid { grid-template-columns: 1fr !important; }
    .hero-img-col { display: none !important; }
    .two-col-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
    .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 8px !important; }
    .map-outer { grid-template-columns: 1fr !important; }
  }
  @media (min-width: 901px) {
    .hamburger { display: none !important; }
  }
`;

function PanhariLogo({ size = 1 }: { size?: number }) {
  return (
    <img
      src={logoPanhari}
      alt="Panhari"
      style={{
        height: 70 * size,
        width: "auto",
        objectFit: "contain",
      }}
    />
  );
}

/* ── Navbar ─────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = ["Inicio", "Quiénes Somos", "Objetivos", "Ubicación", "Contacto"];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      background: scrolled ? "rgba(42, 20, 0, 0.9)" : "rgba(0,0,0,0)",
      backdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
      borderBottom: scrolled ? `1px solid rgba(212,131,40,0.18)` : "none",
    }}>
      <div style={{
        maxWidth: 1380, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3.5rem)",
        height: 70, display: "flex", alignItems: "center", gap: 32,
      }}>
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <PanhariLogo light size={0.92} />
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" style={{ flex: 1, display: "flex", justifyContent: "center", gap: 32 }}>
          {navItems.map(n => (
            <a key={n} href={`#${n.toLowerCase().replace(/\s/g, "-").replace(/é/g, "e")}`}
              style={{ color: "rgba(248,248,248,0.82)", fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "0.85rem", letterSpacing: "0.02em", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.naranja)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,248,248,0.82)")}>{n}</a>
          ))}
        </nav>

        <a className="nav-cta btn-glow" href="#inscribir"
          style={{ background: `linear-gradient(130deg, ${C.naranja}, ${C.ocre})`, color: "#fff", padding: "9px 22px", borderRadius: 7, textDecoration: "none", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.83rem", letterSpacing: "0.03em", whiteSpace: "nowrap", boxShadow: `0 3px 18px rgba(247,138,29,0.35)`, transition: "transform 0.2s, box-shadow 0.2s", flexShrink: 0 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>Inscribirse</a>

        <button className="hamburger" onClick={() => setMobileOpen(v => !v)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8, marginLeft: "auto", display: "none" }} aria-label="Menú">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: "rgba(42,20,0,0.97)", backdropFilter: "blur(20px)", padding: "1.5rem 2rem 2rem", display: "flex", flexDirection: "column", gap: 18 }}>
          {navItems.map(n => (
            <a key={n} href={`#${n.toLowerCase().replace(/\s/g, "-").replace(/é/g, "e")}`} onClick={() => setMobileOpen(false)}
              style={{ color: C.beige, fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "1.05rem", textDecoration: "none" }}>{n}</a>
          ))}
          <a href="#inscribir" onClick={() => setMobileOpen(false)}
            style={{ background: `linear-gradient(130deg, ${C.naranja}, ${C.ocre})`, color: "#fff", padding: "12px 20px", borderRadius: 7, textDecoration: "none", textAlign: "center", fontFamily: "'Poppins',sans-serif", fontWeight: 600, marginTop: 6 }}>Inscribirse</a>
        </div>
      )}
    </header>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: C.cafeMuyOscuro, overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.hero})`, backgroundSize: "cover", backgroundPosition: "center 25%", opacity: 0.18 }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(118deg, ${C.cafeMuyOscuro} 42%, rgba(58,30,0,0.6) 72%, rgba(154,83,0,0.35) 100%)` }} />

      {/* Decorative orbs */}
      <svg style={{ position: "absolute", top: 0, right: 0, width: "52%", height: "100%", opacity: 0.1, pointerEvents: "none" }} viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
        <circle cx="480" cy="140" r="300" fill={C.ocre} />
        <circle cx="560" cy="620" r="220" fill={C.naranja} />
      </svg>
      <svg style={{ position: "absolute", bottom: -100, left: -80, width: "38%", opacity: 0.05, pointerEvents: "none" }} viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill={C.ocre} /></svg>
      {/* Diagonal accent */}
      <div style={{ position: "absolute", top: 0, right: "38%", width: 3, height: "100%", background: `linear-gradient(180deg, transparent, ${C.naranja}80, transparent)`, transform: "skewX(-10deg)" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1380, width: "100%", margin: "0 auto", padding: "130px clamp(1.25rem, 4vw, 3.5rem) 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, ease: "easeOut" }}>
          <h1 style={{ color: C.blanco, fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4.8vw, 3.9rem)", lineHeight: 1.1, marginBottom: 22, letterSpacing: "-0.015em" }}>
            Impulsa el futuro<br />de tu empresa{" "}
            <span style={{ background: `linear-gradient(90deg, ${C.naranja}, ${C.ocre})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>en el sector panificador</span>{" "}
          </h1>
          <p style={{ color: "rgba(231,225,207,0.78)", fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)", lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}>
Impulsa tu negocio conectándote con aliados, proveedores y oportunidades reales de crecimiento en la región.  
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href="#inscribir" className="btn-glow" style={{ background: `linear-gradient(130deg, ${C.naranja}, ${C.ocre})`, color: "#fff", padding: "14px 34px", borderRadius: 8, textDecoration: "none", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.93rem", display: "inline-flex", alignItems: "center", gap: 9, boxShadow: `0 8px 30px rgba(247,138,29,0.38)`, transition: "transform 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
              Inscribirse <ArrowRight size={17} />
            </a>
            <a href="#que-es-panhari" style={{ background: "rgba(248,248,248,0.07)", border: "1px solid rgba(248,248,248,0.18)", color: C.blanco, padding: "14px 34px", borderRadius: 8, textDecoration: "none", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.93rem", backdropFilter: "blur(8px)", transition: "background 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(248,248,248,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(248,248,248,0.07)"; }}>
              Conocer más
            </a>
          </div>
        </motion.div>

        {/* Right — organic image */}
        <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }} style={{ position: "relative" }} className="hero-img-col">
          <svg style={{ position: "absolute", inset: -24, width: "calc(100% + 48px)", height: "calc(100% + 48px)", zIndex: 0, opacity: 0.45, pointerEvents: "none" }} viewBox="0 0 520 480" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={C.ocre} stopOpacity="0.65" />
                <stop offset="100%" stopColor={C.naranja} stopOpacity="0.28" />
              </linearGradient>
            </defs>
            <path d="M55,38 C115,-12 402,-18 458,62 C514,142 506,338 438,418 C370,498 98,508 38,418 C-22,328 -5,88 55,38 Z" fill="url(#bg1)" />
          </svg>
          <div style={{ position: "relative", zIndex: 1, borderRadius: "42% 58% 54% 46% / 46% 42% 58% 54%", overflow: "hidden", aspectRatio: "4/3", boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 2px rgba(212,131,40,0.22)` }}>
            <img src={IMGS.hero} alt="Feria empresarial Panhari" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(154,83,0,0.18), transparent 60%)` }} />
          </div>
          {/* Floating chips */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.5 }}
            style={{ position: "absolute", bottom: 22, left: -28, background: "rgba(42,20,0,0.9)", backdropFilter: "blur(14px)", border: "1px solid rgba(212,131,40,0.28)", borderRadius: 12, padding: "12px 20px", zIndex: 3, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
            <div style={{ color: C.naranja, fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.55rem", lineHeight: 1 }}>+20K</div>
            <div style={{ color: C.beige, fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.09em", marginTop: 3, opacity: 0.8 }}>VISITANTES ESPERADOS</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.5 }}
            style={{ position: "absolute", top: 18, right: -18, background: `linear-gradient(130deg, ${C.naranja}, ${C.rojo})`, borderRadius: 10, padding: "9px 16px", zIndex: 3, boxShadow: "0 8px 22px rgba(255,23,48,0.32)" }}>
            <div style={{ color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.25rem", lineHeight: 1 }}>+15</div>
            <div style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "0.62rem", letterSpacing: "0.09em", marginTop: 2 }}>Ciudades</div>
          </motion.div>
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 80, background: C.blanco, clipPath: "polygon(0 100%, 100% 100%, 100% 0)", zIndex: 4 }} />
    </section>
  );
}

/* ── Carousel ───────────────────────────────────────────── */
const slides = [
  { tag: "PRÓXIMOS EVENTOS", title: "Edición 2026 — 3 días de oportunidades", text: "Del 14 al 16 de octubre en el Centro de Convenciones Alfonso López Pumarejo. Más de 300 stands disponibles en cinco grandes zonas temáticas.", img: IMGS.lobby, bg: C.cafe },
  { tag: "EMPRESAS INVITADAS", title: "+250 empresas nacionales confirmadas", text: "Líderes del sector industrial, financiero, tecnológico y agropecuario se darán cita para crear conexiones estratégicas y acuerdos comerciales de alto impacto.", img: IMGS.networking, bg: C.cafeOscuro },
  { tag: "CONFERENCISTAS", title: "Visión de negocios al más alto nivel", text: "Líderes empresariales, emprendedores de talla internacional y expertos en innovación compartirán sus experiencias en el auditorio principal.", img: IMGS.exhibition, bg: C.cafeMuyOscuro },
  { tag: "NETWORKING", title: "+300 Ruedas de Negocio en 3 días", text: "Agenda reuniones con compradores, distribuidores e inversores de 15 países. El formato de speed networking más exitoso de la región.", img: IMGS.handshake, bg: "#2E1400" },
  { tag: "INNOVACIÓN", title: "Tecnología y futuro empresarial", text: "Conferencias, demostraciones en vivo y espacios de co-creación que posicionan a Panhari como el epicentro de la transformación empresarial regional.", img: IMGS.conf, bg: "#1E0D00" },
];

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [sel, setSel] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSel(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);
  return (
    <section style={{ background: C.blanco, paddingTop: 100, position: "relative" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3.5rem)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 20 }}>
        <div>
          <div style={{ color: C.naranja, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 8 }}>DESCUBRE PANHARI</div>
          <h2 style={{ color: C.cafeMuyOscuro, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", lineHeight: 1.2 }}>Todo lo que necesitas saber</h2>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {[{ fn: () => emblaApi?.scrollPrev(), icon: <ChevronLeft size={20} />, label: "Anterior" }, { fn: () => emblaApi?.scrollNext(), icon: <ChevronRight size={20} />, label: "Siguiente" }].map((b, i) => (
            <button key={i} onClick={b.fn} aria-label={b.label} style={{ width: 46, height: 46, borderRadius: "50%", border: i === 0 ? `2px solid ${C.ocre}` : "none", background: i === 0 ? "transparent" : `linear-gradient(130deg, ${C.naranja}, ${C.ocre})`, color: i === 0 ? C.cafe : "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: i === 1 ? `0 4px 14px rgba(247,138,29,0.38)` : "none", transition: "all 0.2s" }}
              onMouseEnter={e => { if (i === 0) { (e.currentTarget as HTMLElement).style.background = C.ocre; (e.currentTarget as HTMLElement).style.color = "#fff"; } else { (e.currentTarget as HTMLElement).style.transform = "scale(1.06)"; } }}
              onMouseLeave={e => { if (i === 0) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.cafe; } else { (e.currentTarget as HTMLElement).style.transform = ""; } }}>
              {b.icon}
            </button>
          ))}
        </div>
      </div>

      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          {slides.map((s, i) => (
            <div key={i} style={{ flex: "0 0 min(88vw, 860px)", marginRight: 24, marginLeft: i === 0 ? "clamp(1.25rem, 4vw, 3.5rem)" : 0 }}>
              <div style={{ position: "relative", height: 400, borderRadius: 18, overflow: "hidden", background: s.bg }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.32 }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(118deg, ${s.bg}f8 38%, ${s.bg}8a 68%, transparent)` }} />
                <div style={{ position: "absolute", right: -52, bottom: -52, width: 260, height: 260, borderRadius: "50%", border: `2px solid rgba(212,131,40,0.22)` }} />
                <div style={{ position: "absolute", right: -16, bottom: -16, width: 160, height: 160, borderRadius: "50%", background: `rgba(247,138,29,0.08)` }} />
                <div style={{ position: "absolute", inset: 0, padding: "44px 50px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <span style={{ display: "inline-block", background: "rgba(247,138,29,0.14)", border: "1px solid rgba(247,138,29,0.38)", color: C.naranja, padding: "3px 12px", borderRadius: 40, fontSize: "0.68rem", fontFamily: "'Poppins',sans-serif", fontWeight: 700, letterSpacing: "0.14em", marginBottom: 14, width: "fit-content" }}>{s.tag}</span>
                  <h3 style={{ color: C.blanco, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)", lineHeight: 1.25, marginBottom: 12, maxWidth: 480 }}>{s.title}</h3>
                  <p style={{ color: "rgba(231,225,207,0.78)", fontFamily: "'Poppins',sans-serif", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: 500 }}>{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 9, marginTop: 30, paddingBottom: 80 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => emblaApi?.scrollTo(i)} style={{ width: sel === i ? 26 : 7, height: 7, borderRadius: 4, background: sel === i ? C.naranja : C.beige, border: "none", cursor: "pointer", transition: "all 0.28s", padding: 0 }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
      <div style={{ height: 72, background: C.cafeMuyOscuro, clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
}

/* ── Stats ──────────────────────────────────────────────── */
const stats = [
  { val: "35+", lbl: "Marcas Participantes" },
  { val: "$66M", lbl: "Ventas Reportadas" },
  { val: "1.200+", lbl: "Asistentes por Día" },
 { val: "100%", lbl: "Enfoque Sectorial" },
];

function Stats() {
  return (
    <section style={{ background: C.cafeMuyOscuro, padding: "72px clamp(1.25rem, 4vw, 3.5rem) 100px", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", top: -80, right: -80, opacity: 0.05, pointerEvents: "none" }} width="420" height="420" viewBox="0 0 420 420"><polygon points="210,0 420,168 420,420 0,420 0,168" fill={C.ocre} /></svg>
      <svg style={{ position: "absolute", bottom: -60, left: -60, opacity: 0.05, pointerEvents: "none" }} width="360" height="360" viewBox="0 0 360 360"><circle cx="180" cy="180" r="180" fill={C.naranja} /></svg>
      <div style={{ maxWidth: 1380, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.naranja, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 10 }}>HISTORIAL DE IMPACTO</div>
          <h2 style={{ color: C.blanco, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", lineHeight: 1.2 }}>Números que hablan por sí solos</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 2 }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.11, duration: 0.58 }}
              style={{ position: "relative", padding: "44px 20px", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid rgba(212,131,40,0.14)" : "none" }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 1, background: i % 2 === 0 ? `linear-gradient(135deg, ${C.naranja}, ${C.ocre})` : `linear-gradient(135deg, ${C.ocre}, ${C.rojo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 10, letterSpacing: "-0.02em" }}>{s.val}</div>
              <div style={{ color: "rgba(231,225,207,0.68)", fontFamily: "'Poppins',sans-serif", fontSize: "0.82rem", letterSpacing: "0.04em", lineHeight: 1.4 }}>{s.lbl}</div>
              <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 28, height: 2, background: `linear-gradient(90deg, ${C.naranja}, ${C.ocre})`, borderRadius: 2 }} />
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 72, background: C.beige, clipPath: "polygon(0 0, 100% 100%, 0 100%)", zIndex: 2 }} />
    </section>
  );
}

/* ── Qué es Panhari ─────────────────────────────────────── */
function WhatIsPanhari() {
  return (
    <section id="que-es-panhari" style={{ background: C.beige, padding: "120px clamp(1.25rem, 4vw, 3.5rem)", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", top: 0, right: 0, opacity: 0.06, width: "38%", height: "100%", pointerEvents: "none" }} viewBox="0 0 380 800" preserveAspectRatio="none">
        {[0, 70, 140, 210].map(x => <line key={x} x1={x} y1="0" x2={x + 380} y2="800" stroke={C.cafe} strokeWidth="1" />)}
      </svg>
      <div style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="two-col-grid">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: "relative" }}>
          <div style={{ borderRadius: "62% 38% 56% 44% / 42% 58% 44% 56%", overflow: "hidden", aspectRatio: "4/3.1", boxShadow: `0 36px 90px rgba(58,30,0,0.22)` }}>
            <img src={IMGS.gallery} alt="Panhari — identidad" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, rgba(154,83,0,0.13), transparent)" }} />
          </div>
          <div style={{ position: "absolute", bottom: -18, right: 28, background: `linear-gradient(132deg, ${C.cafe}, ${C.cafeOscuro})`, color: C.blanco, padding: "18px 26px", borderRadius: 12, boxShadow: `0 14px 44px rgba(58,30,0,0.32)`, textAlign: "center" }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.9rem", lineHeight: 1, color: C.naranja }}>2026</div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.62rem", letterSpacing: "0.14em", marginTop: 3, color: "rgba(231,225,207,0.78)" }}>EDICIÓN</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div style={{ color: C.naranja, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: 12 }}>NUESTRA IDENTIDAD</div>
          <h2 style={{ color: C.cafeMuyOscuro, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", lineHeight: 1.15, marginBottom: 24 }}>¿Qué es<br /><span style={{ color: C.cafe }}>Panhari?</span></h2>
          <div style={{ width: 52, height: 3, background: `linear-gradient(90deg, ${C.naranja}, ${C.ocre})`, borderRadius: 2, marginBottom: 24 }} />
          <p style={{ color: "#4A2800", fontFamily: "'Poppins',sans-serif", fontSize: "0.97rem", lineHeight: 1.82, marginBottom: 18 }}>
PANHARI es la feria de panadería, repostería y amasijos del centro-oriente de Colombia, organizada por la Cámara de Comercio de Ibagué. Reúne empresarios, proveedores, panaderías, pastelerías, academia y sector HORECA, promoviendo el comercio, la innovación, la formación y el fortalecimiento de toda la cadena productiva del sector panificador.          </p>
          <p style={{ color: "#6A3C00", fontFamily: "'Poppins',sans-serif", fontSize: "0.97rem", lineHeight: 1.82, marginBottom: 34 }}>
          Incluye espacios académicos, talleres prácticos, concursos y exhibición comercial, impulsando la innovación, el networking y el crecimiento empresarial del sector.
          </p>
          <a href="#inscribir" className="btn-glow" style={{ background: `linear-gradient(130deg, ${C.naranja}, ${C.ocre})`, color: "#fff", padding: "13px 32px", borderRadius: 8, textDecoration: "none", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.93rem", display: "inline-flex", alignItems: "center", gap: 9, boxShadow: `0 8px 26px rgba(247,138,29,0.34)`, transition: "transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
            Inscribirse Ahora <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
const objetivos = [
  {
    icon: Building2,
    title: "Fortalecer la industria panificadora",
    text: "Promover el crecimiento sostenible de panaderías, pastelerías, amasijos y negocios afines mediante formación, innovación y articulación empresarial."
  },
  {
    icon: TrendingUp,
    title: "Generar oportunidades de negocio",
    text: "Facilitar conexiones comerciales entre expositores, compradores, proveedores y aliados estratégicos para impulsar nuevas oportunidades de mercado."
  },
  {
    icon: Lightbulb,
    title: "Impulsar la innovación del sector",
    text: "Acercar a los empresarios a las últimas tendencias, técnicas, productos y tecnologías que transforman la industria panificadora."
  },
  {
    icon: Handshake,
    title: "Conectar empresas y aliados",
    text: "Fortalecer el relacionamiento empresarial mediante espacios de networking, cooperación y encadenamiento productivo."
  },
  {
    icon: Globe,
    title: "Proyectar el desarrollo regional",
    text: "Consolidar a Ibagué y al Tolima como referentes del sector panificador y como escenarios estratégicos para los negocios y eventos especializados."
  },
];
/* ── Objetivos — Network Graph ──────────────────────────── */
function Objetivos() {
  return (
    <section id="objetivos" style={{ background: C.cafeMuyOscuro, padding: "120px clamp(1.5rem, 5vw, 4rem)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 80, background: C.beige, clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      <svg style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", opacity: 0.04 }} width="400" height="600" viewBox="0 0 400 600">
        <circle cx="350" cy="150" r="200" fill={C.ocre} />
        <circle cx="200" cy="450" r="180" fill={C.naranja} />
      </svg>

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 600, marginBottom: 80 }}>
          <div style={{ color: C.naranja, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: 14 }}>PROPÓSITO</div>
          <h2 style={{ color: C.blanco, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}>
            Objetivos del<br /><span style={{ color: C.ocre }}>evento</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "clamp(20px, 4vw, 56px)", top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg, ${C.naranja}00, ${C.naranja}60, ${C.ocre}60, ${C.ocre}00)`, zIndex: 0 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {objetivos.map((obj, i) => {
              const Icon = obj.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isEven ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{ display: "grid", gridTemplateColumns: "clamp(40px, 7vw, 100px) 1fr", gap: "clamp(20px, 4vw, 56px)", alignItems: "center", padding: "36px 0", borderBottom: i < objetivos.length - 1 ? "1px solid rgba(212,131,40,0.08)" : "none", position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ width: "clamp(44px, 7vw, 56px)", height: "clamp(44px, 7vw, 56px)", borderRadius: "50%", background: `linear-gradient(135deg, ${isEven ? C.naranja : C.ocre}, ${isEven ? C.ocre : C.rojo})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 24px rgba(247,138,29,0.3)`, flexShrink: 0 }}>
                      <Icon size={22} color="#fff" />
                    </div>
                  </div>
                  <div style={{ marginLeft: isEven ? 0 : "clamp(0px, 5vw, 80px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                      <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: C.naranja, letterSpacing: "0.1em", opacity: 0.6 }}>0{i + 1}</span>
                      <div style={{ flex: 1, height: 1, background: `rgba(212,131,40,0.2)` }} />
                    </div>
                    <h3 style={{ color: C.blanco, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.3rem)", lineHeight: 1.3, marginBottom: 10 }}>{obj.title}</h3>
                    <p style={{ color: "rgba(231,225,207,0.65)", fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 600 }}>{obj.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 80, background: C.blanco, clipPath: "polygon(0 100%, 100% 100%, 100% 0)", zIndex: 3 }} />
    </section>
  );
}
/* ── Ubicación — Architectural Floor Plan ───────────────── */
const zonas = [
  // TARIMA CENTRADA
  { id: "A", label: "Tarima Principal", color: C.rojo, x: 250, y: 40, w: 200, h: 70 },
  // SEGUNDA FILA
  { id: "B", label: "Grandes Marcas Nacionales", color: C.cafe, x: 80, y: 140, w: 240, h: 110 },
  { id: "C", label: "Grandes Marcas Internacionales", color: C.cafeOscuro, x: 380, y: 140, w: 240, h: 110 },
  // TERCERA FILA
  { id: "D", label: "Empresas de Proveeduría", color: C.ocre, x: 80, y: 280, w: 160, h: 90 },
  { id: "E", label: "Insumos y Equipos", color: "#7A4200", x: 270, y: 280, w: 160, h: 90 },
  { id: "F", label: "Oferta Académica", color: "#5C3300", x: 460, y: 280, w: 160, h: 90 },
  // CUARTA FILA
  { id: "G", label: "Entidades Financieras", color: "#8B4513", x: 120, y: 400, w: 220, h: 80 },
  { id: "H", label: "Servicios Complementarios", color: "#6B3000", x: 360, y: 400, w: 220, h: 80 },
];

const exteriorZones = [
  { id: "pan", label: "Panaderías Locales", color: C.naranja, x: 40, y: 70, w: 150, h: 80, desc: "Pan artesanal y tradición local" },
  { id: "past", label: "Pastelerías", color: "#F0A030", x: 215, y: 70, w: 150, h: 80, desc: "Repostería y pastelería artesanal" },
  { id: "emp", label: "Emprendimientos Gastronómicos", color: "#E8832A", x: 390, y: 70, w: 150, h: 80, desc: "Innovación culinaria y productos locales" },
  { id: "pub", label: "Venta al Público General", color: "#D4722A", x: 140, y: 190, w: 300, h: 70, desc: "Acceso libre para todos los visitantes" },
];

function Ubicacion() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="ubicación"
      style={{
        background: C.blanco,
        padding: "120px clamp(1.5rem, 5vw, 4rem) 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* ENCABEZADO */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ color: C.naranja, fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: 14 }}>
            RECINTO FERIAL
          </div>
          <h2 style={{ color: C.cafeMuyOscuro, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2, marginBottom: 16 }}>
            Ubicación y distribución
          </h2>
          <p style={{ color: C.cafe, fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
            Explora el plano del recinto y conoce las diferentes zonas que conforman Panhari 2026.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "start",
          }}
          className="map-grid"
        >
          {/* CONTENEDOR DE AMBOS MAPAS (Uno abajo del otro) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40, // Espacio entre el mapa de interior y exterior
              width: "100%",
            }}
          >
            {/* CARD MAPA INTERIOR */}
            <div
              style={{
                background: C.beige,
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(154,83,0,0.12)",
                boxShadow: "0 20px 60px rgba(58,30,0,0.08)",
                overflow: "hidden",
              }}
            >
              <h4 style={{ fontFamily: "Poppins", color: C.cafeMuyOscuro, marginBottom: 12, marginTop: 0 }}>Zona Interior</h4>
              <svg viewBox="0 0 700 540" style={{ width: "100%", display: "block" }}>
                <rect x="20" y="20" width="660" height="500" rx="12" fill="white" opacity="0.7" />
                
                {[100, 200, 300, 400, 500, 600].map((x) => (
                  <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="520" stroke={C.beige} strokeWidth="1" />
                ))}
                {[120, 220, 320, 420].map((y) => (
                  <line key={`h-${y}`} x1="20" y1="20" x2="680" y2={y} stroke={C.beige} strokeWidth="1" />
                ))}

                {zonas.map((z) => (
                  <g
                    key={z.id}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(z.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <rect
                      x={z.x} y={z.y} width={z.w} height={z.h} rx="8"
                      fill={z.color}
                      opacity={hovered === z.id ? 1 : 0.8}
                      style={{ transition: "all 0.25s ease" }}
                    />
                    <foreignObject x={z.x + 8} y={z.y + 8} width={z.w - 16} height={z.h - 16}>
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: 1.2, padding: "0 6px" }}>
                        {z.label}
                      </div>
                    </foreignObject>
                  </g>
                ))}

                <rect x="290" y="470" width="120" height="28" rx="4" fill={C.cafe} />
                <text x="350" y="488" textAnchor="middle" fill="white" fontSize="9" fontFamily="Poppins, sans-serif" fontWeight="600">
                  ENTRADA PRINCIPAL
                </text>
                <path d="M290,470 L350,445 L410,470" fill="none" stroke={C.cafe} strokeWidth="1.5" strokeDasharray="4,3" />
                <rect x="20" y="20" width="660" height="500" rx="12" fill="none" stroke={C.ocre} strokeWidth="2" strokeOpacity="0.25" />
              </svg>
            </div>

            {/* CARD MAPA EXTERIOR */}
            <div
              style={{
                background: C.beige, // Mismo estilo de tarjeta para consistencia
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(154,83,0,0.12)",
                boxShadow: "0 20px 60px rgba(58,30,0,0.08)",
                overflow: "hidden",
              }}
            >
              <h4 style={{ fontFamily: "Poppins", color: C.cafeMuyOscuro, marginBottom: 12, marginTop: 0 }}>Zona Exterior </h4>
              <svg viewBox="0 0 580 460" style={{ width: "100%", display: "block" }}>
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.2" fill={C.naranja} opacity="0.18" />
                  </pattern>
                </defs>

                <rect x="20" y="10" width="540" height="440" rx="10" fill="url(#dots)" stroke={C.naranja} strokeWidth="2" strokeOpacity="0.28" strokeDasharray="8 5" />


                {exteriorZones.map((z) => (
                  <g
                    key={z.id}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(z.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <rect
                      x={z.x} y={z.y} width={z.w} height={z.h} rx="8"
                      fill={z.color}
                      opacity={hovered === z.id ? 0.95 : 0.78}
                      style={{ transition: "all 0.2s ease" }}
                    />

                    <foreignObject x={z.x + 8} y={z.y + 8} width={z.w - 16} height={z.h - 16}>
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: 1.2, padding: "0 4px" }}>
                        {z.label}
                      </div>
                    </foreignObject>
                  </g>
                ))}


                <text x="290" y="328" textAnchor="middle" fill={C.cafeOscuro} fontSize="10" fontFamily="Poppins" fontWeight="700" letterSpacing="1.5">
                  CARRERA TERCERA — ACCESO PÚBLICO GENERAL
                </text>
              </svg>
            </div>
          </div>

          {/* ASIDE DE LEYENDAS (Derecha) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minWidth: 260,
            }}
          >
            <h3 style={{ color: C.cafeMuyOscuro, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>
              Zonas del Recinto
            </h3>

            {zonas.map((z) => (
              <div
                key={z.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 16px",
                  borderRadius: 10,
                  background: hovered === z.id ? `${z.color}18` : "transparent",
                  border: `1px solid ${hovered === z.id ? z.color + "60" : "transparent"}`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={() => setHovered(z.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ width: 12, height: 12, borderRadius: 3, background: z.color, flexShrShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.cafeMuyOscuro }}>
                    {z.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Infinite Auto-Scroll Aliadas Carousel ──────────────── */
const aliadas = [
  { logo: adepan },
  { logo: alcaldiaIbague },
  { logo: bonanza },
  { logo: brahman },
  { logo: france },
  { logo: gobernacionTolima },
  { logo: jacobo },
  { logo: lesaffre },
  { logo: levapan },
  { logo: luker },
  { logo: pastelos },
  { logo: richs },
  { logo: santillana },
  { logo: secretos },
  { logo: sigra },
];

function AliadaCard({ a }: { a: { logo: string } }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 260,
        height: 160,
        borderRadius: 16,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginRight: 20,
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={a.logo}
        alt="Logo empresa"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

function Aliadas() {
  const doubled = [...aliadas, ...aliadas];

  return (
    <section
      style={{
        background: C.cafeMuyOscuro,
        padding: "90px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${C.ocre}, transparent)`,
        }}
      />

      <div
        style={{
          maxWidth: 1380,
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3.5rem)",
          marginBottom: 48,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: C.naranja,
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 600,
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            marginBottom: 10,
          }}
        >
          CONFIANZA EMPRESARIAL
        </div>

        <h2
          style={{
            color: C.blanco,
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
            marginBottom: 8,
          }}
        >
          Empresas que ya confían en Panhari
        </h2>

        <p
          style={{
            color: "rgba(231,225,207,0.55)",
            fontFamily: "'Poppins',sans-serif",
            fontSize: "0.9rem",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Organizaciones que impulsan el crecimiento y fortalecimiento del sector.
        </p>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: `linear-gradient(90deg, ${C.cafeMuyOscuro}, transparent)`,
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: `linear-gradient(-90deg, ${C.cafeMuyOscuro}, transparent)`,
            zIndex: 2,
          }}
        />

        <div
          style={{
            display: "flex",
            animation: "scrollLeft 36s linear infinite",
            width: "max-content",
            padding: "10px 0 20px",
          }}
        >
          {doubled.map((a, i) => (
            <AliadaCard key={i} a={a} />
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${C.ocre}, transparent)`,
        }}
      />
    </section>
  );
}

/* ── CTA Final ──────────────────────────────────────────── */
function CTAFinal() {
  return (
    <section
      id="inscribir"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px clamp(1.25rem, 4vw, 3.5rem)",
        background: C.cafeMuyOscuro,
      }}
    >
      {/* Fondo MUCHO más suave */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 20% 40%, ${C.cafe} 0%, transparent 75%),
            radial-gradient(circle at 80% 30%, ${C.ocre} 0%, transparent 78%),
            radial-gradient(circle at 60% 85%, ${C.naranja} 0%, transparent 80%)
          `,
          opacity: 0.35,
        }}
      />

      {/* Glow decorativo MUY sutil */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: C.rojo,
          opacity: 0.015,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              color: C.naranja,
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              marginBottom: 18,
            }}
          >
            ¡ES TU MOMENTO!
          </div>

          <h2
            style={{
              color: C.blanco,
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Tu espacio en la feria<br />
            <span
              style={{
                background: `linear-gradient(90deg, ${C.naranja}, ${C.ocre})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              te está esperando
            </span>
          </h2>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="#contacto"
              style={{
                background: C.naranja,
                color: "#fff",
                padding: "16px 46px",
                borderRadius: 10,
                textDecoration: "none",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
              }}
            >
              Inscribirse<ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Footer — Minimal Centered ──────────────────────────── */
function Footer() {
  const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/camaracomercioibague/", label: "Instagram" },
    { Icon: Facebook, href: "https://www.facebook.com/ccdeibague", label: "Facebook" },
    { Icon: Youtube, href: "https://www.youtube.com/channel/UCkg1iwyqO8zMmQ9J3IGCtCQ", label: "LinkedIn" },
    { Icon: X, href: "https://x.com/ccdeibague", label: "Twitter" },
  ];

  return (
    <footer id="contacto" style={{ background: C.negro, padding: "72px clamp(1.25rem, 4vw, 3.5rem) 36px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
        {/* Logo */}
       <img
  src={logoPanhari}
  alt="Panhari"
  style={{
    height: 90,
    width: "auto",
    objectFit: "contain",
  }}
/>

        {/* Tagline */}
        <p style={{ color: "rgba(231,225,207,0.5)", fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 420 }}>
          Conectando empresas, oportunidades y crecimiento para el futuro.
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 14 }}>
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label}
              style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(212,131,40,0.22)", color: "rgba(231,225,207,0.5)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.22s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.naranja; el.style.color = C.naranja; el.style.background = "rgba(247,138,29,0.1)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(212,131,40,0.22)"; el.style.color = "rgba(231,225,207,0.5)"; el.style.background = ""; }}>
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: `linear-gradient(90deg, transparent, rgba(212,131,40,0.28), transparent)` }} />

        {/* Copyright */}
        <p style={{ color: "rgba(231,225,207,0.26)", fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "0.78rem", lineHeight: 1.5 }}>
          © 2026 Panhari. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ── App ────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <style>{globalStyles}</style>
      <div style={{ fontFamily: "'Poppins', sans-serif", background: C.blanco, overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <Carousel />
        <Stats />
        <WhatIsPanhari />
        <Objetivos />
        <Ubicacion />
        <Aliadas />
        <CTAFinal />
        <Footer />
      </div>
    </>
  );
}
