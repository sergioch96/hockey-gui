export interface EquipoDTO {
    IdEquipo?: number,
    NombreEquipo?: string,
    CuerpoTecnico?: PersonaDTO[],
}

export interface PersonaDTO {
    IdPersona?: number,
    NombreApellido?: string,
    NumDocumento?: string,
    FechaNacimiento?: string,
    Telefono?: string,
    Email?: string,
    IdRol?: number,
    IdEquipo?: number
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