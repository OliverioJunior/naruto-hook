import {render,screen,fireEvent} from "@testing-library/react";
import { Quotes } from "./Quotes";

const Quotes = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () =>{
    render(<Quotes quote ={Quotes} speaker ={speaker}/>);

    const quoteEl = screen.getByText(Quotes);
    const speakerEl = screen.getByText(`- ${speaker}`);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
})

test("calls a callback when button is pressed", ()=>{
     const callback = jest.fn();

     render(<Quotes quote = {Quotes} speaker ={speaker} onUpdate={callback}/>);

     const buttonEl = screen.getByRole('button');
     fireEvent.click(buttonEl);

     expect(callback).toHaveBeenCalledTimes(1);
})