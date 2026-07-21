import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import rocheIcon from './assets/logosolo-transparent.png'
import { useDarkMode } from './useDarkMode'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proceso', to: '/proceso' },
]

const CONTACT_EMAIL = 'gruporochecontacto@gmail.com'
const WHATSAPP_NUMBER = '573107861862'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactMenuOpen, setContactMenuOpen] = useState(false)
  const contactMenuRef = useRef(null)
  const { isDark, toggle } = useDarkMode()

  useEffect(() => {
    if (!contactMenuOpen) return
    function handleClickOutside(event) {
      if (contactMenuRef.current && !contactMenuRef.current.contains(event.target)) {
        setContactMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [contactMenuOpen])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0b1020] border-b border-white/20 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={rocheIcon}
            alt="RovidionGroup"
            className="h-11 w-11 md:h-12 md:w-12 object-contain transition-all duration-300 dark:brightness-0 dark:invert"
          />
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
                    ? 'text-primary dark:text-secondary-container font-bold border-b-2 border-primary dark:border-secondary-container pb-1 font-body-md text-body-md transition-colors duration-300'
                    : 'text-deep-indigo dark:text-white hover:text-primary dark:hover:text-secondary-container transition-colors duration-300 font-body-md text-body-md'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            onClick={toggle}
            className="relative w-16 h-9 shrink-0 rounded-full flex items-center px-1.5 bg-surface-container-low dark:bg-white/10 border border-slate-gray/15 dark:border-white/15 transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
                isDark ? 'text-slate-400 dark:text-white/30' : 'text-primary'
              }`}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-4 h-4 shrink-0 ml-auto transition-colors duration-300 ${
                isDark ? 'text-secondary-container' : 'text-slate-400'
              }`}
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            <span
              className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white dark:bg-[#0b1020] shadow-md transition-transform duration-300 ease-in-out ${
                isDark ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="relative hidden sm:block" ref={contactMenuRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={contactMenuOpen}
              onClick={() => setContactMenuOpen((open) => !open)}
              className="inline-flex items-center gap-2 bg-primary text-pure-white px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 active:opacity-80 active:scale-95 shadow-lg shadow-primary/20"
            >
              Contactar
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${contactMenuOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {contactMenuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-60 bg-white dark:bg-[#0b1020] border border-slate-gray/15 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden"
              >
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => setContactMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-deep-indigo dark:text-white hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors font-body-md text-body-md"
                >
                  <span className="material-symbols-outlined text-primary dark:text-secondary-container">mail</span>
                  Escríbenos un correo
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setContactMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-deep-indigo dark:text-white hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors font-body-md text-body-md border-t border-slate-gray/10 dark:border-white/10"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-[#25D366]">
                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.02-9.84Zm.01 18.15h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.27 8.27 0 0 1-1.27-4.42c0-4.58 3.73-8.3 8.32-8.3 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.73 8.28-8.32 8.28Zm4.55-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.78.96-.15.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            )}
          </div>
          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 dark:bg-white/10 hover:bg-primary/15 dark:hover:bg-white/15 active:scale-95 transition-all duration-200"
          >
            <span className="relative w-5 h-4 block">
              <span
                className={`absolute left-0 h-[2px] w-5 rounded-full bg-primary dark:bg-white transition-all duration-300 ease-in-out ${
                  menuOpen ? 'top-[7px] rotate-45' : 'top-0 rotate-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-primary dark:bg-white transition-all duration-200 ease-in-out ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-5 rounded-full bg-primary dark:bg-white transition-all duration-300 ease-in-out ${
                  menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px] rotate-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0b1020]/95 backdrop-blur-md border-t border-white/20 dark:border-white/10 shadow-lg px-margin-mobile py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = link.to.split('#')[0] === pathname
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? 'text-primary dark:text-secondary-container font-bold font-body-md text-body-md py-3 border-b border-surface-container dark:border-white/10 transition-colors duration-300'
                    : 'text-deep-indigo dark:text-white hover:text-primary dark:hover:text-secondary-container transition-colors duration-300 font-body-md text-body-md py-3 border-b border-surface-container dark:border-white/10'
                }
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-center bg-primary text-pure-white px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 active:opacity-80 active:scale-95 shadow-lg shadow-primary/20 w-full"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              Correo
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-center bg-[#25D366] text-pure-white px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 active:opacity-80 active:scale-95 shadow-lg shadow-[#25D366]/20 w-full"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.02-9.84Zm.01 18.15h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.27 8.27 0 0 1-1.27-4.42c0-4.58 3.73-8.3 8.32-8.3 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.73 8.28-8.32 8.28Zm4.55-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.78.96-.15.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
