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
module.exports.loadAllStudents = async (conn) => {
    try {
        const students = await conn.query(sql)
        return students.rows
    } catch (error) {
        throw error
    }
}