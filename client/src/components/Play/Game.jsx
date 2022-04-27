// import { useEffect } from 'react'
import styled from 'styled-components'
// import useKeyboard from '../../hooks/useKeyboard'

// Components
import Board from './Board'

const Game = () => {
    // const [row, rowIndex] = useKeyboard(5)

    // useEffect(() => {
    //     console.log(row)
    // }, [row])

    return (
        <Container>
            <Board length={5} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

export default Game
