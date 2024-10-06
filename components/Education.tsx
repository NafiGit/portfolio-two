import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "B.Tech, CSE Honors, specialising in Cybersecurity and Blockchain",
    institution: "KL University",
    year: "2021 - 2025",
    grade: "Current CGPA: 9.1/10"
  },
  {
    degree: "12th Grade",
    institution: "LBPS, Rajasthan CBSE",
    year: "2021",
    grade: "83%"
  },
  {
    degree: "10th Grade",
    institution: "DPS, Srinagar - CBSE",
    year: "2019",
    grade: "93%"
  }
]

export default function Education() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
              <p className="mt-2">{edu.grade}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}