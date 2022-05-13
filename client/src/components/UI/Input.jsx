import styled from 'styled-components'

const Input = ({ id, type, label, onChange, value }) => {
    return (
        <>
            <Label htmlFor={id}>{label}</Label>
            <StyledInput value={value} onChange={onChange} name={id} id={id} type={type} />
        </>
    )
}

const Label = styled.label`
    display: block;
    color: #cacaca;
    font-size: 1.2rem;
    padding-bottom: 5px;
    font-weight: 300;
`
const StyledInput = styled.input`
    padding: 10px;
    display: block;
    width: 100%;
    border: solid 1px #fff;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    outline: none;
`

export default Input
