const errorMessage = (error: unknown) => {
  return error instanceof Error ? error.message : error;
};

export default errorMessage;
