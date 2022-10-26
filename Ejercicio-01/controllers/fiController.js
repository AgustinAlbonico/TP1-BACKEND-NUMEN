const getFiNumbers = (req, res) => {
  const { numero } = req.params;
  let num = parseInt(numero);
  let defecto = 20;
  let fib = [0, 1];

  try {
    if (!numero) {
      for (let i = 2; i < defecto; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return res.status(200).send(fib);
    }

    if (Number.isInteger(num)) {
      defecto = num;
      for (let i = 2; i < defecto; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return res.status(200).send(fib);
    } else {
      res.status(400).send({
        error: "Error en el parametro",
      });
    }
  } catch (error) {
    res.status(400).send({ error: "Error en el parametro" });
  }
};

module.exports = { getFiNumbers };
