import styled from 'styled-components'

// Components
import PageContainer from '../components/UI/PageContainer'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'

const HomePage = () => {
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
                        />
                        <Button>Jugar</Button>
                    </Form>
                </Container>
            </div>
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
