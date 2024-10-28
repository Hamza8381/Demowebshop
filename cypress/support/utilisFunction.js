class utilisFunction {
  randomEmail() {
    return Math.random().toString(36).substring(2, 15) + "@gmail.com";
  }
  randomPassword() {
    return Math.random().toString(36).substring(2, 15) + "";
  }
}
export default utilisFunction;
