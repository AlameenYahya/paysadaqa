import  { useState, useEffect } from "react";

interface Mosque {
  id: number;
  name: string;
  address: string;
  image?: string;
}

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const Donate = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [mosques, setMosques] = useState<Mosque[]>([]); // Correct typing
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedMosque, setSelectedMosque] = useState<string>("");
  const [donationAmount, setDonationAmount] = useState<string>("");

  // Fetch mosques from backend
  useEffect(() => {
    const fetchMosques = async () => {
      try {
        const response = await fetch("/api/mosques"); // Replace with your backend URL if needed
        if (!response.ok) {
          throw new Error("Failed to fetch mosques");
        }
        const data: { mosques: Mosque[] } = await response.json(); // Correctly type the response
        setMosques(data.mosques);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMosques();
  }, []);

  const filteredMosques = mosques.filter(
    (mosque) =>
      mosque.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedState === "" || mosque.address.includes(selectedState))
  );

  const handleDonateClick = (mosqueName: string) => {
    setSelectedMosque(mosqueName);
    setShowModal(true);
  };

  const handleProceedToPayment = () => {
    if (!donationAmount || Number(donationAmount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Redirect to payment gateway
    const paymentUrl = `/payment-gateway?masjid=${selectedMosque}&amount=${donationAmount}`;
    window.location.href = paymentUrl;
  };

  if (loading) {
    return <div className="text-center py-16">Loading mosques...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary text-center mb-4 sm:mb-0">
            List of Registered Mosques
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by name"
              className="border-nursery rounded-lg p-2 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="border-nursery rounded-lg p-2 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Filter by State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mosque Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMosques.map((mosque) => (
            <div
              key={mosque.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={
                  mosque.image
                    ? mosque.image
                    : "/src/images/Paysadaqa.png"
                }
                alt={mosque.name}
                className="h-24 w-24 sm:h-32 sm:w-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 text-center">
                {mosque.name}
              </h3>
              <p className="text-nursery mb-4 text-center">{mosque.address}</p>
              <button
                className="bg-primary text-tertiary py-2 px-4 rounded-md hover:bg-secondary transition"
                onClick={() => handleDonateClick(mosque.name)}
              >
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
              Donate to {selectedMosque}
            </h2>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter donation amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
            <div className="flex justify-between gap-4">
              <button
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleProceedToPayment}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donate;
