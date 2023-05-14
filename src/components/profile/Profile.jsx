import { Link } from "react-router-dom";
import "./profile.css";

function Profile({ user, isAuthenticated }) {
  return (
    isAuthenticated && (
      <div className="profile-img">
        {user?.picture && <img src={user.picture} alt={user?.name} />}
      </div>
    )
  );
}

export default Profile;
