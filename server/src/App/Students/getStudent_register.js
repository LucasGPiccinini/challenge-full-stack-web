'use strict'

const sql = `
SELECT MAX (ID) ID
  FROM STUDENTS_GRUPOA
`
module.exports.getStudent_register = async (conn) => {
    try {
        const maxId = await conn.query(sql)
        return maxId.rows.length ? `${(maxId.rows[0].id || 1)}${new Date().getMilliseconds()}` : []
    } catch (error) {
        throw error
    }
}