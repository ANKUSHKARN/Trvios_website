type MoodCardProps = {
  image: string
  title: string
  description: string
}

function MoodCard({
  image,
  title,
  description,
}: MoodCardProps) {
  return (
    <div
      className="
        group
        w-[260px]
        shrink-0
        overflow-hidden
        rounded-[24px]
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-xl
        cursor-pointer

        sm:w-[300px]

        md:w-[280px]
        md:rounded-[28px]
      "
    >
      {/* Image */}
      <div className="h-[180px] overflow-hidden md:h-[140px]">
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
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="
            mb-2
            text-xl
            font-bold
            text-black
            leading-tight

            md:text-[22px]
          "
        >
          {title}
        </h3>

        <p
          className="
            text-sm
            leading-6
            text-[#6B7280]
            line-clamp-3
          "
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default MoodCard