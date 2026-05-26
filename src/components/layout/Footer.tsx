export const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="mt-2 md:mt-2 pb-10 flex flex-col items-center text-center font-mono px-4">

      {/* Nombre y Cargo */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-6">
        {/* En mobile: </> y nombre en la misma línea */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-orange-500 font-bold text-[18px] shrink-0">{"</>"}</span>
          <span className="text-xl md:text-2xl text-gray-100 font-bold tracking-tight whitespace-nowrap">
            Facundo Thibaut
          </span>
        </div>
        {/* Separador y rol */}
        <span className="hidden sm:inline text-gray-500 font-light">|</span>
        <span className="text-base md:text-2xl text-gray-400 font-light tracking-tight">
          {t.footer_role}
        </span>
      </div>

      {/* Texto de tecnologías */}
      <p className="text-gray-400 text-sm md:text-base mb-2">
        {t.footer_built_1}<span className="text-gray-200">{"<3"}</span>{t.footer_built_2}
      </p>

      {/* Copyright */}
      <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
        {t.footer_copy}
      </p>
    </footer>
  );
};
