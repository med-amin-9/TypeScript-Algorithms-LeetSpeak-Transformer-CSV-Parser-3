export function parseCSV(input: string): string[][] {
    // Split the input by lines
    const lines = input.split('\n');

    // Parse each line into an array of values
    const result = lines.map(line => line.split(','));

    return result;
}