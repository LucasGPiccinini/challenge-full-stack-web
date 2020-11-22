module.exports.insertFirstAdmUser = `
INSERT INTO USERS_GRUPOA
        (name, 
        email, 
        cpf,
        password,
        admin) 
        SELECT 'Admin', 
                'admin@mail.com.br', 
                '12345678910',
                '123',
                'Y'
 WHERE NOT EXISTS (
    SELECT 1 
      FROM USERS_GRUPOA
     WHERE email = 'admin@mail.com.br'
)
`