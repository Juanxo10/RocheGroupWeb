import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'

const steps = [
  {
    icon: 'chat_bubble',
    title: 'Consulta',
    text: 'Entendemos tus objetivos, desafíos y visión del proyecto.',
  },
  {
    icon: 'description',
    title: 'Propuesta',
    text: 'Definimos el alcance, tiempos y presupuesto detallado.',
  },
  {
    icon: 'brush',
    title: 'Diseño',
    text: 'Creamos interfaces intuitivas y experiencias memorables.',
  },
  {
    icon: 'code',
    title: 'Desarrollo',
    text: 'Codificamos con las tecnologías más modernas y robustas.',
  },
  {
    icon: 'biotech',
    title: 'Pruebas',
    text: 'Garantizamos calidad total mediante testing exhaustivo.',
  },
  {
    icon: 'rocket_launch',
    title: 'Entrega',
    text: 'Lanzamos tu producto al mercado con soporte inicial.',
  },
  {
    icon: 'support_agent',
    title: 'Soporte',
    text: 'Acompañamos el crecimiento y evolución de tu plataforma.',
  },
]

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto promedio?',
    answer:
      'Los plazos varían según la complejidad. Un MVP (Producto Mínimo Viable) suele tomar entre 8 y 12 semanas, mientras que plataformas corporativas robustas pueden requerir de 4 a 6 meses de desarrollo intensivo.',
  },
  {
    question: '¿Ofrecen soporte después del lanzamiento?',
    answer:
      'Sí, incluimos un periodo de garantía de 30 días post-lanzamiento para correcciones menores y ofrecemos planes de mantenimiento mensual para actualizaciones, seguridad y escalabilidad continua.',
  },
  {
    question: '¿Qué tecnologías utilizan en el desarrollo?',
    answer:
      'Nos especializamos en el ecosistema moderno: React, Next.js, Node.js, Python y arquitecturas de nube (AWS/Google Cloud). Siempre seleccionamos la tecnología que mejor se adapte a tus necesidades técnicas y de negocio.',
  },
  {
    question: '¿Cómo se gestionan los pagos del proyecto?',
    answer:
      'Trabajamos típicamente con un esquema de hitos: un pago inicial para reserva y diseño, seguido de entregas parciales de desarrollo, y un pago final contra el despliegue a producción.',
  },
]

function Proceso() {
  useSeo({
    title: 'Proceso',
    description:
      'Consulta, propuesta, diseño, desarrollo, pruebas, entrega y soporte: así es el proceso de trabajo de Roche Code, paso a paso.',
  })

  const [openFaq, setOpenFaq] = useState(null)
  const progressRef = useRef(null)

  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal')
      const windowHeight = window.innerHeight
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active')
        }
      })
    }

    function updateProgressLine() {
      const progressLine = progressRef.current
      if (!progressLine) return
      if (window.scrollY > 300 && window.scrollY < 1200) {
        const start = 300
        const end = 1000
        const val = ((window.scrollY - start) / (end - start)) * 100
        progressLine.style.width = `${Math.min(Math.max(val, 0), 100)}%`
      }
    }

    function onScroll() {
      reveal()
      updateProgressLine()
    }

    reveal()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleFaq(index) {
    setOpenFaq((current) => (current === index ? null : index))
  }

  return (
    <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(241, 245, 249, 1);
        }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .step-line {
          background: linear-gradient(to bottom, #2563eb 0%, #4338ca 100%);
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .accordion-item.active .accordion-content {
          max-height: 500px;
        }
        .accordion-item.active .chevron-icon {
          transform: rotate(180deg);
        }
      `}</style>

      <Navbar />

      <main className="pt-24">
        {/* Hero Section for Process */}
        <section className="relative py-24 px-5 md:px-margin-desktop max-w-container-max mx-auto text-center overflow-hidden">
          <div className="reveal">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-indigo mb-6">
              Nuestro <span className="text-primary">Proceso</span> de Trabajo
            </h1>
            <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl mx-auto mb-12">
              Transformamos ideas complejas en realidades digitales escalables mediante una
              metodología probada y transparente.
            </p>
          </div>

          {/* Visual Horizontal Timeline (Desktop) / Vertical (Mobile) */}
          <div className="mt-20 relative px-4">
            {/* Timeline Desktop Connector */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-surface-variant z-0">
              <div className="h-full bg-primary w-0" ref={progressRef} />
            </div>

            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center flex-1 reveal"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border border-surface-variant relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-deep-indigo mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-gray text-center text-sm px-4">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface-container-low" id="faq">
          <div className="px-5 md:px-margin-desktop max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-indigo mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="font-body-lg text-body-lg text-slate-gray">
                Todo lo que necesitas saber sobre trabajar con nosotros.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className={`accordion-item glass-card rounded-2xl reveal shadow-sm hover:shadow-md transition-shadow ${
                    openFaq === i ? 'active' : ''
                  }`}
                >
                  <button
                    className="w-full text-left px-8 py-6 flex justify-between items-center outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="font-body-lg font-semibold text-deep-indigo">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-slate-gray transition-transform duration-300 chevron-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="accordion-content">
                    <div className="px-8 pb-8 text-slate-gray font-body-md">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-5 md:px-margin-desktop overflow-hidden">
          <div className="max-w-container-max mx-auto reveal">
            <div className="relative bg-deep-indigo rounded-3xl p-12 md:p-24 text-center overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2" />
              <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-pure-white mb-8 relative z-10">
                ¿Tienes una idea? Hagámosla realidad.
              </h2>
              <p className="font-body-lg text-body-lg text-on-tertiary-container/80 mb-12 max-w-xl mx-auto relative z-10">
                Estamos listos para escucharte y empezar a construir el futuro de tu negocio hoy
                mismo.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
                <Link
                  to="/contacto"
                  className="bg-primary-container hover:bg-tertiary text-pure-white px-10 py-4 rounded-full font-label-md text-label-md transition-all shadow-2xl hover:-translate-y-1"
                >
                  Empezar un proyecto
                </Link>
                <Link
                  to="/contacto"
                  className="border border-white/20 text-pure-white px-10 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all"
                >
                  Agendar llamada
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Proceso
