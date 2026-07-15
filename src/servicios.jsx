import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'

const services = [
  {
    number: '01',
    icon: 'web',
    title: 'Desarrollo Web',
    description:
      'Arquitecturas web robustas utilizando los stacks más modernos como React, Next.js y Vue. Creamos experiencias rápidas, optimizadas para SEO y preparadas para el crecimiento masivo.',
    tags: ['Performance', 'Scalability', 'Cloud Native'],
    span: true,
  },
  {
    number: '02',
    icon: 'smartphone',
    title: 'Apps Móviles',
    description:
      'Desarrollo nativo e híbrido para iOS y Android. Enfocados en alto rendimiento y fluidez.',
  },
  {
    number: '03',
    icon: 'settings_suggest',
    title: 'Software a Medida',
    description:
      'Soluciones empresariales personalizadas que automatizan procesos y resuelven desafíos de negocio específicos.',
  },
  {
    number: '04',
    icon: 'api',
    title: 'APIs e Integraciones',
    description:
      'Conectamos su ecosistema digital. Diseñamos e implementamos APIs seguras y eficientes para que sus sistemas hablen el mismo idioma sin fricciones.',
    span: true,
  },
  {
    number: '05',
    icon: 'draw',
    title: 'Diseño UI/UX',
    description:
      'Interfaces estéticas y funcionales. Investigamos el comportamiento del usuario para maximizar la conversión.',
  },
  {
    number: '06',
    icon: 'support_agent',
    title: 'Soporte y Mantenimiento',
    description:
      'Su tranquilidad es nuestra prioridad. Ofrecemos mantenimiento proactivo, actualizaciones de seguridad y soporte continuo con tiempos de respuesta rápidos para que su negocio nunca se detenga.',
    span: true,
  },
]

const checklist = [
  {
    title: 'Equipo Dedicado',
    description:
      'Atención directa y personalizada: hablas con quienes realmente construyen tu producto, sin intermediarios.',
  },
  {
    title: 'Precios Competitivos',
    description: 'Estructuras de costos transparentes y optimizadas para el retorno de inversión.',
  },
  {
    title: 'Metodologías Ágiles',
    description:
      'Entregas incrementales que permiten pivotar y mejorar el producto en tiempo real.',
  },
  {
    title: 'Compromiso con la Calidad',
    description: 'QA riguroso y estándares internacionales en cada línea de código.',
  },
]

function Servicios() {
  useSeo({
    title: 'Servicios',
    description:
      'Desarrollo web, apps móviles, software a medida, APIs, diseño UI/UX y soporte continuo. Conoce los servicios digitales de Roche Code.',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll('.glass-card')
    cards.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(241, 245, 249, 1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 20px 40px rgba(37, 99, 235, 0.08);
          border-color: #3fe1fd;
        }
        .gradient-text {
          background: linear-gradient(135deg, #004ac6 0%, #463ccd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <Navbar />

      <main className="pt-32">
        {/* Hero Section for Services */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 text-center">
          <span className="inline-block bg-primary/10 text-primary font-label-md text-label-md px-4 py-1.5 rounded-full mb-6">
            Expertise Tecnológica
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-indigo mb-6">
            Nuestras Soluciones <br />
            <span className="gradient-text">Digitales de Élite</span>
          </h1>
          <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-slate-gray">
            Transformamos ideas complejas en infraestructuras digitales escalables, seguras y
            centradas en el usuario.
          </p>
        </section>

        {/* Services Grid (Bento Style Layout) */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {services.map((service) => (
              <div
                key={service.number}
                className={`glass-card p-8 rounded-xl flex flex-col gap-6 ${
                  service.span ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                  </div>
                  <span className="text-slate-gray/30 font-bold text-4xl">{service.number}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-indigo mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {service.tags && (
                  <div className="mt-auto flex gap-3 flex-wrap">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container rounded-full text-[12px] font-semibold text-slate-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us (Asymmetric Layout) */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-container/20 blur-3xl rounded-full" />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="Ambiente de oficina moderno y de alta tecnología con particiones de vidrio y muebles elegantes. Un equipo diverso de ingenieros y diseñadores está reunido alrededor de una gran pantalla táctil que muestra visualizaciones de datos complejas y diseños de interfaz."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm59pjPMeAGztn-h_dRekwnuiQfjmnZFfck533I1BoEsX-KU4zqnPKeBmL777DlAsBl_QDNHrggd1NEuTfn3JnThgz4VuN5smCt8RCt39mOl-apsM7dEp64ws891lLFOn-EkbRSGp8zQBLTz8CzETdAdivL_6o39MECk9GLZQimRBzTpa2UgcYiZow9qbo3zBwWQ9IgOPFyc0qnNfnC-Jnldzml04gtezmioAVCE4Jb-mREqVwFXi60qDraZaAbLlBYdfNhOsK43w"
                />
              </div>
            </div>
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-indigo mb-8">
                ¿Por qué elegir <br />
                Roche Code?
              </h2>
              <div className="space-y-6">
                {checklist.map((item) => (
                  <div className="flex gap-4 group" key={item.title}>
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined text-xl">check</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-deep-indigo">
                        {item.title}
                      </h4>
                      <p className="font-body-md text-body-md text-slate-gray">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/proceso"
                className="mt-12 group flex items-center gap-2 font-label-md text-label-md text-primary"
              >
                Saber más sobre nuestro proceso
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32">
          <div className="bg-deep-indigo rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
            <h2 className="relative z-10 font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white mb-8">
              ¿Listo para escalar su negocio?
            </h2>
            <p className="relative z-10 font-body-lg text-body-lg text-primary-fixed max-w-xl mx-auto mb-12">
              Agende una consultoría gratuita hoy mismo y descubra cómo podemos potenciar su
              presencia digital.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contacto"
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-all"
              >
                Empezar Proyecto
              </Link>
              <Link
                to="/nosotros"
                className="border border-white/30 text-pure-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all"
              >
                Conoce al equipo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Servicios
