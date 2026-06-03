type CityCardProps = {
  image: string
  city: string
  destinations: number
  index: number
}

function CityCard({
  image,
  city,
  destinations,
  index,
}: CityCardProps) {
  return (
    <div className="group relative h-[280px] sm:h-[320px] md:h-[340px] w-full max-w-[280px] overflow-hidden rounded-[20px] md:rounded-[28px] cursor-pointer mx-auto shadow-md">

      <img
        src={image}
        alt={city}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      <div className="absolute right-3 top-3 flex h-[28px] w-[40px] md:h-[34px] md:w-[48px] items-center justify-center rounded-[8px] md:rounded-[12px] border border-white/20 bg-white/15 backdrop-blur-md">
        <span className="text-xs md:text-sm font-semibold text-white">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="mb-1.5 text-[20px] md:text-[24px] font-bold text-white leading-tight tracking-tight">
          {city}
        </h3>

        <div className="flex flex-row items-center justify-between gap-1">

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
            <p className="text-[11px] md:text-[13px] text-white/90 font-medium whitespace-nowrap">
              {destinations} places
            </p>
          </div>

          <button className="rounded-full bg-white px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-[13px] font-bold text-black transition hover:scale-105 active:scale-95 shrink-0">
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default CityCard
