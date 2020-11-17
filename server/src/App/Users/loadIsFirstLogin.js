'use strict'

'use strict'

const sql = `
SELECT I.ID ID_USER,
       S.FIRST_LOGIN,
       S.ID
  FROM USERS_GRUPOA I,
       STUDENTS_GRUPOA S
 WHERE I.EMAIL = $1
   AND S.ID_USER = I.ID    
`
module.exports.loadIsFirstLogin = async (conn, dara) => {
    try {

        const user = await conn.query(sql, [dara.email])
        return  user.rows.length ? user.rows[0] : {}
        
    } catch (error) {
        throw error
    }
}