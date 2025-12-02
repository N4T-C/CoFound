
import React from 'react';

// --- CARD COMPONENT ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", noPadding = false, onClick, style, hoverable = false }) => (
  <div 
    onClick={onClick}
    className={`
      bg-white dark:bg-cofound-darkCard 
      rounded-2xl border border-cofound-grey/60 dark:border-white/5 
      shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none 
      ${hoverable ? 'hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 dark:hover:border-cofound-blue/30 cursor-pointer' : ''}
      transition-all duration-300 ease-out overflow-hidden 
      ${noPadding ? '' : 'p-5 md:p-6'} 
      ${className}
    `}
    style={style}
  >
    {children}
  </div>
);

// --- CHIP COMPONENT ---
interface ChipProps {
  label: string;
  color?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ label, color = "bg-cofound-grey/50 text-cofound-textLight dark:bg-white/5 dark:text-cofound-textDark/80", size = 'md', className = "" }) => (
  <span className={`
    inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-wider 
    ${color} 
    ${size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-[11px]'}
    ${className}
  `}>
    {label}
  </span>
);

// --- AVATAR COMPONENT ---
interface AvatarProps {
  initials: string;
  size?: 'xs'|'sm'|'md'|'lg'|'xl';
  color?: string;
  className?: string;
  image?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, size = "md", color = "bg-gradient-to-br from-cofound-blue to-cofound-darkBlue", className = "", image }) => {
  const sizes = { 
    xs: "w-6 h-6 text-[9px]",
    sm: "w-8 h-8 text-[10px]", 
    md: "w-10 h-10 text-xs", 
    lg: "w-14 h-14 text-base", 
    xl: "w-20 h-20 text-xl" 
  };
  
  return (
    <div className={`${sizes[size]} ${color} ${className} shrink-0 text-white rounded-full flex items-center justify-center font-bold font-mono shadow-sm border border-white/20 relative overflow-hidden ring-1 ring-black/5 dark:ring-white/10`}>
      {image ? (
        <img src={image} alt={initials} className="w-full h-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
};

// --- BUTTON COMPONENT ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className = '', fullWidth = false, ...props }) => {
  const variants = {
    primary: "bg-cofound-blue text-white hover:bg-cofound-darkBlue shadow-md shadow-cofound-blue/20 dark:shadow-none border border-transparent",
    secondary: "bg-blue-50 text-cofound-blue hover:bg-blue-100 dark:bg-white/5 dark:text-cofound-sky dark:hover:bg-white/10 border border-transparent",
    accent: "bg-cofound-darkBlue text-white hover:bg-cofound-blue shadow-lg shadow-blue-900/20 border border-transparent dark:bg-cofound-blue dark:hover:bg-cofound-blue/90",
    ghost: "bg-transparent text-cofound-textLight dark:text-cofound-textDark/70 hover:bg-cofound-grey/50 dark:hover:bg-white/5 hover:text-cofound-text dark:hover:text-white border border-transparent",
    outline: "bg-transparent border border-cofound-grey dark:border-white/15 text-cofound-text dark:text-white hover:border-cofound-blue hover:text-cofound-blue dark:hover:border-cofound-sky dark:hover:text-cofound-sky"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-8 py-3.5 text-base rounded-xl gap-2.5"
  };

  return (
    <button 
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] 
        flex items-center justify-center
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cofound-blue/60 dark:focus:ring-offset-cofound-darkBg
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// --- SKELETON LOADER ---
interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, variant = 'rect' }) => (
  <div className={`animate-pulse bg-cofound-grey/60 dark:bg-white/5 ${variant === 'circle' ? 'rounded-full' : 'rounded-lg'} ${className}`}></div>
);
