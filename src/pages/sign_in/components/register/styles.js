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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid rgb(200, 200, 200)",
        borderRadius: "40px",
    },
    form: {
        padding: "50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
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
            width: "25vh",
        }
    },
    buttonContainer: {
        paddingTop: "25px",
        width: "100%",
    }
})

export default useStyles;