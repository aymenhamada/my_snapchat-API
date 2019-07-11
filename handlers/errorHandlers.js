exports.catchErrors = (fn) => {
    return function(req, res, next) {
      return fn(req, res, next).catch(next);
    };
  };


exports.flashValidationErrors = (err, req, res, next) => {
    if (!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    const errorMessage = [];
    errorKeys.forEach(key =>  errorMessage.push(err.errors[key].message));
    return res.status(400).json({
      error: errorMessage
    })
};