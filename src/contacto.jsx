import { useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'

const CONTACT_EMAIL = 'judaropa98@gmail.com'
const WEB3FORMS_ACCESS_KEY = '1eae4919-82e1-4cd5-8f21-3ff1f7ba5cb1'

const contactInfo = [
  {
    icon: 'mail',
    label: 'Correo',
    value: CONTACT_EMAIL,
  },
  {
    icon: 'schedule',
    label: 'Tiempo de respuesta',
    value: 'Menos de 24 horas',
  },
  {
    icon: 'forum',
    label: 'Trato',
    value: 'Directo, sin intermediarios',
  },
]

function Contacto() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
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
      `}</style>

      <Navbar />

      <main className="pt-32 pb-24">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="text-primary font-label-md text-label-md uppercase tracking-widest mb-4 block">
              Hablemos
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-indigo mb-6">
              Cuéntanos tu idea
            </h1>
            <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl mx-auto">
              Escríbenos y te respondemos en menos de 24 horas. Sin formularios eternos, sin
              vueltas: directo con el equipo que va a construir tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-gutter items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-slate-gray uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="font-body-md text-body-md text-deep-indigo font-semibold break-all">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 glass-card rounded-2xl p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-on-secondary-container text-3xl">
                      check
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-deep-indigo mb-3">
                    ¡Mensaje enviado!
                  </h2>
                  <p className="font-body-md text-body-md text-slate-gray">
                    Gracias por escribirnos. Te responderemos muy pronto.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-primary font-label-md text-label-md hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  <input type="hidden" name="subject" value="Nuevo mensaje desde Roché Group" />
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block font-label-md text-label-md text-deep-indigo mb-2"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="Nombre"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border border-slate-gray/20 px-4 py-3 text-on-background focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-label-md text-label-md text-deep-indigo mb-2"
                      >
                        Correo
                      </label>
                      <input
                        id="email"
                        name="Correo"
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        className="w-full rounded-xl border border-slate-gray/20 px-4 py-3 text-on-background focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="asunto"
                      className="block font-label-md text-label-md text-deep-indigo mb-2"
                    >
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      name="Asunto"
                      type="text"
                      required
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full rounded-xl border border-slate-gray/20 px-4 py-3 text-on-background focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block font-label-md text-label-md text-deep-indigo mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="Mensaje"
                      rows={5}
                      required
                      placeholder="Cuéntanos sobre tu proyecto..."
                      className="w-full rounded-xl border border-slate-gray/20 px-4 py-3 text-on-background focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-error font-body-md text-sm">
                      Algo salió mal. Intenta de nuevo o escríbenos directamente a{' '}
                      {CONTACT_EMAIL}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-gradient-to-r from-primary to-tertiary text-pure-white px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contacto
