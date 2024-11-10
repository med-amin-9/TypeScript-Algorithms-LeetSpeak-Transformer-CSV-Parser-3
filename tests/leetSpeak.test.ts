import {leetSpeakSingleLetter} from '../src/leetSpeak';

test('should throw an error for empty or multiple characters', () => {
    expect(() => leetSpeakSingleLetter("")).toThrow("es darf nur genaue ein Zeichen");
    expect(() => leetSpeakSingleLetter("ab")).toThrow("es darf nur genaue ein Zeichen");
});

test('should replace characters according to LeetSpeak rules', () => {
    expect(leetSpeakSingleLetter("A")).toBe("4");
    expect(leetSpeakSingleLetter("a")).toBe("4");
    expect(leetSpeakSingleLetter("E")).toBe("3");
    expect(leetSpeakSingleLetter("e")).toBe("3");
    expect(leetSpeakSingleLetter("I")).toBe("1");
    expect(leetSpeakSingleLetter("i")).toBe("1");
    expect(leetSpeakSingleLetter("B")).toBe("8");
    expect(leetSpeakSingleLetter("b")).toBe("8");
    expect(leetSpeakSingleLetter("G")).toBe("6");
    expect(leetSpeakSingleLetter("g")).toBe("6");
    expect(leetSpeakSingleLetter("S")).toBe("5");
    expect(leetSpeakSingleLetter("s")).toBe("5");
    expect(leetSpeakSingleLetter("Z")).toBe("2");
    expect(leetSpeakSingleLetter("z")).toBe("2");
});

test('should return the same character if no transformation is needed', () => {
    expect(leetSpeakSingleLetter("H")).toBe("H");
    expect(leetSpeakSingleLetter("!")).toBe("!");
    expect(leetSpeakSingleLetter(" ")).toBe(" ");
});