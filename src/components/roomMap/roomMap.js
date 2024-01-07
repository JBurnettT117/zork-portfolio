
export const roomStructure = {
    office: {
        accesible: ["livingRoom"],
        description: `You're in a small office. Before you stands a large Mahogany desk adjorned with a distastefully bright 
            RGB Keyboard going full rainbow vomit mode and an equally sickening computer to match. Two large monitors sit on 
            the desk one displaying a youtube video and another with a resume on screen. the walls are littered with the "hang 
            in there" posters youd find in a highschool. Directly behind the desk are three plaques on the wall.`,
        objects: "interactive objects coming soon!"
            //add a look at monitor that shows resume and youtube name, look at plaques that shows links to repos of the sites
            
    },
    livingRoom: {
        accesible: ["office", "kitchen", "bedroom", "balcony", "bathroom"],
        description: `You step into what can only be described as the living room out of a 17 year olds dream. A large Tv
            commandeers your attention, flashing to the fast paced rhythm of an animated show. Luckily for you and the 
            neighbors the obscenley large sound system is turned off for now. On the opposite side of the room a sofa sits 
            beyond a low coffee table scattered with trading cards that seem to fit a certain early 2000s saturday morning 
            cartoon.`,
        objects: "interactive objects coming soon!"
            //look at cards option, look at show option. change speaker option.
            
    },
    kitchen: {
        accesible: ["livingRoom"],
        description: `Empy bottles of liquor sit atop cabinets giving you nightmarish flashbacks to college frat houses. on the 
        counter near the fridge sit 3 two-liter bottles of mountain dew code red (described by conneseurs as drinkable battery
        acid). A trashcan overflowing with wrappers for cookiedough leave you wondering if the occupant is doing alright.`,
        objects: "interactive objects coming soon!"
    },
    bedroom: {
        accesible: ["livingRoom", "bathroom"],
        description: `Your dissapointment grows as you find a queen size mattress laid directly on the floor with no frame
        or boxspring, worse still, its unmade. Atop this growing atrocity lies a shockingly clean dakimakura. Unlike the bed,
        a tv sits mounted to a stand on the opposite wall. leaving you wondering if theres a room in this apartment without a
        screen. RGB lights?`,
        //dakimakura
        objects: "interactive objects coming soon!"
    },
    balcony: {
        accesible: ["livingRoom"],
        description: `Largely sparce aside from two chairs facing the edge, this balcony provides a quiet place to breathe in 
        fresh air and look at something not made out of pixels. You're immediatley glad to be away from the flashing lights of
        the tv and in this quieter space. Small potted plants line the edge of the balcony trying to catch the little sunlight
        that creeps through the canopy of trees above.`,
        objects: "interactive objects coming soon!"
    },
    bathroom: {
        accesible: ["livingRoom", "bedroom"],
        description: `Your nose becomes increasingly assaulted as you recognize the smell of a freshly blown out candle which is 
        sitting atop the toilet. The size of the candle, or rather the small amount remaining, leaves you wondering what might 
        cause the candle to be burnt with such frequency. A shower curtain with cutesy aquatic animals feels out of place but is
        a nice change of pace considering the lack of any other decor here.`,
        objects: "interactive objects coming soon!"
    }
}

