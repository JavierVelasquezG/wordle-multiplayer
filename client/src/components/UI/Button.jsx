import styled from 'styled-components'

const Button = ({ children }) => {
    return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
    font-size: 1.2rem;
    padding: 10px;
    text-transform: uppercase;
    display: block;
    width: 100%;
    border: none;
    outline: none;
    margin-top: 10px;
`

export default Button
