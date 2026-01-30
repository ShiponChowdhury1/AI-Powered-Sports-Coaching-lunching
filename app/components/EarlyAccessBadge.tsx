import { Sparkles } from "lucide-react";

export default function EarlyAccessBadge() {
  return (
    <div
      className="inline-flex items-center justify-center gap-3 transition-transform hover:scale-105 border-[#00786F]"
      style={{
        width: "182px",
        height: "38.18px",
        borderWidth: "1.11px",
        borderRadius: "37282700px",
        backgroundColor: "#00000080",
        backdropFilter: "blur(8px)",
        opacity: 1,
      }}
    >
      <Sparkles size={16} className="text-[#00786F]" />
      <span className="text-sm font-semibold text-[#00786F] whitespace-nowrap">
        Early Access
      </span>
    </div>
  );
}
