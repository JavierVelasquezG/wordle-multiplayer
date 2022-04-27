import styled from 'styled-components'

const PageContainer = ({ children, className }) => {
    return <Container className={className}>{children}</Container>
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    min-height: 480px;
    overflow: scroll;
`

export default PageContainer
