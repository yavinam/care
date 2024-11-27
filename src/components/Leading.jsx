import lead from '../image/main3.png'
function Leading() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-main mb-4">
            Discover the Best Services
          </h1>
          <p className="text-secondary text-lg max-w-lg mx-auto md:mx-0">
            High-quality services just for you. Explore, choose, and enjoy!
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="bg-button text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={lead}
            alt="Welcome"
            className="w-full max-w-md mx-auto animate-bounce"
          />
        </div>
      </div>
    </section>
  );
}

export default Leading;
