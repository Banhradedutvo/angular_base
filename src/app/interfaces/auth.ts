export interface IAuth {
        _id?: string;
        email: string;
        password: string;
        role?: string;
}
export interface SigninValidator {
        email: string;
        password: string;
}
export interface Errors {
        required?: string;
        email?: string;
        maxlength?: string;
        minlength?: string;
      }
      