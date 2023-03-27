import Client from "./Client"

const instance = new Client('recibos').getAxiosInstance()

export class Afiliado {
    AFILIACION: number
    RFC_PEN: string
    NOMBRE: string

    constructor(
        AFILIACION: number,
        RFC_PEN: string,
        NOMBRE: string,


    ) {
        this.AFILIACION = AFILIACION;
        this.RFC_PEN = RFC_PEN;
        this.NOMBRE = NOMBRE;
    }

    public static async getAfiliados(search: AfiliadoType) {
        const res = (await instance.get('filtrar', {
            params: {
                rfc: search.rfc,
                cuenta: search.cuenta,
                nombreCompleto: search.nombreCompleto,
            }
          }));
        const data = res.data;

        return data;
    }
}

export type AfiliadoType = {
    rfc: string,
    cuenta: number | string,
    nombreCompleto: string,
}

export const InitAfiliado = {
        rfc: '',
        cuenta: '',
        nombreCompleto: ''

}

