import styles from "../../styles";
import ChildB from "./ChildB";

export function ChildA() {
    return (
        <div style={styles.child}>
            <h1 style={styles.header}>Child A</h1>

            <p>Component Props: none</p>

            <ChildB />
        </div>
    );
}
