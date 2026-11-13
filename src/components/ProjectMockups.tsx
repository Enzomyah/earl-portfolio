import React from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const DashboardMockup: React.FC<ProjectImageProps> = ({ 
  src = "/projects/supplychain-inventory.png", 
  alt = "Supply Chain Management System - Branch Inventory and POS Dashboard" 
}) => {
  return (
    <div className="w-full h-full min-h-[300px] xl:min-h-[350px] bg-[#070B14] rounded-2xl border border-[#1C2844] overflow-hidden flex flex-col p-3 xl:p-3.5 shadow-inner relative group select-none">
      {/* Window Controls */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#141E34] mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-[#0D1527] border border-[#172239] text-[10px] font-mono text-slate-400">
          <span className="text-indigo-400">https://</span>
          <span>omnichain-inventory.local</span>
        </div>
        <div className="w-12 h-2 bg-[#172238] rounded-full hidden sm:block" />
      </div>

      {/* Main screenshot content */}
      <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-[#0A0F1D] border border-[#172239]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Subtle dark gradient overlay at bottom for smooth blending */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0E1526]/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export const MobileMockup: React.FC<ProjectImageProps & { variant?: 'gym' | 'nutri' }> = ({ 
  src, 
  alt, 
  variant = 'gym' 
}) => {
  return (
    <div className="w-full h-52 xl:h-56 bg-[#070B14] rounded-xl border border-[#1C2844] overflow-hidden flex items-center justify-center p-2 relative group select-none">
      {/* Ambient background glow */}
      <div className={`absolute w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
        variant === 'gym' 
          ? 'bg-rose-600/10 group-hover:bg-rose-600/20' 
          : 'bg-emerald-600/10 group-hover:bg-emerald-600/20'
      }`} />

      {/* Mobile Phone Container */}
      <div className="relative h-[185px] xl:h-[200px] aspect-[9/19] bg-[#0A0E1A] rounded-[20px] border-2 border-[#1E2C4B] shadow-2xl p-1 flex flex-col justify-between z-10 transition-transform duration-300 group-hover:-translate-y-1">
        {/* Notch / Speaker */}
        <div className="w-10 h-1 bg-[#1A2540] rounded-full mx-auto my-0.5 flex-shrink-0" />

        {/* Screen Image with preserved portrait aspect */}
        <div className="relative flex-1 w-full rounded-[14px] overflow-hidden bg-black">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Home Indicator Bar */}
        <div className="w-8 h-1 bg-slate-600/70 rounded-full mx-auto my-0.5 flex-shrink-0" />
      </div>
    </div>
  );
};

export const DocumentMockup: React.FC<ProjectImageProps> = ({ 
  src = "/projects/great-books.png", 
  alt = "Great Books Digital Literature Portfolio Homepage" 
}) => {
  return (
    <div className="w-full h-52 xl:h-56 bg-[#070B14] rounded-xl border border-[#1C2844] overflow-hidden flex flex-col p-2.5 relative group select-none">
      {/* Mini Browser Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-[#141E34] mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500/80" />
          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-2.5 py-0.5 rounded bg-[#0D1527] border border-[#172239] text-[9px] font-mono text-slate-400 truncate max-w-[160px]">
          enzomyah.github.io/Great-Books
        </div>
        <div className="w-4" />
      </div>

      {/* Screenshot Frame */}
      <div className="relative flex-1 w-full rounded-lg overflow-hidden bg-black border border-[#172239]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Subtle edge highlight */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-lg" />
      </div>
    </div>
  );
};
