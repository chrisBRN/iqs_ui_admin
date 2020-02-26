export class Authenticator {

    isAuthenticated: boolean = false;

    authenticate(){
        this.isAuthenticated = true;
       
    }

    signOut(){
        this.isAuthenticated = false;
      
    }
}