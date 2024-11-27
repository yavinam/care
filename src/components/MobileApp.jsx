import mains from '../image/main2.png'
function MobileApp() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src={mains}
            alt="Mobile App"
            className="w-full max-w-sm mx-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-main mb-4">
            Access Anytime, Anywhere
          </h2>
          <p className="text-secondary mb-6">
            Download our mobile app to explore services on the go. Available on
            iOS and Android.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-button text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="bg-gray-200 text-main px-6 py-3 rounded-full shadow-lg hover:bg-gray-300 transition"
            >
              Download for Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
