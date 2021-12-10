//import { EquipoDTO, PartidoDTO } from "../models/modelsCommon";
import { FixtureDTO, GoleadorDTO, JugadorDTO, TablaPosicionesDTO, TarjetaDTO } from "./models-prueba";

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

// export const EMPAREJAMIENTOS: FixtureDTO[] = [
//     { equipoLocal: 'Deportivo Violeta', equipoVisitante: 'Deportivo Rojo', fecha: 'fecha 1' },
//     { equipoLocal: 'Deportivo Naranja', equipoVisitante: 'Deportivo Verde', fecha: 'fecha 1' },
//     { equipoLocal: 'Deportivo Azul', equipoVisitante: 'Deportivo Negro', fecha: 'fecha 1' },
//     { equipoLocal: 'Deportivo Gris', equipoVisitante: 'Deportivo Amarillo', fecha: 'fecha 1' },
//     { equipoLocal: 'Deportivo Bordo', equipoVisitante: 'Deportivo Celeste', fecha: 'fecha 1' },

//     { equipoLocal: 'Deportivo Amarillo', equipoVisitante: 'Deportivo Violeta', fecha: 'fecha 2' },
//     { equipoLocal: 'Deportivo Rojo', equipoVisitante: 'Deportivo Azul', fecha: 'fecha 2' },
//     { equipoLocal: 'Deportivo Verde', equipoVisitante: 'Deportivo Gris', fecha: 'fecha 2' },
//     { equipoLocal: 'Deportivo Negro', equipoVisitante: 'Deportivo Bordo', fecha: 'fecha 2' },
//     { equipoLocal: 'Deportivo Celeste', equipoVisitante: 'Deportivo Naranja', fecha: 'fecha 2' },

//     { equipoLocal: 'Deportivo Amarillo', equipoVisitante: 'Deportivo Naranja', fecha: 'fecha 3' },
//     { equipoLocal: 'Deportivo Verde', equipoVisitante: 'Deportivo Azul', fecha: 'fecha 3' },
//     { equipoLocal: 'Deportivo Violeta', equipoVisitante: 'Deportivo Celeste', fecha: 'fecha 3' },
//     { equipoLocal: 'Deportivo Gris', equipoVisitante: 'Deportivo Rojo', fecha: 'fecha 3' },
//     { equipoLocal: 'Deportivo Negro', equipoVisitante: 'Deportivo Bordo', fecha: 'fecha 3' },

//     { equipoLocal: 'Deportivo Bordo', equipoVisitante: 'Deportivo Naranja', fecha: 'fecha 4' },
//     { equipoLocal: 'Deportivo Verde', equipoVisitante: 'Deportivo Violeta', fecha: 'fecha 4' },
//     { equipoLocal: 'Deportivo Rojo', equipoVisitante: 'Deportivo Amarillo', fecha: 'fecha 4' },
//     { equipoLocal: 'Deportivo Gris', equipoVisitante: 'Deportivo Azul', fecha: 'fecha 4' },
//     { equipoLocal: 'Deportivo Negro', equipoVisitante: 'Deportivo Celeste', fecha: 'fecha 4' }
// ];

// export const FECHA_TORNEO: string[] = [ 'Fecha 1', 'Fecha 2', 'Fecha 3', 'Fecha 4', 'Fecha 5', 'Fecha 6'];

export const TIPO_TORNEO: string[] = [ 'Apertura', 'Clausura' ];

// export const EQUIPO: EquipoDTO[] = [
//     { IdEquipo: 1, NombreEquipo: 'Deportivo Negro' },
//     { IdEquipo: 2, NombreEquipo: 'Deportivo Amarillo' },
//     { IdEquipo: 3, NombreEquipo: 'Deportivo Azul' },
//     { IdEquipo: 4, NombreEquipo: 'Deportivo Celeste' },
//     { IdEquipo: 5, NombreEquipo: 'Deportivo Rojo' },
//     { IdEquipo: 6, NombreEquipo: 'Deportivo Naranja' },
//     { IdEquipo: 7, NombreEquipo: 'Deportivo Bordo' },
//     { IdEquipo: 8, NombreEquipo: 'Deportivo Violeta' },
//     { IdEquipo: 9, NombreEquipo: 'Deportivo Gris' },
//     { IdEquipo: 10, NombreEquipo: 'Deportivo Verde' }
// ];

