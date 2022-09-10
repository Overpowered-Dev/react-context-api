import styles from "../../styles";
import ChildB from "./ChildB";

export function ChildA({ user }) {
    return (
        <div style={styles.child}>
            <h2 style={styles.header}>Child A</h2>

            <p>Component Props: {"{ user }"}</p>

            <ChildB user={user} />
        </div>
    );
}
