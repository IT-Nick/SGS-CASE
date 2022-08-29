CREATE DATABASE TASK

USE TASK

CREATE TABLE Containers
(
	ID int IDENTITY PRIMARY KEY,
	Number int NOT NULL,
	CType nvarchar(20),
	CLength int NOT NULL,
	CWidth int NOT NULL,
	CHeight int NOT NULL,
	CWeight int NOT NULL,
	IsEmpty bit NOT NULL,
	DateАrrival Datetime NOT NULL default CURRENT_TIMESTAMP
);

CREATE TABLE Operations
(
	ID int IDENTITY PRIMARY KEY,
	ContainerID int NOT NULL FOREIGN KEY REFERENCES Containers(ID),
	DateStart Datetime NOT NULL default CURRENT_TIMESTAMP,
	DateFinish Datetime NOT NULL default CURRENT_TIMESTAMP,
	OType nvarchar(20) NOT NULL,
	FIO nvarchar(100) NOT NULL,
	Place nvarchar(100) NOT NULL
);

SELECT * FROM Containers FOR JSON AUTO

SELECT * FROM Operations WHERE ContainerID = 1 FOR JSON AUTO
