import styles from "../../styles";
import ChildD from "./ChildD";

export default function ChildC() {
    return (
        <div style={styles.child}>
            <h2 style={styles.header}>Child C</h2>

            <p>Component Props: none</p>

            <ChildD />
        </div>
    );
}
