export function formatDate(value: string) {
    return new Intl.DateTimeFormat('pt-Br').format(new Date(value))
}