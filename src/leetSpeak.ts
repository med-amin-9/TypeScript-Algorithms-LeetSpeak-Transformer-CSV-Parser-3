    /**
     * Registriert eine neue Teilnehmerzahl und aktualisiert die letzte Teilnehmerzahl.
     * @param Z darf nur ein Zeichen sein 
     * @throws 
     */
    export function leetSpeakSingleLetter(character: string): string {
        if (character.length !== 1) {
            throw new Error("es darf nur genaue ein Zeichen");
        }
    
        // Define transformation rules
        switch (character.toLowerCase()) {
            case 'a': return '4';
            case 'e': return '3';
            case 'i': return '1';
            case 'b': return '8';
            case 'g': return '6';
            case 's': return '5';
            case 'z': return '2';
            default: return character; // Return character as-is if no transformation is needed
        }
    }

    export function leetSpeakIter(input: string): string {
        let result = "";
        for (let i = 0; i < input.length; i++) {
            result += leetSpeakSingleLetter(input[i]);
        }
        return result;
    }

    export function leetSpeakRek(input: string): string {
        // Base case: if the input string is empty, return an empty string
        if (input.length === 0) {
            return "";
        }
        
        // Recursive case: transform the first character and recursively process the rest
        return leetSpeakSingleLetter(input[0]) + leetSpeakRek(input.slice(1));
    }    