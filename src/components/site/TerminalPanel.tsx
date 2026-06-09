import { motion } from "framer-motion";
import { Atom, Cpu } from "lucide-react";

type TerminalPanelProps = {
  expanded?: boolean;
};

export function TerminalPanel({ expanded = false }: TerminalPanelProps) {
  const baseLines = [
    { c: "text-primary", t: "> initializing mauri.system" },
    { c: "text-muted-foreground", t: "[ok] role: CTO · Technical Lead · Researcher" },
    { c: "text-muted-foreground", t: "[ok] stack: react · python · pytorch · postgres" },
    { c: "text-muted-foreground", t: "[ok] research: computer vision / medical imaging" },
    { c: "text-accent", t: "> training model.health.vision" },
    { c: "text-cyan", t: "[net] epoch 42/100  loss 0.084  acc 0.962" },
    { c: "text-muted-foreground", t: "[edu] SENAC · UFAL · Hub FDS" },
    { c: "text-primary", t: "> status: building the future_" },
  ];
  const expandedLines = [
    { c: "text-muted-foreground", t: "[lead] architecture · product · teams · strategy" },
    { c: "text-muted-foreground", t: "[ai] detection · vision · model evaluation · healthcare" },
    { c: "text-muted-foreground", t: "[teach] programming · databases · web · AI" },
    { c: "text-accent", t: "> syncing human.side" },
    { c: "text-muted-foreground", t: "[play] strategy · competitive games · sci-fi · Marvel" },
    { c: "text-cyan", t: "[core] curiosity: high  build_mode: always_on" },
    { c: "text-primary", t: "> ready for the next project_" },
  ];
  const lines = expanded ? [...baseLines, ...expandedLines] : baseLines;

  return (
    <div className="relative glass glow-border rounded-2xl overflow-hidden h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-yellow-400/70" />
          <span className="size-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Cpu className="size-3.5" /> mauri@core ~
        </div>
        <Atom className="size-4 text-primary animate-pulse" />
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.18, duration: 0.4 }}
            className={line.c}
          >
            {line.t}
          </motion.div>
        ))}
        {expanded && (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ["impact", "real-world"],
              ["research", "health.ai"],
              ["mode", "builder"],
            ].map(([label, value]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="rounded-lg border border-border/60 bg-white/[0.02] p-3"
              >
                <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </div>
                <div className="mt-1 text-[11px] text-foreground">{value}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
