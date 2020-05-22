import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
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
              src="./images/photos/firework.jpg"
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
              src="./images/photos/kyoto.jpg"
              alt="Kyoto"
              className={classes.photoImage}
            />
          </Grid>
          <Grid item sm={6}>
            <img
              src="./images/photos/london.jpg"
              alt="London"
              className={classes.photoImage}
            />
          </Grid>
          <Grid item sm={6}>
            <img
              src="./images/photos/route1.jpg"
              alt="Route 1"
              className={classes.photoImage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
