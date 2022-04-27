import styled from 'styled-components'

const Room = () => {
    return (
        <Container>
            <TitleContainer>
                <h4>Nombre de la sala</h4>
            </TitleContainer>
            <List>
                <li>Javier</li>
                <li>Ariana</li>
                <li>Abi</li>
                <li>Darling</li>
                <li>David</li>
                <li>7 más...</li>
            </List>
        </Container>
    )
}

const Container = styled.div`
    border: solid 2px #fff;
    background-color: transparent;
    margin-bottom: 10px;
    max-width: 320px;

    &:hover {
        background-color: rgba(255, 255, 255, .2);
        cursor: pointer;
    }
`
const TitleContainer = styled.div`
    border-bottom: 2px solid #fff;
    padding: 5px;

    h4 {
        color: #fff;
        font-weight: 400;
    }
`
const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5px;

    li {
        color: #cacaca;
        font-weight: 300;
        padding: 2px 5px;
    }
`

export default Room
