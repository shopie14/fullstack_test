const response = (statuCode, data, message, res) => {
  res.json(statuCode, [
    {
      payload: {
        data,
      },
      message,
    },
  ]);
};

module.exports = response;
