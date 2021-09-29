import { EquipoDTO, PartidoDTO, PersonaDTO } from "../models/modelsCommon";
import { FixtureDTO, TablaPosicionesDTO } from "./models-prueba";

export const TABLA_POSICIONES: TablaPosicionesDTO[] = [
    { equipo: 'Deportivo Negro', partidosJugados: 9, partidosGanados: 9, partidosEmpatados: 0, partidosPerdidos: 0, golesFavor: 98, golesContra: 5, diferenciaGoles: 93, puntos: 27 },
    { equipo: 'Deportivo Amarillo', partidosJugados: 9, partidosGanados: 8, partidosEmpatados: 0, partidosPerdidos: 1, golesFavor: 57, golesContra: 26, diferenciaGoles: 31, puntos: 24, color: 'amarillo' },
    { equipo: 'Deportivo Rojo', partidosJugados: 9, partidosGanados: 7, partidosEmpatados: 0, partidosPerdidos: 2, golesFavor: 75, golesContra: 18, diferenciaGoles: 57, puntos: 21, color: 'rojo' },
    { equipo: 'Deportivo Naranja', partidosJugados: 9, partidosGanados: 5, partidosEmpatados: 1, partidosPerdidos: 3, golesFavor: 37, golesContra: 21, diferenciaGoles: 16, puntos: 16, color: 'naranja' },
    { equipo: 'Deportivo Verde', partidosJugados: 9, partidosGanados: 5, partidosEmpatados: 0, partidosPerdidos: 4, golesFavor: 54, golesContra: 37, diferenciaGoles: 17, puntos: 15, color: 'verde' },
    { equipo: 'Deportivo Gris', partidosJugados: 9, partidosGanados: 4, partidosEmpatados: 1, partidosPerdidos: 4, golesFavor: 36, golesContra: 37, diferenciaGoles: -1, puntos: 13, color: 'gris' },
    { equipo: 'Deportivo Celeste', partidosJugados: 9, partidosGanados: 3, partidosEmpatados: 0, partidosPerdidos: 6, golesFavor: 24, golesContra: 35, diferenciaGoles: -11, puntos: 9, color: 'celeste' },
    { equipo: 'Deportivo Azul', partidosJugados: 9, partidosGanados: 1, partidosEmpatados: 1, partidosPerdidos: 7, golesFavor: 15, golesContra: 109, diferenciaGoles: -94, puntos: 4, color: 'azul' },
    { equipo: 'Deportivo Violeta', partidosJugados: 9, partidosGanados: 0, partidosEmpatados: 2, partidosPerdidos: 7, golesFavor: 7, golesContra: 69, diferenciaGoles: -62, puntos: 2, color: 'violeta' },
    { equipo: 'Deportivo Bordo', partidosJugados: 9, partidosGanados: 9, partidosEmpatados: 1, partidosPerdidos: 8, golesFavor: 15, golesContra: 61, diferenciaGoles: -46, puntos: 1, color: 'bordo' },
];

export const PROXIMOS_ENCUENTROS: FixtureDTO[] = [
    { equipoLocal: 'Deportivo Violeta', equipoVisitante: 'Deportivo Rojo', fecha: '02/10/2021', hora: '18:00 hs' },
    { equipoLocal: 'Deportivo Naranja', equipoVisitante: 'Deportivo Verde', fecha: '02/10/2021', hora: '20:00 hs' },
    { equipoLocal: 'Deportivo Azul', equipoVisitante: 'Deportivo Negro', fecha: '03/10/2021', hora: '16:00 hs' },
    { equipoLocal: 'Deportivo Gris', equipoVisitante: 'Deportivo Amarillo', fecha: '03/10/2021', hora: '18:00 hs' },
    { equipoLocal: 'Deportivo Bordo', equipoVisitante: 'Deportivo Celeste', fecha: '03/10/2021', hora: '20:00 hs' },
    { equipoLocal: 'Deportivo Amarillo', equipoVisitante: 'Deportivo Violeta', fecha: '09/10/2021', hora: '18:00 hs' },
    { equipoLocal: 'Deportivo Rojo', equipoVisitante: 'Deportivo Azul', fecha: '09/10/2021', hora: '20:00 hs' },
    { equipoLocal: 'Deportivo Verde', equipoVisitante: 'Deportivo Gris', fecha: '10/10/2021', hora: '16:00 hs' },
    { equipoLocal: 'Deportivo Negro', equipoVisitante: 'Deportivo Bordo', fecha: '10/10/2021', hora: '18:00 hs' },
    { equipoLocal: 'Deportivo Celeste', equipoVisitante: 'Deportivo Naranja', fecha: '10/10/2021', hora: '20:00 hs' },
];

export const FECHA_TORNEO: string[] = [ 'Fecha 1', 'Fecha 2', 'Fecha 3', 'Fecha 4', 'Fecha 5', 'Fecha 6'];

export const EQUIPO: EquipoDTO[] = [
    { IdEquipo: 1, NombreEquipo: 'Deportivo Negro' },
    { IdEquipo: 2, NombreEquipo: 'Deportivo Amarillo' },
    { IdEquipo: 3, NombreEquipo: 'Deportivo Azul' },
    { IdEquipo: 4, NombreEquipo: 'Deportivo Celeste' },
    { IdEquipo: 5, NombreEquipo: 'Deportivo Bordo' },
    { IdEquipo: 6, NombreEquipo: 'Deportivo Naranja' },
    { IdEquipo: 7, NombreEquipo: 'Deportivo Bordo' },
    { IdEquipo: 8, NombreEquipo: 'Deportivo Violeta' },
    { IdEquipo: 9, NombreEquipo: 'Deportivo Gris' },
    { IdEquipo: 10, NombreEquipo: 'Deportivo Verde' }
];

