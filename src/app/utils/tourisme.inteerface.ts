export interface ITourisme {
    _id:string,
    galerie: string[],
    name:string,
    desc:string,
    activity: string [],
    faune: [{
        image:string, 
        name:string
    }],
    flore: [{
        image:string, 
        name:string
    }],
    menace:string,
    region:string
}