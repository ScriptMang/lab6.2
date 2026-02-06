class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }

    static hasEmptyFields(a){ 
        if ( a.length === 0 ){
            throw new DataError("The data fields can't be empty.");
        }
    }
}