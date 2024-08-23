export function is_number(n: unknown) {
	return !isNaN(parseFloat(n as string)) && !isNaN(Number(n) - 0);
}
