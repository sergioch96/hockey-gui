export interface TablaPosicionesDTO {
    equipo: string,
    puntos: number,
    partidosJugados: number,
    partidosGanados: number,
    partidosEmpatados: number,
    partidosPerdidos: number,
    golesFavor: number,
    golesContra: number,
    diferenciaGoles: number,
    color?: string
}

export interface FixtureDTO {
    fecha: string,
    hora: string,
    equipoLocal: string,
    equipoVisitante: string
}