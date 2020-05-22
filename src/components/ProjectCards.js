import React from "react";
import data from "../schema.json";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

const projects = data.projects;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function WorkingExperienceCards(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {projects.map((project) => (
            <Grid key={project.id} item>
              <Card data={project} dataContent={"projects"} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}