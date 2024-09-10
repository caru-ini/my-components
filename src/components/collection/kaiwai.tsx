'use client';
import { useEffect, useState } from 'react';

const numbers = [4, 3, 2, 1, 8, 7, 6, 5];
const barHeight = 10;
const barWidth = 30;
const verticalSpacing = 10;
const horizontalSpacing = 8;
const numRows = 4;
const numCols = Math.ceil(numbers.length / numRows);

const svgWidth = numCols * (barWidth + horizontalSpacing) - horizontalSpacing;
const svgHeight = numRows * (barHeight + verticalSpacing) - verticalSpacing;

export const Kaiwai = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prevCount) => {
        const updatedVisibleCount = (prevCount % numbers.length) + 1;
        return updatedVisibleCount;
      });
    }, 53);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex'>
      <svg width={svgWidth} height={svgHeight} fill='white'>
        {numbers.map((number, index) => {
          const col = Math.floor(index / numRows);
          const row = numRows - 1 - (index % numRows);
          const y = row * (barHeight + verticalSpacing);
          const x = col * (barWidth + horizontalSpacing);
          const isVisible = index < visibleCount;

          return (
            <g key={number} className={isVisible ? 'visible' : 'hidden'}>
              <rect x={x} y={y} height={barHeight} width={barWidth} fill='white' />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
