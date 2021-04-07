const ratings = require('../data/ratings-data');

function ratingExists(req, res, next) {
  const { ratingId } = request.params;
  const foundRating = ratings[ratingId];

  if (foundRating === undefined) {
    return next({ status: 404, message: `Rating id not found: ${ratingId}` });
  }
  res.locals.rating = foundRating;
  next();
}

function read(req, res, next) {
  res.json({ data: res.locals.rating });
}

function list(req, res) {
  res.json({ data: ratings });
}

module.exports = {
  list,
  read: [ratingExists, read],
};
