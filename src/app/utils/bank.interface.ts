export interface IBank {
    _id: string;
    name: string;
    address: string;
    description:string;
    acronym:string;
    activity: string[]; 
    juridicStatus: string;
    telephone: string; 
    email: string; 
    website: string;  
    logo: string;
    image: string;
    service: [{
        rate:String; 
        typeService: String;
        nameService: String;
        descService: String;
        duration: String
    }];
    numberGuichet: number;
    teritory: number;
    members: number;
}