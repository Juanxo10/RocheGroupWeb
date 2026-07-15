import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import rocheIcon from './assets/roche-icon.png'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proceso', to: '/proceso' },
]

function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar-font fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
      <style>{`
        .navbar-font, .navbar-font * {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }
      `}</style>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setMenuOpen(false)}>
          <img src={rocheIcon} alt="Roché Group" className="h-9 w-9 md:h-10 md:w-10 object-contain" />
          <span className="hidden sm:block font-headline-md text-lg md:text-headline-md font-bold text-deep-indigo">
            Roché Group
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.to.split('#')[0] === pathname
            return (
              <Link
                key={link.label}
                to={link.to}
                className={
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md'
                    : 'text-slate-gray hover:text-primary transition-colors font-body-md text-body-md'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden sm:inline-flex bg-primary text-pure-white px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 active:opacity-80 active:scale-95 shadow-lg shadow-primary/20"
          >
            Contactar
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/15 active:scale-95 transition-all duration-200"
          >
            <span className="relative w-5 h-4 block">
              <span
                className={`absolute left-0 h-[2px] w-5 rounded-full bg-primary transition-all duration-300 ease-in-out ${
                  menuOpen ? 'top-[7px] rotate-45' : 'top-0 rotate-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-primary transition-all duration-200 ease-in-out ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-5 rounded-full bg-primary transition-all duration-300 ease-in-out ${
                  menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px] rotate-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg px-margin-mobile py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = link.to.split('#')[0] === pathname
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? 'text-primary font-bold font-body-md text-body-md py-3 border-b border-surface-container'
                    : 'text-slate-gray hover:text-primary transition-colors font-body-md text-body-md py-3 border-b border-surface-container'
                }
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-5 text-center bg-primary text-pure-white px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 active:opacity-80 active:scale-95 shadow-lg shadow-primary/20 w-full"
          >
            Contactar
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
