class Game {
    /**
     * @param {String} word
     * @param {String} wordTry
     * @returns {Array} Coincidencias entre la palabra correcta y el intento
     */

    static checkWord = (word, wordTry) => {
        if (word.length !== wordTry.length) {
            throw {
                message: 'La cantidad de letras de las palabras es diferente',
                code: 400
            }
        }

        let wordArr = word.split('')
        let wordTryArr = wordTry.split('')

        let pendingLettersWord = {}
        let pendingLettersTry = {}

        let matches = []

        // Recorrer ambas palabras
        for (let i = 0; i < wordTry.length; i++) {
            let letter = wordArr[i]
            let letterTry = wordTryArr[i]

            // Guardar aciertos
            if (letter === letterTry) {
                matches.push('correct')
            } else {
                matches.push('wrong')

                // Guardar cantidad de letras por palabra
                pendingLettersWord[letter] = pendingLettersWord[letter]
                    ? pendingLettersWord[letter] + 1
                    : 1
            }
        }

        /*
         * A = CANTIDAD DE CADA LETRA PENDIENTES POR REVISAR DE LA PALABRA CORRECTA {}
         * B = CANTIDAD DE CADA LETRA PENDIENTES POR REVISAR DE LA PALABRA INTENTO {}
         *
         * FOR (i):
         * Si la letra[i] es correcta, CONTINUE
         * Si la letra[i] se encuentra en A, marcar como 'almost' y restar 1 de la letra a ambos objetos
         */

        for (let i = 0; i < wordTry.length; i++) {
            let letter = wordTryArr[i]

            if (matches[i] === 'correct') {
                continue
            }

            if (pendingLettersWord[letter]) {
                matches[i] = 'almost'

                pendingLettersWord[letter] -= 1
            }
        }

        return matches
    }

    /**
     * @returns {String} Palabra aleatoria
     */
    static getWord = () => {
        let words = [
            'aireo',
            'fuego',
            'matar',
            'flora',
            'ruido',
            'rabia',
            'cabra',
            'tutor',
            'juego',
            'ganar',
            'brote',
            'gorra',
            'palas',
            'cubos',
            'linda',
            'furia',
            'secar',
            'llave',
            'silla',
            'burro',
            'herir',
            'ñandu',
            'ayuda',
            'zumba',
            'oiste',
            'decia',
            'cloro',
            'barco',
            'avion',
            'autos',
            'naves',
            'yelmo',
            'potro',
            'cinco',
            'nueve',
            'dudar',
            'pieza',
            'algas'
        ]

        let random = Math.floor(Math.random() * words.length)
        return words[random]
    }
}

export default Game
