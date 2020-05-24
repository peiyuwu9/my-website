import React from "react";

// Material UI
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛
    MuiSpeedDial: {
      // Name of the rule
      root: {
        // Some CSS
        position: "sticky",
        bottom: 24,
        flexGrow: 1,
        alignItems: "flex-end",
      },
    },
    MuiFab: {
      primary: {
        backgroundColor: "#85a392",
        "&:hover": {
          backgroundColor: "#85a392",
        },
        "&:focus": {
          backgroundColor: "#85a392",
        },
      },
    },
    MuiIconButton: {
      root: {
        top: "-2px",
      },
    },
    MuiSpeedDialAction: {
      fab: {
        margin: "10px 0 0 0",
      },
    },
  },
});

const actions = [
  {
    icon: (
      <a href="https://www.linkedin.com/in/peiyu-wu-109a048b/">
        <IconButton aria-label="LinkedIn">
          <LinkedInIcon fontSize={"large"} />
        </IconButton>
      </a>
    ),
    name: "LinkedIn",
  },
  {
    icon: (
      <a href="https://github.com/peiyuwu9">
        <IconButton
          aria-label="GitHub"
          classes={{ position: "relative", top: "-2px" }}
        >
          <GitHubIcon fontSize={"large"} />
        </IconButton>
      </a>
    ),
    name: "GitHub",
  },
];

export default function OpenIconSpeedDial() {
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
    <ThemeProvider theme={theme}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon"
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
            FabProps={{ size: "large" }}
          />
        ))}
      </SpeedDial>
    </ThemeProvider>
  );
}
