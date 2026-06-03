type ExploreThemeCardProps = {
  image: string
  title: string
  description: string
}

function ExploreThemeCard({
  image,
  title,
  description,
}: ExploreThemeCardProps) {
  return (
    <div className="group relative h-[280px] sm:h-[320px] md:h-[340px] w-full max-w-[280px] overflow-hidden rounded-[20px] md:rounded-[28px] cursor-pointer mx-auto shadow-md">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 shrink-0" />

          <h3 className="text-[16px] md:text-[20px] font-bold leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[22px] text-white/80 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ExploreThemeCard
