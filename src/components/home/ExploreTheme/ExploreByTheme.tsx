import ExploreThemeCard from './ExploreThemeCard'
import { exploreThemes } from '../../../data/exploreThemes'

function ExploreByTheme() {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-10 text-xl font-bold">
          Explore By Theme
        </h2>

        <div className="flex flex-wrap gap-8">
          {exploreThemes.map((theme) => (
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