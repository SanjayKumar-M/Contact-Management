

const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation Failed",
                messgage: err.messgage,
                stackTrace: err.stack,

            })
            break;
        case 403:
            res.json({
                title: "Forbidden",
                messgage: err.messgage,
                stackTrace: err.stack,

            })
            break;
        case 401:
            res.json({
                title: "Unauthorized",
                messgage: err.messgage,
                stackTrace: err.stack,

            })
            break;
        case 404:
            res.json({
                title: "Page Not Found",
                messgage: err.messgage,
                stackTrace: err.stack,

            })
            break;
        default:
            console.log("Good, No Error !");
            break;
    }

}

export default errHandler