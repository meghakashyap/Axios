const axios = require('axios')
const source = axios.CancelToken.source();

axios.get('https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif', {
  cancelToken: source.token
}).catch(thrown => {
  if (axios.isCancel(thrown)) {
    console.log(thrown.message);
  } else {
    // handle error
  }
});

// cancel the request (the message parameter is optional)
source.cancel('Request canceled.');

