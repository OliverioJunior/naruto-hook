import {render,screen, fireEvent} from '@testing-library/react';
import {App} from './App';
import {rest} from 'msw'
import {setupServer} from 'msw/node';

const response = { speaker: "Speaker", quote: 'test quote'};

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
)

test('renders the app woth a button, a quote and a button', () =>{
    render(<App/>);


    const buttonEl = screen.getByRole('button')
    const imageEl = screen.getByRole('img')
    const textEl = screen.getByText(/Speaker/i)

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});

test('calls api on button click and update its text', ()=>{
    render(<App/>);

    const buttonEl = screen.getByRole('button')
    fireEvent.click(buttonEl)

    const quoteEl = await screen.findByText(response.quote);

    expect(quoteEl).toBeInTheDocument();
})