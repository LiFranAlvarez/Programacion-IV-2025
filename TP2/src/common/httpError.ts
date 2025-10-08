export class HttpError extends Error {
    constructor(
        public codigo : number,
        message : string
    ){
        super(message);
    }
}