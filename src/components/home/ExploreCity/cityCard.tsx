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
      {/* Background Image */}
      <img
        src={image}
        alt={city}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Index Badge */}
      <div
        className="
          absolute
          right-3
          top-3
          flex
          h-7
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-white/20
          bg-white/15
          backdrop-blur-md

          md:h-9
          md:w-12
        "
      >
        <span className="text-xs font-semibold text-white md:text-sm">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
        <h3
          className="
            mb-2
            text-lg
            font-bold
            leading-tight
            text-white

            md:text-3xl
          "
        >
          {city}
        </h3>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

            <p
              className="
                text-[10px]
                font-medium
                text-white/90

                md:text-[13px]
              "
            >
              {destinations} places
            </p>
          </div>

          <button
            className="
              rounded-full
              bg-white
              px-2.5
              py-1

              text-[10px]
              font-bold
              text-black

              transition
              hover:scale-105
              active:scale-95

              md:px-4
              md:py-2
              md:text-[13px]
            "
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default CityCard