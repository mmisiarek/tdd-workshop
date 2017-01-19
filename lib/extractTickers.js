module.exports = function(content){
  if (!content || typeof content != 'string') {
    return [];
  }
  return content.split('\n').filter(index => {
    return index.trim().length > 0 && index.indexOf(' ') == -1;
  });
};
