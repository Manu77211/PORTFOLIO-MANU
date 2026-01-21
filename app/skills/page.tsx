import Navbar from '../../components/Navbar';
import Skills from '../../components/Skills';
import Footer from '../../components/Footer';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}