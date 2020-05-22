import React from "react";
import List from "./List";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    "&:hover": {
      opacity: 0.5,
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardHeader: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  cardAction: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  jobTitle: {
    marginLeft: 8,
  },
  jobDetail: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  gitHubIcon: {
    position: "relative",
    top: 7,
  },
}));

export default function Car(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {
    company,
    time,
    job_title,
    jobs,
    website,
    website_image,
    project,
    description,
    app_link,
    app_image,
    repo,
  } = props.data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return props.dataContent === "workingexperiences" ? (
    <Card className={classes.root}>
      <CardHeader
        title={company}
        subheader={time}
        className={classes.cardHeader}
      />
      <a href={website} target="_blank" rel="noopener noreferrer">
        <CardMedia
          className={classes.media}
          image={website_image}
          title={company}
        />
      </a>
      <CardActions disableSpacing className={classes.cardAction}>
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          className={classes.jobTitle}
        >
          {job_title}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.jobDetail}>
          <Typography paragraph>Jobs:</Typography>
          <List jobs={jobs} />
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <Card className={classes.root}>
      <CardHeader
        title={project}
        subheader={time}
        className={classes.cardHeader}
        action={
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="gitHub" className={classes.gitHubIcon}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
        }
      />
      <a href={app_link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          className={classes.media}
          image={app_image}
          title={project}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
