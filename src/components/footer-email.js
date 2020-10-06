import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './component.css';


const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(1),
        width: 'center',
    },


}));

export default function FooterEmail() {
    const classes = useStyles();

    return (
        <div className="EmailField">
            <form className={classes.form}  autoComplete="off">
           
            <TextField variant="outlined" halfWidth id="standard-secondary" label="Join the newsletter"  color="secondary" />
    {/* git push test  */}
            </form>
        </div>
    );
}
