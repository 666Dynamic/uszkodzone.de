import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'UszkodzoneZNiemiec.pl - Samochody powypadkowe z Niemiec'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #111827, #000000)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    padding: '40px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m5.25 8.069 2.83-2.827 14.134 14.15-2.83 2.827zM9.486 3.827 12.314.998l5.657 5.656-2.828 2.83zM.999 12.315l2.828-2.829 5.657 5.657-2.828 2.828zM1 21h12v2H1z" fill="#DC2626" />
                        </svg>
                        <h1 style={{ fontSize: '72px', fontWeight: 'bold', marginLeft: '24px', letterSpacing: '-0.05em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: '#ffffff' }}>Uszkodzone</span>
                            <span style={{ color: '#DC2626' }}>ZNiemiec</span>
                            <span style={{ color: '#6B7280' }}>.pl</span>
                        </h1>
                    </div>

                    <h2 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', color: '#F3F4F6', maxWidth: '850px', marginBottom: '24px' }}>
                        Aukcje powypadkowe bezpośrednio z niemieckich ubezpieczalni
                    </h2>

                    <p style={{ fontSize: '32px', color: '#9CA3AF', textAlign: 'center', maxWidth: '850px' }}>
                        Niemieckie giełdy &quot;Restwertbörsen&quot;. Ponad 4500 pojazdów dziennie. Licytacje kopertowe, pełne raporty.
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
