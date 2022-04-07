const  axios  = require('axios')
axios.post('http://reqres.in/api/users',{
    name : "Megha Kashyap",
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

axios({
    method: 'post',
    url: '/login',
    data: {
      firstName: 'Finn',
      lastName: 'Williams'
    }
 
}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });



axios.post('/login', {
    firstName: 'Finn',
    lastName: 'Williams'
    });