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

export const parseDateToPattern = (date) => {
    return date.split('/').reverse().join('-');
}

export const stateList = [
    '',
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
]

export const dataTrimmer = (data) => {
    for (var key in data) {
        data[key] = typeof data[key] == 'string' ? data[key].trim() : data[key]
    }

    return data
}

export const dataToUpperCase = (data) => {
    for (var key in data) {
        data[key] = typeof data[key] == 'string' ? data[key].toUpperCase() : data[key]
    }

    return data
}

export const dataToPascalCase = (data) => {
    for (var key in data) {
        data[key] = typeof data[key] == 'string' ? data[key].split(' ').map(x => x.charAt(0) + x.slice(1).toLowerCase()).join(' ') : data[key]
    }

    return data
}