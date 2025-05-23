import { useState } from "react"
import { cn } from '@/lib/utils.js'


const skills = [
  // Front-end
  {name: "HTML/CSS", level: 95, category: "frontend"},
  {name: "JavaScript", level: 70, category: "frontend"},
  {name: "React", level: 84, category: "frontend"},
  {name: "Tailwind CSS", level: 67, category: "frontend"},
  {name: "Redux", level: 70, category: "frontend"},
  
  //Back-end
  {name: "Node.js", level: 80, category: "backend"},
  {name: "Express", level: 75, category: "backend"},
  {name: "MongoDB", level: 67, category: "backend"},
  {name: "Firebase", level: 55, category: "backend"},
  
  //Tools
  {name: "Git/Github", level: 76, category: "ferramentas"},
  {name: "Figma", level: 67, category: "ferramentas"},
  {name: "VS code", level: 87, category: "ferramentas"},
  

]

const categories = ["todas","frontend","backend", "ferramentas"]

export const SkillsSection = () => {
  const [ActiveCategory, setActiveCategory] = useState("todas")
  const filteredSkills = skills.filter((skill) => ActiveCategory === "todas" || skill.category === ActiveCategory)


  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 "> 

      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          Minhas <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button 
              key={key} 
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                ActiveCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:text-primary "
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
              
              <div className="text-left mb-4 ">
                <h3 className="font-semibold text-lg ">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{width: `${skill.level}%`}}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground ">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}