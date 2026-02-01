'use client'

import React, { useState } from 'react'

const AnimatedHammerLogo = ({ showPreview = false }: { showPreview?: boolean }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <style>{`
      @keyframes hammerStrike {
        0% {
          transform: translateY(0) rotate(0deg);
        }
        40% {
          transform: translateY(-4px) rotate(-10deg);
        }
        70% {
          transform: translateY(12px) rotate(15deg);
        }
        100% {
          transform: translateY(0) rotate(0deg);
        }
      }

      @keyframes lineFlash {
        0%, 70% {
          scaleX: 1;
          opacity: 1;
        }
        75%, 100% {
          scaleX: 1.1;
          opacity: 0.7;
        }
      }

      .hammer-animate {
        animation: hammerStrike 0.6s ease-in-out;
      }

      .line-animate {
        animation: lineFlash 0.6s ease-in-out;
      }
    `}</style>

    <div 
      onMouseEnter={() => setIsHovering(true)}
      className="inline-flex items-center gap-2 cursor-pointer"
    >
      {/* Animowany młotek */}
      <div className={`relative w-10 h-10 ${isHovering ? 'hammer-animate' : ''}`}>
        {/* Głowica młotka - czarny */}
        <svg viewBox="0 0 24 24" className="w-full h-full absolute top-0 left-0">
          <rect x="8" y="2" width="8" height="6" fill="black" rx="1" />
        </svg>
        
        {/* Głowica - czerwony */}
        <svg viewBox="0 0 24 24" className="w-full h-full absolute top-0 left-0">
          <rect x="7" y="8" width="10" height="4" fill="#ef4444" rx="1" />
        </svg>
        
        {/* Głowica - żółty */}
        <svg viewBox="0 0 24 24" className="w-full h-full absolute top-0 left-0">
          <rect x="6" y="12" width="12" height="4" fill="#f59e0b" rx="1" />
        </svg>

        {/* Trzonek */}
        <svg viewBox="0 0 24 24" className="w-full h-full absolute top-0 left-0">
          <rect x="10" y="16" width="4" height="7" fill="#78350f" rx="1" />
        </svg>
      </div>

      {/* Linia do "klepnięcia" */}
      <div className={`relative h-1 w-6 bg-gray-400 rounded ${isHovering ? 'line-animate' : ''}`} />

      {/* Logo tekst - małe u */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black text-gray-900">
          u<span className="text-gray-400">szkodzone</span>
        </span>
        <span className="text-2xl font-black text-red-600">.de</span>
      </div>
    </div>
  )
}

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Nagłówek */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Licytacyjny Młotek</h1>
          <p className="text-gray-600 text-lg">Najjedź na logo żeby zobaczyć animację</p>
        </div>

        {/* Główny podgląd */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 text-center mb-16">
          <div className="flex justify-center mb-12">
            <AnimatedHammerLogo />
          </div>
          <p className="text-gray-500 text-sm">👆 Spróbuj najechać myszą</p>
        </div>

        {/* Warianty w nagłówku */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <h2 className="text-gray-700 font-bold mb-8 text-center">Podgląd w Headerze</h2>
          
          <div className="border-b pb-8 mb-8">
            <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">Mały rozmiar (nagłówek strony)</p>
            <div className="bg-gray-50 p-6 rounded-xl flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                    <rect x="8" y="2" width="8" height="6" fill="black" rx="1" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                    <rect x="7" y="8" width="10" height="4" fill="#ef4444" rx="1" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                    <rect x="6" y="12" width="12" height="4" fill="#f59e0b" rx="1" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                    <rect x="10" y="16" width="4" height="7" fill="#78350f" rx="1" />
                  </svg>
                </div>
                <span className="font-bold text-gray-900">
                  u<span className="text-gray-500">szkodzone</span>.de
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">Duży rozmiar (hero section)</p>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-xl flex items-center justify-center">
              <div className="relative w-16 h-16 mr-4">
                <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                  <rect x="8" y="2" width="8" height="6" fill="black" rx="1" />
                </svg>
                <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                  <rect x="7" y="8" width="10" height="4" fill="#ef4444" rx="1" />
                </svg>
                <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                  <rect x="6" y="12" width="12" height="4" fill="#f59e0b" rx="1" />
                </svg>
                <svg viewBox="0 0 24 24" className="w-full h-full absolute">
                  <rect x="10" y="16" width="4" height="7" fill="#78350f" rx="1" />
                </svg>
              </div>
              <div className="text-4xl font-black text-gray-900">
                u<span className="text-gray-400">szkodzone</span><span className="text-red-600">.de</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <p className="text-red-900 font-medium">✅ Gotowe do implementacji w Headerze</p>
          <p className="text-red-700 text-sm mt-2">Animacja działa przy najechaniu myszą na logo</p>
        </div>
      </div>
    </div>
  )
}
