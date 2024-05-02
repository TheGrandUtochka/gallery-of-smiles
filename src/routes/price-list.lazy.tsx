import { createLazyFileRoute } from '@tanstack/react-router'
import PricesHeroSection from '../pages/price-list/PricesHeroSection/PricesHeroSection.tsx'

export const Route = createLazyFileRoute('/price-list')({
  component: PriceList
})

function PriceList() {
  return (
      <PricesHeroSection />
  )
}