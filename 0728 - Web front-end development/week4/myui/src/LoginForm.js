import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useCookies } from 'react-cookie';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [cookies, setCookie, removeCookie] = useCookies(['account','passwd']);
  const [account, setAccount] = React.useState('');
  const [passwd, setPasswd] = React.useState('');
  
  // 關閉表單
  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  // 設定帳號
  const handleLogin = () => {
      if(account === 'admin' && passwd === '1234' ){
          setCookie('account',account,{path:'/'})
          props.func();
      } else {
          alert('帳號密碼錯誤！')
      }
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">實作系統登入</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="帳號"
            type="text"
            fullWidth
            value = {account}
            onChange = {(e) => setAccount(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="密碼"
            type="text"
            fullWidth
            value = {passwd}
            onChange = {(e) => setPasswd(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleLogin} color="primary">
            登入
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}