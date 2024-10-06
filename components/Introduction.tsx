import { Card, CardContent } from "@/components/ui/card"

export default function Introduction() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Introduction</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg">
            Hello! I'm Nahfid Nissar, a passionate software developer and cybersecurity specialist. 
            Currently pursuing my B.Tech in CSE with Honors, specializing in Cybersecurity and Blockchain at KL University. 
            I have a strong foundation in web development, cloud technologies, and a keen interest in emerging technologies like LLMs and blockchain.
          </p>
          <p className="mt-4 text-lg">
            With experience in both frontend and backend development, as well as cybersecurity practices, 
            I strive to create secure, efficient, and innovative solutions. I'm always eager to learn and 
            take on new challenges in the ever-evolving tech landscape.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}