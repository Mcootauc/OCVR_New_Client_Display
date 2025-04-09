export function getAge(dateOfBirth: string) {
    if (!dateOfBirth) return 'Unknown';

    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate(); // days in previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} year${years !== 1 ? 's' : ''} ${months} month${
        months !== 1 ? 's' : ''
    } ${days} day${days !== 1 ? 's' : ''}`;
}

export function getAgeStringFromDate(date: string | null | undefined): string {
    if (!date) return 'Unknown';

    const birthDate = new Date(date);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate(); // Add days from previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const parts = [];
    if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
    if (days > 0 || parts.length === 0)
        parts.push(`${days} day${days !== 1 ? 's' : ''}`);

    return parts.join(' ') + ' old';
}
