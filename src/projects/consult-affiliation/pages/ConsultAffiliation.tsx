import { useState, useEffect } from "react";
import DetailAffiliation from "./Views/DeatailAffiliation";
import SearchAffiliation from "./Views/SearchAffiliation/SearchAffilition";
import TableAffiliation from "./Views/SearchAffiliation/TableAffiliation";
import { InitAfiliado, AfiliadoType, Afiliado } from "../class/Afiliados";

const ConsultAffiliation = () => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
  const [searchAfiliado, setSearchAfiliado] =
    useState<AfiliadoType>(InitAfiliado);
  const { rfc, cuenta, nombreCompleto } = searchAfiliado;

  const obtenerSearch = (search: AfiliadoType) => {
    setSearchAfiliado(search);
  };

  const fetchData = async () => {
    if (rfc === "" && cuenta === "" && nombreCompleto === "") return;

    const arrayAfiliados = await Afiliado.getAfiliados(searchAfiliado);
    setAfiliados(arrayAfiliados);
  };

  useEffect(() => {
    fetchData();
  }, [searchAfiliado]);

  useEffect(() => {
    console.log(afiliados);
  }, [afiliados]);

  return (
    <>
      <SearchAffiliation
        obtenerSearch={obtenerSearch}
        searchAfiliado={searchAfiliado}
        setSearchAfiliado={setSearchAfiliado}
      />

      <TableAffiliation afiliados={afiliados} />

      {/*<LinearProgress></LinearProgress>*/}
    </>
  );
};

export default ConsultAffiliation;
