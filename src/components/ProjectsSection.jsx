import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import { ZoomModal } from "@/components/ZoomModal"

const projects = [
  {
    id: 1,
    title: "TaskFlow",
    description:
      "O TaskFlow é uma aplicação web desenvolvida para ajudar pessoas e equipes a organizarem suas tarefas de forma prática e eficiente. Com uma interface moderna e responsiva, o usuário pode criar, editar, concluir e excluir tarefas em poucos cliques.",
    images: [
      "/Projects/taskflow/learn-page.PNG",
      "/Projects/taskflow/como_funciona.PNG",
      "/Projects/taskflow/form-registrar.PNG",
      "/Projects/taskflow/dashboard.PNG",
    ],
    tags: ["React", "TailwindCSS", "Node.js", "Express", "Prisma", "MongoDB"],
    demoURL: "https://taskflow-fs.netlify.app/",
    gitgubURL: "https://github.com/WagnerKauan/TaskFlow",
  },
  {
    id: 2,
    title: "Helpify",
    description:
      "Esse projeto foi desenvolvido para registrar empresas e gerenciar chamados específicos para cada uma, como suporte técnico, visitas presenciais ou demandas financeiras. Ideal para equipes de suporte que atendem múltiplos clientes e precisam organizar o fluxo de atendimento de forma eficiente e personalizada.",
    images: [
      "/Projects/helpdesk-pro/home.PNG",
      "/Projects/helpdesk-pro/form-registrar.PNG",
      "/Projects/helpdesk-pro/dashboard.PNG",
      "/Projects/helpdesk-pro/editar-perfil.PNG",
    ],
    tags: ["React", "Styled-Components", "Firebase", "Auth", "Firestore"],
    demoURL: "https://helpify-pro.netlify.app/",
    gitgubURL: "https://github.com/WagnerKauan/HelpDesk",
  },

  {
    id: 3,
    title: "Trenntine Pizzaria",
    description: "Projeto desenvolvido para digitalizar o atendimento de uma pizzaria, permitindo que clientes façam pedidos online de forma prática, com carrinho dinâmico e promoções aplicadas automaticamente. No painel administrativo, o dono gerencia produtos, promoções e acompanha pedidos em tempo real, otimizando o fluxo do negócio e facilitando o controle do estabelecimento.",
    images: [
      "/Projects/trenntine/Pedidos.png",
      "/Projects/trenntine/Produtos.png",
      "/Projects/trenntine/maisPedidas.png",
      "/Projects/trenntine/menu.PNG",
    ],

    tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "NeonDB", "Shadcn/UI", "Redux"],
    demoURL:"https://trenntine-pizzaria.vercel.app/",
    gitgubURL: "https://github.com/WagnerKauan/trenntinePizzaria",
  },

  {
    id: 4,
    title: "OdontoPRO",
    description: "SaaS para clínicas que permite agendamentos só nos horários disponíveis. O painel administrativo gerencia serviços, horários, status, agendamentos em tempo real e lembretes com fotos da clínica. Planos BASIC e PROFESSIONAL definem limites de serviços cadastráveis, facilitando o controle do negócio.",
    images: [
      "/Projects/odontopro/dashboard.PNG",
      "/Projects/odontopro/agendamento.PNG",
      "/Projects/odontopro/planos.PNG",
      "/Projects/odontopro/servicos.PNG",
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "NeonDB", "Shadcn/UI"],
  }
]

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="projetos" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary"> Projetos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Esses são alguns dos projetos que criei usando minha stack atual. Cada um me ajudou a evoluir e aplicar na prática o que venho estudando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative h-48 overflow-hidden group rounded-lg cursor-pointer">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-50 blur-sm scale-105 transition-all duration-500 group-hover:blur-md group-hover:scale-110"
                />

               
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Visualizar projeto
                  </span>
                </div>

               
                <div
                  className="absolute inset-0"
                  onClick={() => setSelectedImage({ src: project.images, alt: project.title })}
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 ">{project.description}</p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitgubURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <a
            href="https://github.com/WagnerKauan"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projetos no GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal de zoom, agora com array de imagens completo */}
      <ZoomModal
        images={selectedImage?.src}
        alt={selectedImage?.alt}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}
