import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <Reveal><Profile /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><TechStack /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
