const Sidebar = () => {
    return (
      <aside className="bg-white shadow-lg p-4 space-y-4 w-64 hidden lg:block h-[100%] border-r-2 text-black">
        <ul>
          <li className="p-2 hover:bg-gray-100">Dashboard</li>
          <li className="p-2 bg-gray-100 rounded shadow">Skill Test</li>
          <li className="p-2 hover:bg-gray-100">Internship</li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  