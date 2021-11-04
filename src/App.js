import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import narutoImg from "../src/imagens/naruto.png";
import { Quotes } from './components/quotes';
import { getQuote } from './services';

const App = () => {

    const [quoteState, setQouteState]= useState({quote: 'ok', speaker:'Speaker'});

    
    const onUpdate = async () => {
        const resQuote = await getQuote();
        console.log(resQuote)
    }

    return(
        
        <Content> 
        <Quotes 
        quote={quoteState.quote} 
        speaker={quoteState.speaker} 
        onUpdate = {onUpdate}/>
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