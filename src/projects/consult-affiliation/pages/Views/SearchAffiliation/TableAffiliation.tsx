import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import * as React from "react";
import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

import { Afiliado } from "../../../class/Afiliados";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableAffiliation: React.FC<IPropsTableAffiliation> = ({ afiliados }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (afiliados.length === 0) {
    return (
      <Grid item container xs={12} md={12}>
        <Paper style={{ padding: 10, width: "100%", borderRadius: 8 }}>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">
                <Box component="span" fontWeight="fontWeightMedium">
                  No hay resultados
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>RFC</TableCell>
            <TableCell>No. Cuenta</TableCell>
            <TableCell>Nombre Completo</TableCell>
            <TableCell align="center">Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {afiliados.map((afiliado) => (
            <TableRow
              key={afiliado.RFC_PEN}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {afiliado.RFC_PEN}
              </TableCell>
              <TableCell>{afiliado.AFILIACION}</TableCell>
              <TableCell>{afiliado.NOMBRE}</TableCell>
              <TableCell align="center">Dettalle</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TableAffiliation;

interface IPropsTableAffiliation {
  afiliados: Afiliado[];
}
