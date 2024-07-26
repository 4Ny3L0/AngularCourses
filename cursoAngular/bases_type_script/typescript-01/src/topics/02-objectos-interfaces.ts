const powers : string[] = ["Fly", "Stronger", "laser", "vitality"];

interface Hero{
    name: string,
    alias: string,
    isActive: boolean,
    habilities: string[],
    alliance?: boolean
}


const chameleonman: Hero = {
    name: "Henry Olson",
    alias: "chameleonman",
    isActive: true,
    habilities: ["stealh", "strong",],
    alliance : true

}

console.table(chameleonman)
export {}