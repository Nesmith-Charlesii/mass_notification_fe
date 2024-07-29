import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        backgroundColor: "rgb(30, 30, 30)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgb(200, 200, 200)",
        borderRadius: "40px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "50vh",
        padding: "40px"
    }
})

export default useStyles;