export const ARBITRO: string[] = [ 'Pedro Dominguez', 'Javier Benegas', 'Juan Cáceres', 'Federico Ruetalo', 'Gilberto Nandes' ];

export const JUEZ: string[] = [ 'Pablo Morales', 'Jesús Portillo', 'Elias Noguera', 'Derlis Gómez', 'Orlando Ríos' ];

// export const PARTIDO: PartidoDTO[] = [
//     { idPartido: 1, fechaTorneo: 'Fecha 1', estado: 'Finalizado', dia: '25/09/2021', hora: '17:00', equipoLocal: 'Deportivo Gris', 
//     golesLocal: 4, equipoVisitante: 'Deportivo Celeste', golesVisitante: 1 },
//     { idPartido: 2, fechaTorneo: 'Fecha 1', estado: 'Finalizado', dia: '25/09/2021', hora: '19:00', equipoLocal: 'Deportivo Verde', 
//     golesLocal: 2, equipoVisitante: 'Deportivo Negro', golesVisitante: 7 },
//     { idPartido: 3, fechaTorneo: 'Fecha 1', estado: 'Finalizado', dia: '26/09/2021', hora: '16:00', equipoLocal: 'Deportivo Amarillo', 
//     golesLocal: 3, equipoVisitante: 'Deportivo Rojo', golesVisitante: 2 },
//     { idPartido: 4, fechaTorneo: 'Fecha 1', estado: 'Finalizado', dia: '26/09/2021', hora: '18:00', equipoLocal: 'Deportivo Azul', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Violeta', golesVisitante: 0 },
//     { idPartido: 5, fechaTorneo: 'Fecha 1', estado: 'Finalizado', dia: '26/09/2021', hora: '20:00', equipoLocal: 'Deportivo Naranja', 
//     golesLocal: 5, equipoVisitante: 'Deportivo Bordo', golesVisitante: 1 },

//     { idPartido: 6, fechaTorneo: 'Fecha 2', estado: 'Programado', dia: '02/10/2021', hora: '17:00', equipoLocal: 'Deportivo Violeta', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Rojo', golesVisitante: 0 },
//     { idPartido: 7, fechaTorneo: 'Fecha 2', estado: 'Programado', dia: '02/10/2021', hora: '19:00', equipoLocal: 'Deportivo Naranja', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Verde', golesVisitante: 0 },
//     { idPartido: 8, fechaTorneo: 'Fecha 2', estado: 'Programado', dia: '03/10/2021', hora: '16:00', equipoLocal: 'Deportivo Azul', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Negro', golesVisitante: 0 },
//     { idPartido: 9, fechaTorneo: 'Fecha 2', estado: 'Programado', dia: '03/10/2021', hora: '18:00', equipoLocal: 'Deportivo Gris', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Amarillo', golesVisitante: 0 },
//     { idPartido: 10, fechaTorneo: 'Fecha 2', estado: 'Programado', dia: '03/10/2021', hora: '20:00', equipoLocal: 'Deportivo Bordo', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Celeste', golesVisitante: 0 },

//     { idPartido: 11, fechaTorneo: 'Fecha 3', estado: 'Programado', dia: '09/10/2021', hora: '17:00', equipoLocal: 'Deportivo Amarillo', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Violeta', golesVisitante: 0 },
//     { idPartido: 12, fechaTorneo: 'Fecha 3', estado: 'Programado', dia: '09/10/2021', hora: '19:00', equipoLocal: 'Deportivo Rojo', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Azul', golesVisitante: 0 },
//     { idPartido: 13, fechaTorneo: 'Fecha 3', estado: 'Programado', dia: '10/10/2021', hora: '16:00', equipoLocal: 'Deportivo Verde', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Gris', golesVisitante: 0 },
//     { idPartido: 14, fechaTorneo: 'Fecha 3', estado: 'Programado', dia: '10/10/2021', hora: '18:00', equipoLocal: 'Deportivo Negro', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Bordo', golesVisitante: 0 },
//     { idPartido: 15, fechaTorneo: 'Fecha 3', estado: 'Programado', dia: '10/10/2021', hora: '20:00', equipoLocal: 'Deportivo Celeste', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Naranja', golesVisitante: 0 },

