import StateCard from "./../ExploreState/StateCard";
import { statesData } from "../../../data/states";

const ExploreStates = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold mb-10">
          explore states
        </h2>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {statesData.map((state) => (
            <StateCard
              key={state.id}
              title={state.title}
              image={state.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreStates;