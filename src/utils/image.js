const encode = (text) => {
  btoa(text);
};

const decode = (base64) => {
  atob(base64);
};

export { encode, decode };
