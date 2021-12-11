import { EstadoPartidoDTO } from "./modelsCommon";

export const ESTADO_PARTIDO: EstadoPartidoDTO[] = [
    { IdEstadoPartido: 1, Estado: 'Programado' },
    { IdEstadoPartido: 2, Estado: 'Finalizado' },
    { IdEstadoPartido: 3, Estado: 'Pendiente' }
];

export const TIPO_TORNEO: string[] = [ 'Apertura', 'Clausura' ];