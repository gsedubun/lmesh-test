exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: `Yes I'm here waiting for you`
    
    // JSON.stringify({
    //   message: `Yes I'm here waiting for you`
    // })
  };
};
