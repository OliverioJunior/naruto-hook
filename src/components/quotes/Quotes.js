import styled from "styled-components"
import {string} from 'prop-types';

export const Quotes = ({quote, speaker}) => {
    return (
        <Wrapper>
        <Quote>{quote}</Quote>
        <Speaker>- {speaker}</Speaker>
        <button >Quote No Jutsu</button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    speaker:string,
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