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
    <div className="relative h-[160px] sm:h-[170px] md:h-[180px] w-full max-w-[340px] overflow-hidden rounded-[16px] md:rounded-[22px] cursor-pointer mx-auto shadow-md">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-103"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

      <div className="relative z-10 flex flex-col justify-center h-full p-4 w-[75%] sm:w-[70%]">
        
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
          <p className="text-white text-[10px] md:text-[11px] font-medium truncate">
            {location}
          </p>
        </div>

        <h2 className="text-white text-[15px] md:text-[18px] leading-tight font-black mb-2 tracking-tight line-clamp-2">
          {title}
        </h2>

        <div className="flex flex-wrap gap-1">
          {months.slice(0, 2).map((month) => (
            <span
              key={month}
              className="px-2 py-0.5 rounded-full border border-yellow-400/40 bg-yellow-500/10 backdrop-blur-sm text-yellow-300 text-[8px] md:text-[9px] font-bold tracking-wide uppercase whitespace-nowrap"
            >
              {month}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 flex flex-col items-center justify-center w-10 border-l border-white/10 select-none py-2">
        
        <span className="text-[10px] text-white/40 font-bold mb-1">↑</span>
        
        <div className="flex flex-col items-center gap-1">
          {"Explore".split("").map((letter, index) => (
            <span 
              key={index}
              className="inline-block transform rotate-0 origin-center text-[9px] md:text-[10px] tracking-widest text-white/40 uppercase font-black"
            >
              {letter}
            </span>
          ))}
        </div>

        <span className="text-[10px] text-white/40 font-bold mt-1">↓</span>

      </div>
    </div>
  );
};

export default EventCard;
