import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Sales (₹)',
          data: Object.values(data),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          fill: true
        }]
      },
      options: { responsive: true }
    });
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default SalesChart;