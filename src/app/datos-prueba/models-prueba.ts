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
    fecha?: string,
    hora?: string,
    equipoLocal?: string,
    equipoVisitante?: string
}

export interface GoleadorDTO {
    Nombre: string,
    Equipo: string,
    Goles: number
}

export interface TarjetaDTO {
    Nombre?: string,
    Equipo?: string,
    TarjetasVerdes?: number,
    TarjetasAmarillas?: number,
    TarjetasRojas?: number,
    Total?: number
}

export interface JugadorDTO {
    Nombre: string,
    Equipo: string,
}