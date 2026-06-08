import { ChevronRight } from 'lucide-react'
import ExploreThemeCard from './ExploreThemeCard'
import { exploreThemes } from '../../../data/exploreThemes'

function ExploreByTheme() {
  const visibleThemes = exploreThemes.slice(0, 6)

  const handleSeeAll = () => {
    console.log('Navigate to themes page')
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
              Explore By Theme
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

        <div className="flex gap-4 overflow-x-auto pb-4 md:gap-8">
          {visibleThemes.map((theme) => (
            <ExploreThemeCard
              key={theme.id}
              image={theme.image}
              title={theme.title}
              description={theme.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExploreByTheme