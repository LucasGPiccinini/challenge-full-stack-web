
// const request = require("request")
// const urlBase = "http://localhost:3002"


// describe("Teste API login",() => {

//   it("Deve realizar o logout ", (done) =>{
    
//     var user = {
//         token:'0929389fc168f0dcaff4b976aebeb1f9'
//     }

//     // console.log(btoa(`${user.email}:${user.password}`)

//     request.get({url : urlBase + "/login/out", headers:{authorization: 'Basic ' + Buffer.from(user.token).toString('base64')}}, (error, response, body) =>{

//         if(body){
//             body = JSON.parse(body)
//             console.log(body.data)
//         }
//         if(error) console.log(error)

//         done() 

//     })
//   })
// })