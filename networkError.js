
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }

    validateNetworkConn() {
        if (Math.Floor((Math.Random()*8))+1 > 5) {
            throw new NetworkError("Failed to connect;  404 url not found.");
        }
    }

    validateNetworkAccess(){
        if (Math.Floor((Math.Random()*8)+1) > 5){
            throw new NetworkError("Failed to connect;  401 unauthorized.");
        }
    }
}