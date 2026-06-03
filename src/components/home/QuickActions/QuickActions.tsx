import QuickActionCard from "./QuickActionCard";
import { quickActions } from "../../../data/quickActions";

const QuickActions = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap gap-6 justify-center">
          {quickActions.map((action) => (
            <QuickActionCard
              key={action.id}
              title={action.title}
              icon={action.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;