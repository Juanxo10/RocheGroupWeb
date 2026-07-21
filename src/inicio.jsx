import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'
import heroImage from './assets/imagenn.png'
import logoletra from './assets/logoletra-transparent.png'
import pepasCoffeeMenu from './assets/pepas-coffee-menu.png'
import pepasCoffeeAdicionales from './assets/pepas-coffee-adicionales.png'
import pepasCoffeeHome from './assets/pepas-coffee-home.png'
import conagroInicio from './assets/conagro-inicio.png'
import conagroPrevio from './assets/conagro-previo.png'
import conagroPanel from './assets/conagro-panel.png'

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
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute inset-0 -z-10 w-full h-full object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-0 -z-10 bg-white/25"
          />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            {/* Hero Content */}
            <div className="lg:max-w-2xl reveal" id="hero-text">
              <img
                src={logoletra}
                alt="RovidionGroup — Desarrollamos tus ideas"
                className="h-56 md:h-72 w-auto mb-8 -ml-2"
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span className="font-label-md text-label-md">Innovación Digital de Elite</span>
              </div>
              <h1 className="font-display-lg font-extrabold text-[38px] md:text-[56px] text-deep-indigo mb-6 tracking-tight leading-[1.1] break-words">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                  Convertimos ideas
                </span>{' '}
                en soluciones digitales
              </h1>
              <p className="font-body-lg text-body-lg text-deep-indigo/80 font-medium mb-10 max-w-xl">
                Desarrollamos páginas web, aplicaciones móviles y software a la medida para
                impulsar tu negocio al siguiente nivel con tecnología de vanguardia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="bg-gradient-to-r from-primary to-tertiary text-pure-white px-10 py-4 rounded-full font-label-md text-label-md shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                >
                  Solicita tu cotización gratis
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/servicios"
                  className="bg-pure-white border border-slate-gray/20 text-deep-indigo px-10 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all duration-300"
                >
                  Ver servicios
                </Link>
              </div>

              {/* Mobile Visual Asset */}
              <div className="md:hidden mt-10 rounded-[28px] overflow-hidden shadow-xl relative">
                <img
                  src={heroImage}
                  alt="Ilustración de desarrollo de software: sitios web, aplicaciones móviles y servicios en la nube."
                  className="w-full h-64 object-cover object-right"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-white/25" />
              </div>

              {/* Differentiators */}
              <div className="mt-16 grid grid-cols-3 gap-6 border-t border-surface-container-high pt-8">
                <div>
                  <div className="font-headline-md text-headline-md text-deep-indigo">100%</div>
                  <div className="text-slate-gray font-label-md text-label-md">Dedicación</div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-deep-indigo">24h</div>
                  <div className="text-slate-gray font-label-md text-label-md">Tiempo de respuesta</div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-deep-indigo">1:1</div>
                  <div className="text-slate-gray font-label-md text-label-md">Trato directo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glass Card */}
          <div
            className="hidden lg:flex absolute bottom-16 right-[8%] xl:right-[12%] w-72 glass-card p-6 rounded-2xl items-center gap-4 reveal animate-float"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container">bolt</span>
            </div>
            <div>
              <div className="font-label-md text-label-md text-deep-indigo">
                Software de Alto Impacto
              </div>
              <div className="text-[12px] text-slate-gray">Desarrollo ágil &amp; escalable</div>
            </div>
          </div>
        </section>

        {/* Portfolio / Evidence Section */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-16 md:mb-24 reveal">
              <h2 className="font-headline-lg text-headline-lg text-deep-indigo mb-4">
                Nuestros últimos trabajos
              </h2>
              <p className="font-body-md text-body-md text-slate-gray max-w-2xl mx-auto">
                Una muestra de los proyectos que hemos desarrollado para nuestros clientes.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-gutter">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-pure-white rounded-2xl border border-surface-container overflow-hidden hover:shadow-xl transition-all duration-300 reveal"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="aspect-video bg-surface-container flex items-center justify-center overflow-hidden">
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
                    <span className="text-primary font-label-md text-label-md uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="font-headline-md text-xl mt-2 mb-3 text-deep-indigo">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-sm text-slate-gray mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-surface-container-low rounded-full text-[12px] font-semibold text-slate-gray"
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
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <p className="text-center font-label-md text-label-md text-slate-gray mb-12 uppercase tracking-widest">
              Tecnologías en las que confiamos
            </p>
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex items-center w-max gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-marquee">
                {[...techStack, ...techStack].map((tech, i) => (
                  <div className="flex items-center gap-3 flex-shrink-0" key={`${tech.name}-${i}`}>
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img className="w-full h-full object-contain" alt={tech.alt} src={tech.src} />
                    </div>
                    <span className="font-bold text-deep-indigo text-lg hidden sm:block">
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
