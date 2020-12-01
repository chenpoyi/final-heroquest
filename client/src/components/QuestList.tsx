import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { getQuests } from "../helpers/selectors";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      background: "#735D58",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
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
    avatar: {
      backgroundColor: red[500],
    },
    title: {
      fontSize: 30,
    },
  })
);

type Quest = {
  name: string;
  description: string;
};

type QuestListProps = {
  user: any;
};

export default function QuestList({ user }: QuestListProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean[]>([]);
  const [quests, setQuest] = React.useState<Quest[]>([]);

  const handleExpandClick = (index) => {
    // setExpanded(!expanded);
    const newExpanded: boolean[] = [...expanded];
    newExpanded[index] = !newExpanded[index];
    console.log(newExpanded);
    setExpanded(newExpanded);
  };

  React.useEffect(() => {
    getQuests().then((quests) => {
      setQuest(quests);
    });
  }, []);

  const list = quests.map((quest, index) => {
    return (
      <>
        {quests && (
          <>
    
                {/* <CardHeader
                  titleTypographyProps={{ variant: "h6" }}
                  title={quest.name}
                  subheader={user.email}></CardHeader> */}

                

                <CardActions disableSpacing>

                <Typography paragraph>
                      {quest.name}
              
                </Typography>


                  
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded[index],
                    })}
                    onClick={() => {
                      handleExpandClick(index);
                    }}
                    aria-expanded={expanded[index]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      {quest.description}
                      <Divider />
                    </Typography>
                  </CardContent>
                </Collapse>
           
          </>
        )}
      </>
    );
  });

  return (
    <>
      <Card className={classes.root}>
       
          {list}
        
      </Card>
    </>
  );
}
