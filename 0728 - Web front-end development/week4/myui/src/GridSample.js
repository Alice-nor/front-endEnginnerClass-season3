import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const content = {
    title: [
        'Explore Tokyo',
        'Explore Tokyo New',
        'Eat Delicious Food',
        'Visit the Best Spots',
        'Meet new friends',
        'Climb mountains'
    ],
    description: [
        'Discover Tokyo like you never have before.',
        'Discover Tokyo like you never have before.',
        'Find the best local restaurants and bars.',
        'Check out famous locations and attractions',
        'Join local tourist teams',
        'Enjoy the views at Tateyama'
    ]
};

const App = () => {
  const classes = useStyles();
  const [mygrid, setMygrid] = React.useState([]);
  const [index, setIndex] = React.useState(-1);

  // 產生物件
  function createData(heading,content){
      return {heading,content};
  }

  const addGrid = () => {
        
      // 若 index 已超過現有資料數，則停止
      if( index > (content.title.length-2)){
          return '';
      } else {
        const old_index = index;
        const new_index = old_index+1;
        setIndex(new_index); // 取得新 index
      
        const list = mygrid;
        list.push(createData(content.title[new_index],content.description[new_index]));
        const new_list = list;
        console.log(new_list);
        setMygrid(new_list.slice(0));
        
      }
  }


  return (
    <div>
        <Button variant="outlined" color="primary" onClick={addGrid}>新增</Button>
        <Container component="section" maxWidth="lg"  className={classes.root}>  
            <Grid container spacing={3} alignItems="stretch">
                {
                    mygrid.map((grid,index) => (
                        
                        <Grid item xs={12} sm={4}>
                            <div className={classes.card}>
                            
                                {/* icon */}
                                <EmojiPeopleIcon
                                color="primary"
                                fontSize="large"
                                className={classes.icon}
                                />

                                {/* 大標 */}
                                <Typography variant="h5" component="h3" className={classes.title[index]}>
                                {grid.heading}
                                </Typography>

                                {/* 文案 */}
                                <Typography className={classes.featureList}>
                                {grid.content}
                                </Typography>                  
                            </div>
                        </Grid>
                    ))
                }
          
            </Grid>
        </Container>
    </div>
    
  );
};

export default App;