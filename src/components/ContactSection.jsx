import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"
import emailJs from '@emailjs/browser'


export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    const form = e.target

    try {
      await emailJs.sendForm(
        'service_gmail',
        'template_0jc4nq1',
        form,
        '3j6zJofQa2MAcT42V',
      )

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pela mensagem. Entrarei em contato com você em breve.",
      })

      form.reset()
    } catch (err) {

      toast({
        title: "Ops, algo deu errado!",
        description: "Não consegui enviar sua mensagem. Tente novamente mais tarde.",
        variant: 'destructive'
      })
      console.error(err)

    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem uma vaga, projeto ou ideia em mente? Fico à disposição para conversar e encontrar a melhor forma de colaborar.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6 ">Informações de contato</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary " />
                </div>

                <div>
                  <h4 className="font-medium "> Email</h4>
                  <a
                    href="mailto:kauanw711@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kauanw711@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary " />
                </div>

                <div>
                  <h4 className="font-medium "> Telefone</h4>
                  <a
                    href="tel:+5511948417617"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 94841-7617
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary " />
                </div>

                <div>
                  <h4 className="font-medium "> Localização</h4>
                  <a
                    href="https://www.google.com/search?q=Carapicuíba"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    São Paulo, carapicuíba.
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Siga-me</h4>
              <div className="flex space-x-4 justify-center ">
                <a
                  href="https://www.linkedin.com/in/wagner-kauan-a45032288/"
                  target="_blank"
                  className="transition-transform hover:-translate-y-1 duration-300"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://www.instagram.com/wagnerkauan_9/"
                  target="_blank"
                  className="transition-transform hover:-translate-y-1 duration-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Envie uma mensagem</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                    focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Wagner Kauan..."
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                    focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Messagem
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                    focus:outline-hidden focus:ring-2 focus:ring-primary resize-none "
                  placeholder="Olá, gostaria de falar sobre..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                )}
              >
                {isSubmitting ? "Enviando..." : "enviar mensagem"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}