import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './component.css';
const useStyles = makeStyles((theme) => ({
  
    largeIcon: {
        margin: theme.spacing(10),
        width: 190,
        height: 80,
        
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
            <div className="IconButton">
                <IconButton 
                    color="secondary"
                    size="large"
                    className={classes.largeIcon}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    color="secondary"
                    size="large"
                    className={classes.largeIcon}
                >
                    <TelegramIcon />
                </IconButton>
                <IconButton
                    color="secondary"
                    size="large"
                    className={classes.largeIcon}
                >
                    <TwitterIcon />
                </IconButton>
            </div>
    );
}
