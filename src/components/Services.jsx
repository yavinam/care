import a from '../image/a.png'
import b from '../image/b.png'
import c from '../image/c.png'
import d from '../image/d.png'
import e from '../image/e.png'
import f from '../image/f.png'
export default function Services() {
  const services = [
    {
      img: {a},
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      img: {b},
      title: 'Online pharmacy',
      description: 'Free consultation with our trusted doctors and get the best recommendations',
    },
    {
      img: {c},
      title: 'Consultation',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      img: {d},
      title: 'Details info',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      img: {e},
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
    },
    {
      img: {f},
      title: 'Tracking',
      description: 'Track and save your medical history and health data',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Services we Offer</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded shadow hover:shadow-lg">
            <img src={service.img} alt={service.title} className="w-20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
