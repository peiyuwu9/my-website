import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoPaper: {
    width: 350,
    textAlign: "center",
  },
  logoImage: {
    width: "90%",
  },
  paperContent: {
    paddingBottom: "20px",
  },
}));

export default function EducationPaper() {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Grid key="1" item>
            <Paper className={classes.logoPaper}>
              <img
                src="./images/logos/rutgers_logo.png"
                alt="Rutgers University"
                className={classes.logoImage}
              />
              <div className={classes.paperContent}>
                <Typography variant="body2" color="textSecondary" component="div">
                  <div>September 2019 - December 2019</div>
                  <div>Certificate of Web Development</div>
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid key="2" item>
            <Paper className={classes.logoPaper}>
              <img
                src="./images/logos/sit_logo.png"
                alt="Stevens Institute of Technology"
                className={classes.logoImage}
              />
              <div className={classes.paperContent}>
                <Typography variant="body2" color="textSecondary" component="div">
                  <div>August 2015 - June 2015</div>
                  <div>Mater of Material Science</div>
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid key="3" item>
            <Paper className={classes.logoPaper}>
              <img
                src="./images/logos/nsysu_logo.png"
                alt="National Sun-Yat San University"
                className={classes.logoImage}
              />
              <div className={classes.paperContent}>
                <Typography variant="body2" color="textSecondary" component="div">
                  <div>August 2008 - June 2012</div>
                  <div>Bachelor of Physics</div>
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
