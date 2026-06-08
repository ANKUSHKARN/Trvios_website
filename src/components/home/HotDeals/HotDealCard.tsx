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
    <div
      className="
        group
        w-[260px]
        shrink-0
        overflow-hidden
        rounded-[24px]
        bg-white
        shadow-md
        border
        border-gray-100
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        sm:w-[300px]

        md:w-[320px]
      "
    >
      {/* Image */}
      <div className="relative h-[180px] sm:h-[220px] md:h-[240px]">
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

        {/* Discount */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <Tag size={12} className="text-white" />
          <span className="text-xs font-bold text-white">
            {discount}
          </span>
        </div>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
          <Heart
            size={16}
            className="text-violet-500"
          />
        </button>

        {/* Rating */}
        <div className="absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5">
          <Star
            size={12}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="text-xs font-bold text-white">
            {rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="mb-2 text-lg font-bold text-black line-clamp-2">
          {title}
        </h3>

        <div className="mb-4 flex items-center gap-2 text-gray-500">
          <MapPin
            size={14}
            className="text-violet-500"
          />

          <span className="truncate text-sm">
            {location}
          </span>
        </div>

        <div className="mb-4 border-t border-gray-100" />

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-400 line-through">
              {oldPrice}
            </p>

            <div className="flex items-end gap-1">
              <span className="text-2xl font-black text-black">
                {newPrice}
              </span>

              <span className="text-xs text-gray-500">
                / person
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-3 py-2 text-violet-600">
            <Clock3 size={14} />

            <span className="text-xs font-bold">
              {duration}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotDealCard;