const authUser = (req, res, next) => {
    let token = req.body.token;
    if(token === 'ghkjl'){
        res.status(200).send({ message: 'User is authenticated' });
    }else{
        res.status(401).send({ message: 'User is not authenticated' });
    }
}