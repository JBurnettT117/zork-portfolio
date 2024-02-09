import { ReactTerminal } from "react-terminal";
import './terminal.css';
import { roomStructure } from '../roomMap/roomMap';
import Resume from '../resume';
import React from 'react';

const TerminalComponent = () => {
    let currentRoom = "office";
    let message = "";
    const welcomeMessage = (
        <>
            Welcome to my Porfolio, to view my resume please
            type "resume" otherwise please feel free to explore the house by 
            having a "lookAround"! If you get stuck, ask for "help". <br/>
        </>
    )  

    const commands = {
        //fleshout rooms
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
                        enter 'room': takes you to the desired adjoining room.<br/>
                        objects: coming soon!<br/>
                        interact 'object': coming soon!
                    </p>
                    
                </div>
            )
        }),
        rooms: (() => {
            message = `Currently accessible room(s): ${roomStructure[currentRoom].accessible.join(", ")}`
            return message;
        }),
        lookAround: (() => {
            message = roomStructure[currentRoom].description
            return message;
            
        }),
        enter: ((room) => {
            if(roomStructure[currentRoom].accessible.includes(room)){
                currentRoom = room
                message = roomStructure[currentRoom].description
            } else if(Object.keys(roomStructure).includes(room)) {
                message = "That room isnt accessible from this location. Type 'rooms' to see connected rooms."
            } else {
                message = "That room doesn't exist. Type 'rooms' to see connected rooms."
            }
            return message
                
        }),
        objects: (() => {
            //something in here that says what is interactable with.
        }),
        interact: ((input) => {
            let object = input.toLowerCase();
            if(roomStructure[currentRoom].objects.includes(object)){
                message = roomStructure[currentRoom].objects[object];
            }
            if(object === 'monitor'){
                
            }
            //code here that lets you chose an object and mess with it.
        })
    }

    return (
        <div className="terminal-component crt">    
            <ReactTerminal className="crt"
                showControlButtons={false}
                themes={{
                    "my-custom-theme": {
                        themeBGColor: "#000000",
                        themePromptColor: "#008000",
                        themeColor: "#00A300"
                    }
                }}
                theme="my-custom-theme"
                welcomeMessage={welcomeMessage}
                commands={commands}
                prompt={`>> what would you like to do?`}
                errorMessage={(() => {return (
                    <>
                        <p>That command wasnt recognized, please see a list of commands below.</p>
                        {commands.help()}
                    </>
                )})}
            />
        </div>
    )
}

export default TerminalComponent;