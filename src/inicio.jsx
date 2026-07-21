import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'
import logoletra from './assets/logoletra-transparent.png'
import pepasCoffeeMenu from './assets/pepas-coffee-menu.png'
import pepasCoffeeAdicionales from './assets/pepas-coffee-adicionales.png'
import pepasCoffeeHome from './assets/pepas-coffee-home.png'
import conagroInicio from './assets/conagro-inicio.png'
import conagroPrevio from './assets/conagro-previo.png'
import conagroPanel from './assets/conagro-panel.png'
import urbanFadeHero from './assets/urban-fade-hero.png'
import urbanFadeServicios from './assets/urban-fade-servicios.png'

const heroLights = [
  { top: '15%', left: '10%', size: 'w-2.5 h-2.5', color: 'bg-primary/60', glow: 'shadow-[0_0_24px_8px_rgba(0,74,198,0.5)]', anim: 'animate-particle-a', delay: '0s' },
  { top: '68%', left: '18%', size: 'w-2 h-2', color: 'bg-secondary-container/80', glow: 'shadow-[0_0_20px_7px_rgba(63,225,253,0.55)]', anim: 'animate-particle-b', delay: '-1.5s' },
  { top: '35%', left: '32%', size: 'w-1.5 h-1.5', color: 'bg-tertiary/70', glow: 'shadow-[0_0_16px_6px_rgba(70,60,205,0.5)]', anim: 'animate-particle-c', delay: '-3s' },
  { top: '78%', left: '42%', size: 'w-2.5 h-2.5', color: 'bg-primary/50', glow: 'shadow-[0_0_24px_8px_rgba(0,74,198,0.5)]', anim: 'animate-particle-a', delay: '-2s' },
  { top: '20%', left: '55%', size: 'w-2 h-2', color: 'bg-secondary-container/70', glow: 'shadow-[0_0_20px_7px_rgba(63,225,253,0.5)]', anim: 'animate-particle-b', delay: '-4s' },
  { top: '52%', left: '68%', size: 'w-3 h-3', color: 'bg-tertiary/60', glow: 'shadow-[0_0_28px_9px_rgba(70,60,205,0.45)]', anim: 'animate-particle-c', delay: '-1s' },
  { top: '12%', left: '78%', size: 'w-2 h-2', color: 'bg-primary/55', glow: 'shadow-[0_0_20px_7px_rgba(0,74,198,0.5)]', anim: 'animate-particle-a', delay: '-5s' },
  { top: '82%', left: '85%', size: 'w-2.5 h-2.5', color: 'bg-secondary-container/75', glow: 'shadow-[0_0_24px_8px_rgba(63,225,253,0.5)]', anim: 'animate-particle-b', delay: '-3.5s' },
  { top: '45%', left: '90%', size: 'w-1.5 h-1.5', color: 'bg-tertiary/65', glow: 'shadow-[0_0_16px_6px_rgba(70,60,205,0.5)]', anim: 'animate-particle-c', delay: '-2.5s' },
  { top: '5%', left: '40%', size: 'w-1.5 h-1.5', color: 'bg-primary/50', glow: 'shadow-[0_0_16px_6px_rgba(0,74,198,0.45)]', anim: 'animate-particle-a', delay: '-4.5s' },
]

