import { Link } from 'react-router-dom'
import rocheIcon from './assets/rochecode-icon.png'

const companyLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proceso', to: '/proceso' },
]

const resourceLinks = [
  { label: 'FAQ', to: '/proceso#faq' },
  { label: 'Contacto', to: '/contacto' },
]

function Footer() {
  return (
    <footer className="bg-deep-indigo text-pure-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src={rocheIcon} alt="Roché Code" className="h-8 w-8 object-contain" />
            <span className="font-headline-md text-headline-md font-bold text-secondary-container">
              Roché Code
            </span>
          </Link>
          <p className="text-on-tertiary-container/80 font-body-md text-body-md mb-8">
            Líderes en transformación digital y desarrollo de software premium.
          </p>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-pure-white mb-6 uppercase tracking-wider">
            Compañía
          </h4>
          <ul className="space-y-4">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  className="text-on-tertiary-container/80 hover:text-pure-white transition-colors block hover:translate-x-1 duration-200"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-pure-white mb-6 uppercase tracking-wider">
            Recursos
          </h4>
          <ul className="space-y-4">
            {resourceLinks.map((item) => (
              <li key={item.label}>
                <Link
                  className="text-on-tertiary-container/80 hover:text-pure-white transition-colors block hover:translate-x-1 duration-200"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-label-md text-pure-white mb-6 uppercase tracking-wider">
            Contacto
          </h4>
          <p className="text-on-tertiary-container/80 font-body-md text-body-md mb-4 break-all">
            gruporochecontacto@gmail.com
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-secondary-container text-deep-indigo px-5 py-2.5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300"
          >
            Escríbenos
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-white/10 text-center text-on-tertiary-container/60 font-label-md text-label-md">
        © 2026 Roché Code. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
