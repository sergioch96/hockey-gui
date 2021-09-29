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