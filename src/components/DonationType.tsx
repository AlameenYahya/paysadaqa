import { useState } from "react";

const DonationType = () => {
  const [selectedDonationType, setSelectedDonationType] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>("");

  const handleDonateClick = (type: string) => {
    setSelectedDonationType(type);
  };

  const handleProceedToPayment = () => {
    if (!donationAmount || Number(donationAmount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Redirect to payment gateway
    const paymentUrl = `/payment-gateway?type=${selectedDonationType}&amount=${donationAmount}`;
    window.location.href = paymentUrl;
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Choose Donation Type
        </h1>

        {/* Donation Type Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mosque Section */}
          <div className="bg-tertiary p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-6 rounded-full">
                <i className="fas fa-mosque fa-3x"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Mosque</h3>
            <button
              onClick={() => handleDonateClick("Mosque")}
              className="bg-primary text-tertiary py-3 px-6 rounded-md hover:bg-secondary transition"
            >
              Donate Now
            </button>
          </div>

          {/* Charities Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-primary text-primary p-6 rounded-full">
                <i className="fas fa-hand-holding-heart fa-3x"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Charities</h3>
            <button
              onClick={() => handleDonateClick("Charities")}
              className="bg-primary text-tertiary py-3 px-6 rounded-md hover:bg-secondary transition"
            >
              Donate Now
            </button>
          </div>

          {/* Ramadan Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-6 rounded-full">
                <i className="fas fa-star-and-crescent fa-3x"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Ramadan</h3>
            <button
              onClick={() => handleDonateClick("Ramadan")}
              className="bg-primary text-tertiary py-3 px-6 rounded-md hover:bg-secondary transition"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {selectedDonationType && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-tertiary p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-bold text-primary mb-4">
              Donate to {selectedDonationType}
            </h2>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter donation amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
            <div className="flex justify-between gap-4">
              <button
                className="w-full px-4 py-2 bg-red text-tertiary rounded-lg hover:bg-red"
                onClick={() => setSelectedDonationType(null)}
              >
                Cancel
              </button>
              <button
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
                onClick={handleProceedToPayment}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DonationType;
