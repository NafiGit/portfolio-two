import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; 2024 Nahfid Nissar. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/NafiGit" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/nahfid" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:nissarnahfid@gmail.com">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}