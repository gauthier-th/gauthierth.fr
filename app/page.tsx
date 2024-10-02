import Image from "next/image"
import Link from "next/link"
import { RiArrowDownLine, RiHeartFill, RiMailFill, RiStarLine } from "react-icons/ri"
import { FaDiscord, FaGithub } from "react-icons/fa"
import SmoothLink from "@/components/SmoothLink"

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  newtab?: boolean;
}
const projects: Project[] = [
  {
    title: "conjugation-fr",
    description: "A Node.js module for fast conjugation of French verbs.\nThis package is based on the Verbiste database. It contains more than 7000 verbs.",
    image: "/conjugation-fr.png",
    link: "https://github.com/gauthier-th/conjugation-fr",
    newtab: true,
  },
  {
    title: "Embed Visualizer",
    description: "A React Component to render Discord-like embeds.\nUsefull to preview a Discord embed on a web dashboard.",
    image: "/embed-visualizer.png",
    link: "https://github.com/gauthier-th/embed-visualizer",
    newtab: true,
  },
  {
    title: "Whisper Dashboard",
    description: "A simple dashboard to send and manage transcriptions for Whisper, an open source speech recognition model from OpenAI.",
    image: "/whisper-dashboard.png",
    link: "https://github.com/gauthier-th/whisper-dashboard",
    newtab: true,
  },
  {
    title: "Auto Restarter",
    description: "This is a tiny tool to restart automatically a Node.js program when the program ends.",
    image: "/auto-restarter.png",
    link: "https://github.com/gauthier-th/auto-restarter",
    newtab: true,
  },
  {
    title: "Divia API",
    description: "An API to retrieve upcoming Divia bus and streetcar schedules in Dijon.",
    image: "/divia-api.png",
    link: "https://github.com/gauthier-th/divia-api",
    newtab: true,
  },
  {
    title: "Jellyseerr",
    description: "Jellyseerr is a free and open source software application for managing requests for your media library.",
    image: "/jellyseerr.png",
    link: "https://github.com/Fallenbagel/jellyseerr",
    newtab: true,
  }
]

export const revalidate = 60*60*24*7

export default async function Page() {
  const projectWithStars: (Project & { stars?: number })[] = await Promise.all(
    projects.map(async (project) => {
      if (!project.link.startsWith("https://github.com/"))
        return project
      const stats = await fetch(project.link.replace("https://github.com/", "https://api.github.com/repos/"))
        .then((res) => res.json());
      return {
        ...project,
        stars: stats.stargazers_count,
      }
    })
  )

  return (
    <div className="flex flex-col items-center">
      <div className="h-screen pt-16 sm:py-32 flex flex-col justify-evenly sm:justify-center items-center px-4 md:px-0">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-blue-300 text-center font-bold">
          Hi, I'm Gauthier!
        </h1>
        <div className="mt-8 sm:mt-24 sm:text-lg lg:text-xl xl:text-2xl md:text-center md:max-w-4xl">
          <p>
            I am PhD student in the field of AI at the ICB laboratory, in Dijon, France.<br />
            My research focuses on the automatic recognition of food-related emotions.
          </p>
          <p className="mt-6">
            I'm also passionate about web development, which I've been practicing for several years as a freelancer as well as in my spare time.
          </p>
        </div>
        <SmoothLink
          destId="projects"
          className="mt-8 sm:mt-16 flex flex-col items-center"
        >
          <div className="text-xl bg-white/100 hover:bg-white/80 text-black px-5 py-2 rounded-xl transition-colors">My projects</div>
          <RiArrowDownLine className="mt-4 text-4xl animate-bounce -z-10" />
        </SmoothLink>
      </div>

      <h2 id="projects" className="pt-32 text-4xl text-center">
        My projects
      </h2>
      <span className="mt-4 text-lg px-4 text-center">
        Here are some of the projects I've created or contributed to.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 px-4 mt-12">
        {projectWithStars.map((project, key) => {
          const Component = project.link ? Link : "div"
          return (
            <Component
              key={key}
              href={project.link}
              className="w-full max-w-md bg-black rounded-xl -z-10 top-0 hover:-top-2 transition-all duration-200 overflow-hidden"
              target={project.newtab ? "_blank" : undefined}
            >
              <div className="w-full relative h-48">
                <Image src={project.image} alt="" className="object-cover" sizes="448px" fill />
              </div>
              <div className="p-6">
                <div className="flex justify-between">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <FaGithub />
                    <span>{project.title}</span>
                  </h4>
                  {project.stars && <div className="flex items-center gap-1.5">{project.stars} <RiStarLine /></div>}
                </div>
                <p className="mt-4 whitespace-pre-wrap text-gray-400">{project.description}</p>
              </div>
            </Component>
          )
        })}
      </div>

      <h2 id="contact" className="pt-32 text-4xl">
        Contact me
      </h2>
      <span className="mt-4 text-lg px-4 text-center">
        Feel free to contact me if you have any question!
      </span>
      <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center text-lg sm:text-xl">
        <Link
          href="https://github.com/gauthier-th"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 bg-white/100 hover:bg-white/80 text-black rounded-lg transition-colors"
        >
          <FaGithub className="text-3xl" />
          <span>gauthier-th</span>
        </Link>
        <Link
          href="mailto:mail@gauthierth.fr"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 bg-white/100 hover:bg-white/80 text-black rounded-lg transition-colors"
        >
          <RiMailFill className="text-3xl" />
          <span>mail@gauthierth.fr</span>
        </Link>
        <div
          className="flex items-center gap-2 px-3 py-2 bg-white/100 hover:bg-white/80 text-black rounded-lg transition-colors"
        >
          <FaDiscord className="text-3xl" />
          <span>gauthierth</span>
        </div>
      </div>

      <Link
        href="https://github.com/gauthier-th/gauthierth.fr"
        target="_blank"
        className="mt-40 flex flex-col items-center text-sm text-center"
      >
        <span className="flex items-center">Developed and designed with <RiHeartFill className="mx-1" /> by me.</span>
        <span>Built with Next.js and TailwindCSS.</span>
      </Link>
    </div>
  )
}