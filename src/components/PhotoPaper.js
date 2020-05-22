import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 968,
    margin: "0 auto",
  },
  photoImage: {
    width: "100%",
  },
}));

export default function EducationPaper() {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          <Grid item sm={8}>
            <img
              src="./images/photos/firework.png"
              alt="Firework"
              className={classes.photoImage}
            />
          </Grid>
          <Grid item sm={4}>
            <div>
            </div>
          </Grid>
          <Grid item sm={12}>
            <img
              src="./images/photos/kyoto.png"
              alt="Kyoto"
              className={classes.photoImage}
            />
          </Grid>
          <Grid item sm={6}>
            <img
              src="./images/photos/london.png"
              alt="London"
              className={classes.photoImage}
            />
          </Grid>
          <Grid item sm={6}>
            <img
              src="./images/photos/route1.png"
              alt="Route 1"
              className={classes.photoImage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
