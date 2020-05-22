import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    bottom: 24,
    flexGrow: 1,
  },
}));

const actions = [
  {
    icon: (
      <a href="https://www.linkedin.com/in/peiyu-wu-109a048b/">
        <IconButton aria-label="LinkedIn" className="speed-dial-icon-button">
          <LinkedInIcon />
        </IconButton>
      </a>
    ),
    name: "LinkedIn",
  },
  {
    icon: (
      <a href="https://github.com/peiyuwu9">
        <IconButton aria-label="GitHub" className="speed-dial-icon-button">
          <GitHubIcon />
        </IconButton>
      </a>
    ),
    name: "GitHub",
  },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon color="disabled" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
