import type { User } from "./types";

import { UserContext } from "./hooks/useUser";

import UserProfileButton from "./UserProfileButton";

const dummyUser: User = {
    id: 1,
    name: "John Doe"
}

function App() {
    return (
        <UserContext.Provider value={dummyUser}>
            <UserProfileButton />
        </UserContext.Provider>
    );
}

export default App;
