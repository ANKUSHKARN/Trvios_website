import { ChevronRight } from "lucide-react";
import EventCard from "./../Events/EventCard";
import { eventsData } from "../../../data/events";

const Events = () => {
  const visibleEvents = eventsData.slice(0, 6);

  const handleSeeAll = () => {
    console.log("Navigate to events page");
  };

  return (
    <section className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-500">
              Pick Up Where You Left
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Events
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

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4">
          {visibleEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleSeeAll}
            className="
              rounded-2xl
              border-2
              border-gray-300
              bg-white
              px-8
              py-3
              text-lg
              font-semibold
              transition
              hover:shadow-lg
            "
          >
            View All
          </button>
        </div>

      </div>
    </section>
  );
};

export default Events;