const techStack = [
  {
    name: 'React',
    alt: 'Logo oficial de React.js, icono azul minimalista que representa una arquitectura de desarrollo web avanzada, estilo tech corporativo.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBob29zxCbXR_-H1iITyDajAHeUcLQ5St0S5b2FHqy0qdX6JDI3r7pn4BTGbQvNAxypmjBAi8wBO8FRKOAPQgFq1GgbiocLucdpfrh4-lclGW6W5868yZyR0dZBl2JRGBKHRkZ_a6J5Lv-JIG5jIE4DuRIVh2EmBkVwORlQ-QvChc2_4VJfQl7_OQR02uychfvSRRlEGJ35IKPFV0mbPKbOZoTs2IMticmThtzQPenbNq-Vok-_80BFE997uhAiRQ1DC0hYOYq-Fjg',
  },
  {
    name: 'Node.js',
    alt: 'Logo oficial de Node.js, icono verde profesional que representa una ingeniería de software backend robusta, fondo blanco limpio.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkBvTDl5txRrJ8m_sfrde7_YaAbfC_vOpYeuMrODiTDRn8Leyq8ha3RfPkHY3O2URWMiwSflmULkfzsTBQzx37ZPA9h00JnG6gVqmJWEi9MXunDvtWUmXSbxCW6PPM3KJztKzdaRkZAIeAv5CWmiwKJYvfgMb3zx12UblhdsGsAfyX0-hoxS-V9E87RAIYo5a52kah5vaI88iB-gFfD0PSTD9P_gpmL_8ymC-4mSl6-hWjFXZyX3KPWE0qfeVxUZ4TUyFkxRlgsFE',
  },
  {
    name: 'TypeScript',
    alt: 'Logo oficial de TypeScript, icono cuadrado azul que representa la seguridad de tipos y los estándares de código empresarial moderno, look profesional minimalista.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfWzQhQxJ8tShqlwAvkeGFhwsiWt53NYaThEYjQr2dlwr52WI7Jn5BsqUCbUmjIVSIgAQV9dKxRVM1P410_CJFREAnbcjEc25nRIaLRVshOSJ9w0kV-HN7SmmiyGTlPuLh5ztO8xlz-n1bvQbJnGnGarHGIBIMoko6c_PlVrieXjfuNBdYLxx91nvDkb1bCnPbBIIRqQpartIgAdCcFq6xFIi9iSL4U_5eplYJbk3V6tkXOaU5uC6Vgtys1Nlv4vWPsYTkTIaCin0',
  },
  {
    name: 'Flutter',
    alt: 'Logo oficial de Flutter, forma abstracta cian de pájaro que representa el desarrollo de aplicaciones móviles multiplataforma de alto rendimiento.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBarJU53BGZlSc6OuuLDjAcbP6QfVBXW_lQb_tvYVp5yYJBbr9piBbB2E6Wc_GhddJvqul97zcKujNLkOzbVtDeR6oe62TDkr1T-2-X6hRB9ajOviOOb-20E1UtzBo-QMIMKTcL_-CaJ3tMG23E44Gz7UG7M2SbMnO8J3QDJ1OjAEPn0F_-XcR_TiSpP0_HaXH5BZD6z8A4FhsHnGrRz82Xe3H0LUjHXFYhw_gqM9jDW8TecVgtlo7DkYZqM_CKkhid7Hlt1QKJ-r0',
  },
  {
    name: 'AWS',
    alt: 'Logo oficial de AWS Cloud, icono naranja y gris oscuro que representa una infraestructura en la nube escalable y hosting empresarial.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_vGUYQ7cZGm9N-ytNy48REsaG3g8NgCg4LH0MHyeo7kbwT--cXVRupoUPWeptH--dNtfy8efU0hPNcaY_1ELVRfrrtxgqV6F0U2rX06hVaUeHH2CStf0cW_ubSGfpyJMgRWBIt8wtr47iHC2RaIoveeR7Kgpzy4X4XKRueLaFXCJOY8IY-SZG1AB0pRx-4EKT6K1SLGBK9eEG-SITeL_I-jGO7hdNCVJrtOqIFJoIiVEVElbIUPAUb0ZeN6eLukJHrWgxad5lrEQ',
  },
]

// TODO: reemplazar el placeholder de cada tarjeta por images: [...] cuando haya capturas reales de los proyectos.
const projects = [
  {
    title: 'Pepas Coffee — Plataforma de Pedidos',
    category: 'Desarrollo Web Full-Stack',
    description:
      'Sistema de pedidos para un negocio de bowls y brunch: el cliente arma su pedido a la carta, paga en línea con Wompi o contraentrega, y el equipo gestiona todo desde un panel administrativo con estados de pedido, stock y estadísticas en tiempo real.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Wompi'],
    images: [pepasCoffeeMenu, pepasCoffeeAdicionales, pepasCoffeeHome],
  },
  {
    title: 'Conagro — Trazabilidad Agroindustrial',
    category: 'Software a Medida',
    description:
      'Sistema de trazabilidad para el proceso completo del grano: desde la recepción y pesaje hasta la trilla, liquidación y despacho, con roles de usuario, auditoría y generación de certificados de calidad en PDF.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    images: [conagroInicio, conagroPrevio, conagroPanel],
  },
  {
    title: 'Urban Fade — Reservas para Barbería',
    category: 'Desarrollo Web Full-Stack',
    description:
      'Plataforma de reservas para una barbería: el cliente agenda su cita eligiendo fecha, hora y servicio, con reglas de negocio como anticipación mínima, un cupo activo por día y cierre los domingos, mientras el barbero gestiona su agenda diaria y semanal desde un panel separado por rol.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    images: [urbanFadeHero, urbanFadeServicios],
  },
]

function ProjectImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}

