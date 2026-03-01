import type { Metadata } from 'next'
import DashboardView from '@/components/b2b-dashboard/DashboardView'

export const metadata: Metadata = {
  title: 'Aukcje samochodów powypadkowych z Niemiec | Restwertbörsen | UszkodzoneZNiemiec.pl',
  description: 'Przeglądaj ponad 4500 samochodów powypadkowych dziennie z niemieckich giełd ubezpieczeniowych. Ford, VW, BMW, Audi i inne marki w atrakcyjnych cenach.',
}

export default function AukcjePage() {
  return (
    <div className="pt-20 min-h-screen bg-[#f4f7f6]">
      <DashboardView />
    </div>
  )
}
