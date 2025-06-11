import "./App.css";

// function App() {
//   return (
//     <>
//       <div>Hello</div>
//     </>
//   );
// }

// export default App;
import About from "./components/ui/About";
import AnotherCTA from "./components/ui/AnotherCTA";
import BlogNews from "./components/ui/Blog";
import Contact from "./components/ui/Contact";
import CTASection from "./components/ui/CTA";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import Partners from "./components/ui/Partners";
import Services from "./components/ui/Services";
import Team from "./components/ui/Team";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Services />
      <BlogNews />
      <AnotherCTA />
      <Partners />
      <CTASection />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
