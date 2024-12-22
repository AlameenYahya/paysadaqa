// No need for the import statement
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="container bg-gray-50 min-h-screen min-w-20 py-20">
      <div className="container mx-full px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Welcome to Paysadaqa Donation Platform
        </h1>
       
        <section className="container bg-secondary text-primary py-20 mb-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Masjids Through Donations
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-2 text-primary">
          Simplify your donation process with transparency and trust.
        </p>
        <p className="text-lg md:text-xl mb-8 mt-1 text-tertiary">
          Where Tech Meets Faith.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out flex justify-center gap-4">
          
          <Link
  to="/donate"
  className="bg-primary text-tertiary border border-white py-3 px-6 rounded-md hover:bg-white hover:bg-secondary hover:text-tertiary transition"
>
  Donate Now
</Link>

        </div>
      </div>
    </section>

    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex justify-center mb-4">
       
          
  
            
        <p className="text-tertiary font-semibold hover:scale-105 transition-transform duration-300 ease-in-out bg-primary p-6 rounded-lg shadow-lg text-center mb-5">
        The charity you give will be your shade on the Day of Judgment.
        – Prophet Muhammad (peace be upon him) [Muslim]
        </p>
      </div>
      <div className="flex justify-center mb-4">
       
          
  
            
        <p className="text-tertiary font-semibold hover:scale-105 transition-transform duration-300 ease-in-out bg-primary p-6 rounded-lg shadow-lg text-center mb-5">
        The example of those who spend their wealth in the way of Allah is like a seed of grain that grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills.– Quran 2:261
        </p>
      </div>
      <div className="flex justify-center mb-4">
       
          
  
            
        <p className="text-tertiary font-semibold hover:scale-105 transition-transform duration-300 ease-in-out bg-primary p-6 rounded-lg shadow-lg text-center mb-5">
        When a man dies, his deeds come to an end except for three things: Sadaqah Jariyah (continuous charity), knowledge from which benefit is gained, and a righteous child who prays for him.– Prophet Muhammad (peace be upon him) [Muslim]
        </p>
      </div>
    </div>
    

        {/* Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Icon 1 */}
          <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-4 rounded-full">
                <i className="fas fa-lock fa-2x text-primary"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Secure Donations</h3>
            <p className="text-nursery">
              Your contributions are processed with top-tier security protocols.
            </p>
          </div>

          {/* Icon 2 */}
          <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-4 rounded-full">
                <i className="fas fa-book fa-2x text-primary"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Transparent Records</h3>
            <p className="text-nursery">
              Track all donations with detailed transaction records.
            </p>
          </div>

          {/* Icon 3 */}
          <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white p-6 rounded-lg shadow-lg text-center ">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-4 rounded-full">
                <i className="fas fa-exchange-alt fa-2x text-primary"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Seamless Transfers</h3>
            <p className="text-nursery">
              Quick and hassle-free transfers directly to the Masjids.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
