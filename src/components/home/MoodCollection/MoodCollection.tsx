import MoodCard from './MoodCard'
import { moodCollectionData } from '../../../data/moodCollectionData'

function MoodCollection() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[1700px]">

        <h2 className="mb-16 text-center text-5xl font-bold text-black">
          Mood Collection
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {moodCollectionData.map((item) => (
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