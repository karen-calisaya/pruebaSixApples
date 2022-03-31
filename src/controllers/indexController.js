module.exports = {
    index: (req, res) => {
        res.render('home', {
            titulo: 'Six apples'
        })
    },
    about: (req, res) => {
        res.render('quienessomos', {
            titulo: 'Quienes somos'
        })
    }
}