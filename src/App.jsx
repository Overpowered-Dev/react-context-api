import { UserContext } from "./hooks/useUser";
import { ChildA as PropDrillChildA } from "./components/prop-drill/ChildA";
import { ChildA as ContextChildA } from "./components/context/ChildA";

import styles from "./styles";

const user = {
    id: 1,
    name: "Mr. Tommy Smith",
    accessToken: "2e3f2b64-6e00-4d3f-9f6c-a0131498009c"
}

function App() {
    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <div style={{ ...styles.column, backgroundColor: "#FF0000" }}>
                    <h1>Prop Drilling</h1>

                    <div style={styles.child}>
                        <h2 style={styles.header}>App</h2>

                        <PropDrillChildA user={user} />
                    </div>
                </div>

                <div style={{ ...styles.column, backgroundColor: "#35ff00" }}>
                    <h1>React's Context API</h1>

                    <div style={styles.child}>
                        <h2 style={styles.header}>App</h2>

                        <UserContext.Provider value={user}>
                            <ContextChildA />
                        </UserContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
