import { useLocation } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar";

const ProfilePage = () => {
  const location = useLocation();
  const { userDetails, error } = location.state || {};

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative bg-black">
        <ProfileNavbar userDetails={userDetails} />
      </div>
      
      <div className="p-8 mx-auto max-w-4xl bg-gray-900 shadow-md rounded-md mt-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Profile Information</h1>
        {error ? (
          <p className="text-red-500 text-xl mb-4">{error}</p>
        ) : (
          <>
            <div className="text-lg mb-4">
              <strong className="text-yellow-400">First Name:</strong> {userDetails?.firstname}
            </div>
            <div className="text-lg mb-4">
              <strong className="text-yellow-400">Last Name:</strong> {userDetails?.lastname}
            </div>
            <div className="text-lg mb-4">
              <strong className="text-yellow-400">Email:</strong> {userDetails?.email}
            </div>
            <div className="text-lg">
              <strong className="text-yellow-400">Account Created:</strong>{" "}
              {userDetails?.createdAt ? new Date(userDetails.createdAt).toLocaleDateString() : "N/A"}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
