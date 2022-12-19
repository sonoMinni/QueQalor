-- Active: 1669274903095@@127.0.0.1@8000
use gestire_cinema
create table Attore(
	CodAttore SMALLINT unsigned not null,
    Nome varchar(30) not null,
    AnnoNascita SMALLINT unsigned not null,
    Nazionalita varchar(3) not null,
    PRIMARY KEY (CodAttore)
);
CREATE TABLE Film(
    CodFilm SMALLINT unsigned not null,
    Titolo varchar(30) not null,
    AnnoProduzione SMALLINT unsigned not null,
    Genere VARCHAR(30) not null,
    Regista varchar(30) not null,
    Nazionalita varchar(3) not null,
    PRIMARY KEY (CodFilm)
);
Create table Recita(
    CodAttore SMALLINT unsigned not null,
    CodFilm SMALLINT unsigned not null,
    PRIMARY KEY (CodAttore, CodFilm)
);
create table Sale(
    CodSala SMALLINT unsigned not null,
    Nome varchar(30) not null,
    Posti SMALLINT unsigned not null,
    Citta VARCHAR(30) not null,
    PRIMARY KEY (CodSala)
);
create TABLE Proietta(
    CodFilm SMALLINT unsigned not null,
    CodSala SMALLINT unsigned not null,
    Incasso SMALLINT UNSIGNED not null,
    PRIMARY KEY (CodFilm, CodSala),
    FOREIGN KEY (CodFilm) REFERENCES Film(CodFilm),
    FOREIGN KEY (CodSala) REFERENCES Sale(CodSala)
);
ALTER table Proietta add DataProiezione Date; 

Insert INTO Attore VALUES (1, 'Luca Medici', 1977, 'ITA');
Insert INTO Attore VALUES (2, 'Giulia Michelini', 1985, 'ITA');
Insert INTO Attore VALUES (3, 'Dino Abbrescia', 1966, 'ITA');
Insert INTO Attore VALUES (4, 'Fabio Troiano', 1974, 'ITA');
Insert INTO Attore VALUES (5, 'Ivano Marescotti', 1946, 'ITA');
Insert INTO Attore VALUES (6, 'Francesca Chillemi Minnielli', 1985, 'ITA');
Insert into Film VALUES (1, 'Cado Dalle Nubi', 2009, 'Commedia', 'Gennaro Nunziante', 'ITA');
Insert into Recita VALUES (1, 1) (2,1) (3,1) (4,1) (5,1) (6,1);
Insert into Sale VALUES (1, 'Cinema Piccolo', 48, 'Bari Santo Spirito');
Insert into Proietta VALUES (1, 1, 1000, 2021-01-01);
