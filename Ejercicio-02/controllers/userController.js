let users = [
  {
    id: 1,
    nombre: "Agustin",
    apellido: "Albonico",
    dni: "42533302",
  },
];

const getUsers = (req, res) => {
  res.status(200).send(users);
};

const getUser = (req, res) => {
  const user = users.find((users) => users.id === parseInt(req.params.id));

  if (user) {
    res.status(200).send(user);
  } else {
    return res.status(404).json({
      message: "Usuario no encontrado",
    });
  }
};

const createUser = (req, res) => {
  const user = {id: users.length + 1, ...req.body};

  users.push(user);

  res.status(200).send(users);
};

const deleteUser = (req, res) => {
  const user = users.find((users) => users.id === parseInt(req.params.id));

  if (user) {
    res.status(200).send("Se elimino al usuario");
  } else {
    return res
      .status(404)
      .json({ message: "Usuario no eliminado inexistente" });
  }
  users = users.filter((us) => us.id !== parseInt(req.params.id));
};

const updateUser = (req, res) => {
  const newData = req.body;
  const user = users.find((users) => users.id === parseInt(req.params.id));

  if (!user) {
    return res
      .status(404)
      .json({ message: "Usuario inexistente" });
  }

  users = users.map((us) =>
    us.id === req.params.id ? { ...us, ...newData } : us
  );
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
