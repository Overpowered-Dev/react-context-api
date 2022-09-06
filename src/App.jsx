import { UserContext } from "./hooks/useUser";

import UserProfileButton from "./UserProfileButton";

const dummyUser = {
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
