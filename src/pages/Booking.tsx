import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Scissors,
  User,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  { id: "classic", name: "Classic Cut", price: "35€", duration: "45 Min." },
  { id: "premium", name: "Premium Cut", price: "55€", duration: "60 Min." },
  { id: "damen", name: "Damen Schnitt", price: "55€", duration: "60 Min." },
  { id: "damen-style", name: "Damen Styling", price: "75€", duration: "75 Min." },
  { id: "bart", name: "Bart Trim", price: "25€", duration: "30 Min." },
  { id: "shave", name: "Royal Shave", price: "45€", duration: "45 Min." },
  { id: "balayage", name: "Balayage", price: "120€", duration: "120 Min." },
  { id: "color", name: "Full Color", price: "95€", duration: "90 Min." },
  { id: "gentleman", name: "Gentleman's Package", price: "89€", duration: "90 Min." },
  { id: "luxury", name: "Luxury Package", price: "149€", duration: "150 Min." },
];

const stylists = [
  { id: "marcus", name: "Marcus Klein", role: "Master Stylist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { id: "elena", name: "Elena Roth", role: "Senior Colorist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { id: "david", name: "David Chen", role: "Barber & Stylist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { id: "sophia", name: "Sophia Bergmann", role: "Hair Stylist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  { id: "any", name: "Keine Präferenz", role: "Wir wählen für Sie", image: "" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ];

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== "";
      case 2: return selectedStylist !== "";
      case 3: return selectedDate !== null && selectedTime !== "";
      case 4: return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      default: return false;
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    const minDate = new Date();
    if (currentYear === minDate.getFullYear() && currentMonth === minDate.getMonth()) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);
    return date < minDate || date.getDay() === 0;
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-12 h-12 text-gold" />
          </motion.div>
          <h2 className="font-serif text-4xl text-white mb-4">
            Termin bestätigt!
          </h2>
          <p className="text-white/50 mb-8">
            Vielen Dank für Ihre Buchung. Wir haben eine Bestätigung an{" "}
            <span className="text-gold">{formData.email}</span> gesendet.
          </p>
          <div className="glass rounded-2xl p-6 mb-8 text-left">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
              <Calendar className="w-5 h-5 text-gold" />
              <div>
                <p className="text-white text-sm font-medium">
                  {selectedDate}. {monthNames[currentMonth]} {currentYear}
                </p>
                <p className="text-white/40 text-xs">{selectedTime} Uhr</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Scissors className="w-5 h-5 text-gold" />
              <div>
                <p className="text-white text-sm font-medium">
                  {services.find((s) => s.id === selectedService)?.name}
                </p>
                <p className="text-white/40 text-xs">
                  mit {stylists.find((s) => s.id === selectedStylist)?.name}
                </p>
              </div>
            </div>
          </div>
          <a
            href="/#/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-all duration-300"
          >
            Zurück zur Startseite
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Termin buchen
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
            Ihr <span className="italic text-gold">Termin</span>
          </h1>
          <p className="text-white/50">
            In nur wenigen Schritten zu Ihrem perfekten Look.
          </p>
        </ScrollReveal>

        {/* Progress */}
        <div className="flex items-center justify-between mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <motion.div
                animate={{
                  backgroundColor: step >= s ? "#d4a853" : "rgba(255,255,255,0.1)",
                  scale: step === s ? 1.1 : 1,
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                style={{ color: step >= s ? "#000" : "rgba(255,255,255,0.4)" }}
              >
                {s}
              </motion.div>
              {s < 4 && (
                <div
                  className={`w-12 md:w-24 h-px mx-2 transition-colors duration-500 ${
                    step > s ? "bg-gold" : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Service */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                <Scissors className="w-6 h-6 text-gold" />
                Service wählen
              </h2>
              <div className="grid gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`glass rounded-xl p-5 text-left transition-all duration-300 ${
                      selectedService === service.id
                        ? "border-gold bg-gold/5"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium mb-1">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-4 text-white/40 text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <span className="font-serif text-xl text-gold">
                        {service.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Stylist */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-gold" />
                Stylist wählen
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {stylists.map((stylist) => (
                  <button
                    key={stylist.id}
                    onClick={() => setSelectedStylist(stylist.id)}
                    className={`glass rounded-xl p-5 text-left transition-all duration-300 flex items-center gap-4 ${
                      selectedStylist === stylist.id
                        ? "border-gold bg-gold/5"
                        : "hover:bg-white/5"
                    }`}
                  >
                    {stylist.image ? (
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-gold" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-medium">{stylist.name}</h3>
                      <p className="text-white/40 text-sm">{stylist.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-gold" />
                Datum & Uhrzeit
              </h2>

              {/* Calendar */}
              <div className="glass rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium">
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day) => (
                    <div
                      key={day}
                      className="text-center text-white/30 text-xs py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }).map(
                    (_, i) => (
                      <div key={`empty-${i}`} />
                    )
                  )}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const disabled = isDateDisabled(day);
                    const isSelected = selectedDate === day;
                    return (
                      <button
                        key={day}
                        onClick={() => !disabled && setSelectedDate(day)}
                        disabled={disabled}
                        className={`aspect-square rounded-lg text-sm flex items-center justify-center transition-all duration-200 ${
                          disabled
                            ? "text-white/10 cursor-not-allowed"
                            : isSelected
                            ? "bg-gold text-black font-medium"
                            : "text-white/70 hover:bg-white/5"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-white/60 text-sm mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Verfügbare Zeiten
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded-lg text-sm transition-all duration-200 ${
                          selectedTime === time
                            ? "bg-gold text-black font-medium"
                            : "glass text-white/70 hover:bg-white/5"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-gold" />
                Ihre Daten
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors"
                    placeholder="+49 123 456 789"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Anmerkungen (optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    rows={4}
                    className="w-full glass rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:border-gold transition-colors resize-none"
                    placeholder="Besondere Wünsche oder Hinweise..."
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="glass rounded-xl p-6 mt-8">
                <h3 className="text-white font-medium mb-4">Zusammenfassung</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/40">Service</span>
                    <span className="text-white">
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Stylist</span>
                    <span className="text-white">
                      {stylists.find((s) => s.id === selectedStylist)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Datum</span>
                    <span className="text-white">
                      {selectedDate}. {monthNames[currentMonth]} {currentYear}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Uhrzeit</span>
                    <span className="text-white">{selectedTime} Uhr</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between">
                    <span className="text-white/40">Gesamt</span>
                    <span className="text-gold font-medium">
                      {services.find((s) => s.id === selectedService)?.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Zurück
            </button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <button
              onClick={() => canProceed() && setStep(step + 1)}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                canProceed()
                  ? "bg-gold text-black hover:bg-gold-light"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              Weiter
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                canProceed()
                  ? "bg-gold text-black hover:bg-gold-light glow-gold-hover"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              Termin bestätigen
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
