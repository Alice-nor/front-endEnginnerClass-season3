import {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MyTable from './MyTable';
import Grid from '@material-ui/core/Grid';


function App() {
  const [text, setText] = useState('');
  const [task, setTask] = useState([]); // 存 Todolist 的工作項目
  const [done, setDone] = useState([]); // 儲存已做完項目
  const [status, setStatus] = useState('資料讀取中...');

   const handleClick = (e) => {
    const list = task;
    list.push(text);
    setTask(list);
    setText('');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const removeTask = (index) => {
    console.log('remove task',index);
    const list = task;
    const new_list = list.slice(0,index).concat(list.slice(index+1));
    setTask(new_list);
    const new_done = done;
    new_done.push(task[index]);
    setDone(new_done);
  }

  const removeDone = (index) => {
    console.log('remove done',index);
    const list = done;
    const new_list = list.slice(0,index).concat(list.slice(index+1));
    setDone(new_list);
  }

  // 儲存資料
  const handleSave = () => {
    const data = {
      task: task,
      done: done
    };

    fetch('http://localhost/api/save_task.php',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log('data: ',data)
      if(data['status'] === 'succ') {
        alert('存檔成功')
        console.log('存檔成功');
      } else {
        alert('存檔失敗');
        console.log('存檔失敗');
      }
    })
    .catch(error => { // 捕捉錯誤
      console.log('data error:',data);
    })
  }

  // 從雲端下載
  const handleLoad = () => {
    fetch('http://localhost/api/load_task.php',{
      method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log('data: ',data);
      setTask(data['task']);
      setDone(data['done']);
      // if(data['status'] == 'succ') {
      //   alert('存檔成功')
      // } else {
      //   alert('存檔失敗');
      // }
    })
    .catch(error => { // 捕捉錯誤
      alert('Error',error);
    })
  }


  const removeAllTask = (index) => {
    console.log('removeAllTask')
    if(window.confirm('確定刪除？')===true){
      let list = task;
      list = [];
      setTask(list);
    }
  }


  const removeAllDone = (index) => {
    if(window.confirm('確定刪除？')===true){
      let list = done;
      list = [];
      setDone(list);
    }
  }

  // componentDidMount
  // useEffect(() => {
  //   console.log('useEffect');
  //   handleLoad();
  //   if(status !== ''){
  //     setStatus('');
  //   }
  // },[]);



  console.log('App => task = ',task);
  return (
    <div style={{width:'1200px'}}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField id='standard-basic' label='Task'
            value={text} onChange={handleChange}></TextField>
          <Button variant='outlined'
            onClick={handleClick}
            style={{verticalAlign:'bottom'}}>新增工作項目</Button>
          <Button variant='outlined'
            onClick={handleSave}
            style={{verticalAlign:'bottom'}}>儲存到雲端</Button>
          <Button variant='outlined'
            onClick={handleLoad}
            style={{verticalAlign:'bottom'}}>從雲端下載</Button>
            <br/>{status}
        </Grid>

        <Grid item xs={12}>
          <MyTable taskList={task} handleClick={removeTask} title={'未完成工作項目'}></MyTable>
          <Button style={{background:'red',color:'white'}} onClick={removeAllTask}>清除未完成工作項目</Button>
        </Grid>
        <Grid item xs={12}>
          <MyTable taskList={done} handleClick={removeDone} title={'已完成工作項目'}></MyTable>
          <Button style={{background:'green',color:'white'}} onClick={removeAllDone}>清除已完成工作項目</Button>
        </Grid>
      </Grid>

    </div>


  );
}
export default App;
