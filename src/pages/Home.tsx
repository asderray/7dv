import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  Star,
  ArrowRight,
  Users,
  Award,
  Clock,
  Heart,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    icon: Scissors,
    title: "Herrenhaarschnitt",
    description: "Präzise Schnitte mit modernster Technik",
    price: "ab 35€",
  },
  {
    icon: Heart,
    title: "Damenhaarschnitt",
    description: "Individuelle Beratung und perfekter Schnitt",
    price: "ab 55€",
  },
  {
    icon: Award,
    title: "Bartpflege",
    description: "Traditionelle Rasur und Bartgestaltung",
    price: "ab 25€",
  },
  {
    icon: Star,
    title: "Coloring",
    description: "Farben, Strähnen und Balayage",
    price: "ab 75€",
  },
];

const testimonials = [
  {
    name: "Alexander Weber",
    role: "Geschäftsführer",
    text: "Das beste Barber-Erlebnis, das ich je hatte. Die Aufmerksamkeit zum Detail ist unglaublich.",
    rating: 5,
  },
  {
    name: "Sarah Müller",
    role: "Marketing Managerin",
    text: "Endlich ein Studio, das versteht, was ich will. Meine Haare haben noch nie so gut ausgesehen.",
    rating: 5,
  },
  {
    name: "Michael Schmidt",
    role: "Architekt",
    text: "Premium-Service von Anfang bis Ende. Die Atmosphäre allein ist schon einen Besuch wert.",
    rating: 5,
  },
];

const stats = [
  { icon: Users, value: "2.500+", label: "Zufriedene Kunden" },
  { icon: Award, value: "15", label: "Jahre Erfahrung" },
  { icon: Clock, value: "12", label: "Experten im Team" },
  { icon: Star, value: "4.9", label: "Durchschnittsbewertung" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=1920&h=1080&fit=crop')`,
            }}
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-gold text-sm tracking-[0.4em] uppercase font-medium">
              Premium Friseur & Barber Studio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight"
          >
            Wo Stil
            <br />
            <span className="italic text-gold">beginnt</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white/60 text-lg md:text-xl max-w-xl mb-10 font-light"
          >
            Erleben Sie höchste Handwerkskunst in einer Atmosphäre von
            zeitloser Eleganz
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/booking"
              className="px-8 py-4 bg-gold text-black font-medium tracking-wide rounded-full hover:bg-gold-light transition-all duration-300 glow-gold-hover flex items-center justify-center gap-2"
            >
              Termin buchen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-medium tracking-wide rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Unsere Leistungen
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop"
                    alt="Maison Noir Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 glass rounded-2xl p-6 flex flex-col justify-center items-center">
                  <span className="font-serif text-4xl text-gold">15+</span>
                  <span className="text-white/60 text-sm text-center mt-1">
                    Jahre
                    <br />
                    Erfahrung
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Über uns
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight">
                Ein Studio,
                <br />
                <span className="italic">das Geschichte schreibt</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Seit 2010 setzen wir Maßstäbe in der Welt der Haarkunst. Unser
                Team aus international ausgebildeten Stylisten vereint
                traditionelles Handwerk mit modernsten Techniken.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Jedes Detail in unserem Studio wurde mit Bedacht gewählt – von
                den edlen Materialien bis hin zur atmosphärischen Beleuchtung.
                Hier wird Ihr Besuch zu einem Erlebnis der Extraklasse.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 group"
              >
                <span className="text-sm tracking-wide">Mehr erfahren</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Unsere Leistungen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
              Maßgeschneidert für <span className="italic">Sie</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Von klassischen Schnitten bis hin zu kreativen Colorings – wir
              bieten das volle Spektrum moderner Haarkunst.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <Link to="/services">
                  <div className="group glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-medium">
                        {service.price}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Alle Leistungen ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="font-serif text-4xl md:text-5xl text-white block mb-2"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-white/40 text-sm">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Kundenstimmen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
              Was unsere Gäste <span className="italic">sagen</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.15}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-serif text-gold text-lg">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-white/40 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Galerie
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
              Einblicke in unser <span className="italic">Studio</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.08}
                className={index === 0 || index === 5 ? "md:row-span-2" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-2xl overflow-hidden group ${
                    index === 0 || index === 5
                      ? "aspect-[3/4] md:aspect-auto md:h-full"
                      : "aspect-square"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Bereit für Ihren
              <br />
              <span className="italic text-gold">neuen Look?</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Buchen Sie jetzt Ihren Termin und erleben Sie Premium-Service auf
              höchstem Niveau.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-black font-medium tracking-wide rounded-full hover:bg-gold-light transition-all duration-300 glow-gold-hover text-lg"
            >
              Jetzt Termin buchen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
