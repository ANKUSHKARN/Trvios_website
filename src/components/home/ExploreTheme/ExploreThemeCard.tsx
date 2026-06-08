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
    <div
      className="
        group
        relative
        h-[220px]
        w-[140px]
        shrink-0
        overflow-hidden
        rounded-[20px]
        shadow-md
        cursor-pointer

        sm:h-[280px]
        sm:w-[180px]

        md:h-[340px]
        md:w-[280px]
        md:rounded-[28px]
      "
    >
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      <div className="absolute bottom-3 left-3 right-3 text-white md:bottom-5 md:left-5 md:right-5">

        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-400" />

          <h3
            className="
              text-sm
              font-bold
              leading-tight

              md:text-xl
            "
          >
            {title}
          </h3>
        </div>

        <p
          className="
            text-[10px]
            leading-4
            text-white/80
            line-clamp-3

            md:text-sm
            md:leading-6
          "
        >
          {description}
        </p>

      </div>
    </div>
  )
}

export default ExploreThemeCard