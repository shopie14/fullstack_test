const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
      payload: {
        data: data
      },
      message: message
    });
  };
  
  module.exports = response;
  