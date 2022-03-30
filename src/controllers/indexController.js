module.exports = {
    index: (req, res) => {
        res.render('home', {
            titulo: 'Six apples'
        })
    }
}