//     { idPartido: 16, fechaTorneo: 'Fecha 4', estado: 'Pendiente', dia: '', hora: '', equipoLocal: 'Deportivo Celeste', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Negro', golesVisitante: 0 },
//     { idPartido: 17, fechaTorneo: 'Fecha 4', estado: 'Pendiente', dia: '', hora: '', equipoLocal: 'Deportivo Amarillo', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Verde', golesVisitante: 0 },
//     { idPartido: 18, fechaTorneo: 'Fecha 4', estado: 'Pendiente', dia: '', hora: '', equipoLocal: 'Deportivo Bordo', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Rojo', golesVisitante: 0 },
//     { idPartido: 19, fechaTorneo: 'Fecha 4', estado: 'Pendiente', dia: '', hora: '', equipoLocal: 'Deportivo Violeta', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Naranja', golesVisitante: 0 },
//     { idPartido: 20, fechaTorneo: 'Fecha 4', estado: 'Pendiente', dia: '', hora: '', equipoLocal: 'Deportivo Azul', 
//     golesLocal: 0, equipoVisitante: 'Deportivo Gris', golesVisitante: 0 },
// ];

export const GOLEADOR: GoleadorDTO[] = [
    { Nombre: 'Elias Vera', Equipo: 'Deportivo Negro', Goles: 27 },
    { Nombre: 'Horacio Pekholtz', Equipo: 'Deportivo Rojo', Goles: 23 },
    { Nombre: 'Alejandro Mbaibe', Equipo: 'Deportivo Verde', Goles: 21 },
    { Nombre: 'Santiago Villamayor', Equipo: 'Deportivo Negro', Goles: 18 },
    { Nombre: 'Julio Russo', Equipo: 'Deportivo Verde', Goles: 18 },
    { Nombre: 'Ricardo Samudio', Equipo: 'Deportivo Negro', Goles: 15 },
    { Nombre: 'Gabriel Paredes', Equipo: 'Deportivo Amarillo', Goles: 13 },
    { Nombre: 'Rolando Ojeda', Equipo: 'Deportivo Celeste', Goles: 11 },
    { Nombre: 'Fabián Romero', Equipo: 'Deportivo Negro', Goles: 11 },
    { Nombre: 'Mateo Giménez', Equipo: 'Deportivo Naranja', Goles: 10 },
    { Nombre: 'Pablo Zambrini', Equipo: 'Deportivo Rojo', Goles: 10 },
    { Nombre: 'Juan Benegas', Equipo: 'Deportivo Gris', Goles: 9 },
    { Nombre: 'Mathias Samudio', Equipo: 'Deportivo Rojo', Goles: 9 },
    { Nombre: 'Renato Zárate', Equipo: 'Deportivo Rojo', Goles: 9 },
    { Nombre: 'Guillermo Mendoza', Equipo: 'Deportivo Naranja', Goles: 8 },
    { Nombre: 'Humberto Recalde', Equipo: 'Deportivo Gris', Goles: 8 },
    { Nombre: 'Mario Cardozo', Equipo: 'Deportivo Bordo', Goles: 7 },
    { Nombre: 'Lino Laneri', Equipo: 'Deportivo Negro', Goles: 7 },
    { Nombre: 'Alan Montenegro', Equipo: 'Deportivo Celeste', Goles: 7 },
    { Nombre: 'Jorge Pereira', Equipo: 'Deportivo Verde', Goles: 7 },
    { Nombre: 'Santiago Ruetalo', Equipo: 'Deportivo Naranja', Goles: 7 },
]

