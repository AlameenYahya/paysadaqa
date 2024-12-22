// No need for the import statement
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-secondary text-primary py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Masjids Through Donations
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-primary">
          Simplify your donation process with transparency and trust.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
        <Link
  to="/donate"
  className="bg-primary text-tertiary border border-white py-3 px-6 rounded-md hover:bg-white hover:bg-secondary hover:text-tertiary transition"
>
  Donate Now
</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
