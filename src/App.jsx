import UserProfileButton from "./UserProfileButton";

const dummyUser = {
    id: 1,
    name: "John Doe"
}

function App() {
    return (
        <>
            <UserProfileButton user={dummyUser} />
        </>
    );
}

export default App;
