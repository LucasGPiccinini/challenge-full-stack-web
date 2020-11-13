
// const request = require("request")
// const urlBase = "http://localhost:3002"


// describe("Teste API login",() => {

//   it("Deve realizar o login e retorar usuário com token", (done) =>{
    
//     var user = {
//         "email": "admin@admin.com.br",
//         "password": "0"
//     }

//     // console.log(btoa(`${user.email}:${user.password}`)

//     request.get({url : urlBase + "/login/in", headers:{authorization: 'Basic ' + Buffer.from(`${user.email}:${user.password}`).toString('base64')}}, (error, response, body) =>{

//         if(body){
//             body = JSON.parse(body)
//             console.log(body.data)
//         }
//         if(error) console.log(error)

//         done() 

//     })
//   })
// })