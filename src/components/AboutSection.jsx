import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {

  return (
    <section id="sobreMim" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          Sobre <span className="text-primary">mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold ">
              Desenvolvedor Web focado em criar soluções modernas e funcionais
            </h3>

            <p className="text-muted-foreground">
              Transformo ideias em interfaces modernas. Com uma stack completa, crio soluções que unem código, design e propósito.
            </p>

            <p className="text-muted-foreground">
              Sou apaixonado por criar soluções elegantes para problemas complexos e estou sempre aprendendo novas tecnologias para me manter à frente nesse cenário web que não para de evoluir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contato" className="cosmic-button">Entre em contato</a>
              <a 
                href="/CV.docx.pdf"
                download="CV.docx.pdf" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Desenvolvedor Web</h4>
                  <p className="text-muted-foreground ">
                    Crio apps modernos e responsivos com React e Tailwind.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">UI/UX</h4>
                  <p className="text-muted-foreground ">
                    Aprendendo Figma e boas práticas de design para interfaces mais intuitivas.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Projetos Pessoais</h4>
                  <p className="text-muted-foreground ">
                    Planejo e organizo todas as etapas dos meus projetos, do código ao deploy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}