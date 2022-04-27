import styled from 'styled-components'

const Title = ({ children }) => {
    return (
        <Container>
            <StyledH2>{children}</StyledH2>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 15px;
`
const StyledH2 = styled.h2`
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
`

export default Title
