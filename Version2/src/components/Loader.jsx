import React from 'react';

const getAsset = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  let base = import.meta.env.BASE_URL || '/';
  if (base === './') base = '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const Loader = ({ fullScreen = true, size = 'md', className = '' }) => {
  // Dimensions based on size prop - decreased circle size & increased logo size
  const sizeClasses = {
    sm: {
      ring: 'w-[52px] h-[52px]',
      logo: 'h-8',
      border: 'p-[2px]',
      padding: 'p-1'
    },
    md: {
      ring: 'w-[66px] h-[66px]',
      logo: 'h-[42px]',
      border: 'p-[3px]',
      padding: 'p-1'
    },
    lg: {
      ring: 'w-20 h-20',
      logo: 'h-12',
      border: 'p-[3.5px]',
      padding: 'p-1.5'
    }
  }[size] || {
    ring: 'w-[66px] h-[66px]',
    logo: 'h-[42px]',
    border: 'p-[3px]',
    padding: 'p-1'
  };

  const loaderContent = (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Pulsing Glow Aura */}
      <div className={`absolute ${sizeClasses.ring} rounded-full blur-sm opacity-70 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse`} />

      {/* Rotating Mixed Red and Blue Gradient Border Ring */}
      <div
        className={`relative ${sizeClasses.ring} ${sizeClasses.border} rounded-full animate-spin bg-[conic-gradient(from_0deg,#ef4444_0%,#f43f5e_25%,#3b82f6_50%,#2563eb_75%,#ef4444_100%)] shadow-[0_0_15px_rgba(239,68,68,0.45),0_0_15px_rgba(59,130,246,0.45)]`}
      >
        {/* Inner cutout mask matching theme background */}
        <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 transition-colors duration-300" />
      </div>

      {/* Centered Upright Navbar SN Logo - Larger Size */}
      <div className={`absolute inset-0 flex items-center justify-center ${sizeClasses.padding}`}>
        <img
          src={getAsset('/logo.png')}
          alt="SN Logo"
          className={`${sizeClasses.logo} w-auto object-contain dark:invert transition-all select-none`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getAsset('/logo.svg');
          }}
        />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md transition-all duration-500">
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
};

export default Loader;
