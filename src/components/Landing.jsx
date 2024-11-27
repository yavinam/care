import main from '../image/main.png'
export default function Landing() {
  return (
    <section id="landing" className="bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Virtual healthcare Saviour for you
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Consult Today
          </a>
        </div>
        <div className="md:w-1/2">
          <img src={main} alt="Header" className="w-full" />
        </div>
      </div>
    </section>
  );
}
