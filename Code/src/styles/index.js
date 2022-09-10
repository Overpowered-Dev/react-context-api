const styles = {
    container: {

    },
    row: {
        ':after': {
            content: "",
            display: "table",
            clear: "both"
        }
    },
    column: {
        height: "100%",
        width: "50%",
        float: "left",
        textAlign: "center"
    },
    child: {
        height: "calc(100% - 50px)",
        margin: "25px",
        border: "1px solid black",
    },
    header: {
        textDecoration: "underline"
    }
}

export default styles;
