//function which is for error handlings from client side.

module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}