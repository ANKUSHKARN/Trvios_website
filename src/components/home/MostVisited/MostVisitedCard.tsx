type MostVisitedCardProps = {
  image: string
  title: string
  location: string
  duration: string
  rating: number
  oldPrice: number
  newPrice: number
}

function MostVisitedCard({
  image,
  title,
  location,
  duration,
  rating,
  oldPrice,
  newPrice,
}: MostVisitedCardProps) {
  return (
    <div
      className="
        group
        relative
        h-[300px]
        w-[260px]
        shrink-0
        overflow-hidden
        rounded-[24px]
        shadow-md
        cursor-pointer

        sm:h-[320px]
        sm:w-[300px]

        md:h-[340px]
        md:w-[280px]
        md:rounded-[28px]
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Top Badges */}
      <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
        <div className="rounded-full border border-white/20 bg-black/30 px-3 py-1 backdrop-blur-md">
          <span className="text-xs font-medium text-white">
            🕒 {duration}
          </span>
        </div>

        <div className="rounded-full border border-white/20 bg-black/30 px-3 py-1 backdrop-blur-md">
          <span className="text-xs font-semibold text-white">
            ⭐ {rating}
          </span>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight md:text-xl">
          {title}
        </h3>

        <div className="mb-3 flex items-center gap-1 text-white/80">
          <span>📍</span>

          <p className="truncate text-sm">
            {location}
          </p>
        </div>

        <div className="mb-3 border-t border-white/20" />

        <div className="flex items-end justify-between">
          <div>
            {/* Hide old price on mobile */}
            <p className="hidden text-xs text-white/60 line-through md:block">
              ₹{oldPrice.toLocaleString()}
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black">
                ₹{newPrice.toLocaleString()}
              </span>

              <span className="hidden text-xs text-white/70 md:inline">
                / person
              </span>
            </div>
          </div>

          <button
            className="
              rounded-full
              bg-white
              px-4
              py-2
              text-xs
              font-bold
              text-black
              transition
              hover:scale-105
              active:scale-95
            "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default MostVisitedCard