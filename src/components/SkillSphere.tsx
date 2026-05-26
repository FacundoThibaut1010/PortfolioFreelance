import { useEffect, useRef, useState, useCallback } from 'react';

// ── Skill definitions ────────────────────────────────────────────

interface Skill {
  name: string;
  color: string;
  img: string;           // path from /public (e.g. /projets/react.png)
  imgStyle?: React.CSSProperties;
}

const SKILLS: Skill[] = [
  // índice 0 — polo norte (poco movimiento en rotación Y)
  { name: 'React',       color: '#61DAFB', img: '/projets/react-logo-png_seeklogo-507247-Photoroom.png' },
  { name: 'Angular',     color: '#DD0031', img: '/projets/java-logo-angular-angularjs-software-testing-template-computer-icons-computer-font-ppt-png-clipart-thumbnail-Photoroom.png', imgStyle: { transform: 'scale(1.2)' } },
  { name: 'TypeScript',  color: '#3178C6', img: '/projets/png-transparent-angularjs-typescript-javascript-vue-js-others-blue-angle-text-thumbnail-Photoroom.png', imgStyle: { transform: 'scale(1.2)' } },
  { name: 'JavaScript',  color: '#F7DF1E', img: '/projets/kisspng-javascript-clip-art-openclipart-logo-number-1713949408965-Photoroom.png' },
  { name: 'HTML5',       color: '#E34F26', img: '/projets/html5_23403-Photoroom.png' },
  { name: 'CSS3',        color: '#1572B6', img: '/projets/css-icon5555.logowik.com-Photoroom.png' },
  // índice 6 — ecuador (máximo movimiento en rotación Y)
  { name: 'GitHub',      color: '#c9d1d9', img: '' },
  { name: 'Node.js',     color: '#339933', img: '/projets/87-879058_formation-node-js-node-js-logo-vector-Photoroom.png' },
  { name: 'Java',        color: '#5382a1', img: '/projets/java-logo-Photoroom.png' },
  { name: 'Spring Boot', color: '#6DB33F', img: '/projets/spring-Photoroom.png' },
  { name: 'Python',      color: '#3776AB', img: '/projets/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn-Photoroom.png' },
  { name: 'MySQL',       color: '#4479A1', img: '/projets/mysql-6-logo-png-transparent-Photoroom.png' },
  // índice 12 — polo sur
  { name: 'Tailwind',    color: '#06B6D4', img: '' },
];