export const TARJETA: TarjetaDTO[] = [
    { Nombre: 'Horacio Pekholtz', Equipo: 'Deportivo Rojo', TarjetasVerdes: 3, TarjetasAmarillas: 2, TarjetasRojas: 0 },
    { Nombre: 'Ricardo Samudio', Equipo: 'Deportivo Negro', TarjetasVerdes: 3, TarjetasAmarillas: 1, TarjetasRojas: 0 },
    { Nombre: 'Rolando Ojeda', Equipo: 'Deportivo Celeste', TarjetasVerdes: 2, TarjetasAmarillas: 1, TarjetasRojas: 0 },
    { Nombre: 'Fabián Romero', Equipo: 'Deportivo Negro', TarjetasVerdes: 2, TarjetasAmarillas: 0, TarjetasRojas: 1 },
    { Nombre: 'Santiago Villamayor', Equipo: 'Deportivo Negro', TarjetasVerdes: 2, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Gabriel Paredes', Equipo: 'Deportivo Amarillo', TarjetasVerdes: 1, TarjetasAmarillas: 1, TarjetasRojas: 1 },
    { Nombre: 'Mateo Giménez', Equipo: 'Deportivo Naranja', TarjetasVerdes: 1, TarjetasAmarillas: 1, TarjetasRojas: 0 },
    { Nombre: 'Julio Russo', Equipo: 'Deportivo Verde', TarjetasVerdes: 1, TarjetasAmarillas: 1, TarjetasRojas: 1 },
    { Nombre: 'Mathias Samudio', Equipo: 'Deportivo Rojo', TarjetasVerdes: 1, TarjetasAmarillas: 1, TarjetasRojas: 0 },
    { Nombre: 'Elias Vera', Equipo: 'Deportivo Negro', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 1 },
    { Nombre: 'Juan Benegas', Equipo: 'Deportivo Gris', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Renato Zárate', Equipo: 'Deportivo Rojo', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Guillermo Mendoza', Equipo: 'Deportivo Naranja', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Alejandro Mbaibe', Equipo: 'Deportivo Verde', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Mario Cardozo', Equipo: 'Deportivo Bordo', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Humberto Recalde', Equipo: 'Deportivo Gris', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Lino Laneri', Equipo: 'Deportivo Negro', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Alan Montenegro', Equipo: 'Deportivo Celeste', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Jorge Pereira', Equipo: 'Deportivo Verde', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Pablo Zambrini', Equipo: 'Deportivo Rojo', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
    { Nombre: 'Santiago Ruetalo', Equipo: 'Deportivo Naranja', TarjetasVerdes: 1, TarjetasAmarillas: 0, TarjetasRojas: 0 },
];

export const JUGADOR: JugadorDTO[] = [
    { Nombre: 'Ricardo Samudio', Equipo: 'Deportivo Negro' },
    { Nombre: 'Fabián Romero', Equipo: 'Deportivo Negro' },
    { Nombre: 'Santiago Villamayor', Equipo: 'Deportivo Negro' },
    { Nombre: 'Elias Vera', Equipo: 'Deportivo Negro' },
    { Nombre: 'Santiago Ruetalo', Equipo: 'Deportivo Negro' },   
    { Nombre: 'Lino Laneri', Equipo: 'Deportivo Negro' },
    { Nombre: 'Federico Ruetalo', Equipo: 'Deportivo Negro' },
    { Nombre: 'Gabriel Ruetalo', Equipo: 'Deportivo Negro' },
    { Nombre: 'Sebastián Villamayor', Equipo: 'Deportivo Negro' },
    { Nombre: 'Mauricio Gómez', Equipo: 'Deportivo Negro' },
    { Nombre: 'Alberto Martínez', Equipo: 'Deportivo Negro' },
    { Nombre: 'Aldo Vera', Equipo: 'Deportivo Negro' },
    { Nombre: 'Juan Planas', Equipo: 'Deportivo Negro' },
    { Nombre: 'Rodolfo Paredes', Equipo: 'Deportivo Negro' },
    { Nombre: 'Arturo Mora', Equipo: 'Deportivo Negro' },
    { Nombre: 'Lucas Fretes', Equipo: 'Deportivo Negro' },
    { Nombre: 'Javier González', Equipo: 'Deportivo Negro' },
    { Nombre: 'Hugo Romero', Equipo: 'Deportivo Negro' },

    { Nombre: 'Horacio Pekholtz', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Rolando Ojeda', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Gabriel Paredes', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Mateo Giménez', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Julio Russo', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Mathias Samudio', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Juan Benegas', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Renato Zárate', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Guillermo Mendoza', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Alejandro Mbaibe', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Mario Cardozo', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Humberto Recalde', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Alan Montenegro', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Jorge Pereira', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Pablo Zambrini', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Alexis Duarte', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Tobias Monges', Equipo: 'Deportivo Rojo' },
    { Nombre: 'Pablo Villar', Equipo: 'Deportivo Rojo' },

]