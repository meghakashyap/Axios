const axios=require('axios')
axios.all([
    axios.get('https://api.github.com/users/mapbox'),
    axios.get('https://api.github.com/users/phantomjs')
  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    console.log('Date created: ', responseArr[0].data.created_at);
    console.log('Date created: ', responseArr[1].data.created_at);
  });
  