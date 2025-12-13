export interface User {
    id:string,
    nom: string,
    prenom: string,
    adresse: String,
    role: "Client"|"Admin" ,
    tel: number| null,
    email: string ,
    password: string ,
    passwordConfirm: string ,
}
