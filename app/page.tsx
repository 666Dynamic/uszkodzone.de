import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Restwertborsen from '@/components/home/Restwertborsen'
import HowItWorks from '@/components/home/HowItWorks'
import FeaturedCars from '@/components/home/FeaturedCars'
import WhyGermany from '@/components/home/WhyGermany'
import FAQ from '@/components/home/FAQ'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Restwertborsen />
      <HowItWorks />
      <FeaturedCars />
      <WhyGermany />
      <FAQ />
      <FinalCTA />
    </>
  )
}
