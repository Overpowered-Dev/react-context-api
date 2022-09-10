import { useUser } from "../../hooks/useUser";

import styles from "../../styles";

export default function ChildD() {
    const user = useUser();

    return (
        <div style={styles.child}>
            <h1 style={styles.header}>Child D</h1>

            <p>Component Props: none</p>

            <h5>ID: {user.id}</h5>
            <h5>Name: {user.name}</h5>
            <h5>Access Token: {user.accessToken}</h5>
        </div>
    );
}