function Inicio() {
  useSeo({
    title: 'Inicio',
    description:
      'RovidionGroup desarrolla páginas web, aplicaciones móviles y software a la medida con tecnología moderna y trato directo con el equipo.',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    const timeout = setTimeout(() => {
      document.getElementById('hero-text')?.classList.add('active')
    }, 100)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="bg-background dark:bg-[#0b1020] text-on-background dark:text-slate-100 font-body-md overflow-x-hidden transition-colors duration-300">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes blob {
          0%, 100% {
            border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%;
            transform: rotate(0deg) scale(1);
          }
          33% {
            border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
            transform: rotate(8deg) scale(1.08);
          }
          66% {
            border-radius: 35% 65% 55% 45% / 60% 35% 65% 40%;
            transform: rotate(-6deg) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 12s ease-in-out infinite;
        }
        @keyframes particle-a {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(18px, -26px) scale(1.6); opacity: 0.9; }
        }
        @keyframes particle-b {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-22px, -16px) scale(1.4); opacity: 0.85; }
        }
        @keyframes particle-c {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(14px, 24px) scale(1.5); opacity: 0.9; }
        }
        .animate-particle-a {
          animation: particle-a 7s ease-in-out infinite;
          filter: blur(1.5px);
        }
        .animate-particle-b {
          animation: particle-b 8.5s ease-in-out infinite;
          filter: blur(1.5px);
        }
        .animate-particle-c {
          animation: particle-c 6.5s ease-in-out infinite;
          filter: blur(1.5px);
        }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative isolate pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[46rem] h-[42rem] -z-10 bg-gradient-to-br from-primary/25 via-tertiary/20 to-transparent blur-3xl animate-blob" />
          <div
            className="absolute -bottom-32 -right-32 w-[46rem] h-[42rem] -z-10 bg-gradient-to-tr from-secondary-container/25 via-primary/15 to-transparent blur-3xl animate-blob"
            style={{ animationDelay: '-6s' }}
          />
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            {heroLights.map((light, i) => (
              <span
                key={i}
                className={`absolute rounded-full ${light.size} ${light.color} ${light.glow} ${light.anim}`}
                style={{ top: light.top, left: light.left, animationDelay: light.delay }}
              />
            ))}
          </div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <div className="reveal" id="hero-text">
                <span className="text-primary dark:text-secondary-container font-label-md text-label-md uppercase tracking-widest mb-4 block">
                  Innovación Digital
                </span>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-indigo dark:text-white mb-6 leading-tight">
                  Convertimos ideas en soluciones digitales
                </h1>
                <p className="font-body-lg text-body-lg text-slate-gray dark:text-slate-400 mb-10 max-w-xl">
                  Desarrollamos páginas web, aplicaciones móviles y software a la medida para
                  impulsar tu negocio al siguiente nivel.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contacto"
                    className="bg-primary text-pure-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary/90 transition-colors duration-300 flex items-center gap-3"
                  >
                    Solicita tu cotización gratis
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <Link
                    to="/servicios"
                    className="border border-slate-gray/20 dark:border-white/15 text-deep-indigo dark:text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors duration-300"
                  >
                    Ver servicios
                  </Link>
                </div>

                {/* Differentiators */}
                <div className="mt-16 grid grid-cols-3 gap-6 border-t border-surface-container-high dark:border-white/10 pt-8 max-w-md">
                  <div>
                    <div className="font-headline-md text-headline-md text-deep-indigo dark:text-white">100%</div>
                    <div className="text-slate-gray dark:text-slate-400 font-label-md text-label-md">Dedicación</div>
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md text-deep-indigo dark:text-white">24h</div>
                    <div className="text-slate-gray dark:text-slate-400 font-label-md text-label-md">
                      Tiempo de respuesta
                    </div>
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md text-deep-indigo dark:text-white">1:1</div>
                    <div className="text-slate-gray dark:text-slate-400 font-label-md text-label-md">Trato directo</div>
                  </div>
                </div>
              </div>

              <div
                className="hidden lg:flex items-center justify-center reveal active"
                style={{ transitionDelay: '150ms' }}
              >
                <img
                  src={logoletra}
                  alt="RovidionGroup — Desarrollamos tus ideas"
                  className="w-full max-w-md h-auto transition-all duration-300 dark:brightness-0 dark:invert"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Evidence Section */}
        <section className="bg-surface-container-low dark:bg-[#0b1020] py-24 md:py-32 transition-colors duration-300">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-16 md:mb-24 reveal">
              <h2 className="font-headline-lg text-headline-lg text-deep-indigo dark:text-white mb-4">
                Nuestros últimos trabajos
              </h2>
              <p className="font-body-md text-body-md text-slate-gray dark:text-slate-400 max-w-2xl mx-auto">
                Una muestra de los proyectos que hemos desarrollado para nuestros clientes.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-gutter">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-pure-white dark:bg-[#0b1020] rounded-2xl border border-surface-container dark:border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 reveal"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="aspect-video bg-surface-container dark:bg-white/5 flex items-center justify-center overflow-hidden">
                    {project.images ? (
                      <ProjectImageCarousel
                        images={project.images}
                        alt={`Captura de pantalla del proyecto ${project.title}`}
                      />
                    ) : (
                      <span className="material-symbols-outlined text-5xl text-slate-gray/40">
                        image
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-primary dark:text-secondary-container font-label-md text-label-md uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="font-headline-md text-xl mt-2 mb-3 text-deep-indigo dark:text-white">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-sm text-slate-gray dark:text-slate-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-surface-container-low dark:bg-white/5 rounded-full text-[12px] font-semibold text-slate-gray dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <section className="py-16 bg-white dark:bg-[#0b1020] overflow-hidden transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <p className="text-center font-label-md text-label-md text-slate-gray dark:text-slate-400 mb-12 uppercase tracking-widest">
              Tecnologías en las que confiamos
            </p>
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex items-center w-max gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-marquee">
                {[...techStack, ...techStack].map((tech, i) => (
                  <div className="flex items-center gap-3 flex-shrink-0" key={`${tech.name}-${i}`}>
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img className="w-full h-full object-contain" alt={tech.alt} src={tech.src} />
                    </div>
                    <span className="font-bold text-deep-indigo dark:text-white text-lg hidden sm:block">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Inicio
