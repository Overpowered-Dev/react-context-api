import styles from "../../styles";
import ChildC from "./ChildC";

export default function ChildB() {
    return (
        <div style={styles.child}>
            <h2 style={styles.header}>Child B</h2>

            <p>Component Props: none</p>

            <ChildC />
        </div>
    );
}
