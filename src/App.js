import React from 'react';
import { useState,useEffect,useRef } from 'react';
import styled from 'styled-components';
import narutoImg from "../src/imagens/naruto.png";
import { Quotes } from './components/quotes';
import { getQuote } from './services';
import jutsoSound from '../src/sounds/jutso.mp3'


const audio = new Audio(jutsoSound)

const App = () => {
    const isMounted = useRef(true);
    const [quoteState, setQuoteState]= useState(
        {quote: 'Loading Quote', 
         speaker:'Loading speaker...'
    });

    
    const onUpdate = () => {
        const resQuote =  getQuote();
        
        if(isMounted.current){
            setQuoteState(resQuote)
            console.log('test')
            audio.play();
        }
    }

    useEffect(()=>{
        onUpdate();
        console.log("useEffect")
    return()=> {
            isMounted.current = false;
        };
    },[])

    return(
        
        <Content> 
        <Quotes 
        {...quoteState} 
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