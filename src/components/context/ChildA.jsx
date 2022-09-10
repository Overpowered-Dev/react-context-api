import styles from "../../styles";
import ChildB from "./ChildB";

export function ChildA() {
    return (
        <div style={styles.child}>
            <h2 style={styles.header}>Child A</h2>

            <p>Component Props: none</p>

            <ChildB />
        </div>
    );
}
