    /**
     * Registriert eine neue Teilnehmerzahl und aktualisiert die letzte Teilnehmerzahl.
     * @param Z darf nur ein Zeichen sein 
     * @throws 
     */
export function leetSpeakSingleLetter(Z:string) : string {
    if (Z.length !== 1){
        throw new Error("es darf nur genaue ein Zeichen");
    }

    return Z;
}