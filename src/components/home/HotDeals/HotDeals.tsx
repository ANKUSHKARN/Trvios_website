import { ChevronRight } from "lucide-react";
import HotDealCard from "./../HotDeals/HotDealCard";
import { hotDealsData } from "../../../data/hotDeals";

const HotDeals = () => {
  const visibleDeals = hotDealsData.slice(0, 6);

  const handleSeeAll = () => {
    console.log("Navigate to hot deals page");
  };

  return (
    <section className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-500">
              Discover India
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Hot Deals
            </h2>
          </div>

          <button
            onClick={handleSeeAll}
            className="flex items-center gap-1 text-sm font-medium hover:opacity-70 md:text-lg"
          >
            See all
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {visibleDeals.map((deal) => (
            <HotDealCard
              key={deal.id}
              {...deal}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HotDeals;