import { parseCSV } from '../src/simpleCSV';

test('should parse a basic CSV string', () => {
    expect(parseCSV("a,b\nc,d")).toEqual([["a", "b"], ["c", "d"]]);
});

test('should handle empty values correctly', () => {
    expect(parseCSV("a,,b\nc,d,")).toEqual([["a", "", "b"], ["c", "d", ""]]);
});

test('should handle varying row lengths', () => {
    expect(parseCSV("a,b,c\nd,e\nf")).toEqual([["a", "b", "c"], ["d", "e"], ["f"]]);
});

test('should return an empty row for an empty input', () => {
    expect(parseCSV("")).toEqual([[""]]);
});