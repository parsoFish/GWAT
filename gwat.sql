DROP DATABASE IF EXISTS gwat;
CREATE DATABASE gwat;

USE gwat;
DROP TABLE IF EXISTS posts;
CREATE TABLE posts
(
	id INT(100) UNSIGNED NOT NULL auto_increment,
	title VARCHAR(50) NOT NULL,
	pBody TEXT NOT NULL,
	category ENUM('Lifestyle', 'Travel', 'Video') NOT NULL,
	url VARCHAR(50),
	
	PRIMARY KEY (id)
);

INSERT INTO posts (title, pBody, category, url)
VALUES ('global work and travel co.', 'One of the worlds leading and largest youth travel brands', 'travel', 'https://globalworkandtravel.com'),
 ('travel.com.au', 'One destination endless possibilities', 'travel', 'https://www.travel.com.au'),
 ('Flight Centre', 'Australias leading travel agent', 'travel', null),
 ('The skinny confidential', 'lifestyle blog', 'lifestyle', 'https://www.theskinnyconfidential.com'),
 ('three years of travel', 'Three years of travel and adventure from around the world', 'video', 'https://www.youtube.com/watch?v=wJF5NXygL4k');