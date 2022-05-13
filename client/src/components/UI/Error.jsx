import styled from 'styled-components'

const Error = ({ children }) => {
    if (children) {
        return <Container>{children}</Container>
    }

    return
}

const Container = styled.div`
    position: absolute;
    bottom: 15px;
    right: 0;
    background-color: #fff;
    color: red;
    padding: 15px;
    font-size: 1.2rem;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`

export default Error
