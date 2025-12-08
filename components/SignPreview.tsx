import React from 'react';
import { SignData, Config, Category } from '../types';

interface SignPreviewProps {
  category: Category;
  sign: SignData;
  config: Config;
}

const SignPreview: React.FC<SignPreviewProps> = ({ category, sign, config }) => {
  
  const getColors = () => {
    // Specific Override for Emergency Exit (Green)
    if (sign.name === '비상구') {
      // outerBorder set to Green to create the green rim outside the white inner border
      return { bg: '#009051', border: '#FFFFFF', text: '#FFFFFF', iconColor: '#FFFFFF', outerBorder: '#009051' };
    }
    
    switch(category) {
      case 'warning': return { bg: '#F4D03F', border: '#212121', text: '#212121', iconColor: '#212121', outerBorder: '#F4D03F' }; // ISO Yellow
      case 'prohibition': return { bg: '#FFFFFF', border: '#CF000F', text: '#212121', iconColor: '#212121', outerBorder: '#CF000F' }; // ISO Red
      case 'information': return { bg: '#0055A4', border: '#FFFFFF', text: '#FFFFFF', iconColor: '#FFFFFF', outerBorder: '#0055A4' }; // ISO Blue
      default: return { bg: '#FFFFFF', border: '#6C757D', text: '#000', iconColor: '#000', outerBorder: '#6C757D' };
    }
  };

  const colors = getColors();
  const isExit = sign.name === '비상구';
  const isExitRight = isExit && config.exitDirection === 'right' && config.direction === 'horizontal';
  
  // Calculate radii for concentric corners
  const outerRadius = config.cornerStyle === 'rounded' ? 24 : 0; // 1.5rem approx 24px
  const innerRadius = Math.max(0, outerRadius - config.borderWidth);

  // Render the graphical part of the sign
  const renderIconArea = (width: number) => {
    const isProhibition = category === 'prohibition';
    const isWarning = category === 'warning';

    if (isExit) {
        return <div className="text-white scale-150 transform transition-transform">{sign.icon}</div>;
    }

    if (isProhibition) {
       // ISO 7010 Prohibition Shape: Circle with slash overlaid on icon
      return (
        <div className="relative flex items-center justify-center" style={{ width, height: width }}>
           <svg viewBox="0 0 100 100" className="w-full h-full absolute z-0">
             <circle cx="50" cy="50" r="45" fill="white" />
           </svg>
           <div className="z-10 scale-125 transform transition-transform" style={{ color: '#212121' }}>{sign.icon}</div>
           <svg viewBox="0 0 100 100" className="w-full h-full absolute z-20 pointer-events-none">
             <circle cx="50" cy="50" r="40" fill="none" stroke="#CF000F" strokeWidth="10" />
             <line x1="18" y1="18" x2="82" y2="82" stroke="#CF000F" strokeWidth="10" />
           </svg>
        </div>
      );
    }

    if (isWarning) {
      // ISO 7010 Warning Shape: Triangle
      return (
        <div className="relative flex items-center justify-center" style={{ width, height: width }}>
           <svg viewBox="0 0 100 100" className="w-full h-full absolute z-0">
             <path d="M50 5 L95 90 L5 90 Z" fill="#F4D03F" stroke="#212121" strokeWidth="2" strokeLinejoin="round" />
           </svg>
           <div className="z-10 mb-[-15%] scale-90 transform transition-transform" style={{ color: '#212121' }}>{sign.icon}</div>
        </div>
      );
    }
    
    // Info / Mandatory
    return (
      <div className="relative flex items-center justify-center" style={{ width, height: width }}>
        <div className="transform scale-150 transition-transform" style={{ color: colors.iconColor }}>{sign.icon}</div>
      </div>
    );
  };

  return (
    <div 
      className={`relative shadow-2xl transition-all duration-300 transform hover:scale-[1.01]`}
      style={{
        backgroundColor: isExit ? colors.bg : '#FFFFFF',
        borderRadius: `${outerRadius}px`, 
        border: `${config.borderWidth}px solid ${colors.outerBorder}`,
      }}
    >
      <div 
        style={{
          border: isExit ? `${config.whiteBorderWidth}px solid #FFFFFF` : 'none',
          borderRadius: isExit ? `${innerRadius}px` : '0',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <div 
          className="flex items-center justify-center transition-all duration-300 w-full"
          style={{
            flexDirection: config.direction === 'vertical' ? 'column' : (isExitRight ? 'row-reverse' : 'row'),
            padding: `${config.contentToBorderPadding}px`,
            gap: `${config.iconToTextGap}px`,
            minWidth: config.direction === 'horizontal' ? '520px' : '320px', 
          }}
        >
          {/* Icon Area */}
          <div className="flex-shrink-0">
              {isExit ? (
                <div 
                  className="flex items-center text-white"
                  style={{ gap: `${config.arrowToIconGap}px` }}
                >
                  {config.exitDirection === 'left' && <span className="text-7xl font-black leading-none pb-2">←</span>}
                  {renderIconArea(120)}
                  {config.exitDirection === 'right' && <span className="text-7xl font-black leading-none pb-2">→</span>}
                </div>
              ) : (
                renderIconArea(150)
              )}
          </div>

          {/* Text Area */}
          <div className="flex flex-col items-center justify-center text-center">
              <h2 
                className="font-black whitespace-nowrap leading-none tracking-tight"
                style={{ 
                    fontSize: '4rem', 
                    color: colors.text,
                    marginBottom: config.additionalLanguages.length > 0 ? `${config.textGap}px` : '0'
                }}
              >
                {sign[config.mainLanguage]}
              </h2>
              
              {/* Sub Languages */}
              {config.additionalLanguages.length > 0 && (
                <div 
                  className="flex flex-col w-full" 
                  style={{ gap: `${config.textGap}px` }} 
                >
                    {config.additionalLanguages.map(lang => (
                      <div 
                        key={lang} 
                        className="font-light text-2xl leading-none tracking-wide opacity-95" 
                        style={{ color: colors.text }}
                      >
                          {sign[lang]}
                      </div>
                    ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPreview;
