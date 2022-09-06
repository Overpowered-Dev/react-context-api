import { useState } from "react";

import UserProfile from "./UserProfile";

function UserProfileButton() {
    const [showProfile, setShowProfile] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setShowProfile(!showProfile)}>
                {showProfile ? "Hide" : "Show"} Profile
            </button>

            {showProfile && <UserProfile />}
        </div>
    );
}

export default UserProfileButton;
