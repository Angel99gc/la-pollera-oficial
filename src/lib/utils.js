import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// Pone la primera letra de una palabra en mayuscula
export function UpperCaseWord (word) {
	return word.charAt(0).toUpperCase() + category.slice(1)
}