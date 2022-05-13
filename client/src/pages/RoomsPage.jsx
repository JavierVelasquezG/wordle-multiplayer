import styled from 'styled-components'

// Components
import PageContainer from '../components/UI/PageContainer'
import Title from '../components/UI/Title'
import Button from '../components/UI/Button'
import RoomsList from '../components/Rooms/RoomsList'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RoomsPage = () => {
    const token = useSelector(state => state.auth.token)

    if (!token) {
        return <Navigate to="/" />
    }

    return (
        <PageContainer>
            <Title>Salas</Title>
            <RoomsList />
            <ButtonContainer>
                <Button>Nueva sala</Button>
            </ButtonContainer>
        </PageContainer>
    )
}

const ButtonContainer = styled.div`
    padding: 15px;
`

export default RoomsPage
