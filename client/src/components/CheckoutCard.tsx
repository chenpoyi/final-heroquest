import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#3c4545"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type CheckoutCardProps = {
  weapons :{id: number,name: string, description: string, price: number}[],
  selections :(string | number)[],
  total: number,
  handleBuy: ()=> void
}

export default function CheckoutCard({weapons, selections, total, handleBuy}:CheckoutCardProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  
    const weaponInfo = selections.map((selection)=>{
    //  return (<li>{weapons[selection].name}</li>);
    const id = selection.toString();
    return (<li>{weapons[parseInt(id) - 1].name}</li>)
    })


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Cart
        </Typography>
        
        
        <Typography variant="body2" component="p">
          
          <ul>
          {weaponInfo}
        </ul>
        </Typography>
        <Typography variant="body2" component="p">
          
          Total: {total}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleBuy}>Confirm</Button>
      </CardActions>
    </Card>
  );
}