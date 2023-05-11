import { useAuth0 } from "@auth0/auth0-react";
import "./profile.css";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-img">
        {user?.picture && <img src={user.picture} alt={user?.name} />}
      </div>
    )
  );
}

export default Profile;
