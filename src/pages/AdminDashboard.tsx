import { useState, useEffect } from "react";

interface Donation {
  masjid: string;
  amount: number;
}

interface AdminEarning {
  masjid: string;
  earnings: number;
}

const AdminDashboard = () => {
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [adminEarnings, setAdminEarnings] = useState<AdminEarning[]>([]);

  // Simulated API call to fetch donation data
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/admin/donations");
        const data = await response.json();

        setDonations(data.donations);

        // Calculate total donations
        const total = data.donations.reduce(
          (sum: number, donation: Donation) => sum + donation.amount,
          0
        );
        setTotalDonations(total);

        // Calculate 15% admin earnings
        const earningsData: AdminEarning[] = data.donations.map(
          (donation: Donation) => ({
            masjid: donation.masjid,
            earnings: donation.amount * 0.25,
          })
        );
        setAdminEarnings(earningsData);

        const totalAdminEarnings = earningsData.reduce(
          (sum, earning) => sum + earning.earnings,
          0
        );
        setTotalEarnings(totalAdminEarnings);
      } catch (error) {
        console.error("Failed to fetch donations:", error);
      }
    };

    fetchDonations();
  }, []);

  const handleWithdraw = () => {
    alert(
      `₦${totalEarnings.toLocaleString()} is being processed for transfer to your account.`
    );
    // TODO: Call backend API to process withdrawal
  };

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Dashboard Title */}
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Admin Dashboard
        </h1>

        {/* Total Donations and Admin Earnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Total Donations */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Total Masjid Donations
            </h2>
            <p className="text-3xl font-extrabold text-primary">
              ₦{totalDonations.toLocaleString()}
            </p>
          </div>

          {/* Admin Earnings */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Admin Earnings (25%)
            </h2>
            <p className="text-3xl font-extrabold text-primary">
              ₦{totalEarnings.toLocaleString()}
            </p>
            <button
              onClick={handleWithdraw}
              className="mt-4 bg-primary text-tertiary py-2 px-4 rounded-md hover:bg-tertiary hover:text-primary border border-r-primary transition duration-300"
            >
              Withdraw Funds
            </button>
          </div>
        </div>

        {/* Donations by Masjid and Admin Earnings Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donations by Masjid */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Donations by Masjid
            </h2>
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 px-4 font-medium text-primary">
                    Masjid Name
                  </th>
                  <th className="border-b py-2 px-4 font-medium text-primary">
                    Donation Amount (₦)
                  </th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b py-2 px-4 text-primary">
                      {donation.masjid}
                    </td>
                    <td className="border-b py-2 px-4 text-primary">
                      {donation.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Admin Earnings Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Admin Earnings Breakdown
            </h2>
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 px-4 font-medium text-primary">
                    Masjid Name
                  </th>
                  <th className="border-b py-2 px-4 font-medium text-primary">
                    Admin Share (25%) (₦)
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminEarnings.map((earning, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b py-2 px-4 text-primary">
                      {earning.masjid}
                    </td>
                    <td className="border-b py-2 px-4 text-green-600">
                      ₦{earning.earnings.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
