
export const roomStructure = {
    office: {
        accessible: ["livingRoom"],
        description: `You're in a small office. Before you stands a large Mahogany desk adorned with a distastefully bright 
        RGB Keyboard going full rainbow vomit mode and an equally sickening computer to match. Two large monitors sit on 
        the desk one displaying a YouTube video and another with a resume on screen. The walls are littered with the "hang 
        in there" posters you'd find in a high school. Directly behind the desk are three plaques on the wall.`,
        objects: {
            monitor: `The monitor is displaying a video titled 'Generic Day - lofi ambient music | chill beats to relax/ study/
            vibe/ chill/ hangout/ do homework/ sleep/ shower/ breathe/ eat/ dance to. On the other monitor is a resume. If you 
            would like to view the resume please type 'resume' and press enter.`,
            plaques: 'plaques is coming from a component. this is a placeholder for the object list function.'
        }
            //add a look at monitor that shows resume and youtube name, look at plaques that shows links to repos of the sites
            
    },
    livingRoom: {
        accessible: ["office", "kitchen", "bedroom", "balcony", "bathroom"],
        description: `You step into what can only be described as the living room out of a 17-year-old's dream. A large TV
        commandeers your attention, flashing to the fast paced rhythm of an animated show. Luckily for you and the 
        neighbors the obscenely large sound system is turned off for now. On the opposite side of the room a sofa sits 
        beyond a low coffee table scattered with trading cards that seem to fit a certain early 2000s Saturday morning 
        cartoon.`,
        objects: "interactive objects coming soon!"
            //look at cards option, look at show option. change speaker option.
            
    },
    kitchen: {
        accessible: ["livingRoom"],
        description: `Empty bottles of liquor sit atop cabinets giving you nightmarish flashbacks to college frat houses. On the 
        counter near the fridge sit 3 two-liter bottles of mountain dew code red (described by connoisseurs as drinkable battery
        acid). A trashcan overflowing with wrappers for cookie dough leave you wondering if the occupant is doing alright.`,
        objects: "interactive objects coming soon!"
    },
    bedroom: {
        accessible: ["livingRoom", "bathroom"],
        description: `Your disappointment grows as you find a queen size mattress laid directly on the floor with no frame
        or box spring, worse still, its unmade. Atop this growing atrocity lies a shockingly clean dakimakura. Unlike the bed,
        a TV sits mounted to a stand on the opposite wall. Leaving you wondering if there's a room in this apartment without a
        screen.`,
        objects: {dakimakura: `You grab the dakimakura and hold it closely. A feeling of contentment washes over you and you 
            feel compelled to never let it leave your side. On this day you were made whole again.`}
    },
    balcony: {
        accessible: ["livingRoom"],
        description: `Largely sparse aside from two chairs facing the edge, this balcony provides a quiet place to breathe in 
        fresh air and look at something not made out of pixels. You're immediately glad to be away from the flashing lights of
        the TV and in this quieter space. Small potted plants line the edge of the balcony trying to catch the little sunlight
        that creeps through the canopy of trees above.`,
        objects: "interactive objects coming soon!"
    },
    bathroom: {
        accessible: ["livingRoom", "bedroom"],
        description: `Your nose becomes increasingly assaulted as you recognize the smell of a freshly blown out candle which is 
        sitting atop the toilet. The size of the candle, or rather the small amount remaining, leaves you wondering what might 
        cause the candle to be burnt with such frequency. A shower curtain with cutesy aquatic animals feels out of place but is
        a nice change of pace considering the lack of any other decor here.`,
        objects: "interactive objects coming soon!"
    }
}

