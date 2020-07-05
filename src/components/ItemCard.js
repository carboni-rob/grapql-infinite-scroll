import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

export const ItemCard = ({ index, item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {index + 1}.{" "}
          <a className={classes.link} href={item.url}>
            {item.title}
          </a>
        </Typography>
        <Typography color="textSecondary">
          by {item.by.id} <Moment fromNow>{item.timeISO}</Moment>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Points: {item.score}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "5px",
  },
  link: {
    color: "initial",
    textDecoration: "none",
  },
});
