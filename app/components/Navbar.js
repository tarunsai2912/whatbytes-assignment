const Navbar = () => {
    return (
      <nav className="bg-white shadow flex items-center justify-between p-4 border-b-2 text-black">
        <h1 className="text-xl font-bold">WhatsBytes</h1>
        <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/593/472/original/vector-business-men-icon.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>Rahil Siddique</span>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  