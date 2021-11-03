import React from 'react';
import styled from 'styled-components'
import narutoImg from "../src/imagens/naruto.png"
import { Quotes } from './components/quotes';

const App = () => {
    return(
        
        <Content> 
        <Quotes quote={'ok'} speaker={"Speaker"}/>
        <NarutoImg src={narutoImg} alt="Naruto"/>
        </Content>
       
    )
}

const Content = styled.div({
    height:"100vh",
    padding:"0 50px",
    display:"flex",
    /* flexDirection:"column", */
    justifyContent:"center",
    alingItems:"center",
    button:{
        display:"block",
        maxHeight: "30px",
        alignItems:"center",
    }

})

const NarutoImg = styled.img({
    maxWidth:"50vw",
    alignSelf:"flex-end",
})



export default App;