'use strict'

const sql = `
SELECT *
  FROM students_grupoa
 WHERE id_user = $1
`
module.exports.loadStudentByUserId = async (conn, data) => {
    try {
        const student = await conn.query(sql, [data.id_user])
        return {
            data: student.rows.length ? student.rows[0] : []
        }
    } catch (error) {
        throw error
    }
}