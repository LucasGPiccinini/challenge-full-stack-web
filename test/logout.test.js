
const request = require("request")
const urlBase = "http://localhost:3002"


describe("Teste API login",() => {

  it("Deve realizar o logout ", (done) =>{
    
    let token = ''

    request.get({url : urlBase + "/login/out", headers:{authorization: 'Basic ' + Buffer.from(token).toString('base64')}}, (error, response, body) =>{

        if(body){
            body = JSON.parse(body)
            console.log(body.data)
        }
        if(error) console.log(error)

        done() 

    })
  })
})