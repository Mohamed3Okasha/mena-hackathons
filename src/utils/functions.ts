export function generateEventId(title: string): string {
    return title
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, ''); // Remove non-alphanumeric characters except hyphens
}