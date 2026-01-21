import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Footer from '../../components/Footer';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}