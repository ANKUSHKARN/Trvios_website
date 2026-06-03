import EventCard from "./../Events/EventCard";
import { eventsData } from "../../../data/events";

const Events = () => {
  return (
    <section className="px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold mb-10">
          Events
        </h2>

        <div className="flex flex-col gap-8">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;