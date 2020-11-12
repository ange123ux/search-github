export class Users {
    
    constructor (public login:string,public name:string,public avatar_url:string,public html_url: string, public bio:string, public created_at:Date){

        this.name=name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.bio = bio;
        this.created_at=created_at;
    }
}
