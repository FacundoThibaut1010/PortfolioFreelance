export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-[10px] font-mono">FT</span>
          </div>
          <span className="text-slate-300 font-semibold text-sm">Facundo Thibaut</span>
        </div>
        <p className="text-xs text-center sm:text-right">
          © {new Date().getFullYear()} Facundo Thibaut · Desarrollo Web · Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  );
};
