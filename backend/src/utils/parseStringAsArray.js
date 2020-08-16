module.exports = (string)=>{
  return string = string.split(',').map(item => item.trim());
}