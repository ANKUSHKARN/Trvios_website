type QuickActionCardProps = {
  title: string;
  icon: React.ElementType;
};

const QuickActionCard = ({
  title,
  icon: Icon,
}: QuickActionCardProps) => {
  return (
    <button
      className="
        bg-white
        rounded-2xl
        border border-gray-200
        w-[110px]
        h-[110px]
        flex
        flex-col
        items-center
        justify-center
        gap-3
        transition-all
        hover:shadow-md
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <div className="relative">
        <div className="absolute w-8 h-8 bg-emerald-100 rounded-full -right-1 top-1" />

        <Icon
          size={34}
          className="relative z-10 text-black"
        />
      </div>

      <span className="text-sm font-medium text-gray-900">
        {title}
      </span>
    </button>
  );
};

export default QuickActionCard;