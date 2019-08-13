const errorHandler = response => {
  switch (response.status) {
    case 401:
      console.log("Unauthorized request");
      throw response;
    case 403:
      console.log("Forbidden");
      throw response;
    case 404:
      console.log("Not found");
      throw response;
    case 422: 
      throw validationErrorHandler(response.data.errors);
    default:
      console.log("Unknown Error");
      throw response;
  }
};

const validationErrorHandler = errors => {
  const arr = [];
  for (let errorType in errors) {
    errors[errorType].forEach(message => {
      arr.push(`${errorType} ${message}`)
    })
  }
  return arr;
}

export default errorHandler;