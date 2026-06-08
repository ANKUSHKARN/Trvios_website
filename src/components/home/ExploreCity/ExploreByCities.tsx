import { ChevronRight } from 'lucide-react'
import CityCard from './cityCard'
import { cities } from '../../../data/exploreByCities'

function ExploreByCities() {
  const visibleCities = cities.slice(0, 3)

  const handleSeeAll = () => {
    console.log('Navigate to cities page')
  }

  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-500">
              Discover India
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Explore Cities
            </h2>
          </div>

          <button
            onClick={handleSeeAll}
            className="flex items-center gap-2 text-lg font-medium hover:opacity-70"
          >
            See all
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex gap-8 overflow-x-auto">
          {visibleCities.map((city, index) => (
            <CityCard
              key={city.id}
              city={city.city}
              destinations={city.destinations}
              image={city.image}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreByCities