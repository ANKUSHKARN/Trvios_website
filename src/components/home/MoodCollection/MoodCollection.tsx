import { ChevronRight } from 'lucide-react'
import MoodCard from './MoodCard'
import { moodCollectionData } from '../../../data/moodCollectionData'

function MoodCollection() {
  const visibleMoods = moodCollectionData.slice(0, 6)

  const handleSeeAll = () => {
    console.log('Navigate to mood collection page')
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
              Mood Collection
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
          {visibleMoods.map((item) => (
            <MoodCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default MoodCollection