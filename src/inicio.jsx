import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'
import heroImage from './assets/imagenn.png'

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
        <section className="relative isolate pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 w-full h-full object-cover object-right"
          />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            {/* Hero Content */}
            <div
              className="bg-background/45 backdrop-blur-md shadow-xl rounded-3xl p-6 md:bg-transparent md:backdrop-blur-none md:shadow-none md:rounded-none md:p-0 lg:max-w-2xl reveal"
              id="hero-text"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span className="font-label-md text-label-md">Innovación Digital de Elite</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-indigo mb-6 tracking-tight leading-[1.1] break-words">
                RovidionGroup —{' '}
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

        {/* Trust Bar Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <p className="text-center font-label-md text-label-md text-slate-gray mb-12 uppercase tracking-widest">
              Tecnologías en las que confiamos
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {techStack.map((tech) => (
                <div className="flex items-center gap-3 group" key={tech.name}>
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
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Inicio
