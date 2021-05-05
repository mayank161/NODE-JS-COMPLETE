
exports.get404 = (req,res,next)=> {
    res.status(404).render('404',{error: 'page not found', docTitle: 'error'}); // it will run for the particular status
}