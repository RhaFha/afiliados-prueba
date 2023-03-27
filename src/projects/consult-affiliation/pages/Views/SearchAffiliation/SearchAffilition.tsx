import { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  LinearProgress,
} from "@mui/material";

import { AfiliadoType, InitAfiliado } from "../../../class/Afiliados";

const SearchAffiliation: React.FC<IPropsSearchAffiliation> = ({
  obtenerSearch,
  setSearchAfiliado,
  searchAfiliado,
}) => {
  const [search, setSearch] = useState<AfiliadoType>(searchAfiliado);
  const { rfc, cuenta, nombreCompleto } = search;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rfc === "" && cuenta === "" && nombreCompleto === "") {
      Swal.fire({
        icon: "error",
        title: "Campos vacios",
        text: "Los filtros no pueden ir vacios! Rellene uno",
      });
      return;
    }

    obtenerSearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid item container xs={12} md={12}>
          <Paper style={{ padding: 10, width: "100%", borderRadius: 8 }}>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h1">
                  <Box component="span" fontWeight="fontWeightMedium">
                    Afiliados
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-password-input"
                  label="RFC"
                  type="text"
                  fullWidth
                  value={search.rfc}
                  onChange={(e) =>
                    setSearch({ ...search, rfc: e.target.value.toUpperCase() })
                  }
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-password-input"
                  label="Cuenta"
                  type="number"
                  fullWidth
                  value={search.cuenta}
                  onChange={(e) =>
                    setSearch({ ...search, cuenta: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="outlined-password-input"
                  label="Nombre Completo"
                  type="text"
                  fullWidth
                  value={search.nombreCompleto}
                  onChange={(e) =>
                    setSearch({
                      ...search,
                      nombreCompleto: e.target.value.toUpperCase(),
                    })
                  }
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>

              <Grid item xs={1}>
                <Button variant="contained" type="submit">
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </>
  );
};

export default SearchAffiliation;

interface IPropsSearchAffiliation {
  obtenerSearch: (search: AfiliadoType) => void;
  setSearchAfiliado: React.Dispatch<React.SetStateAction<AfiliadoType>>;
  searchAfiliado: AfiliadoType;
}
