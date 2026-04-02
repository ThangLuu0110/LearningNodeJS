const getHomePage = (req, res) => {
    res.send('Hello The Whole New World!')
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getSamplePage
}