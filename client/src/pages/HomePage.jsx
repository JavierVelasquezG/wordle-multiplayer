import { useState } from 'react'
import styled from 'styled-components'
// import endpoint from '../constants'

// Components
import PageContainer from '../components/UI/PageContainer'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import Error from '../components/UI/Error'

const HomePage = () => {
    const [username, setUsername] = useState('')

    return (
        <HomeContainer>
            <div>
                <Title>Wordle Multijugador</Title>
                <Container>
                    <Form>
                        <Input
                            type="text"
                            id="username"
                            label="Nombre de Usuario"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            value={username}
                        />
                        <Button>Jugar</Button>
                    </Form>
                </Container>
            </div>
            <Error></Error>
        </HomeContainer>
    )
}

const HomeContainer = styled(PageContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 3rem;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`
const Form = styled.div`
    width: 300px;
`

export default HomePage
