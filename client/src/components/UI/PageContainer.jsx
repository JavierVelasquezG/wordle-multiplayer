import styled from 'styled-components'

const PageContainer = ({ children }) => {
    return <Container>{children}</Container>
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    min-height: 480px;
    overflow: scroll;
`

export default PageContainer
