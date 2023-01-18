module.exports = (err, req, res, next) => {
    console.log('-------ERROR----------')
    // [code, message] = err.message.split(':')
    // err.message = message
    // console.dir(err)
    console.log(err.message.split(':'))
    res.status(500).json({msg: err.message})
  }
