import { AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { cars } from '../data/cars.js'
import CarCard from './CarCard.jsx'
import ModelFilters from './ModelFilters.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function FeaturedCars({ onDetails }) {
  const [filter, setFilter] = useState('All')

  const visibleCars = useMemo(() => {
    if (filter === 'All') return cars
    return cars.filter((car) => car.category === filter || car.body === filter)
  }, [filter])

  return (
    <section id="models" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Curated range"
          title="Luxury concepts with a purpose for every drive."
          description="Filter the lineup by vehicle character. Each card is data-driven, accessible, and connected to a functional details modal."
        />
        <ModelFilters activeFilter={filter} onChange={setFilter} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleCars.map((car) => (
              <CarCard key={car.id} car={car} onDetails={onDetails} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
