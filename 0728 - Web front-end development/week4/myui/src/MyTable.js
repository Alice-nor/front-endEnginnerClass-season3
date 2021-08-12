import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


// MyTable 的子原件
function MyCell(props){
    const handleClick = () => {
        props.handleClick(props.index);
    }

    return (
        <TableCell align='left'
            onClick={handleClick}>{props.task}</TableCell>
    )
}


function MyTable(props) {
    return (
            <Table style={{width:'30%'}}>
                <TableHead>
                    {/* 項目名稱 */}
                    <TableRow>
                        <TableCell align='left'>{props.title}</TableCell>
                        <TableCell align='left'>類別</TableCell>
                        <TableCell align='left'>期限</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.taskList.map((task,index) =>{
                        return (
                            <TableRow key={index}>
                                <MyCell task={task}
                                    index={index}
                                    handleClick={props.handleClick}/>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
    )
}

export default MyTable;
