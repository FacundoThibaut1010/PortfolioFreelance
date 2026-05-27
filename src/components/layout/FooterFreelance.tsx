import type { T } from '../../i18n';

export const Footer = ({ t }: { t: T }) => {
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  return (
    <footer className="py-10 px-5 sm:px-8 border-t"
      style={{ background: 'var(--bg-1)', borderColor: fg(0.06) }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)' }}>
            <span className="text-white font-black text-[10px] font-mono">FT</span>
          </div>
          <span className="font-semibold text-sm" style={{ color: fg(0.6) }}>Facundo Thibaut</span>
        </div>
        <p className="text-xs text-center sm:text-right" style={{ color: fg(0.25) }}>
          © {new Date().getFullYear()} Facundo Thibaut · {t.footer_sub}
        </p>
      </div>
    </footer>
  );
};
