exports.userMiddleware = (req, res, next) => {
  let info = {
    name: 'Luana',
    id: 123,
  };

  req.userInfo = info;

  next();
}

exports.index = (req, res) => {
  let obj = {
    pageTitle: 'Titulo teste',
    userInfo: req.userInfo,
  };

  res.render('home', obj);
}