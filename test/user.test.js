
// const request = require("request")
// const urlBase = "http://localhost:3002"


// describe("Teste API user",() => {

//   const userInsert = {}
//   it("Deve inserir um usuário ou retornar um erro de usuário já existente", (done) =>{
    
//     var user = {
//         "name": "Teste",
//         "email": "teste@teste.com.br",
//         "cpf": "123456",
//         "admin": "N",
//         "password": "123"
//     }

//     request.post({url : urlBase + "/user/insert", form: user}, (error, response, body) =>{

//         if(body){
//             body = JSON.parse(body)
//             console.log(body.data.message)
//             userInsert.id = body.data.data.id
//         }
//         if(error) console.log(error)

//         done() 

//     })
//   })

//   it("Deve alterar os valores de um usuário de acordo com seu id",(done) =>{
    
//     var user = {
//         "id": userInsert.id,
//         "name": "Teste",
//         "email": "teste2@teste.com.br",
//         "cpf": "1234567",
//         "admin": "N",
//         "password": "1234"
//     }

//     request.post({url : urlBase + "/user/update", form: user},(error, response, body) =>{
        
//         if(body) {
//             body = JSON.parse(body)
//             console.log(body.data.message)
//         }
//         if(error) console.log(error)

//         done() 

//     })
//   })

//   it("Deve excluir o usuáriode de acordo com seu id",(done) =>{
    
//     var user = {
//         "id": userInsert.id,
//         "name": "Teste",
//         "email": "teste@teste.com.br",
//         "cpf": "123456",
//         "admin": "N",
//         "password": "123"
//     }

//     request.post({url : urlBase + "/user/delete", form: user},(error, response, body) =>{

//         if(body) {
//             body = JSON.parse(body)
//             console.log(body.data.message)
//         }
//         if(error) console.log(error)

//         done() 

//     })
//   })

// })