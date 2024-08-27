const response = (statuCode, data, message, res) => {
  res.json(statuCode, [
    {
      payload: {
        data,
      },
      message,
      metadata: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = response;
