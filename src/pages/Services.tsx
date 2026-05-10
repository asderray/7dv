import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scissors,
  Heart,
  Award,
  Star,
  Sparkles,
  Crown,
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const categories = [
  { id: "all", name: "Alle" },
  { id: "herren", name: "Herren" },
  { id: "damen", name: "Damen" },
  { id: "bart", name: "Bartpflege" },
  { id: "coloring", name: "Coloring" },
  { id: "packages", name: "Packages" },
];

const services = [
  {
    id: 1,
    title: "Classic Cut",
    category: "herren",
    description: "Präziser Haarschnitt mit Beratung und Styling",
    price: "35€",
    duration: "45 Min.",
    features: ["Beratungsgespräch", "Waschen & Pflegen", "Präziser Schnitt", "Styling"],
    icon: Scissors,
    popular: false,
  },
  {
    id: 2,
    title: "Premium Cut",
    category: "herren",
    description: "Exklusiver Schnitt mit Kopfmassage und Premium-Produkten",
    price: "55€",
    duration: "60 Min.",
    features: ["Alles aus Classic Cut", "Kopfmassage", "Hot Towel Treatment", "Premium Produkte"],
    icon: Crown,
    popular: true,
  },
  {
    id: 3,
    title: "Damen Schnitt",
    category: "damen",
    description: "Individueller Schnitt nach Gesichtsform und Wunsch",
    price: "55€",
    duration: "60 Min.",
    features: ["Beratungsgespräch", "Waschen & Conditioner", "Schnitt", "Föhnen & Styling"],
    icon: Heart,
    popular: false,
  },
  {
    id: 4,
    title: "Damen Styling",
    category: "damen",
    description: "Professionelles Styling für jeden Anlass",
    price: "75€",
    duration: "75 Min.",
    features: ["Waschen & Pflege", "Schnitt nach Wunsch", "Glamouröses Styling", "Produktempfehlung"],
    icon: Sparkles,
    popular: true,
  },
  {
    id: 5,
    title: "Bart Trim",
    category: "bart",
    description: "Präzise Bartgestaltung und Pflege",
    price: "25€",
    duration: "30 Min.",
    features: ["Beratung", "Präzises Trimmen", "Konturarbeit", "Bartöl-Pflege"],
    icon: Award,
    popular: false,
  },
  {
    id: 6,
    title: "Royal Shave",
    category: "bart",
    description: "Traditionelle Nassrasur mit heißem Handtuch",
    price: "45€",
    duration: "45 Min.",
    features: ["Hot Towel Prep", "Premium Rasierseife", "Traditionelle Rasur", "Aftershave & Pflege"],
    icon: Crown,
    popular: true,
  },
  {
    id: 7,
    title: "Balayage",
    category: "coloring",
    description: "Natürliche, sonnengeküsste Strähnen",
    price: "120€",
    duration: "120 Min.",
    features: ["Farberatung", "Handgemalte Strähnen", "Tönung", "Pflegebehandlung"],
    icon: Star,
    popular: false,
  },
  {
    id: 8,
    title: "Full Color",
    category: "coloring",
    description: "Komplette Farbveränderung mit Premium-Farben",
    price: "95€",
    duration: "90 Min.",
    features: ["Farbberatung", "Premium Farbe", "Ansatz & Länge", "Glanzkur"],
    icon: Sparkles,
    popular: false,
  },
  {
    id: 9,
    title: "Gentleman's Package",
    category: "packages",
    description: "Das komplette Pflegeerlebnis für den modernen Mann",
    price: "89€",
    duration: "90 Min.",
    features: ["Premium Cut", "Royal Shave", "Gesichtsbehandlung", "Getränke & Snacks"],
    icon: Crown,
    popular: true,
  },
  {
    id: 10,
    title: "Luxury Package",
    category: "packages",
    description: "Ganzheitliches Beauty-Erlebnis für Sie",
    price: "149€",
    duration: "150 Min.",
    features: ["Damen Schnitt & Styling", "Balayage", "Maniküre", "Champagner & Snacks"],
    icon: Heart,
    popular: true,
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Leistungen
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mt-6 mb-8">
              Unsere <span className="italic text-gold">Services</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Von klassischen Schnitten bis hin zu exklusiven Packages – wir
              bieten das volle Spektrum moderner Haarkunst.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-gold text-black font-medium"
                      : "glass text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className="group glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 relative overflow-hidden">
                    {service.popular && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                        Beliebt
                      </div>
                    )}
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-serif text-xl text-white">
                            {service.title}
                          </h3>
                          <span className="font-serif text-2xl text-gold">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-white/40 text-sm mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-white/30 text-xs mb-4">
                          <Clock className="w-3 h-3" />
                          <span>{service.duration}</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-white/50 text-sm"
                            >
                              <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/booking"
                          className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm transition-colors duration-300 group/link"
                        >
                          Termin buchen
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="glass rounded-2xl p-12">
              <h3 className="font-serif text-3xl text-white mb-4">
                Nicht das Richtige gefunden?
              </h3>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Wir beraten Sie gerne persönlich und erstellen ein
                maßgeschneidertes Angebot für Ihre individuellen Wünsche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-all duration-300"
                >
                  Termin buchen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
