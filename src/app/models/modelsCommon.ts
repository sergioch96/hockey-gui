export interface EquipoDTO {
    IdEquipo?: number,
    NombreEquipo?: string,
    CuerpoTecnico?: PersonaDTO[],
}

export interface ListaEquiposDTO {
    idEquipo?: number,
    nombreEquipo?: string,
    directorTecnico?: string,
    asistenteTecnico?: string,
    preparadorFisico?: string,
    estado?: boolean
}

export interface PersonaDTO {
    idPersona?: number,
    nombreApellido?: string,
    numDocumento?: string,
    fechaNacimiento?: string,
    telefono?: string,
    email?: string,
    idRol?: number,
    idEquipo?: number
}

export interface EstadoPartidoDTO {
    IdEstadoPartido?: number,
    Estado?: string
}

export interface PartidoDTO {
    idPartido?: number
    fechaTorneo?: string,
    estado?: string,
    idEstado?: number,
    dia?: string,
    hora?: string,
    equipoLocal?: string,
    idEquipoLocal?: number,
    equipoVisitante?: string,
    idEquipoVisitante?: number,
    golesLocal?: number,
    golesVisitante?: number,
    arbitro1?: string,
    idArbitro1?: number,
    arbitro2?: string,
    idArbitro2?: number,
    juez?: string
    idJuez?: number,
    capitanLocal?: string,
    capitanVisitante?: string,
    jugadoresLocal?: JugadorPartidoDTO[],
    jugadoresVisitante?: JugadorPartidoDTO[]
}

export interface JugadorPartidoDTO {
    idPersona?: number,
    nombreApellido?: string,
    numeroCamiseta?: number,
    goles?: number,
    tarjetasVerdes?: number,
    tarjetasAmarillas?: number,
    tarjetasRojas?: number,
    partidosSuspendidos?: number,
    partidosJugados?: number,
    idEquipo?: number,
    equipo?: string
}

export interface EmparejamientoDTO {
    local: number,
    visitante: number
}

export interface NumeroParticipanteDTO {
    idEquipo?: number,
    nombreEquipo?: string,
    numero?: number
}

export interface TablaPosicionesDTO {
    equipo: string,
    puntos: number,
    partidosJugados: number,
    partidosGanados: number,
    partidosEmpatados: number,
    partidosPerdidos: number,
    golesFavor: number,
    golesContra: number,
    diferenciaGoles: number
}