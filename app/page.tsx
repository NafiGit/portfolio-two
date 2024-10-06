import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Experience from '@/components/Experience';
import TechnicalSkills from '@/components/TechnicalSkills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <Experience />
        <TechnicalSkills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}