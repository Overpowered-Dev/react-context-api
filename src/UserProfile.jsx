import { useUser, UserContext } from "./hooks/useUser";

function UserProfile() {
    // Solution #1 to consumer a context's value
    const user = useUser();

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

    // Solution #2 to consumer a context's value
    // return (
    //     <UserContext.Consumer>
    //         {user => {
    //             if (!user) {
    //                 return (
    //                     <div style={{ width: "fit-content", border: "1px solid black" }}>
    //                         <h1>No User Found</h1>
    //                     </div>
    //                 );
    //             }
    //
    //             return (
    //                 <div style={{ width: "fit-content", border: "1px solid black" }}>
    //                     <h1>{user.id} - {user.name}</h1>
    //                 </div>
    //             );
    //         }}
    //     </UserContext.Consumer>
    // );
}

export default UserProfile;
