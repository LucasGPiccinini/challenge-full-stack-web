
// const request = require('request')
// const urlBase = 'http://localhost:3002'


// describe('Teste API students',() => {

//     let studentTest = {}


//     it('Deve inserir um estudente, criando também o usuário, se o mesmo não existir', (done) =>{
        
//         var student = {
//             'name': 'Teste',
//             'email': 'teste@teste.com.br',
//             'cpf': '123456',
//             'admin': 'N',
//             'password': '123',
//             'studentRegister': '0001'
//         }

//         request.post({url : urlBase + '/student/insert', form: student}, (error, response, body) =>{

//             if(body){
//                 body = JSON.parse(body)
//                 if(body.error) console.log(body.error)
//                 else {
//                     console.log(body.data.message)
//                     studentTest = body.data.data
//                 }
//             }

//             done() 

//         })
//     })


//     it('Deve alterar os valores de registro de um estudente ',(done) =>{
        
//         var student = {
//             'id': studentTest.id,
//             'id_user': studentTest.id_user,
//             'name':'student',
//             'email':'student@test.com.br',
//             'cpf':'98789878',
//             'password':'1',
//             'admin':'Y',
//             'firstLogin': 'N'
//         }
        
//         request.post({url : urlBase + '/student/update', form: student},(error, response, body) =>{
            
//             if(body) {
//                 body = JSON.parse(body)
//                 console.log(body.data.message)
//             }
//             if(error) console.log(error)
            
//             done() 
            
//         })
//     })

//     it('Deve excluir o estutante de acordo com seu id, juntamente com o registro de usuário',(done) =>{
        
//         var student = {
//             'id': studentTest.id,
//             'id_user': studentTest.id_user,
//         }

//         request.post({url : urlBase + '/student/delete', form: student},(error, response, body) =>{

//             if(body) {
//                 body = JSON.parse(body)
//                 console.log(body.data.message)
//             }
//             if(error) console.log(error)

//             done() 

//         })
//     })

// })