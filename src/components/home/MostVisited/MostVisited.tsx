import { ChevronRight } from 'lucide-react'
import MostVisitedCard from './MostVisitedCard'
import { mostVisitedData } from '../../../data/mostVisitedData'

function MostVisited() {
  const visiblePlaces = mostVisitedData.slice(0, 6)

  const handleSeeAll = () => {
    console.log('Navigate to most visited page')
  }

  return (
    <section className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-500">
              Discover India
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Most Visited
            </h2>
          </div>

          <button
            onClick={handleSeeAll}
            className="flex items-center gap-1 text-sm font-medium hover:opacity-70 md:text-lg"
          >
            See all
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {visiblePlaces.map((place) => (
            <MostVisitedCard
              key={place.id}
              image={place.image}
              title={place.title}
              location={place.location}
              duration={place.duration}
              rating={place.rating}
              oldPrice={place.oldPrice}
              newPrice={place.newPrice}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default MostVisited