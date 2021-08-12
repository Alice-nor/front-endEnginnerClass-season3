import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();
  const num = [0,1,2,3,4,5,6,7,8,9];

  return (
    <div className={classes.root}>
        {num.map((val) => {
                return (
                    <Button variant="outlined" color="primary">
                    {val}</Button>
                )
            })}    
    </div>
  );
}
