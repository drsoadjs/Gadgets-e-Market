const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); // .catch(err=> next(err));
  };
};

export default catchAsync;
