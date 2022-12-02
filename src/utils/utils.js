export const subtractYears = (date, years) => {
    date.setFullYear(date.getFullYear() - years)
    return date
}

export const parseRoleToString = (int) => {
    switch (int) {
        case 0:
            return 'Colaborador'
        case 1:
            return 'Departamento Administrativo'
        case 2:
            return 'Administrador do Sistema'
        case 3:
            return 'Gestor'
    }
}