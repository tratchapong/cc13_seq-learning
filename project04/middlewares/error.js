module.exports = (err, req, res, next) => {
    console.log('-------ERROR----------')
    // console.log(JSON.stringify(err, null,2))
    if((err.name).startsWith('Sequelize')) {
      err.s_code = 400
      err.message = err.errors[0].message
    }else {
      let errText = err.message.split('::')
      if(errText.length === 2) {
        err.s_code = +errText[0]
        err.message = errText[1]
      } else {
        err.s_code = 500
        err.message = errText[0]
      }
    }
      console.log(`${err.s_code} : ${err.message}`)
      res.status(err.s_code).json({msg: err.message})
  }
