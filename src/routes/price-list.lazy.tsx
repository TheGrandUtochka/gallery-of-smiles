import { createLazyFileRoute } from '@tanstack/react-router'
import PricesHeroSection from '../pages/price-list/PricesHeroSection/PricesHeroSection.tsx'
// import PricesTable from "../pages/price-list/PricesTable/PricesTable.tsx";

export const Route = createLazyFileRoute('/price-list')({
  component: PriceList
})

function PriceList() {
  return (
      <>
          <PricesHeroSection/>
          <div className='pb-12'/>
          {/*<PricesTable/>*/}
      </>
  )
}