const { show } = require('../todo.service');

exports.belongsToUser = () => {
  return async (req, res, next) => {
    show(req.params.id)
      .then((todo) => {
        if (!todo) return res.status(200).send({ data: null });
        if (todo.user._id.toString() !== req.user.id)
          return res.status(403).send('forbidden');
        next();
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      });
  };
};
