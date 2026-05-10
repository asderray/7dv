import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Kontakt
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mt-6 mb-8">
              Sprechen Sie uns <span className="italic text-gold">an</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir
              sind für Sie da.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-serif text-3xl text-white mb-8">
                  Kontakt<span className="italic text-gold">informationen</span>
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Adresse</h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        Friedrichstraße 123
                        <br />
                        10117 Berlin
                        <br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Telefon</h3>
                      <a
                        href="tel:+493012345678"
                        className="text-white/50 text-sm hover:text-gold transition-colors"
                      >
                        +49 30 123 456 78
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">E-Mail</h3>
                      <a
                        href="mailto:hello@maisonnoir.de"
                        className="text-white/50 text-sm hover:text-gold transition-colors"
                      >
                        hello@maisonnoir.de
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Öffnungszeiten
                      </h3>
                      <div className="text-white/50 text-sm space-y-1">
                        <div className="flex justify-between gap-8">
                          <span>Montag – Freitag</span>
                          <span>09:00 – 20:00</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Samstag</span>
                          <span>10:00 – 18:00</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sonntag</span>
                          <span className="text-white/30">Geschlossen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Social */}
              <ScrollReveal delay={0.3}>
                <div className="mt-10">
                  <h3 className="text-white font-medium mb-4">Folgen Sie uns</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-8 md:p-10">
                  <h2 className="font-serif text-2xl text-white mb-6">
                    Nachricht <span className="italic text-gold">senden</span>
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-white text-xl mb-2">
                        Nachricht gesendet!
                      </h3>
                      <p className="text-white/50">
                        Wir melden uns so schnell wie möglich bei Ihnen.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-white/60 text-sm mb-2 block">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors"
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div>
                          <label className="text-white/60 text-sm mb-2 block">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors"
                            placeholder="ihre@email.de"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/60 text-sm mb-2 block">
                          Betreff
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors"
                          placeholder="Worum geht es?"
                        />
                      </div>
                      <div>
                        <label className="text-white/60 text-sm mb-2 block">
                          Nachricht *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors resize-none"
                          placeholder="Ihre Nachricht..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-all duration-300 glow-gold-hover flex items-center justify-center gap-2"
                      >
                        Nachricht senden
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Anfahrt
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
              So finden Sie <span className="italic">uns</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl overflow-hidden aspect-[21/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.809283795735!2d13.388859315808!3d52.520006579813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c9f2000001%3A0x8e3c3e3e3e3e3e3e!2sFriedrichstra%C3%9Fe%2C%20Berlin!5e0!3m2!1sde!2sde!4v1600000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maison Noir Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
