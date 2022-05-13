import styled from 'styled-components'

const Button = ({ children, onClick }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
    font-size: 1.2rem;
    padding: 10px;
    text-transform: uppercase;
    display: block;
    width: 100%;
    border: solid #fff 1px;
    background-color: #fff;
    outline: none;
    margin-top: 10px;
    color: #1f643d;
    max-width: 320px;

    &:hover {
        background-color: transparent;
        color: #fff;
        cursor: pointer;
    }
`

export default Button
