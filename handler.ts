exports.echo = async (event) => {
  const message = event.arguments.message;
  return message;
};
