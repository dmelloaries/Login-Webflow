import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

interface UserDetails {
  
  firstName: string;
  lastName: string;
  email: string;
}

const HomeNavbar = ({ userDetails }: { userDetails: UserDetails }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile", { state: { userDetails } });
  };

  return (
    <nav className="bg-neutral-900 text-white py-4 px-8 mx-4 my-4 rounded-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
        </div>
        <div className="flex space-x-4">
          <button
            className="rounded-2xl border border-white px-4 py-2 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="rounded-2xl border border-white px-4 py-2 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition"
            onClick={handleProfile}
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
