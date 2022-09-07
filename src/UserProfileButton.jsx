import { useState } from "react";

import UserProfile from "./UserProfile";

function UserProfileButton({ user }) {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div>
            <button onClick={() => setShowProfile(!showProfile)}>
                {showProfile ? "Hide" : "Show"} Profile
            </button>

            {showProfile && <UserProfile user={user} />}
        </div>
    );
}

export default UserProfileButton;
