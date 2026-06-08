import { Heart } from "lucide-react";

function JourneyCTA() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px] text-left">
        <h2
          className="
            text-5xl
            font-bold
            text-gray-500
            leading-tight

            md:text-7xl
          "
        >
          Start Your
          <br />
          Journey Today!
        </h2>

        <div className="mt-8 flex items-center  gap-2 text-xl font-medium text-gray-500 md:text-3xl">
          <span>Made with</span>

          <Heart
            size={28}
            className="fill-red-500 text-red-500"
          />

          <span>in India</span>
        </div>
      </div>
    </section>
  );
}

export default JourneyCTA;