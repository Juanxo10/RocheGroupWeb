import { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'

const values = [
  {
    icon: 'handshake',
    title: 'Compromiso',
    text: 'Dedicación total a los objetivos de nuestros socios.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovación',
    text: 'Búsqueda constante de nuevas formas de crear valor.',
  },
  {
    icon: 'verified',
    title: 'Calidad',
    text: 'Excelencia en cada detalle de nuestro trabajo.',
  },
  {
    icon: 'gavel',
    title: 'Transparencia',
    text: 'Comunicación honesta y procesos claros siempre.',
  },
  {
    icon: 'groups',
    title: 'Trabajo en equipo',
    text: 'Sinergia colectiva para alcanzar metas ambiciosas.',
  },
]

function Nosotros() {
  useSeo({
    title: 'Nosotros',
    description:
      'Conoce a Roché Group: un equipo comprometido con la innovación, la calidad y la transparencia en cada proyecto digital.',
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
      { threshold: 0.1 },
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
        .text-gradient {
          background: linear-gradient(135deg, #004ac6 0%, #463ccd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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

      {/* Main Content Canvas */}
      <main className="pt-24">
        {/* Hero Section: About Us */}
        <section className="relative px-6 md:px-margin-desktop py-16 md:py-32 max-w-container-max mx-auto overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal active">
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest mb-4 block">
                Sobre Nosotros
              </span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
                Transformamos la pasión en <span className="text-gradient">innovación</span>{' '}
                digital.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                En Roché Group, nuestro equipo vive y respira tecnología. No solo desarrollamos
                software; creamos experiencias digitales que impulsan el crecimiento. Nos apasiona
                enfrentar desafíos complejos con soluciones elegantes, fusionando precisión
                técnica con una visión creativa sin límites.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">diversity_3</span>
                  <span className="font-label-md text-label-md text-on-surface">
                    Equipo Comprometido
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                  <span className="font-label-md text-label-md text-on-surface">
                    Tecnología de Vanguardia
                  </span>
                </div>
              </div>
            </div>
            <div className="relative reveal active" style={{ transitionDelay: '200ms' }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-auto aspect-square object-cover"
                  alt="Equipo profesional de innovadores tecnológicos diversos trabajando juntos en una oficina moderna con paredes de vidrio, iluminación suave y acentos en azul y cian."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx67t5p1mOKyr1GRP_D9vVqTs3xJbY1WuXV1RcW0RXpTz1ZV1SIS7XwKPcUh_O_CYUQOcrgOv_uidb-h7r3h3msTrM7Q91v7V1YfQgVy7wtI3VPQqMaNFNOEHdUcGHB4ubKmy0iL5UrgtHUgKGe98f26wNNRD34LzGbbStYMSzfOEnLb_KxHd0ihq3hkDTRU26XeQg6YxLqNXH-1vFIFD63YC-c9-Ot1-VJICE8lFexAHyAPiccNXWdDez8v9OvfWGMZ9iATJ2OPk"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision: Glassmorphism Bento Grid */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Mission */}
              <div
                className="glass-card p-8 md:p-12 rounded-[2rem] reveal"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    rocket_launch
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">
                  Misión
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic">
                  "Brindar soluciones tecnológicas innovadoras que potencien el éxito de nuestros
                  clientes, garantizando excelencia técnica y un compromiso inquebrantable con la
                  calidad."
                </p>
              </div>
              {/* Vision */}
              <div
                className="bg-deep-indigo p-8 md:p-12 rounded-[2rem] text-pure-white reveal shadow-xl"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-deep-indigo text-4xl">
                    visibility
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">
                  Visión
                </h2>
                <p className="font-body-lg text-body-lg opacity-90 leading-relaxed italic">
                  "Ser reconocidos como un grupo de desarrollo líder a nivel internacional,
                  impulsando la transformación digital y estableciendo estándares globales de
                  innovación y transparencia."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section: Modern Grid */}
        <section className="px-6 md:px-margin-desktop py-24 md:py-32 max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
              Nuestros Valores
            </h2>
            <p className="font-body-md text-body-md text-slate-gray max-w-2xl mx-auto">
              Los pilares que sostienen cada línea de código y cada relación comercial que
              construimos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group p-8 bg-pure-white rounded-2xl border border-surface-container hover:shadow-xl transition-all duration-300 reveal"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl mb-3 text-on-background">
                  {value.title}
                </h3>
                <p className="font-body-md text-sm text-slate-gray">{value.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Nosotros
