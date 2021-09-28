export interface Equipo {
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