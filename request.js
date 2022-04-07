const axios = require('axios');
const fs=require('fs')
const { error } = require('console');
// const response =axios.get('http://api.navgurukul.org/courses')
// .then((response) => {
//     let res = response.data
//     fs.writeFileSync("nav_data.json",JSON.stringify(res,null,2))
//     let i=0
//     var c = 1
//     for (i of res){
//         console.log(`${c}. ${i.name} - ${i.id}`)
//         c +=1
//     }

//     const num = require('readline-sync');
//     const user = num.question("Enter the id number of course = ")
//     console.log(user,i.id)
//     if (user == i.id){
//     const link = axios.get('https://saral.navgurukul.org/api/courses/74/exercises')
//     console.log(link.data)
//     .then((exer_data)=>{
//     let index = 0
//     for (index of exer_data){ 
//         console.log(index,"its a exercise")
//     }
//     })    
// }
// });
   



async function get_courses () {
    try{
    const response =await axios.get('https://saral.navgurukul.org/api/courses');
    let res = response.data;
    var value =(res["availableCourses"]);
    var c = 1
    var course = []
    var course_id = []
    for (i of value){
        course.push(i.name)
        course_id.push(i.id)
        console.log(`${c}. ${i.name}`)
        c +=1

    }
    const num = require('readline-sync');
    const user = num.questionInt("Enter the id number of course = ")
    if (user == i.id){
    const link = await axios.get('https://saral.navgurukul.org/api/courses/74/exercises')
    .then((exer_data)=>{
    let index = 0
    for (index of exer_data){ 
        console.log(index,"its a exercise")

    }
    });
    }
    }catch{
        console.log(error)
    }
}
get_courses()




