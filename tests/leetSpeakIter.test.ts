import { leetSpeakIter } from '../src/leetSpeak';

test('should convert a full string to LeetSpeak', () => {
    expect(leetSpeakIter("Hallo Welt")).toBe("H4llo W3lt");
    expect(leetSpeakIter("BIG SIZE")).toBe("816 5123");
    expect(leetSpeakIter("aegisz")).toBe("436152");
    expect(leetSpeakIter("")).toBe(""); // Empty string test
});

test('should return non-transformable characters unchanged', () => {
    expect(leetSpeakIter("Hello!")).toBe("H3llo!");
    expect(leetSpeakIter("123")).toBe("123");
});
