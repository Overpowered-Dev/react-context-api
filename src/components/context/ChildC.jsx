import styles from "../../styles";
import ChildD from "./ChildD";

export default function ChildC() {
    return (
        <div style={styles.child}>
            <h1 style={styles.header}>Child C</h1>

            <p>Component Props: none</p>

            <ChildD />
        </div>
    );
}
