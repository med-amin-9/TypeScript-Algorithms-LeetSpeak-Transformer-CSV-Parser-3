import { leetSpeakRek } from '../src/leetSpeak';

test('should recursively convert a full string to LeetSpeak', () => {
    expect(leetSpeakRek("Hallo Welt")).toBe("H4llo W3lt");
    expect(leetSpeakRek("BIG SIZE")).toBe("816 5123");
    expect(leetSpeakRek("aegisz")).toBe("436152");
    expect(leetSpeakRek("")).toBe(""); // Empty string test
});

test('should return non-transformable characters unchanged', () => {
    expect(leetSpeakRek("Hello!")).toBe("H3llo!");
    expect(leetSpeakRek("123")).toBe("123");
});