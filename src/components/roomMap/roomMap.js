
export const roomStructure = {
    office: {accesible: "livingRoom", description: "yadyada"},
    livingRoom: ["office", "kitchen", "bedroom", "balcony", "bathroom"],
    kitchen: ["livingRoom"],
    bedroom: ["livingRoom", "bathroom"],
    balcony: ["livingRoom"],
    bathroom: ["livingRoom", "bedroom"]
}

