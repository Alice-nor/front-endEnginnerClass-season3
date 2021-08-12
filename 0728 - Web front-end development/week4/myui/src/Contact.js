import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {IconButton} from '@material-ui/core';
import Userform from './UserForm';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'gray',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, gender, phone, email) {
    // 回傳成物件
    return { name, gender, phone, email };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);
  const [openAdd, setopenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(0);



  // 新增資料
  const addRecord = (isAdd,name,gender,phone,email) => {
    if(isAdd) {
      const row =createData(name,gender,phone,email);
      const data = { func: 'insert', data:row };
      fetch('http://localhost/api/user_mgt.php',{
        method: 'POST',
        body: JSON.stringify(data), // 傳給後端 api 的參數
        headers: {
          'Content-Type': 'application/json'
        }     
      })
      .then(res => res.json())
      .then(data => {
        if(data['status'] === 'succ'){
          row.id = data['id'];
          const list = rows; // 所有資料
          list.push(row); // 新增資料
          setRows(list.slice(0));
        }
      })
      .catch(e=> {
        // 有錯
        console.log('fetch error:',e);
      })
  }
  setopenAdd(false);
} 


  const modRecord = (isMod,name,gender,phone,email,index) => {
    console.log('modRecord: index =',index);  
    if(isMod) {
        const list = rows;
        list[index]=createData(name,gender,phone,email);
        setRows(list.slice(0)); // slice(0) 全陣列的複製

        const row =createData(name,gender,phone,email);
        row.id = rows[index].id;
        const data = { func: 'update', data:row };
        fetch('http://localhost/api/user_mgt.php',{
          method: 'POST',
          body: JSON.stringify(data), // 傳給後端 api 的參數
          headers: {
            'Content-Type': 'application/json'
          }     
        })
        .then(res => res.json())
        .then(data => {
          if(data['status'] === 'succ'){
            const list = rows; // 所有資料
            list[index] = row; // 更新資料
            setRows(list.slice(0));
            console.log('fetch update succ, rows:',rows);
          }
        })
        .catch(e=> {
          // 有錯
          console.log('fetch error:',e);
        })
    }  
    setOpenEdit(false);
  }

  const delRecord = (index) => {
    if(window.confirm('確認刪除此筆紀錄？[ '+rows[index].name+ ' ]')) {
      // const list = rows;
      // const newList = list.slice(0,index).concat(list.slice(index+1));
      // setRows(newList);
      const data = { func: 'delete', id:rows[index].id };
        fetch('http://localhost/api/user_mgt.php',{
          method: 'POST',
          body: JSON.stringify(data), // 傳給後端 api 的參數
          headers: {
            'Content-Type': 'application/json'
          }     
        })
        .then(res => res.json())
        .then(data => {
          if(data['status'] === 'succ'){
            const list = rows;
            const newList = list.slice(0,index).concat(list.slice(index+1));
            setRows(newList);
          }
        })
        .catch(e=> {
          // 有錯
          console.log('fetch error:',e);
        })
    }
  }

  // componentDidMount
  React.useEffect(()=> {
    const data = {func: 'query'};
    fetch('http://localhost/api/user_mgt.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // 傳給後端 api 的參數
    })
    .then(res => res.json())
    .then(data => {
      if(data['status'] === 'succ'){
        console.log('data: ',data)
        setRows(data['data']);
      }
    })
    .catch(e=> {
      // 有錯
      console.log('catch error!');
      console.log('fetch error:',e);
    })
  },[])

  return (
    <div>
        <Button variant='contained'
            color='primary'
            onClick={() => setopenAdd(true)}>
                新增聯絡人
        </Button>
        {/* 新增聯絡人 */}
        { openAdd && <Userform op='add'
            func={addRecord}
            data={createData('','','','')}/>}

        {/* 修改聯絡人 */}
        { openEdit && <Userform op='edit'
            func={modRecord}
            data={rows[editIndex]}
            index={editIndex}/>}
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                {/* 表頭 */}
                <TableHead>
                <TableRow>
                    <StyledTableCell>姓名</StyledTableCell>
                    <StyledTableCell align="left">性別</StyledTableCell>
                    <StyledTableCell align="left">電話 / 手機</StyledTableCell>
                    <StyledTableCell align="left">Email</StyledTableCell>
                    <StyledTableCell align="left">備註</StyledTableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row,index) => (
                    // () => return value
                    // 所以這下面都是 return 的元件
                    // 或是用 { } 裡頭加上 return ()...

                    // key={index} 為參考值，不會顯示
                    <StyledTableRow key={index}>
                        <StyledTableCell component="th"scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.gender === 'F'? '女':'男'}</StyledTableCell>
                        <StyledTableCell align="left">{row.phone}</StyledTableCell>
                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                        <StyledTableCell align="left">
                            <IconButton color='primary'
                                aria-label='edit a record'
                                onClick={()=> {setOpenEdit(true); setEditIndex(index)}}> 
                                <EditIcon/>
                            </IconButton>
                            <IconButton color='secondary'
                                aria-label='delete a record'
                                onClick={()=> delRecord(index)}> 
                                <DeleteIcon/>
                            </IconButton>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

