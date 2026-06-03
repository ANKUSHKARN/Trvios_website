import MostVisitedCard from './MostVisitedCard'
import { mostVisitedData } from '../../../data/mostVisitedData'

function MostVisited() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Most Visited
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {mostVisitedData.map((place) => (
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