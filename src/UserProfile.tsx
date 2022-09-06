import type { User } from "./types";

import { useUser, UserContext } from "./hooks/useUser";

function UserProfile() {
    // const user: User | null = useUser();
    //
    // if (!user) {
    //     return (
    //         <div style={{ width: "fit-content", border: "1px solid black" }}>
    //             <h1>No User Found</h1>
    //         </div>
    //     );
    // }
    //
    // return (
    //     <div style={{ width: "fit-content", border: "1px solid black" }}>
    //         <h1>{user.id} - {user.name}</h1>
    //     </div>
    // );

    // Solution #2 to consumer a context's value
    // return (
    //     <UserContext.Consumer>
    //         {(user: User | null) => {
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
