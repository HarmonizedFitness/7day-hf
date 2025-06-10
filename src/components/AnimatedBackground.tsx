
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useMotionValue, motion, useTransform, useScroll } from "framer-motion";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  type: "circle" | "square" | "triangle";
}

interface AnimatedBackgroundProps {
  className?: string;
  density?: number;
  minSize?: number;
  maxSize?: number;
  children?: React.ReactNode;
  colors?: string[];
  disableParallax?: boolean;
  variant?: "auth" | "home" | "workout" | "default";
}

const generateShapes = (
  width: number, 
  height: number, 
  density: number, 
  minSize: number,
  maxSize: number,
  colors: string[]
): Shape[] => {
  const area = width * height;
  const shapeCount = Math.max(2, Math.min(8, Math.floor(area / 3000 * density)));
  
  return Array.from({ length: shapeCount }).map((_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: minSize + Math.random() * (maxSize - minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 0.1 + Math.random() * 0.3,
    opacity: 0.01 + Math.random() * 0.04,
    type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
  }));
};

const ShapeComponent: React.FC<{ shape: Shape; parallaxY: any; disableParallax: boolean }> = React.memo(({ 
  shape, 
  parallaxY, 
  disableParallax 
}) => {
  const y = useTransform(
    parallaxY,
    [0, 1],
    [0, disableParallax ? 0 : -shape.speed * 30]
  );
  
  const renderShape = () => {
    const shapeProps = {
      fill: shape.color,
      opacity: shape.opacity,
    };

    switch (shape.type) {
      case "circle":
        return (
          <circle
            cx={shape.size / 2}
            cy={shape.size / 2}
            r={shape.size / 2}
            {...shapeProps}
          />
        );
      case "square":
        return (
          <rect
            width={shape.size}
            height={shape.size}
            {...shapeProps}
          />
        );
      case "triangle":
        const points = `${shape.size / 2},0 ${shape.size},${shape.size} 0,${shape.size}`;
        return (
          <polygon
            points={points}
            {...shapeProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        left: shape.x,
        top: shape.y,
        y,
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      <svg
        width={shape.size}
        height={shape.size}
        style={{ display: "block" }}
      >
        {renderShape()}
      </svg>
    </motion.div>
  );
});

ShapeComponent.displayName = "ShapeComponent";

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  density = 0.05,
  minSize = 12,
  maxSize = 60,
  children,
  colors = ["#2d3033", "#D35400", "#F5F5F5"],
  disableParallax = false,
  variant = "default",
}) => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const scrollProgress = useTransform(scrollY, [0, 1000], [0, 1]);
  
  const variantStyles = useMemo(() => ({
    auth: {
      background: "bg-gradient-to-b from-[#E9F2FE] via-[#D3E4FD] to-[#E9F2FE]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.02,
      disableParallax: true,
    },
    home: {
      background: "bg-gradient-to-b from-[#D3E4FD] via-[#E9F2FE] to-[#D3E4FD]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.04,
    },
    workout: {
      background: "bg-gradient-to-b from-[#E9F2FE] to-[#D3E4FD]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.03,
    },
    default: {
      background: "bg-gradient-to-b from-[#D3E4FD] via-[#E9F2FE] to-[#D3E4FD]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.04,
    }
  }), []);

  const handleResize = useCallback(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const variantConfig = variantStyles[variant];
    const shapesData = generateShapes(
      dimensions.width, 
      dimensions.height, 
      variantConfig.density || density, 
      minSize, 
      maxSize, 
      variantConfig.colors || colors
    );
    setShapes(shapesData);
  }, [dimensions, density, minSize, maxSize, colors, variant, variantStyles]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    handleResize();
    
    let timeoutId: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };
    
    window.addEventListener('resize', throttledResize);
    
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  const variantConfig = variantStyles[variant];
  const shouldDisableParallax = disableParallax || variantConfig.disableParallax;
  
  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${variantConfig.background} ${className}`}
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {shapes.map((shape) => (
          <ShapeComponent 
            key={shape.id} 
            shape={shape} 
            parallaxY={scrollProgress}
            disableParallax={shouldDisableParallax}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
