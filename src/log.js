const log = {
  info: (message) => console.log('Info:' + message),
  warning: (message) => console.log('Message:' + message),
  error: (message) => console.log('Error:' + message),
};

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

module.exports =  {
  fullName,
  log
};