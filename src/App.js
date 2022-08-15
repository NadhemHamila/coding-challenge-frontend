import './App.css';
import { Button, Input } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import {addNumber, retrieveData} from './service/service' ;
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function App() {
  const [show, setShow] = useState(false);
  const [showSample10, showTable] = useState(false);
  const [numberToAdd, setNumberToAdd] = useState('');
  const [tableData, setTableData] = useState([])
  return (
    <div className="App">
      <Stack spacing={1}>
        <div>
      <Button variant="contained" sx={{ m: 8 }} onClick={() => {
        setShow(true);
        showTable(false);
        }}>Add</Button>
      <Button variant="contained" onClick={() => {
        showTable(true)
        setShow(false);
        retrieveData().then((data) => {
              setTableData(data);
            })
        }}>Sample 10</Button>
      </div>
      {show && 
      <Stack spacing={1} direction="row">
      <Input placeholder='Add a number'
      value={numberToAdd} 
      onChange={(inputValue) => { setNumberToAdd(inputValue.target.value)}}/>
      <Button variant="outlined" onClick={() => {
        addNumber(numberToAdd);
        setNumberToAdd('');
      }}>Submit</Button>
            </Stack>
      }
      {showSample10 &&
      <Stack spacing={1} direction="row">
      <TableContainer component={Paper} sx={{ maxWidth: 60 }}>
      <Table sx={{ maxWidth: 10 }} aria-label="simple table">
          <TableBody key="numbersRow">
          {tableData.map((row, index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={`number${index}`}
            >
              <TableCell align="center" key={index}>{row}</TableCell>
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    }
      </Stack>
    </div>
  );
}

export default App;
