import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listGroup: {
    paddingLeft: 20,
    fontSize: "0.875rem",
  },
}));

export default function List(props) {
  const classes = useStyles();
  const jobList = props.jobs

  return (
    <ul className={classes.listGroup}>
      {jobList.map((job) => (
        <li className="job-list">{job}</li>
      ))}
    </ul>
  );
}
