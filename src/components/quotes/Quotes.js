import styled from "styled-components"
import {string,func} from 'prop-types';
import { Button } from "..";

export const Quotes = ({quote, speaker,onUpdate}) => {
    return (
        <Wrapper>
        <Quote>{quote}</Quote>
        <Speaker>- {speaker}</Speaker>
        <Button onClick={onUpdate}>Quote No Jutsu</Button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    speaker:string,
    onUpdate:func,
}

const Wrapper = styled.div({
    flex:"1",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
})
const Quote = styled.p({
    fontSize:"2em",
    /* flex:"1", */
    margin:"0", 
})

const Speaker = styled.p(Quote,{

    textAlign:"rigth",
    marginBotton:"50px",
})