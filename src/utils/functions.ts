export function generateSubRoute(title: string): string {
    return title
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, ''); // Remove non-alphanumeric characters except hyphens
}

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};