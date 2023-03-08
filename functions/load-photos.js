const cloudinary = require('cloudinary').v2;
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

exports.handler = async () => {
  var output = undefined;
  await cloudinary.api
    .resources(
      {
        type: 'upload',
        prefix: 'tzuje30'
      })
    .then(result => output = result);
  const responseBody = JSON.stringify(output)
  return {
    statusCode: 200,
    body: responseBody,
  };
};
