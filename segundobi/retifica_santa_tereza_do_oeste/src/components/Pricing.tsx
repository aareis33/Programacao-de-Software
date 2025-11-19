import Button from "../components/Button";
import "../styles/pricing.css";
import Vector from "../assets/Vector.png";

type Plan = {
  id: string;
  title: string;
  subtitle: string;
  price: string;         
  suffix?: string;        
  ctaText: string;
  ctaHref?: string;
  features: string[];
  badge?: string;         
  featured?: boolean;    
};

const PLANS: Plan[] = [
  {
    id: "basic",
    title: "Apartir de 159,99 - Restauração completa",
    subtitle: "restauração!",
    price: "Faça já o seu orçamento",
    ctaText: "Entre em contato",
    ctaHref: "#contact",
    features: [
      "Banho químico",
      "Sua peça 100% restaurada",
      "10x sem juros no cartão de credito",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    subtitle: "Reparo completo do seu motor!",
    price: "R$ 759,00",
    ctaText: "Entre em contato",
    ctaHref: "#contact",
    features: [
      "Inspeção completa do motor",
      "Garantia de 12 meses",
      "Pronto em ate 10 dias úteis",
    ],
    badge: "Mais Procurado",
    featured: true,
  },
  {
    id: "enterprise",
    title: "Cilindro de motor 499,00",
    subtitle:
      "Cilindros na promoção.",
    price: "Faça já o seu orçamento",
    ctaText: "Entre em contato",
    ctaHref: "#contact",
    features: [
      "Cilindros novos e restaurados",
      "Pegamos suas Pecas Velhas",
      "10x sem juros no cartão de credito",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container">
        <header className="pricing-head">
          <h2>Planos e Serviços</h2>
        </header>

        <div className="pricing-grid">
          {PLANS.map((p) => (
            <article
              key={p.id}
              className={`pricing-card ${p.featured ? "is-featured" : ""}`}
              aria-label={`Plano ${p.title}`}
            >
              {p.badge && (
                <div className="pricing-badge" role="note" aria-label={p.badge}>
                  {/* decor opcional */}
                  <img className="badge-decor" src={Vector} alt="" aria-hidden="true" />
                  <span>{p.badge}</span>
                </div>
              )}

              <div className="pricing-body">
                <h3 className="pricing-title">{p.title}</h3>
                <p className="pricing-subtitle">{p.subtitle}</p>

                <div className="pricing-price">
                  <strong className="price">{p.price}</strong>
                  {p.suffix && <span className="price-suffix">{p.suffix}</span>}
                </div>

                <div className="pricing-cta">
                  <a href={p.ctaHref || "#"} aria-label={`${p.ctaText} - ${p.title}`}>
                    <Button text={p.ctaText} secondary={!p.featured} />
                  </a>
                </div>

                <hr className="pricing-divider" />

                <ul className="pricing-features">
                  {p.features.map((f, i) => (
                    <li key={i}>
                      <span className="tick" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
