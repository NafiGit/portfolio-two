import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Student Peer Mentor and Teaching Assistant",
    company: "KL University - AP, IN",
    date: "Apr'24 - Present",
    description: "Assisting and guiding students in Digital Forensics, Python Full Stack Development with Django, LLMs, Cryptanalysis and Cyber Defense, and Programming for Smart Contracts. Collaborated with faculty for creating course material for workshops and hackathons."
  },
  {
    title: "SDE Intern",
    company: "CreditMitra - Hyderabad, TG, IN",
    date: "Sep'23 - Present",
    description: "Created creditmitra.in as a responsive website and hosted it in AWS using S3, Route53 and Cloudfront. Implemented MERN backend - SEO, Chatbot, Email, and integrated CICD pipeline using Jenkins and Ansible on EC2. Managed creditmitra.in Mail Servers and other DNS records for Google Analytics and Google Tag Manager. Developed HRMS portal for all employees in MERN, used for attendance, payroll, offer letter, employee directory by company."
  },
  {
    title: "Lead Surabhi Website",
    company: "KL University - AP, IN",
    date: "June'21 - May'24",
    description: "Led twelve developers to create eight innovative websites for KL's cultural fest Surabhi using Django REST, Vue.js and React.js. Developed a 3D website using THREE.js and CANNON.js with custom models, shaders and sounds. Configured Nginx to work with Gunicorn and Django and deployed on Digital Ocean."
  }
]

export default function Experience() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.date}</p>
              <p className="mt-2">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}