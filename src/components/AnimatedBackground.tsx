
import React, { useEffect, useRef } from "react";
import { useMotionValue, motion, useTransform, useScroll, animate } from "framer-motion";

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
  density?: number; // Number of shapes per 1000px²
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
  const shapeCount = Math.max(5, Math.floor(area / 1000 * density));
  
  return Array.from({ length: shapeCount }).map((_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: minSize + Math.random() * (maxSize - minSize),
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 0.3 + Math.random() * 0.7, // Random speed between 0.3 and 1
    opacity: 0.03 + Math.random() * 0.15, // Random opacity between 0.03 and 0.18
    type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
  }));
};

const ShapeComponent: React.FC<{ shape: Shape; moveY: number }> = ({ shape, moveY }) => {
  const y = useMotionValue(shape.y);
  
  useEffect(() => {
    const yMotion = shape.y - moveY * shape.speed * 5;
    animate(y, yMotion, {
      duration: 0.8,
      ease: "easeOut",
    });
  }, [moveY, shape.speed, shape.y, y]);
  
  const renderShape = () => {
    switch (shape.type) {
      case "circle":
        return (
          <motion.circle
            cx={shape.size / 2}
            cy={shape.size / 2}
            r={shape.size / 2}
            fill={shape.color}
            opacity={shape.opacity}
            style={{ y }}
          />
        );
      case "square":
        return (
          <motion.rect
            width={shape.size}
            height={shape.size}
            fill={shape.color}
            opacity={shape.opacity}
            style={{ y }}
          />
        );
      case "triangle":
        const points = `${shape.size / 2},0 ${shape.size},${shape.size} 0,${shape.size}`;
        return (
          <motion.polygon
            points={points}
            fill={shape.color}
            opacity={shape.opacity}
            style={{ y }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <svg
      width={shape.size}
      height={shape.size}
      style={{
        position: "absolute",
        left: shape.x,
        top: 0,
        pointerEvents: "none",
      }}
    >
      {renderShape()}
    </svg>
  );
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  density = 0.15,
  minSize = 20,
  maxSize = 120,
  children,
  colors = ["#2d3033", "#D35400", "#F5F5F5"],
  disableParallax = false,
  variant = "default",
}) => {
  const [shapes, setShapes] = React.useState<Shape[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const moveY = useTransform(scrollY, [0, 1000], [0, 100]);
  
  const variantStyles = {
    auth: {
      background: "bg-gradient-to-b from-[#E9F2FE] via-[#D3E4FD] to-[#E9F2FE]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.15,
    },
    home: {
      background: "bg-gradient-to-b from-[#D3E4FD] via-[#E9F2FE] to-[#D3E4FD]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.12,
    },
    workout: {
      background: "bg-gradient-to-b from-[#E9F2FE] to-[#D3E4FD]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.1,
    },
    default: {
      background: "bg-gradient-to-b from-[#D3E4FD] via-[#E9F2FE] to-[#D3E4FD]",
      colors: ["#2d3033", "#D35400", "#F5F5F5"],
      density: 0.12,
    }
  };
  
  useEffect(() => {
    const updateShapes = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const variantConfig = variantStyles[variant];
      const shapesData = generateShapes(
        width, 
        height, 
        variantConfig.density || density, 
        minSize, 
        maxSize, 
        variantConfig.colors || colors
      );
      setShapes(shapesData);
    };
    
    updateShapes();
    window.addEventListener('resize', updateShapes);
    
    return () => window.removeEventListener('resize', updateShapes);
  }, [density, minSize, maxSize, colors, variant]);
  
  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${variantStyles[variant].background} ${className}`}
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {shapes.map((shape) => (
          <ShapeComponent 
            key={shape.id} 
            shape={shape} 
            moveY={disableParallax ? 0 : moveY.get()} 
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
