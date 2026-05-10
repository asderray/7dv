import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const team = [
  {
    name: "Marcus Klein",
    role: "Gründer & Master Stylist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    bio: "Mit über 20 Jahren Erfahrung ist Marcus der kreative Kopf hinter Maison Noir.",
  },
  {
    name: "Elena Roth",
    role: "Senior Colorist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    bio: "Elena ist spezialisiert auf Balayage und kreative Colorings.",
  },
  {
    name: "David Chen",
    role: "Barber & Stylist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    bio: "David vereint traditionelle Barber-Techniken mit modernem Styling.",
  },
  {
    name: "Sophia Bergmann",
    role: "Hair Stylist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    bio: "Sophia ist Expertin für Damenschnitte und Hochzeitsstyling.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description:
      "Jeder Schnitt ist ein Kunstwerk. Wir lieben, was wir tun, und das sieht man.",
  },
  {
    icon: Award,
    title: "Exzellenz",
    description:
      "Nur das Beste ist gut genug. Wir arbeiten ausschließlich mit Premium-Produkten.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Wir bleiben am Puls der Zeit und bringen stets die neuesten Trends zu Ihnen.",
  },
  {
    icon: Users,
    title: "Gemeinschaft",
    description:
      "Bei uns sind Sie keine Nummer. Wir bauen langfristige Beziehungen zu unseren Kunden auf.",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Die Geburt",
    description:
      "Maison Noir wurde in einer kleinen Berliner Gasse gegründet mit einer Vision: Haarkunst neu zu definieren.",
  },
  {
    year: "2014",
    title: "Erste Auszeichnung",
    description:
      "Gewinn des German Hairdressing Awards – die Anerkennung unseres innovativen Ansatzes.",
  },
  {
    year: "2018",
    title: "Neuer Standort",
    description:
      "Umzug in unsere heutige Location in der Friedrichstraße – ein Studio im Herzen Berlins.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description:
      "Wir wuchsen auf 12 Experten und erweiterten unser Service-Angebot um Premium-Packages.",
  },
  {
    year: "2025",
    title: "Heute",
    description:
      "Maison Noir ist Synonym für Premium-Haarkunst. Über 2.500 zufriedene Kunden vertrauen uns.",
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Über uns
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mt-6 mb-8">
              Unsere <span className="italic text-gold">Geschichte</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Von einer kleinen Vision zu einem der angesagtesten Studios
              Berlins. Erfahren Sie, was Maison Noir ausmacht.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=700&fit=crop"
                    alt="Studio Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=700&fit=crop"
                    alt="Styling Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Wo <span className="italic">Leidenschaft</span> auf Präzision
                trifft
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Maison Noir wurde mit einer klaren Vision gegründet: ein Ort zu
                schaffen, an dem Haarkunst nicht nur Dienstleistung, sondern
                Erlebnis ist. Unser Gründer Marcus Klein wollte ein Studio, das
                die Grenzen zwischen traditionellem Handwerk und moderner
                Ästhetik aufhebt.
              </p>
              <p className="text-white/50 leading-relaxed mb-6">
                Jedes Detail unseres Studios wurde mit Bedacht gewählt – von den
                italienischen Ledersesseln bis hin zur speziell abgestimmten
                Beleuchtung, die es uns ermöglicht, Farben in ihrer
                vollkommensten Form zu erleben.
              </p>
              <p className="text-white/50 leading-relaxed">
                Heute sind wir stolz darauf, ein Team von 12 leidenschaftlichen
                Experten zu sein, die jeden Tag aufs Neue beweisen, dass
                Exzellenz kein Zufall ist.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Unsere Werte
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
              Was uns <span className="italic">antreibt</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8 text-center h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 px-6 bg-dark-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Unsere Reise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
              Meilensteine unserer{" "}
              <span className="italic">Geschichte</span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.15}>
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-2" />
                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <div
                      className={`${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <span className="font-serif text-3xl text-gold">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl text-white mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Das Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
              Die <span className="italic">Experten</span> hinter dem Erfolg
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm mb-3">{member.role}</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Werden Sie Teil der{" "}
              <span className="italic text-gold">Familie</span>
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Erleben Sie selbst, was Maison Noir so besonders macht. Wir
              freuen uns auf Sie.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-black font-medium tracking-wide rounded-full hover:bg-gold-light transition-all duration-300 glow-gold-hover"
            >
              Termin vereinbaren
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
