import { useEffect, useState } from 'react'

const useKeyboard = (wordLength) => {
    if (wordLength === undefined || wordLength < 5) {
        throw Error('El largo de la palabra debe ser de al menos 5')
    }

    const [currentRow, setCurrentRow] = useState([])
    const [currentRowIndex, setCurrentRowIndex] = useState(0)

    useEffect(() => {
        const keyListener = (e) => {
            let key = e.key.toLowerCase()

            if (e.keyCode >= 65 && e.keyCode <= 90) {
                // Letra
                if (currentRow.length === wordLength) {
                    return
                }

                setCurrentRow((prev) => [...prev, key])
            } else if (e.keyCode === 8) {
                // Backspace
                if (currentRow.length === 0) {
                    return
                }

                setCurrentRow((prev) => {
                    if (prev.length === 1) {
                        return []
                    } else {
                        return prev.filter((_, i) => i !== prev.length - 1)
                    }
                })
            } else if (e.keyCode === 13) {
                // Enter
                if (currentRow.length === wordLength) {
                    if (currentRowIndex === 5) {
                        // Terminar juego
                        return
                    }

                    // Siguiente fila
                    setCurrentRow([])
                    setCurrentRowIndex((prev) => prev + 1)
                }
            }
        }

        document.addEventListener('keydown', keyListener)

        return () => {
            document.removeEventListener('keydown', keyListener)
        }
    }, [currentRow.length, wordLength, currentRowIndex])

    return [currentRow, currentRowIndex]
}

export default useKeyboard
