import CityCard from './cityCard'
import { cities } from '../../../data/exploreByCities'

function ExploreByCities() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Explore by cities
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {cities.map((city, index) => (
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