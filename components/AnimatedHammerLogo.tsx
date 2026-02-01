import { MdGavel } from 'react-icons/md'

interface AnimatedHammerLogoProps {
  textColor?: string
  accentColor?: string
}

export default function AnimatedHammerLogo({ textColor = 'text-primary-600', accentColor = 'text-gray-900' }: AnimatedHammerLogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Hammer with German Flag Colors */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: '32px', height: '32px' }}
      >
        <div className="relative w-full h-full">
          <MdGavel className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)', color: '#000000' }} />
          <MdGavel className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(0 33%, 100% 33%, 100% 66%, 0 66%)', color: '#DC2626' }} />
          <MdGavel className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(0 66%, 100% 66%, 100% 100%, 0 100%)', color: '#FBBF24' }} />
        </div>
      </div>

      {/* Text */}
      <span className="text-2xl font-bold flex items-center" style={{ lineHeight: '32px' }}>
        <span className={textColor}>uszkodzone</span>
        <span className={accentColor}>.de</span>
      </span>
    </div>
  )
}
