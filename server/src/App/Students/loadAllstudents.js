'use strict'

const sql = `
SELECT I.STUDENT_REGISTER,
	   I.ID,
	   U.ID USER_ID,
	   U.NAME,
	   U.EMAIL,
	   U.CPF
  FROM STUDENTS_GRUPOA I,
  	   USERS_GRUPOA U
 WHERE U.ID = I.ID_USER
`
module.exports.loadAllstudents = async (conn) => {
    try {
        const students = await conn.query(sql)
        return {
            data: students.rows.length ? student.rows[0] : []
        }
    } catch (error) {
        throw error
    }
}