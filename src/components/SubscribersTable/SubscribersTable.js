import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SubscribersTable = ({data}) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" padding="normal" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>email adress</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((record) => (
                        <TableRow key={record.id}>
                        <TableCell component="th" scope="row">
                            {record.fields.email}
                        </TableCell>
                        <TableCell align="right">{record.fields.name}</TableCell>
                        <TableCell align="right">{record.fields.created}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SubscribersTable;