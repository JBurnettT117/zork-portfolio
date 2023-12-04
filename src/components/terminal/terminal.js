import { ReactTerminal } from "react-terminal";
import './terminal.css';
import { roomStructure } from '../roomMap/roomMap';
import Resume from '../resume';
import React, { useState } from 'react';

const TerminalComponent = () => {
    let currentRoom = "office";
    // const [message, setMessage] = useState("");
    let message = "";
    const welcomeMessage = (
        <>
            Welcome to my Porfolio, to view my resume please
            type "resume" otherwise please feel free to explore the house by 
            having a "lookAround"! If you get stuck, ask for "help". <br/>
        </>
    )
    const commands = {
        // build input handler
        //fleshout rooms
        //check roomstructure list on enter(build a new function) if match enter else error
        //css overlay for making monitor look crt
        //flesh out design
        //fleshout readme.
        //write unit test
        resume: (() => {
            return (
                <>
                    <Resume/>
                </>
            )
        }),
        help: (() => {
            return (
                <div>
                    <h3>options</h3>
                    <p>
                        clear: clears all text in console. <br/>
                        resume: prints my resume to commandline. <br/>
                        rooms: gives a list of all adjoining rooms. <br/>
                        lookAround: describes the current surroundings. <br/>
                        enter 'room': takes you to the desired adjoining room.
                    </p>
                    
                </div>
            )
        }),
        rooms: (() => {
            message = `Currently accesible room(s): ${roomStructure[currentRoom].join(", ")}`
            return message;
        }),
        lookAround: (() => {
            if(currentRoom === "office"){
                message = "this is the office"//flesh out details here
                return message 
            }
            if(currentRoom === "livingRoom"){
                message = "this is the livingRoom"//flesh out details here
                return message 
            }
            if(currentRoom === "kitchen"){
                message = "this is the kitchen"//flesh out details here
                return message 
            }
            if(currentRoom === "bedroom"){
                message = "this is the bedroom"//flesh out details here
                return message 
            }
            if(currentRoom === "balcony"){
                message = "this is the balcony"//flesh out details here
                return message 
            }
            if(currentRoom === "bathroom"){
                message = "this is the bathroom"//flesh out details here
                return message 
            }
        }),
        enter: ((room) => {// need to add restrictions on the rooms available from each room.
            if(room === "office"){
                currentRoom = "office"
                message = "flesh out design here, probably copy from lookAround"
            } else if(room === "livingRoom"){
                currentRoom = "livingRoom"
                message = "flesh out design here, probably copy from lookAround"
            } else if(room === "kitchen"){
                currentRoom = "kitchen"
                message = "flesh out design here, probably copy from lookAround"
            } else if(room === "bedroom"){
                currentRoom = "bedroom"
                message = "flesh out design here, probably copy from lookAround"
            } else if(room === "balcony"){
                currentRoom = "balcony"
                message = "flesh out design here, probably copy from lookAround"
            } else if(room === "bathroom"){
                currentRoom = "bathroom"
                message = "flesh out design here, probably copy from lookAround"
            } else {
                message = "that room doesnt exist"
            }
            return message
        }),
    }

    return (
        <div className="terminal-component">    
            <ReactTerminal
                showControlButtons={false}
                theme="matrix"
                welcomeMessage={welcomeMessage}
                commands={commands}
                prompt={`>> what would you like to do?`}
            />
        </div>
    )
}

export default TerminalComponent;