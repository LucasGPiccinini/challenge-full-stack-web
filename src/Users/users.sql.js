'use strict'

const insert = `
INSERT INTO users_grupoa 
    (name, 
     email, 
     cpf) 
    VALUES ($1, 
            $2, 
            $3)
`
const loadById = `
SELECT *
  FROM users_grupoa
 WHERE id = $1
`
module.exports = {
    insert,
    loadById
}