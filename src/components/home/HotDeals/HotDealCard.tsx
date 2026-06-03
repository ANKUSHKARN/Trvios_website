import {
  Heart,
  MapPin,
  Star,
  Tag,
  Clock3,
} from "lucide-react";

type HotDealCardProps = {
  title: string;
  location: string;
  image: string;
  discount: string;
  oldPrice: string;
  newPrice: string;
  duration: string;
  rating: number;
};

const HotDealCard = ({
  title,
  location,
  image,
  discount,
  oldPrice,
  newPrice,
  duration,
  rating,
}: HotDealCardProps) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-md max-w-[280px] w-full mx-auto border border-gray-100 transition-all duration-300 hover:shadow-xl">
      
      <div className="relative h-[125px] sm:h-[135px] w-full shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-0.5">
          <Tag size={10} className="text-white shrink-0" />
          <span className="text-white text-[9px] font-bold whitespace-nowrap">
            {discount}
          </span>
        </div>

        <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-transform">
          <Heart size={12} className="text-violet-500 fill-violet-50" />
        </button>

        <div className="absolute right-2 bottom-2 bg-black/80 rounded-full px-1.5 py-0.5 flex items-center gap-0.5 shadow-sm">
          <Star
            size={10}
            className="fill-yellow-400 text-yellow-400 shrink-0"
          />
          <span className="text-white text-[10px] font-black leading-none">
            {rating}
          </span>
        </div>
      </div>

      <div className="p-3 flex flex-col bg-white">
        <div>
          <h3 className="text-[14px] font-extrabold text-black mb-1 leading-tight tracking-tight truncate">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-gray-500 text-[11px] mb-2.5">
            <div className="bg-violet-50 p-0.5 rounded-full shrink-0">
              <MapPin
                size={10}
                className="text-violet-500"
              />
            </div>
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="border-b border-gray-100 mb-2.5 w-full" />

        <div className="flex justify-between items-center gap-1.5">
          <div className="flex flex-col min-w-0">
            <p className="text-gray-400 text-[9px] line-through leading-none mb-0.5">
              {oldPrice}
            </p>

            <div className="flex items-baseline gap-0.5">
              <h4 className="text-[16px] font-black leading-none text-black tracking-tight">
                {newPrice}
              </h4>
              <span className="text-gray-500 text-[8px] whitespace-nowrap">
                /pers
              </span>
            </div>
          </div>

          <div className="border border-violet-200 bg-violet-50/50 rounded-full px-2 py-1 flex items-center gap-0.5 text-violet-600 shrink-0">
            <Clock3 size={10} className="shrink-0" />
            <span className="font-extrabold text-[9px] whitespace-nowrap">
              {duration}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HotDealCard;
