import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { useSeo } from './useSeo'
import ProjectImageCarousel from './ProjectImageCarousel'
import { projects } from './projectsData'

function ProyectoNoEncontrado() {
  useSeo({
    title: 'Proyecto no encontrado',
    description: 'Este proyecto no existe o fue movido.',
  })

  return (
    <div className="bg-background dark:bg-[#0b1020] text-on-background dark:text-slate-100 font-body-md min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="pt-40 pb-24 text-center px-margin-mobile">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-indigo dark:text-white mb-4">
          Proyecto no encontrado
        </h1>
        <p className="font-body-md text-body-md text-slate-gray dark:text-slate-400 mb-8">
          Puede que el enlace esté mal escrito o el proyecto ya no esté disponible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary dark:text-secondary-container font-label-md text-label-md hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Volver a Inicio
        </Link>
      </main>
      <Footer />
    </div>
  )
}

function Proyecto() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useSeo({
    title: project ? project.title : 'Proyecto no encontrado',
    description: project
      ? project.description
      : 'Este proyecto no existe o fue movido.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <ProyectoNoEncontrado />

  const otherProjects = projects.filter((p) => p.slug !== project.slug)

  return (
    <div className="bg-background dark:bg-[#0b1020] text-on-background dark:text-slate-100 font-body-md overflow-x-hidden transition-colors duration-300">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <Navbar />

      <main className="pt-24 md:pt-28 pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-gray dark:text-slate-400 hover:text-primary dark:hover:text-secondary-container transition-colors font-label-md text-label-md mt-8 mb-6"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver a proyectos
          </Link>

          <span className="text-primary dark:text-secondary-container font-label-md text-label-md uppercase tracking-widest mb-3 block">
            {project.category}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-indigo dark:text-white mb-6 leading-tight max-w-3xl">
            {project.title}
          </h1>
          <p className="font-body-lg text-body-lg text-slate-gray dark:text-slate-400 max-w-2xl mb-10">
            {project.description}
          </p>

          {project.images && (
            <div className="rounded-2xl overflow-hidden border border-surface-container dark:border-white/10 shadow-xl mb-16 aspect-video bg-surface-container dark:bg-white/5">
              <ProjectImageCarousel
                images={project.images}
                alt={`Captura de pantalla del proyecto ${project.title}`}
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-16 md:mb-20">
            <div className="lg:col-span-2">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-indigo dark:text-white mb-6">
                ¿Qué hace este programa?
              </h2>
              <ul className="flex flex-col gap-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 bg-surface-container-low dark:bg-white/5 rounded-xl p-4"
                  >
                    <span className="material-symbols-outlined text-primary dark:text-secondary-container text-2xl shrink-0">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-slate-gray dark:text-slate-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-deep-indigo dark:text-white mb-4">
                Tecnologías usadas
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-surface-container-low dark:bg-white/5 rounded-full text-sm font-semibold text-slate-gray dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-deep-indigo rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full" />
            <h2 className="relative z-10 font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white mb-4">
              ¿Quieres un proyecto como este?
            </h2>
            <p className="relative z-10 font-body-lg text-body-lg text-primary-fixed max-w-xl mx-auto mb-8">
              Cuéntanos tu idea y te ayudamos a construir algo hecho a tu medida, igual que a
              ellos.
            </p>
            <Link
              to="/contacto"
              className="relative z-10 inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300"
            >
              Contáctanos
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-16 md:mt-24">
              <h2 className="font-headline-md text-xl text-deep-indigo dark:text-white mb-6">
                Otros proyectos
              </h2>
              <div className="flex flex-wrap gap-gutter">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/proyectos/${p.slug}`}
                    className="group w-full sm:w-[calc(50%-12px)] bg-pure-white dark:bg-[#0b1020] rounded-2xl border border-surface-container dark:border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video bg-surface-container dark:bg-white/5 overflow-hidden">
                      <ProjectImageCarousel
                        images={p.images}
                        alt={`Captura de pantalla del proyecto ${p.title}`}
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-primary dark:text-secondary-container font-label-md text-label-md uppercase tracking-widest">
                        {p.category}
                      </span>
                      <h3 className="font-headline-md text-lg mt-1 text-deep-indigo dark:text-white">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Proyecto
