import HotDealCard from "./../HotDeals/HotDealCard";
import { hotDealsData } from "../../../data/hotDeals";

const HotDeals = () => {
  return (
    <section className="px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold mb-10">
          Hot Deals
        </h2>

        <div className="flex gap-6 overflow-x-auto">
          {hotDealsData.map((deal) => (
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