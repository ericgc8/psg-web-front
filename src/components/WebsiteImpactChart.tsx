import { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-scroll';
import {Chart} from 'chart.js';
import {ChartOptions} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WebsiteImpactChart = () => {
  const chartRef = useRef<Chart<"bar", number[], string> | null>(null);

  const revenueData = {
    labels: ['Generic Website', 'Pro Service Growth Sales-Driven Website'],
    datasets: [
      {
        label: 'Monthly Revenue ($)',
        data: [3000, 8400],
        backgroundColor: ['rgba(255, 179, 217, 0.8)', 'rgba(0, 255, 255, 0.8)'],
        borderColor: ['#FF1493', '#00FFFF'],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            family: "'Orbitron', sans-serif",
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Monthly Revenue Comparison for Beauty Professionals',
        color: 'white',
        font: {
          family: "'Yerk', sans-serif",
          size: 20
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monthly Revenue ($)',
          color: 'white',
          font: {
            family: "'Orbitron', sans-serif",
            size: 14
          }
        },
        ticks: {
          color: 'white',
          font: {
            family: "'Orbitron', sans-serif",
            size: 12
          }
        }
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            family: "'Orbitron', sans-serif",
            size: 12
          }
        }
      }
    },
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (chartRef.current) {
        chartRef.current.update();
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  });

  return (
    <section className="website-impact-section py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center y2k-gradient-text">
          Supercharge Your Beauty Biz 🚀
        </h2>
        <div className="y2k-container p-6" style={{ height: '400px' }}>
          <Bar ref={chartRef} data={revenueData} options={options} />
        </div>
        <div className="mt-8 text-center text-white space-y-4">
          <p className="text-xl">
            Slay the competition with a website that works as hard as you do! 💅
          </p>
          <p className="text-lg">
            Beauty professionals with our sales-driven websites achieve <span className="text-neon-pink font-bold">2.8 times higher monthly revenue</span> compared to those with generic websites.
          </p>
          <p className="text-lg">
            Don't leave money on the table. It's time to level up your online game!
          </p>
          <Link 
            to="pricing" 
            smooth={true} 
            offset={-70} 
            duration={500}
          >
            <button className="y2k-button text-xl py-3 px-8 mt-4">
              Boost My Revenue Now! 💰
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebsiteImpactChart;
