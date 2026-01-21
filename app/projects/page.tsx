import Navbar from '../../components/Navbar';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}