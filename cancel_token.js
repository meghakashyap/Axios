const axios = require('axios')
var cancelToken ;
axios.get('https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif', {
  // specify a cancel token
  cancelToken: new CancelToken(c => {
    // this function will receive a cancel function as a parameter
    cancel = c;
  })
}).catch(thrown => {
  if (axios.isCancel(thrown)) {
    console.log(thrown.message);
  } else {
    // handle error
  }
});

// cancel the request
cancel('Request canceled.');