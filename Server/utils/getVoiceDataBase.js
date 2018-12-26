module.exports = (chunks, size) => {
  var data = null;
  switch (chunks.length) {
    case 0:
      data = new Buffer(0);
      break;
    case 1:
      data = chunks[0];
      break;
    default:
      data = new Buffer(size);
      for (var i = 0, pos = 0, l = chunks.length; i < l; i++) {
        var chunk = chunks[i];
        chunk.copy(data, pos);
        pos += chunk.length;
      }
      break;
  }
  return data.toString("base64");
};
