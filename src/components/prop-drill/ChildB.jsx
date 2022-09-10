import styles from "../../styles";
import ChildC from "./ChildC";

export default function ChildB({ user }) {
    return (
        <div style={styles.child}>
            <h2 style={styles.header}>Child B</h2>

            <p>Component Props: {"{ user }"}</p>

            <ChildC user={user} />
        </div>
    );
}
