import styles from "../../styles";
import ChildD from "./ChildD";

export default function ChildC({ user }) {
    return (
        <div style={styles.child}>
            <h1 style={styles.header}>Child C</h1>

            <p>Component Props: {"{ user }"}</p>

            <ChildD user={user} />
        </div>
    );
}
