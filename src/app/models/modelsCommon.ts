export interface Equipo {
    IdEquipo?: number,
    NombreEquipo?: string,
    DirectorTecnico?: PersonaDTO,
    AsistenteTecnico?: PersonaDTO,
    PreparadorFisico?: PersonaDTO,
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