import {leetSpeakSingleLetter} from '../src/leetSpeak';

test('should throw an error for empty or multiple characters', () => {
    expect(() => leetSpeakSingleLetter("")).toThrow("es darf nur genaue ein Zeichen");
    expect(() => leetSpeakSingleLetter("ab")).toThrow("es darf nur genaue ein Zeichen");
});

test('should return the same character if no transformation is needed', () => {
    expect(leetSpeakSingleLetter("H")).toBe("H");
});