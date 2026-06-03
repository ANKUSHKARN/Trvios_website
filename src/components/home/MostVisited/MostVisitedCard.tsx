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
    <div className="group relative h-[280px] sm:h-[320px] md:h-[340px] w-full max-w-[280px] overflow-hidden rounded-[20px] md:rounded-[28px] cursor-pointer mx-auto shadow-md">

      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-1">

        <div className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-md border border-white/20">
          <span className="text-[10px] md:text-[11px] font-medium text-white whitespace-nowrap">
            🕒 {duration}
          </span>
        </div>

        <div className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-md border border-white/20">
          <span className="text-[10px] md:text-[11px] font-bold text-white whitespace-nowrap">
            ⭐ {rating}
          </span>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 text-white">
        <h3 className="mb-1 text-[15px] md:text-[17px] font-bold leading-tight tracking-tight truncate">
          {title}
        </h3>

        <div className="mb-2 flex items-center gap-1 text-white/80">
          <span className="text-[11px] md:text-[13px] shrink-0">📍</span>
          <p className="text-[11px] md:text-[13px] truncate">{location}</p>
        </div>

        <div className="border-t border-white/15 mb-2 w-full"></div>

        <div className="flex items-center justify-between gap-2">

          <div className="flex flex-col">
            <p className="text-[10px] md:text-[11px] text-white/60 line-through leading-none mb-0.5">
              ₹{oldPrice.toLocaleString()}
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-[18px] md:text-[22px] font-black leading-none tracking-tight">
                ₹{newPrice.toLocaleString()}
              </span>
              <span className="text-[9px] md:text-[10px] text-white/70 whitespace-nowrap">
                / person
              </span>
            </div>
          </div>
          
          <button className="rounded-full bg-white px-3 py-1.5 text-[10px] md:text-[11px] font-bold text-black transition hover:scale-105 active:scale-95 shrink-0">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default MostVisitedCard
