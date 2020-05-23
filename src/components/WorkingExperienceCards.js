import React from "react";
import data from "../schema.json";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

const workingExperiences = data.working_experience;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function WorkingExperienceCards() {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {workingExperiences.map((workingExperience) => (
            <Grid key={workingExperience.id} item>
              <Card data={workingExperience} dataContent={"workingexperiences"}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
