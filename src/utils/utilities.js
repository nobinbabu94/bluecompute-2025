

export const sanitizeName = (value) => {
    return value.replace(/[^a-zA-Z\s]/g, '').slice(0, 20); // keep only letters/spaces, max 20 chars
};

export const sanitizePhone = (value) => {
    return value.replace(/[^0-9-]/g, '').slice(0, 20);
};

export function sanitizeEmail(value) {
  // Remove ALL whitespace (including spaces, tabs, etc.)
  const noSpaces = value.replace(/\s/g, '');

  // Only allow valid email characters
  const cleaned = noSpaces.replace(/[^a-zA-Z0-9@._-]/g, '');

  return cleaned.slice(0, 50);
}

export const sanitizeCompany = (value) => {
    
    const cleaned = value.replace(/[^a-zA-Z\s]/g, ''); // Remove anything except letters & spaces
    return cleaned.slice(0, 20); // Max length 20
};

export const sanitizeMessage = (value) => {
    const words = value.trim().split(/\s+/); // Split by whitespace
    if (words.length <= 500) return value;
    return words.slice(0, 500).join(' ');
};