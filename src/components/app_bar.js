import React, {useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import FirebaseApp from "../firebase";
import {UserContext} from "../contexts/user_context";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "black",
        color: "orange"
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function CustomAppBar(props) {
    const classes = useStyles();
    let [open, setOpen] = useState(false);
    let [email, setEmail] = useState("");
    let [pwd, setPwd] = useState("");
    let {_, updateUser} = useContext(UserContext);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Trial Task
                    </Typography>
                    <Button variant="contained" style={{background: "white", color: "black"}}
                            onClick={() => setOpen(true)}>
                        Login
                    </Button>
                    <Dialog open={open}
                            onClose={() => {
                                setOpen(false);
                            }}
                            aria-labelledby="form-dialog-title"
                            TransitionComponent={Transition}>
                        <DialogTitle id="form-dialog-title">Login</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(event => setEmail(event.target.value))}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={(event => setPwd(event.target.value))}

                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => {
                                setOpen(false);
                            }} color="primary"
                                    style={{color: '#2E3B55'}}
                            >
                                Cancel
                            </Button>
                            <Button onClick={async () => {
                                let data = await new FirebaseApp().getDoc(email, pwd)
                                data.isLogged = true;
                                updateUser(data);
                                setOpen(false);
                            }} color="primary"
                                    variant="contained"
                            >
                                Login
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </div>
    );
}
