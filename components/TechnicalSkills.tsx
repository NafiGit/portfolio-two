import { Badge } from "@/components/ui/badge"

const skills = [
  "Web Server Administration",
  "Cybersecurity",
  "Forensic Tools",
  "AWS",
  "OWASP",
  "Secure SDLC",
  "Compliance",
  "LLM Training",
  "Stable Diffusion Models",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Vue.js",
  "THREE.js",
  "CANNON.js",
  "Java",
  "Spring",
  "Solidity",
  "C",
  "HTML",
  "CSS",
  "Tailwind",
  "LAMP Stack",
  "WordPress"
]

export default function TechnicalSkills() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">{skill}</Badge>
        ))}
      </div>
    </section>
  )
}