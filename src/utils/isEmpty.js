// eslint-disable-next-line arrow-body-style
const isEmpty = (value) => {
  return [null, undefined, '', []].includes(value);
};

module.exports = isEmpty;
