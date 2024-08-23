const logger = (state) => (next) => (action) => {
  console.log(state);
  console.log(action);
  console.log(next);
};

export default logger;
