import { projects, technologies } from "../data/data"
import ProjectLayout from "./ProyectLayout"
export default function Main() {
  return (
    <main  className="bg-[linear-gradient(to_bottom,_black_0%,_rgba(128,0,128,0.8)_100%)]">
      <div className="text-white max-w-6xl mx-auto py-3">
        <section className="w-full" id="proyectos">
          <h2 className="text-3xl p-5">Proyectos:</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {projects.map(project => (
              <ProjectLayout
                project={project}
              />
            ))}
          </div>
        </section>

        <section className="w-full mt-10 mx-2" id="proyectos">
          <h2 className="text-3xl p-5">Habilidades: </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {technologies.map(technology => (
              <div className="p-4">
                <img src={`/technologies/${technology}.svg`} alt={technology} />
                <h3 className="text-2xl text-center">{technology}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

    </main>
  )
}
