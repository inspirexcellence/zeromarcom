"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function emitToast(message: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("zeromarcom:toast", { detail: { message } })
    );
  }
}

export default function ToastNotification() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>;
      setToast(customEvent.detail.message);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setToast(null);
      }, 3200);
    };

    window.addEventListener("zeromarcom:toast", handleToast);
    return () => {
      window.removeEventListener("zeromarcom:toast", handleToast);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-nav px-5 py-3 rounded-full text-xs font-mono text-ink shadow-xl border border-line flex items-center gap-3 select-none pointer-events-auto"
          >
            <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
            <span className="font-medium text-ink">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
