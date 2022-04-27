import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useKeyboard from '../../hooks/useKeyboard'

const Box = ({ length, row, column }) => {
    const [letter, setLetter] = useState('')
    const [currentRow, currentRowIndex] = useKeyboard(length)

    useEffect(() => {
        if (row === currentRowIndex) {
            if (currentRow[column]) {
                setLetter(currentRow[column])
            } else {
                setLetter('')
            }
        }
    }, [currentRow, currentRowIndex, row, column])

    return (
        <Container length={length}>
            <Letter length={length}>{letter}</Letter>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 60px;
    width: ${(props) => 300 / props.length}px;
    height: ${(props) => 300 / props.length}px;
`
const Letter = styled.div`
    max-width: 55px;
    max-height: 55px;
    width: ${(props) => (300 / props.length) - 5}px;
    height: ${(props) => (300 / props.length) - 5}px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-transform: uppercase;
`

export default Box
