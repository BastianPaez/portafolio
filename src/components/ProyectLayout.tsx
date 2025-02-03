import { Project, } from "../data/data"

type ProjectLayoutProps = {
    project: Project
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {
    return (
        <div className="bg-gray-900 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mx-3">
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full object-cover" src={`/${project.img}.jpg`} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.name}</div>
                    <p className="text-white text-base">
                        {project.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                    <h3 className="font-bold">Tecnologias:</h3>
                    <div className="flex gap-3 justify-evenly">
                        {project.technologies.map(technology => (
                            <img src={`/technologies/${technology}.svg`} alt="" className="w-15" />
                        ))}
                    </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-center py-3 px-4 font-bold w-full cursor-pointer">
                    <a href={project.link}>Ver más</a>
                </button>
            </div>
        </div>
    )
}
