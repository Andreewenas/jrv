import { useId } from "react";

// Fungsi utilitas untuk menggabungkan kelas CSS
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Tipe Props untuk GridPattern
interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  centerOpacity?: number; // New prop for center opacity
  edgeOpacity?: number;   // New prop for edge opacity
  [key: string]: unknown;
}

// Komponen GridPattern
export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  centerOpacity = 1, // Default fully opaque
  edgeOpacity = 0,   // Default fully transparent
  className,
  ...props
}: GridPatternProps) {
  const id = useId(); // ID unik untuk pattern

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-800 stroke-gray-300/75",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${id})`}
        style={{
          maskImage: `linear-gradient(to bottom, 
          rgba(255, 255, 255, ${edgeOpacity}) 0%, 
          rgba(255, 255, 255, ${centerOpacity}) 30%, 
          rgba(255, 255, 255, ${centerOpacity}) 70%, 
          rgba(255, 255, 255, ${edgeOpacity}) 100%)`,
        }}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