export const ARBITRO: string[] = [ 'Pedro Dominguez', 'Javier Benegas', 'Juan Cáceres', 'Federico Ruetalo', 'Gilberto Nandes' ];

export const JUEZ: string[] = [ 'Pablo Morales', 'Jesús Portillo', 'Elias Noguera', 'Derlis Gómez', 'Orlando Ríos' ];

export const PARTIDO: PartidoDTO[] = [
    { IdPartido: 1, FechaTorneo: 'Fecha 1', Estado: 'Finalizado', Dia: '25/09/2021', Hora: '17:00', EquipoLocal: 'Deportivo Gris', 
    GolesLocal: 4, EquipoVisitante: 'Deportivo Celeste', GolesVisitante: 1 },
    { IdPartido: 2, FechaTorneo: 'Fecha 1', Estado: 'Finalizado', Dia: '25/09/2021', Hora: '19:00', EquipoLocal: 'Deportivo Verde', 
    GolesLocal: 2, EquipoVisitante: 'Deportivo Negro', GolesVisitante: 7 },
    { IdPartido: 3, FechaTorneo: 'Fecha 1', Estado: 'Finalizado', Dia: '26/09/2021', Hora: '16:00', EquipoLocal: 'Deportivo Amarillo', 
    GolesLocal: 3, EquipoVisitante: 'Deportivo Rojo', GolesVisitante: 2 },
    { IdPartido: 4, FechaTorneo: 'Fecha 1', Estado: 'Finalizado', Dia: '26/09/2021', Hora: '18:00', EquipoLocal: 'Deportivo Azul', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Violeta', GolesVisitante: 0 },
    { IdPartido: 5, FechaTorneo: 'Fecha 1', Estado: 'Finalizado', Dia: '26/09/2021', Hora: '20:00', EquipoLocal: 'Deportivo Naranja', 
    GolesLocal: 5, EquipoVisitante: 'Deportivo Bordo', GolesVisitante: 1 },

    { IdPartido: 6, FechaTorneo: 'Fecha 2', Estado: 'Programado', Dia: '02/10/2021', Hora: '17:00', EquipoLocal: 'Deportivo Violeta', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Rojo', GolesVisitante: 0 },
    { IdPartido: 7, FechaTorneo: 'Fecha 2', Estado: 'Programado', Dia: '02/10/2021', Hora: '19:00', EquipoLocal: 'Deportivo Naranja', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Verde', GolesVisitante: 0 },
    { IdPartido: 8, FechaTorneo: 'Fecha 2', Estado: 'Programado', Dia: '03/10/2021', Hora: '16:00', EquipoLocal: 'Deportivo Azul', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Negro', GolesVisitante: 0 },
    { IdPartido: 9, FechaTorneo: 'Fecha 2', Estado: 'Programado', Dia: '03/10/2021', Hora: '18:00', EquipoLocal: 'Deportivo Gris', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Amarillo', GolesVisitante: 0 },
    { IdPartido: 10, FechaTorneo: 'Fecha 2', Estado: 'Programado', Dia: '03/10/2021', Hora: '20:00', EquipoLocal: 'Deportivo Bordo', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Celeste', GolesVisitante: 0 },

    { IdPartido: 11, FechaTorneo: 'Fecha 3', Estado: 'Programado', Dia: '09/10/2021', Hora: '17:00', EquipoLocal: 'Deportivo Amarillo', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Violeta', GolesVisitante: 0 },
    { IdPartido: 12, FechaTorneo: 'Fecha 3', Estado: 'Programado', Dia: '09/10/2021', Hora: '19:00', EquipoLocal: 'Deportivo Rojo', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Azul', GolesVisitante: 0 },
    { IdPartido: 13, FechaTorneo: 'Fecha 3', Estado: 'Programado', Dia: '10/10/2021', Hora: '16:00', EquipoLocal: 'Deportivo Verde', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Gris', GolesVisitante: 0 },
    { IdPartido: 14, FechaTorneo: 'Fecha 3', Estado: 'Programado', Dia: '10/10/2021', Hora: '18:00', EquipoLocal: 'Deportivo Negro', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Bordo', GolesVisitante: 0 },
    { IdPartido: 15, FechaTorneo: 'Fecha 3', Estado: 'Programado', Dia: '10/10/2021', Hora: '20:00', EquipoLocal: 'Deportivo Celeste', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Naranja', GolesVisitante: 0 },

    { IdPartido: 16, FechaTorneo: 'Fecha 4', Estado: 'Pendiente', Dia: '', Hora: '', EquipoLocal: 'Deportivo Celeste', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Negro', GolesVisitante: 0 },
    { IdPartido: 17, FechaTorneo: 'Fecha 4', Estado: 'Pendiente', Dia: '', Hora: '', EquipoLocal: 'Deportivo Amarillo', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Verde', GolesVisitante: 0 },
    { IdPartido: 18, FechaTorneo: 'Fecha 4', Estado: 'Pendiente', Dia: '', Hora: '', EquipoLocal: 'Deportivo Bordo', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Rojo', GolesVisitante: 0 },
    { IdPartido: 19, FechaTorneo: 'Fecha 4', Estado: 'Pendiente', Dia: '', Hora: '', EquipoLocal: 'Deportivo Violeta', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Naranja', GolesVisitante: 0 },
    { IdPartido: 20, FechaTorneo: 'Fecha 4', Estado: 'Pendiente', Dia: '', Hora: '', EquipoLocal: 'Deportivo Azul', 
    GolesLocal: 0, EquipoVisitante: 'Deportivo Gris', GolesVisitante: 0 },
]