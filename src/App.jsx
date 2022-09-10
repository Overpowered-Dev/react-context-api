import { UserContext } from "./hooks/useUser";

import { ChildA as PropDrillChildA } from "./components/prop-drill/ChildA";
import { ChildA as ContextChildA } from "./components/context/ChildA";

import styles from "./styles";

const propDrilledUser = {
    id: 1,
    name: "Mr. Prop Drilled",
    accessToken: "2e3f2b64-6e00-4d3f-9f6c-a0131498009c"
}

const contextUser = {
    id: 2,
    name: "Mr. Context",
    accessToken: "492d540c-c4c0-465e-9d34-a1b5f7d94951"
}

function App() {
    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <div style={{ ...styles.column, backgroundColor: "red" }}>
                    <h1>Prop Drilling</h1>

                    <PropDrillChildA user={propDrilledUser} />
                </div>

                <div style={{ ...styles.column, backgroundColor: "green" }}>
                    <h1>Context API</h1>

                    <UserContext.Provider value={contextUser}>
                        <ContextChildA />
                    </UserContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
