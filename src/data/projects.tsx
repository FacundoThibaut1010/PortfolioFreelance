import { Code } from 'lucide-react';

export const TechLogos = {
  // SVG Oficial de React
  'react': (className: string) => (
    <svg viewBox="0 0 100 100" className={className} fill="#61DAFB"><path d="M50 0a50 50 0 1 0 50 50A50.06 50.06 0 0 0 50 0Zm0 92.59A42.59 42.59 0 1 1 92.59 50 42.64 42.64 0 0 1 50 92.59Z" /><path d="M50 25.93a24.07 24.07 0 1 0 24.07 24.07A24.1 24.1 0 0 0 50 25.93Zm0 40.74a16.67 16.67 0 1 1 16.67-16.67 16.7 16.7 0 0 1-16.67 16.67Z" /><path d="M50 42.59a7.41 7.41 0 1 0 7.41 7.41 7.43 7.43 0 0 0-7.41-7.41Zm0 11.11a3.7 3.7 0 1 1 3.7-3.7 3.71 3.71 0 0 1-3.7 3.7Z" /></svg>
  ),
  // SVG Oficial de Node.js
  'node.js': (className: string) => (
    <svg viewBox="0 0 128 128" className={className} fill="#339933"><path d="M125.4 61.4 69.8 4 64 0l-5.8 4L2.6 61.4c-3.5 3.8-3.5 8.9-.1 12.6l55.6 50 5.8 4 5.8-4 55.6-50c3.4-3.7 3.5-8.8.1-12.6zM64 104.2l-41.9-38 31.5-23.7V92L41 78.3V61.1l23-17.3v60.4zm0-66.2L35.2 60.1V42.8L64 21.2v16.8zM105.9 66.2l-41.9 38V42.5l23 17.3v17.2L68.5 61v31l31.5-23.7-5.9 4.3v16.8l11.8-8.2z" /></svg>
  ),
  // SVG Oficial de Tailwind (Ejemplo)
  'tailwind': (className: string) => (
    <svg viewBox="0 0 100 100" className={className} fill="#38BDF8"><path d="M50 0C22.38 0 0 22.38 0 50s22.38 50 50 50 50-22.38 50-50S77.62 0 50 0zm0 90C27.94 90 10 72.06 10 50S27.94 10 50 10s40 17.94 40 40-17.94 40-40 40zm10-50c0-5.52-4.48-10-10-10s-10 4.48-10 10 4.48 10 10 10 10-4.48 10-10zm-10-15C33.6 25 25 33.6 25 44s8.6 19 19 19 19-8.6 19-19-8.6-19-19-19z" /></svg>
  ),
  // Fallback si no encuentras el logo
  'default': (className: string) => <Code className={className} />
} as Record<string, (className: string) => JSX.Element>;

export const getProjects = (t: any) => [
  {
    name: 'Black Jack',
    type: t.proj_type_web,
    github: 'https://github.com/Miagomez1/blackjack-unlam',
    desc: t.proj_desc,
    longDesc: t.proj_long_desc,
    image: '/projets/FotoBlackJack.png',
    tech: ['Java', 'HTML', 'CSS', 'Javascript', 'Spring mvc', 'MySql']
  },
  {
    name: 'Newave',
    type: t.proj_type_web,
    github: 'https://newave-suplementos.vercel.app',
    desc: t.newave_desc,
    longDesc: t.newave_long_desc,
    image: '/projets/newave.png',
    tech: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'SQLite']
  },
  {
    name: 'Invitación Digital',
    type: t.proj_type_web,
    github: 'https://invitacion-muestra.vercel.app/',
    desc: t.invitacion_desc,
    longDesc: t.invitacion_long_desc,
    image: '/projets/invitacionDigital.png',
    tech: ['React.js', 'Framer Motion', 'Vite']
  }
];
