import styled from 'styled-components'

// Components
import Room from './Room'

const RoomsList = () => {
    return (
        <Container>
            <Room />
            <Room />
            <Room />
        </Container>
    )
}

const Container = styled.div`
    margin: 0 15px;
`

export default RoomsList
