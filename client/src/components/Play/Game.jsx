// Components
import styled from 'styled-components'
import Board from './Board'

const Game = () => {
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
