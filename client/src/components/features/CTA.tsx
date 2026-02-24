export const CTA = ({ title, subtitle, btnPrimary, btnSecondary, badges }: { title: string; subtitle: string; btnPrimary: string; btnSecondary: string; badges: string[] }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-10 opacity-90 max-w-[600px] mx-auto">{subtitle}</p>
        
        <div className="flex justify-center gap-5 mb-8 flex-wrap">
          <a href="/login" className="bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-slate-100 hover:-translate-y-1 transition">
            <i className="ri-rocket-line text-blue-500 text-lg"></i>  {btnPrimary}
          </a>
          <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition">
            <i className="ri-send-plane-2-line text-white text-lg"></i>  {btnSecondary}
          </a>
        </div>

        <div className="flex justify-center gap-5 text-sm opacity-80 flex-wrap">
          {badges.map((badge, idx) => (
            <span key={idx}>✓ {badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
};