"use client"
import React, { useEffect, useState, memo, useRef } from 'react';

// Agregamos los nuevos nombres aquí para que TypeScript los reconozca
// Actualizá el tipo para incluir 'central'
type IconType = 'html' | 'css' | 'javascript' | 'react' | 'node' | 'tailwind' | 'typescript' | 'java' | 'mysql' | 'github' | 'python' | 'angular' | 'central';
type GlowColor = 'cyan' | 'purple';



interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  // --- ESTOS QUEDAN CON EL SVG ORIGINAL QUE YA TENÍAS ---
  central: {
    component: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <line x1="9" y1="4" x2="9" y2="4"></line>
        <line x1="15" y1="4" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="20"></line>
        <line x1="15" y1="20" x2="15" y2="20"></line>
        <line x1="20" y1="9" x2="20" y2="9"></line>
        <line x1="20" y1="15" x2="20" y2="15"></line>
        <line x1="4" y1="9" x2="4" y2="9"></line>
        <line x1="4" y1="15" x2="4" y2="15"></line>
        <rect x="9" y="9" width="6" height="6"></rect>
      </svg>
    ),
    color: '#06B6D4', // Usamos el color cian base
  },
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26" />
      </svg>
    ),
    color: '#E34F26'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6" />
      </svg>
    ),
    color: '#1572B6'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330" />
      </svg>
    ),
    color: '#F7DF1E'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933" />
      </svg>
    ),
    color: '#339933'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4" />
      </svg>
    ),
    color: '#06B6D4'
  },

  // --- ESTOS USAN TUS FOTOS EN /PUBLIC ---
  // (Ajustá la extensión .svg o .png si es necesario)
  typescript: {
    component: () => (
      <img
        src="/projets/png-transparent-angularjs-typescript-javascript-vue-js-others-blue-angle-text-thumbnail-Photoroom.png"
        alt="TS"
        className="w-full h-full object-contain scale-125" // Agregué scale-125 para darle un extra de tamaño
      />
    ),
    color: '#3178C6'
  },
  java: {
    component: () => <img src="public/projets/png-clipart-computer-icons-java-咖啡海报图片素材-miscellaneous-text-thumbnail-Photoroom.png" alt="Java" className="w-full h-full object-contain" />,
    color: '#007396'
  },
  mysql: {
    component: () => <img src="public/projets/mysql-6-logo-png-transparent-Photoroom.png" alt="MySQL" className="w-full h-full object-contain" />,
    color: '#4479A1'
  },
  github: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        {/* SVG simplificado del Gatito (Octocat) de GitHub */}
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" fill="#FFFFFF" />
      </svg>
    ),
    color: '#FFFFFF'
  },
  python: {
    component: () => <img src="public/projets/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn-Photoroom.png" alt="Python" className="w-full h-full object-contain" />,
    color: '#3776AB'
  },
  angular: {
    component: () => <img src="public/projets/java-logo-angular-angularjs-software-testing-template-computer-icons-computer-font-ppt-png-clipart-thumbnail-Photoroom.png" alt="Angular" className="w-full h-full object-contain scale-125" />,
    color: '#DD0031'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(102, 225, 249, 0.76)',
      secondary: 'rgba(21, 85, 189, 0.23)',
      border: 'rgba(142, 230, 255, 1)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export function OrbitingSkillsGlobe() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragRotation, setDragRotation] = useState(0);
  const lastMouseX = useRef(0);

  // --- 1. DETECTOR DE MÓVIL ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- 2. RADIOS DINÁMICOS ---
  // Definimos los radios una sola vez para que ambos (línea e ícono) los usen
  const internalRadius = isMobile ? 100 : 100; // Antes tenías 85 en ícono pero 100 en línea
  const externalRadius = isMobile ? 178 : 180; // Antes tenías 160 en ícono pero 180 en línea

  // --- 3. LA LISTA DE SKILLS ---
  const skillsConfig: SkillConfig[] = [
    // Todos los de la órbita INTERNA usan 'internalRadius'
    { id: 'html', orbitRadius: internalRadius, size: isMobile ? 30 : 35, speed: 0.3, iconType: 'html', phaseShift: 0, glowColor: 'cyan', label: 'HTML5' },
    { id: 'css', orbitRadius: internalRadius, size: isMobile ? 30 : 35, speed: 0.3, iconType: 'css', phaseShift: (2 * Math.PI) / 6, glowColor: 'cyan', label: 'CSS3' },
    { id: 'javascript', orbitRadius: internalRadius, size: isMobile ? 30 : 35, speed: 0.3, iconType: 'javascript', phaseShift: (4 * Math.PI) / 6, glowColor: 'cyan', label: 'JavaScript' },
    { id: 'typescript', orbitRadius: internalRadius, size: isMobile ? 30 : 35, speed: 0.3, iconType: 'typescript', phaseShift: (6 * Math.PI) / 6, glowColor: 'cyan', label: 'TypeScript' },
    { id: 'python', orbitRadius: internalRadius, size: isMobile ? 30 : 35, speed: 0.3, iconType: 'python', phaseShift: (8 * Math.PI) / 6, glowColor: 'cyan', label: 'Python' },
    { id: 'github', orbitRadius: internalRadius, size: isMobile ? 30 : 35, speed: 0.3, iconType: 'github', phaseShift: (10 * Math.PI) / 6, glowColor: 'cyan', label: 'GitHub' },

    // Todos los de la órbita EXTERNA usan 'externalRadius'
    { id: 'react', orbitRadius: externalRadius, size: isMobile ? 35 : 45, speed: -0.15, iconType: 'react', phaseShift: 0, glowColor: 'purple', label: 'React' },
    { id: 'angular', orbitRadius: externalRadius, size: isMobile ? 35 : 45, speed: -0.15, iconType: 'angular', phaseShift: (2 * Math.PI) / 6, glowColor: 'purple', label: 'Angular' },
    { id: 'node', orbitRadius: externalRadius, size: isMobile ? 35 : 45, speed: -0.15, iconType: 'node', phaseShift: (4 * Math.PI) / 6, glowColor: 'purple', label: 'Node.js' },
    { id: 'java', orbitRadius: externalRadius, size: isMobile ? 35 : 45, speed: -0.15, iconType: 'java', phaseShift: (6 * Math.PI) / 6, glowColor: 'purple', label: 'Java' },
    { id: 'mysql', orbitRadius: externalRadius, size: isMobile ? 35 : 45, speed: -0.15, iconType: 'mysql', phaseShift: (8 * Math.PI) / 6, glowColor: 'purple', label: 'MySQL' },
    { id: 'tailwind', orbitRadius: externalRadius, size: isMobile ? 35 : 40, speed: -0.15, iconType: 'tailwind', phaseShift: (10 * Math.PI) / 6, glowColor: 'purple', label: 'Tailwind' },
  ];


  // 1. EL MOTOR (Animación automática)
  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // 2. FUNCIONES DE INTERACCIÓN (Drag & Hover)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    lastMouseX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Si no estoy haciendo click, solo me aseguro que esté pausado (Hover)
    if (!isDragging) {
      if (!isPaused) setIsPaused(true);
      return;
    }

    // Si estoy arrastrando, calculo el movimiento
    const deltaX = e.clientX - lastMouseX.current;
    // Multiplicamos por 0.5 para que el giro sea suave
    setDragRotation(prev => prev + deltaX * 0.5);
    lastMouseX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false); // Al soltar, el tiempo vuelve a correr solo
  };

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <main className="w-full flex items-center justify-center py-20">
      <div
        // Aumentamos el alto mínimo (min-h) para que el brillo respire
        className="relative w-full aspect-square max-w-[650px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-visible"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* ... resto del código ... */}

        {/* ÍCONO CENTRAL */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#centralGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#d99329ff" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* ÓRBITAS */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* ICONOS GIRANDO */}
        {skillsConfig.map((config) => {
          const dragRad = dragRotation * (Math.PI / 180);
          const angle = (time * config.speed) + dragRad + (config.phaseShift || 0);

          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}