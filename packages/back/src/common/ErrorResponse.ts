export class ErrorResponse {
    constructor(error: Error) {
        this.error = error;
    }
    
    readonly error: Error;
}