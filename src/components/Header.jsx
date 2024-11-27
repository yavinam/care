import logo from '../image/logo.png'
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          {/* <span className="text-lg font-bold text-gray-800">Saviour Care</span> */}
        </div>
        <nav>
          <ul className="flex space-x-4 text-gray-600">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#find-a-doctor" className="hover:text-blue-500">Find a Doctor</a></li>
            <li><a href="#apps" className="hover:text-blue-500">Apps</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
            <li><a href="#about-us" className="hover:text-blue-500">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
