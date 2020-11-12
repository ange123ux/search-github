export class Users {
    
    constructor (public login:string,public name:string,public avatar_url:string,public html_url: string){

        this.name=name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
    }
}
