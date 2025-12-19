
import React from 'react';

export const StatsTicker: React.FC = () => {
  const pairs = [
    { name: 'BTC/USD', price: '64,310.20', change: '+2.4%', up: true },
    { name: 'XAU/USD', price: '2,312.45', change: '-0.5%', up: false },
    { name: 'EUR/USD', price: '1.0842', change: '+0.1%', up: true },
    { name: 'NASDAQ', price: '18,245.00', change: '+1.2%', up: true },
    { name: 'GBP/JPY', price: '192.410', change: '-0.3%', up: false },
    { name: 'ETH/USD', price: '3,450.80', change: '+1.8%', up: true },
  ];

  return (
    <div className="bg-black text-white text-[10px] font-bold py-2 border-b border-red-600 overflow-hidden whitespace-nowrap z-50">
      <div className="flex gap-10 animate-[ticker_30s_linear_infinite] w-[200%]">
        {[...pairs, ...pairs].map((pair, idx) => (
          <div key={idx} className="flex items-center gap-2 tracking-widest uppercase">
            <span className="text-slate-400">{pair.name}</span>
            <span>${pair.price}</span>
            <span className={pair.up ? 'text-green-500' : 'text-red-500'}>{pair.change}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
