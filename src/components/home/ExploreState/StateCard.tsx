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
      className="relative min-w-[220px] h-[360px] rounded-[28px] overflow-hidden flex items-end"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 p-5">
        <h3 className="text-white text-2xl font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default StateCard;