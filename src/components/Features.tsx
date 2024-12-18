// No need for the import statement

const Features = () => {
  return (
    <section className="bg-gray-50 py-16" id="features">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center bg-tertiary mb-12 text-primary">
          Why Choose paysadaqa?
        </h2>
        <p className="text-nursery mt-0.5 text-center"> Where Tech Meets Faith</p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-blue-100 bg-secondary p-4 rounded-full">
                <i className="fas fa-lock fa-2x text-primary"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-nursery">
              Secure Donations
            </h3>
            <p className="text-nursery mt-2">
              Your contributions are processed with top-tier security protocols.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-4 rounded-full">
                <i className="fas fa-book fa-2x text-primary"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-nursery">
              Transparent Records
            </h3>
            <p className="text-nursery mt-2">
              Track all donations with detailed transaction records.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-secondary text-primary p-4 rounded-full">
                <i className="fas fa-exchange-alt fa-2x text-primary"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-nursery">
              Seamless Transfers
            </h3>
            <p className="text-nursery mt-2">
              Quick and hassle-free transfers directly to the Masjids.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
