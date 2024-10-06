"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "creditmitra.in",
    description: "Website for a FinTech Digital Lending company",
    link: "https://creditmitra.in"
  },
  {
    title: "ruluka.com",
    description: "E-commerce fashion website in MERN, Redis, and AWS",
    link: "https://ruluka.com"
  },
  {
    title: "Surabhi Website",
    description: "Main cultural fest website for KL University",
    link: "https://surabhi.kluniversity.in"
  },
  {
    title: "El Comicos Website",
    description: "Website for Stand Up Comedy Club",
    link: "https://elcomicos.kluniversity.in"
  },
  {
    title: "E-Commerce Comparison",
    description: "Website for comparing similar products from Flipkart and Amazon",
    link: "https://github.com/NafiGit/ecommerce-comparison"
  },
  {
    title: "AuditX",
    description: "Compliance and audit platform to manage and execute CIS benchmark scripts",
    link: "https://github.com/NafiGit/auditx"
  },
  {
    title: "WordPress Blog",
    description: "Blog in LAMP stack hosted on AWS",
    link: "https://blog.nahfidnissar.com"
  },
  {
    title: "Bidding System",
    description: "Website using MERN and Heroku",
    link: "https://github.com/NafiGit/bidding-system"
  },
  {
    title: "Cryptojacking Visualization",
    description: "Visualization of cryptojacking's evolution using NLP",
    link: "https://github.com/NafiGit/cryptojacking-viz"
  },
  {
    title: "Item App",
    description: "App to display items with Sorting and Pagination in Angular",
    link: "https://github.com/NafiGit/item-app"
  }
]

export default function Projects() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}