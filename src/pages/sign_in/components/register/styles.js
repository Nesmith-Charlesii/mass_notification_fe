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
        height: "50vh",
        width: "30vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid rgb(200, 200, 200)",
        borderRadius: "40px",
        padding: "40px"
    },
    form: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        '& .form-group, label': {
            color: "rgb(245, 245, 245)",
            paddingBottom: "10px",
            fontFamily: "Arial",
            fontWeight: 600
        },
        '& .form-group, input': {
            width: "25vh"
        }
    }
})

export default useStyles;