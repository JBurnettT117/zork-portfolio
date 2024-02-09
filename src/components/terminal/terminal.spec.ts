import React, { Component } from "react";
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TerminalComponent from "./terminal";

describe('TerminalComponent', () => {
    beforeEach(() => {
        render(TerminalComponent())
    })
    it('renders to screen properly', () => {
        const { getByText } = render(TerminalComponent());
        const message = getByText('Welcome to my Porfolio, to view my resume please type "resume" otherwise please feel free to explore the house by having a "lookAround"! If you get stuck, ask for "help".');
        expect(message).toBeInTheDocument(); 
    })
    it('can be typed into', () => {
        userEvent.t
    })
})