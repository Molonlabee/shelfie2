// FUNCTIONS TO ENDPOINTS IN INDEX.JS
// GET
const getProduct = (req, res) => {
    const db = req.app.get('db');

    db.get_products().then(product => res.status(200).json(product))
}

module.exports = {
    getProduct
}
