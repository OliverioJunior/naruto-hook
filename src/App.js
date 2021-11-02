import React from 'react';
import styled from 'styled-components'
import narutoImg from "../src/imagens/naruto.png"


const App = () => {
    return(
        <Content> 
        <p>quote xpto - Speaker</p>
        <button >Quote No Jutsu</button>
        <NarutoImg src={narutoImg} alt="Naruto"/>
        </Content>
    )
}

const Content = styled.div({
    height:"100vh",
    padding:"0 50px",
    display:"flex",
    justifyContent:"center",
    alingItems:"center",

})

const NarutoImg = styled.img({
    maxWidth:"50vw",
    alignSelf:"flex-end",
})



export default App;