export interface ISameMonthProducts {
    products : ISameMonth[],
    counter : number[];
}
export interface ISameMonth {
    image: string;
    productName: string;
    regions: string;
    selected: boolean;
}
export interface IOneProduct {
    image:string;
    productName : string;
    description : string;
    value : string;
    dimension : string;
    classement : string;
    star : boolean;
    categorie:string;
}

export interface IChart {
    name:string;
    value:string;
}