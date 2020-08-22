import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    type="/src/component/images/beetlejuice.jpg"
                    title="beetlejuice.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Beetle Juice
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Great fun loving guy. Make you lagh so hard you could roll in your grave. 
                         But hey when there is an afterlife, you knowthere is some dues to pay. ;-)
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
                <Button size="small" color="primary">Friends</Button>
            </CardActions>
        </Card>
    );
}