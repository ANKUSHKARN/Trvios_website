type StateCardProps = {
  title: string;
  image: string;
};

const StateCard = ({
  title,
  image,
}: StateCardProps) => {
  return (
    <div
      className="
        group
        relative
        h-[260px]
        w-[180px]
        shrink-0
        overflow-hidden
        rounded-[24px]
        cursor-pointer

        sm:h-[320px]
        sm:w-[220px]

        md:h-[360px]
        md:w-[280px]
        md:rounded-[28px]
      "
    >
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 z-10 md:bottom-5 md:left-5 md:right-5">
        <h3
          className="
            text-lg
            font-bold
            text-white
            leading-tight

            md:text-3xl
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default StateCard;