// Inline SVG fallbacks for skills without image files
const SVG_ICONS: Record<string, React.ReactNode> = {
  Tailwind: (
    <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-full h-full">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="#c9d1d9" className="w-full h-full">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

// ── Sphere math ──────────────────────────────────────────────────

const RADIUS = 175;
const N = SKILLS.length;

// Fibonacci sphere — distribución uniforme sobre la esfera
const POSITIONS = Array.from({ length: N }, (_, i) => {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (i / (N - 1)) * 2;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = golden * i;
  return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
});

function project3D(
  pos: { x: number; y: number; z: number },
  rotX: number,
  rotY: number,
) {
  // Rotación en Y
  const x1 = pos.x * Math.cos(rotY) + pos.z * Math.sin(rotY);
  const z1 = -pos.x * Math.sin(rotY) + pos.z * Math.cos(rotY);
  // Rotación en X
  const y2 = pos.y * Math.cos(rotX) - z1 * Math.sin(rotX);
  const z2 = pos.y * Math.sin(rotX) + z1 * Math.cos(rotX);
  return { sx: x1 * RADIUS, sy: y2 * RADIUS, depth: z2 };
}

// ── Wireframe SVG ────────────────────────────────────────────────

const SAMPLES = 48;
const LAT_YS  = [-0.65, -0.3, 0, 0.3, 0.65];
const LON_PHIS = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];
const CENTER   = 230; // half of 460px container

function buildPolyline(
  pts: Array<{ x: number; y: number; z: number }>,
  rx: number,
  ry: number,
) {
  return pts
    .map(p => {
      const { sx, sy } = project3D(p, rx, ry);
      return `${CENTER + sx},${CENTER + sy}`;
    })
    .join(' ');
}

function SphereWireframe({ rx, ry }: { rx: number; ry: number }) {
  const latLines = LAT_YS.map(y0 => {
    const r = Math.sqrt(Math.max(0, 1 - y0 * y0));
    const pts = Array.from({ length: SAMPLES + 1 }, (_, i) => {
      const t = (i / SAMPLES) * Math.PI * 2;
      return { x: Math.cos(t) * r, y: y0, z: Math.sin(t) * r };
    });
    return buildPolyline(pts, rx, ry);
  });

  const lonLines = LON_PHIS.map(phi => {
    const pts = Array.from({ length: SAMPLES + 1 }, (_, i) => {
      const t = (i / SAMPLES) * Math.PI * 2;
      return {
        x: Math.sin(t) * Math.cos(phi),
        y: Math.cos(t),
        z: Math.sin(t) * Math.sin(phi),
      };
    });
    return buildPolyline(pts, rx, ry);
  });

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={460}
      height={460}
    >
      {/* Static boundary circle */}
      <circle
        cx={CENTER} cy={CENTER} r={RADIUS}
        fill="none"
        stroke="rgba(249,115,22,0.22)"
        strokeWidth="1"
      />
      {/* Rotating latitude lines */}
      {latLines.map((pts, i) => (
        <polyline
          key={`lat-${i}`}
          points={pts}
          fill="none"
          stroke={i === 2 ? 'rgba(249,115,22,0.35)' : 'rgba(249,115,22,0.18)'}
          strokeWidth={i === 2 ? '1' : '0.7'}
        />
      ))}
      {/* Rotating longitude lines */}
      {lonLines.map((pts, i) => (
        <polyline
          key={`lon-${i}`}
          points={pts}
          fill="none"
          stroke="rgba(249,115,22,0.18)"
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}

// ── Main component ───────────────────────────────────────────────

export function SkillSphere() {
  const [rot, setRot] = useState({ x: 0.38, y: 0 });
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (paused) return;
    let raf: number;
    let prev = performance.now();
    const tick = (now: number) => {
      const dt = (now - prev) / 1000;
      prev = now;
      setRot(r => ({ ...r, y: r.y + dt * 0.45 }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging(true);
    setPaused(true);
    mouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    setPaused(true);
    if (!dragging) return;
    const dx = e.clientX - mouse.current.x;
    const dy = e.clientY - mouse.current.y;
    mouse.current = { x: e.clientX, y: e.clientY };
    setRot(r => ({ x: r.x - dy * 0.005, y: r.y + dx * 0.005 }));
  }, [dragging]);

  const onRelease = useCallback(() => {
    setDragging(false);
    setPaused(false);
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setPaused(true);
    mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - mouse.current.x;
    const dy = e.touches[0].clientY - mouse.current.y;
    mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setRot(r => ({ x: r.x - dy * 0.005, y: r.y + dx * 0.005 }));
  }, []);

  // Proyectar y ordenar de atrás hacia adelante (painter's algorithm)
  const items = POSITIONS.map((pos, i) => {
    const { sx, sy, depth } = project3D(pos, rot.x, rot.y);
    return { sx, sy, depth, skill: SKILLS[i] };
  }).sort((a, b) => a.depth - b.depth);

  return (
    <div
      className="relative select-none cursor-grab active:cursor-grabbing"
      style={{ width: 460, height: 460 }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onRelease}
      onMouseLeave={onRelease}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onRelease}
    >
      {/* Ambient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.06) 0%, rgba(6,182,212,0.03) 40%, transparent 68%)',
        }}
      />

      {/* Wireframe sphere */}
      <SphereWireframe rx={rot.x} ry={rot.y} />

      {/* Skill tags */}
      {items.map(({ sx, sy, depth, skill }) => {
        const t = (depth + 1) / 2;          // 0=back · 1=front
        const isHov = hovered === skill.name;
        const scale   = isHov ? 1.18 : 0.52 + t * 0.56;
        const opacity = isHov ? 1    : 0.12 + t * 0.86;

        return (
          <div
            key={skill.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px)) scale(${scale})`,
              opacity,
              zIndex: Math.round(t * 100),
            }}
            onMouseEnter={e => { e.stopPropagation(); setHovered(skill.name); }}
            onMouseLeave={e => { e.stopPropagation(); setHovered(null); }}
          >
            <span
              className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px] whitespace-nowrap border"
              style={{
                borderColor: isHov ? `${skill.color}80` : `${skill.color}40`,
                background:  isHov ? `${skill.color}18` : `${skill.color}08`,
                color:       isHov ? skill.color : '#9ca3af',
                boxShadow:   isHov
                  ? `0 0 16px ${skill.color}55, 0 0 40px ${skill.color}20`
                  : 'none',
                transition: 'all 0.12s ease',
              }}
            >
              {/* Icon */}
              <span
                className="shrink-0 overflow-hidden flex items-center justify-center"
                style={{ width: 16, height: 16 }}
              >
                {skill.img ? (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    draggable={false}
                    className="w-full h-full object-contain"
                    style={skill.imgStyle}
                  />
                ) : (
                  SVG_ICONS[skill.name]
                )}
              </span>
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
