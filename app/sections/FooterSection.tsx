import { content } from "@/app/content";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container space-y-3 py-10 text-xs text-[#8A8A8A]">
        <p>{content.footer.organization}</p>
        <p>{content.footer.contact}</p>
        <p className="text-[#BDBDBD]">{content.footer.refundPolicy}</p>
      </div>
    </footer>
  );
}
