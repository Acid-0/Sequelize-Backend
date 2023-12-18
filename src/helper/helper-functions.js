module.exports = {
  isNullOrEmpty,
};
async function isNullOrEmpty(val) {
  return (await val) === undefined || val == null || val == "";
}
