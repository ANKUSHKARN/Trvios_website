type EventCardProps = {
  title: string;
  location: string;
  image: string;
  months: string[];
};

const EventCard = ({
  title,
  location,
  image,
  months,
}: EventCardProps) => {
  return (
    <div
      className="
        group
        relative
        h-[260px]
        w-[300px]
        shrink-0
        overflow-hidden
        rounded-[24px]
        shadow-md
        cursor-pointer

        sm:h-[280px]
        sm:w-[340px]

        md:h-[180px]
        md:w-full
        md:max-w-[340px]
        md:rounded-[22px]
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/90
          via-black/40
          to-transparent

          md:bg-gradient-to-r
          md:from-black/95
          md:via-black/70
          md:to-black/20
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          z-10

          md:relative
          md:flex
          md:h-full
          md:w-[70%]
          md:flex-col
          md:justify-center
          md:p-4
        "
      >
        <div className="mb-2 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 shrink-0" />

          <p
            className="
              text-sm
              font-medium
              text-white

              md:text-[11px]
            "
          >
            {location}
          </p>
        </div>

        <h2
          className="
            mb-3
            text-2xl
            font-black
            leading-tight
            text-white

            sm:text-3xl

            md:text-[18px]
            md:mb-2
          "
        >
          {title}
        </h2>

        <div className="flex flex-wrap gap-2">
          {months.slice(0, 2).map((month) => (
            <span
              key={month}
              className="
                rounded-full
                border
                border-yellow-400/40
                bg-yellow-500/10
                px-3
                py-1
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-yellow-300
                backdrop-blur-sm

                md:px-2
                md:py-0.5
                md:text-[9px]
              "
            >
              {month}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Explore Strip */}
      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          hidden
          w-10
          select-none
          border-l
          border-white/10
          py-2

          md:flex
          md:flex-col
          md:items-center
          md:justify-center
        "
      >
        <span className="mb-1 text-[10px] font-bold text-white/40">
          ↑
        </span>

        <div className="flex flex-col items-center gap-1">
          {"Explore".split("").map((letter, index) => (
            <span
              key={index}
              className="
                text-[10px]
                font-black
                uppercase
                tracking-widest
                text-white/40
              "
            >
              {letter}
            </span>
          ))}
        </div>

        <span className="mt-1 text-[10px] font-bold text-white/40">
          ↓
        </span>
      </div>
    </div>
  );
};

export default EventCard;