import { render, screen, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TerminalComponent from "./terminal";

describe('TerminalComponent', () => {
    it('renders to screen with correct welcome message', () => {
        render(TerminalComponent());
        const welcomeMessage = screen.getByText(`Welcome to my Porfolio, to view my resume please type "resume" otherwise please feel free to explore the house by having a "lookAround"! If you get stuck, ask for "help".`);
        expect(welcomeMessage).toBeInTheDocument(); 
    })
    it('renders with correct prompt', () => {
        render(TerminalComponent());
        const prompt = screen.getByText('>> what would you like to do?')
        expect(prompt).toBeInTheDocument();
    })
    it('can be typed into', () => {
        render(TerminalComponent());
        const inputField = document.getElementsByClassName('index_lineText__j6qNj')[0];
        userEvent.type(inputField, 'lookAround');
        const check = screen.getByText('lookAround');
        expect(check).toBeInTheDocument();
    })
    // it('handles the lookAround input', () => {
    //     render(TerminalComponent());
    //     const inputField = document.getElementById('terminalEditor');
    //     userEvent.click(inputField);
    //     userEvent.type(inputField, 'lookAround');
    //     userEvent.type(inputField, `{enter}`)
    //     const roomDescription = screen.getByText(`You're in a small office. Before you stands a large Mahogany desk adorned with a distastefully bright RGB Keyboard going full rainbow vomit mode and an equally sickening computer to match. Two large monitors sit on the desk one displaying a YouTube video and another with a resume on screen. The walls are littered with the "hang in there" posters you'd find in a high school. Directly behind the desk are three plaques on the wall.`);
    //     expect(roomDescription).toBeInTheDocument();
    // })
})