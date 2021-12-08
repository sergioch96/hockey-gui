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
    IdPartido?: number
    FechaTorneo?: string,
    Estado?: string,
    IdEstado?: number,
    Dia?: string,
    Hora?: string,
    EquipoLocal?: string,
    IdEquipoLocal?: number,
    EquipoVisitante?: string,
    IdEquipoVisitante?: number,
    GolesLocal?: number,
    GolesVisitante?: number,
    Arbitro1?: string,
    Arbitro2?: string,
    Juez?: string
}