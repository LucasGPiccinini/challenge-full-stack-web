module.exports.tableStudents = `
CREATE TABLE IF NOT EXISTS STUDENTS_GRUPOA(
	id SERIAL PRIMARY KEY,
	id_user SERIAL NOT NULL, 
	student_register VARCHAR(400) NOT NULL,
	first_login VARCHAR(1) NOT NULL DEFAULT 'Y',
	CONSTRAINT stutant_grupoa_fk0 FOREIGN KEY (id_user)
	REFERENCES users_grupoa (id)
)
`