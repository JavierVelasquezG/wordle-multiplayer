import styled from 'styled-components'

// Components
import PageContainer from '../components/UI/PageContainer'
import Input from '../components/UI/Input'
import Button from './../components/UI/Button'

const HomePage = () => {
    return (
        <PageContainer>
            <div>
                <Title>Wordle Multiplayer</Title>
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
        </PageContainer>
    )
}

const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 3rem;
`
const Form = styled.div`
    width: 80%;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`

export default HomePage
