import { useContext, createContext } from "react";

export const UserContext = createContext(null);

export function useUser() {
    if (UserContext.Provider === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return useContext(UserContext);
}
