function UserProfile({ user }) {
    if (!user) {
        return (
            <div style={{ width: "fit-content", border: "1px solid black" }}>
                <h1>No User Found</h1>
            </div>
        );
    }

    return (
        <div style={{ width: "fit-content", border: "1px solid black" }}>
            <h1>{user.id} - {user.name}</h1>
        </div>
    );
}

export default UserProfile;
