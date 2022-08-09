exports.getPosts = (req, res, next) => {
  res.status(200).json({ msg: "Hola mundo..." });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // agregar algo a la BD
  res.status(201).json({
    msg: "Post",
    post: { id: Date.parse(new Date()), title, content },
  });
};
