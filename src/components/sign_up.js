import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import DateFnsUtils from '@date-io/date-fns';
import Firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    let [isLoading, setLoading] = useState(false)
    let [name, setName] = useState("")
    let [address, setAddress] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    let [bloodGroup, setBloodGroup] = useState("a");
    // const firebase = new Firebase();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                onChange={(event => setName(event.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="dob"
                                    label="DOB"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date.toDateString())}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="address"
                                label="Address"
                                id="address"
                                autoComplete="current-password"
                                onChange={(event => setAddress(event.target.value))}

                            />
                        </Grid>
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

                        <Grid item>
                            Blood Group :
                            <ToggleButtonGroup size="small" value={bloodGroup} exclusive
                                               onChange={(event, value) => setBloodGroup(value)}>
                                <ToggleButton value="a">
                                    A
                                </ToggleButton>
                                <ToggleButton value="b">
                                    B
                                </ToggleButton>
                                <ToggleButton value="c">
                                    C
                                </ToggleButton>
                                <ToggleButton value="d">
                                    D
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={async () => {
                            console.log(
                                "name : " + name + " dob : " + selectedDate + " address : " + address
                                + " email : " + email + " pwd : " + pwd + " bg : " + bloodGroup)
                            setLoading(true);
                            console.log(isLoading);
                            await new Firebase().setDoc({
                                name: name,
                                email: email,
                                pwd: pwd,
                                dob: selectedDate,
                                address: address,
                                bloodGroup: bloodGroup
                            })
                            setName('');
                            setEmail('');
                            setPwd('');
                            setAddress('');
                            setLoading(false);
                        }}
                    >
                        Sign Up
                    </Button>

                </form>
            </div>
            <Box mt={5}>

            </Box>
        </Container>
    );
}