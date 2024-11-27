function Ask() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 shadow rounded-lg">
            <h3 className="text-xl font-bold text-main mb-2">
              How does the service work?
            </h3>
            <p className="text-secondary">
              Our platform connects you with verified professionals. Simply
              browse, book, and enjoy quality services.
            </p>
          </div>
          <div className="p-6 bg-gray-50 shadow rounded-lg">
            <h3 className="text-xl font-bold text-main mb-2">
              What is the pricing policy?
            </h3>
            <p className="text-secondary">
              Pricing varies by service type and provider. Check the detailed
              pricing list in the service description.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ask;
