import React from 'react';

interface RadarChartProps {
  data: {
    category: string;
    value: number;
    maxValue: number;
  }[];
  size?: number;
}

export function RadarChart({ data, size = 300 }: RadarChartProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = (size / 2) * 0.8; // Leave some padding
  const angleStep = (Math.PI * 2) / data.length;

  // Calculate points for the radar chart
  const points = data.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2; // Start from top
    const value = (item.value / item.maxValue) * radius;
    return {
      x: centerX + value * Math.cos(angle),
      y: centerY + value * Math.sin(angle)
    };
  });

  // Create the path string for the radar shape
  const pathData = points
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x},${point.y}`)
    .join(' ') + ' Z';

  // Create background grid lines
  const gridLevels = 5;
  const gridPaths = Array.from({ length: gridLevels }).map((_, level) => {
    const gridPoints = data.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const value = (radius * (level + 1)) / gridLevels;
      return {
        x: centerX + value * Math.cos(angle),
        y: centerY + value * Math.sin(angle)
      };
    });

    return gridPoints
      .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x},${point.y}`)
      .join(' ') + ' Z';
  });

  return (
    <svg width={size} height={size} className="overflow-visible">
      {/* Background grid */}
      {gridPaths.map((path, i) => (
        <path
          key={i}
          d={path}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          opacity={0.5}
        />
      ))}

      {/* Axis lines */}
      {data.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        return (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={centerX + radius * Math.cos(angle)}
            y2={centerY + radius * Math.sin(angle)}
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity={0.5}
          />
        );
      })}

      {/* Data shape */}
      <path
        d={pathData}
        fill="rgba(59, 130, 246, 0.2)"
        stroke="#3b82f6"
        strokeWidth="2"
      />

      {/* Data points */}
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          fill="#3b82f6"
          className="transition-all duration-300 hover:r-6"
        />
      ))}

      {/* Labels */}
      {data.map((item, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const labelRadius = radius + 20;
        return (
          <text
            key={i}
            x={centerX + labelRadius * Math.cos(angle)}
            y={centerY + labelRadius * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm font-medium text-gray-600"
          >
            {item.category}
          </text>
        );
      })}
    </svg>
  );
}