import styles from "../../styles";
import ChildD from "./ChildD";

export default function ChildC({ user }) {
    return (
        <div style={styles.child}>
            <h2 style={styles.header}>Child C</h2>

            <p>Component Props: {"{ user }"}</p>

            <ChildD user={user} />
        </div>
    );
}
