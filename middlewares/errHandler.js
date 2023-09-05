const errHandler = (err, req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({message:"Missing Arguments !", stackTrace: err.stack});

}

export default errHandler