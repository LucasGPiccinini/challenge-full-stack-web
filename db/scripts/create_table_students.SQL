CREATE TABLE STUDENTS_GRUPOA(
	id SERIAL PRIMARY KEY,
	id_user SERIAL NOT NULL, 
	studant_register VARCHAR(400) NOT NULL,
	CONSTRAINT stutant_grupoa_fk0 FOREIGN KEY (id_user)
	REFERENCES users_grupoa (id)
);