export function subtractYears(date, years) {
    date.setFullYear(date.getFullYear() - years)
    return date
}