import Navbar from "../components/Navbar.tsx";
import Button from "../components/Button.tsx";
import Solution from "../components/Solution.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Pricing from "../components/Pricing.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx"; 

import "../styles/hero.css";
import "../styles/utility.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* SECTION HERO: imagens dentro da section */}
        <section id="hero" style={{ scrollMarginTop: "var(--header-h)" }}>
          
          {/* conteúdo */}
          <div className="container content">
            <h1>Retifica Santa tereza do Oeste - Melhor Retifica do Brasil!</h1>
            <p>
              Faça seu cadastro e aproveite nossos serviços.
            </p>

            <div className="flex gap-1">
              <span>
                <Button text="Cadastre-se" />
              </span>
              <span className="desktop-only">
                <Button text="Faça seu orçamento" secondary />
              </span>
            </div>
          </div>
        </section>
        {/* /HERO */}

        {/* SECTION SOLUTIONS */}
        <Solution />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* PRICING */}
        <Pricing />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
