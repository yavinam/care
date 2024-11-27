function Search() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-8">
          Find What You Need
        </h2>
        <form className="max-w-3xl mx-auto flex items-center bg-white shadow-lg rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search services, products, or anything..."
            className="flex-grow px-6 py-3 text-lg text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-button text-white px-8 py-3 font-semibold hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Search;
