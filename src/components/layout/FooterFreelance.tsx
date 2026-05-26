export const Footer = () => {
  return (
    <footer className="py-10 px-5 sm:px-8 border-t" style={{ background: '#0a0b14', borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
            <span className="text-white font-black text-[10px] font-mono">FT</span>
          </div>
          <span className="text-white/60 font-semibold text-sm">Facundo Thibaut</span>
        </div>
        <p className="text-xs text-center sm:text-right text-white/25">
          © {new Date().getFullYear()} Facundo Thibaut · Desarrollo Web · Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  );
};
