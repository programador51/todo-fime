CREATE TABLE `users` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(30) NOT NULL,
  `name` VARCHAR(40),
  `password` VARCHAR(300) NOT NULL,
  `profilePicture` VARCHAR(300),
  `typeRegistrationId` INT NOT NULL
);

CREATE TABLE `tasks` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(256) NOT NULL,
  `createdDate` DATETIME NOT NULL,
  `completed` TINYINT NOT NULL,
  `logicalErase` TINYINT NOT NULL,
  `userId` INT NOT NULL
);

CREATE TABLE `typeRegistration` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(25)
);
