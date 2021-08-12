import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TodoList from './App';
import Contact from './Contact';
import LoginForm from './LoginForm';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [task, setTask] = React.useState(0);
  const [openLogin, setopenLogin] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['account','passwd']);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setopenLogin(false);
  }
  const handleTask = (taskid) => {
    if(cookies.account){
      setTask(taskid);
    } else {
      alert('請先登入');
      handleClose();
    }
  }

  const handleLogout = () => {
    if(window.confirm('是否確定要登出？')){
      removeCookie('account');
      setTask(0);
    }
    handleClose();
  }
  const taskCnt = ['HOME','通訊錄管理','代辦事項','Logout'];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {taskCnt[task]}
          </Typography>
          {
            (cookies.account !== undefined)?
            'Hi '+cookies.account
            :
            <Button color="inherit"
              onClick={() => setopenLogin(true)}>
                Login</Button>
          }         
        </Toolbar>
      </AppBar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={() => {handleTask(1)}}>
          {taskCnt[1]}</MenuItem>
        <MenuItem onClick={() => {handleTask(2)}}>
          {taskCnt[2]}</MenuItem>
            {
              cookies.account &&
              <MenuItem onClick={handleLogout}>{taskCnt[3]}</MenuItem>
            }
    </Menu>
    { task === 1 && <Contact/>}
    { task === 2 && <TodoList/>}
    { openLogin && <LoginForm open={true} func={handleLogin}/>}
    </div>
  );
}
