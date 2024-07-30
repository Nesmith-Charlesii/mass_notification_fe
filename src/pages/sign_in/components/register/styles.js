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
        minHeight: "40vh",
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid rgb(200, 200, 200)",
        borderRadius: "40px",
    },
    form: {
        padding: "50px",
        height: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '& .form-group, label': {
            color: "rgb(245, 245, 245)",
            paddingBottom: "10px",
            fontFamily: "Arial",
            fontWeight: 600
        },
        '& .form-group': {
            marginBottom: "8px"
        },
        '& .form-group, input': {
            width: "100%",
        }
    },
    buttonContainer: {
        paddingTop: "25px",
        width: "100%",
    }
})

export default useStyles;