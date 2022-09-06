import type { User } from "../types";

import { useContext, createContext } from "react";

export const UserContext = createContext<User | null>(null);

export function useUser() {
    if (UserContext.Provider === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return useContext(UserContext);
}
