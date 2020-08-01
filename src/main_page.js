import React, {useState} from "react";
import SearchAppBar from "./app_bar";
import Button from "@material-ui/core/Button";
import IssuesPage from "./issues_page";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: '#2E3B55',
            textColor: '#2E3B55'
        }
    }
});
export default function MainPage() {
    const classes = useStyles();
    let [open, setOpen] = useState(false);
    const themeColor = {background: '#2E3B55', color: "white"};
    let addIssue = async function () {
        const requestOptions2 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: "hey"})
        };
        await fetch('http://localhost:7770/addIssue', requestOptions2);
    }

    return (
        <div style={{backgroundColor: "white"}}>
            <SearchAppBar/>
            <Button variant="contained" style={themeColor} onClick={() => setOpen(!open)}>
                Add Issue
            </Button>
            <IssuesPage/>
            <Dialog open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    aria-labelledby="form-dialog-title"
                    TransitionComponent={Transition}>
                <DialogTitle id="form-dialog-title">New Issue</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The Issue will be saved for the current project under current date and current users name. You
                        cannot delete an issue unless you have certain authorisation
                    </DialogContentText>
                    <TextField
                        className={classes.root}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Issue details"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false);
                        addIssue().then(r => console.log("done"));
                    }} color="primary"
                            style={{color: '#2E3B55'}}
                    >
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        setOpen(false);
                    }} color="primary"
                            variant="contained"
                            style={themeColor}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

