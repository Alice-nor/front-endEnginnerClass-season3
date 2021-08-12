import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState(props.data.name);
  const [gender, setGender] = React.useState(props.data.gender);
  const [phone, setPhone] = React.useState(props.data.phone);
  const [email, setEmail] = React.useState(props.data.email);

  // 取消傳送表單內容
  const handleClose = () => {
    props.func(false,'','','','');
    setOpen(false); // 關閉表單
  };

  // 確定傳送表單內容
  const handleSure = () => {
    props.func(true,name,gender,phone,email,props.index);
    setOpen(false); // 關閉表單
  }
  return (
    <div>
      <Dialog open={open} onClose={() =>
          setOpen(false)}
          aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {(props.op ==='add')? '新增聯絡人':'修改聯絡人'}
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
          {(props.op ==='add')? '新增聯絡人資料':'修改聯絡人資料'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="姓名"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">性別</FormLabel>
            <RadioGroup row aria-label="gender" name="gender"
              value={gender} onChange={(e) => setGender(e.target.value)}>
              <FormControlLabel value="F" control={<Radio />} label="女" />
              <FormControlLabel value="M" control={<Radio />} label="男" />
            </RadioGroup>
          </FormControl>
          {/* <TextField
            margin="dense"
            id="gender"
            label="性別"
            type="text"
            fullWidth
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          /> */}
          <TextField
            margin="dense"
            id="phone"
            label="電話 / 手機"
            type="text"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleSure} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
