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
    <div className="group w-full max-w-[280px] overflow-hidden rounded-[20px] bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer mx-auto">
      
      <div className="h-[125px] sm:h-[135px] md:h-[140px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 md:p-5">
        <h3 className="mb-1.5 text-[20px] md:text-[22px] font-bold text-black leading-tight tracking-tight truncate">
          {title}
        </h3>

        <p className="text-[12px] md:text-[13px] leading-[18px] md:leading-[20px] text-[#6B7280] line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default MoodCard
