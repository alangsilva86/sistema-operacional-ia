"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "5544998539056";
const WHATSAPP_BASE_URL = "https://wa.me";
const TOOLTIP_MESSAGE = "Dúvida sobre a instalação? Fale com o Alan.";
const TOOLTIP_DELAY_MS = 2400;
const TOOLTIP_HIDE_MS = 8500;
const SCROLL_TRIGGER_RATIO = 0.3;

type FormState = {
  name: string;
  company: string;
  email: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: ""
};

export function ConciergeWidget() {
  const [showTrigger, setShowTrigger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [autoTooltipVisible, setAutoTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const showTooltip = autoTooltipVisible || isHovered;

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setShowTrigger(progress >= SCROLL_TRIGGER_RATIO);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showTrigger) return;
    const showTimer = window.setTimeout(() => setAutoTooltipVisible(true), TOOLTIP_DELAY_MS);
    const hideTimer = window.setTimeout(() => setAutoTooltipVisible(false), TOOLTIP_HIDE_MS);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [showTrigger]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("concierge:open", handleOpen as EventListener);
    return () => window.removeEventListener("concierge:open", handleOpen as EventListener);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const whatsappUrl = useMemo(() => {
    const message = `Olá Alan! Sou *${form.name}* da *${form.company}*. Li sobre o Sistema Operacional de IA, mas tenho uma dúvida específica sobre o meu cenário antes de fazer a inscrição. Pode me ajudar?`;
    return `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [form]);

  const handleInputChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!form.company.trim()) nextErrors.company = "Informe sua empresa.";
    if (!form.email.trim()) {
      nextErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <>
      <AnimatePresence>
        {showTrigger ? (
          <motion.div
            key="concierge-trigger"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div
              className="relative flex flex-col items-end gap-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence>
                {showTooltip ? (
                  <motion.div
                    key="concierge-tooltip"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-full right-0 mb-3 max-w-[220px] rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-xs text-slate-100 shadow-lg sm:bottom-1/2 sm:right-full sm:mb-0 sm:mr-3 sm:-translate-y-1/2"
                  >
                    {TOOLTIP_MESSAGE}
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                whileTap={{ scale: 0.97 }}
                aria-label="Abrir concierge"
              >
                <MessageSquare className="h-6 w-6" />
              </motion.button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="concierge-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="concierge-title"
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg rounded-[28px] border border-white/10 bg-slate-900 p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/5 hover:text-white"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Concierge
                </p>
                <h3 id="concierge-title" className="text-2xl font-semibold text-white">
                  Tire sua dúvida direto com o Alan
                </h3>
                <p className="text-sm text-slate-300">
                  Preencha para iniciar a conversa. Eu respondo pessoalmente.
                </p>
              </div>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(event) => handleInputChange("name", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name ? <p className="text-xs text-red-300">{errors.name}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={form.company}
                    onChange={(event) => handleInputChange("company", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.company ? <p className="text-xs text-red-300">{errors.company}</p> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={form.email}
                    onChange={(event) => handleInputChange("email", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email ? <p className="text-xs text-red-300">{errors.email}</p> : null}
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-green-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-green-500/40 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  <Send className="h-4 w-4" />
                  Iniciar conversa no WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
