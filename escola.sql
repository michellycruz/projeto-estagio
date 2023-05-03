DROP TABLE IF EXISTS `alunos`;
CREATE TABLE IF NOT EXISTS `alunos` (
  `Matrícula` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `nascimento` date DEFAULT NULL,
  `sexo` enum('M','F') DEFAULT NULL,
  `nacionalidade` varchar(20) DEFAULT 'Brasil',
  `turma` enum('Berçário','GRUPO I','GRUPO II','GRUPO III','GRUPO IV','GRUPO V') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contratante` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `responsavel` varchar(50) DEFAULT NULL,
  `tel2` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Matrícula`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=MyISAM AUTO_INCREMENT=256 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `alunos`
-- Os dados abaixo foram usados como exemplo, não são dados reais.
--

INSERT INTO `alunos` (`Matrícula`, `nome`, `nascimento`, `sexo`, `nacionalidade`, `turma`, `contratante`, `tel`, `responsavel`, `tel2`) VALUES
(256, 'JULIANA SILVA', '2022-07-14', 'F', 'Brasil', 'Berçário', 'PEDRO SILVA', '(27)99999-9999', 'MARINA SILVA', '(27) 99999-9999'),
(257, 'AMANDA BATISTA', '2022-06-15', 'F', 'Brasil', 'Berçário', 'RAFAELA BATISTA', '(27) 99999-9999', 'FELIPE BATISTA', '(21) 99999-9999'),
(258, 'ENZO DE SOUZA', '2021-12-17', 'M', 'Brasil', 'GRUPO I', 'MARIA DE SOUZA SANTOS', '(27)99999-9999', NULL, NULL),
(259, 'BENJAMIN PEREIRA', '2021-05-31', 'M', 'Brasil', 'GRUPO I', 'PAULA PEREIRA', '(27)99999-9999', 'EMANOEL PEREIRA', '(27)99999-9999'),
(260, 'IAN SANTOS', '2020-06-01', 'M', 'Brasil', 'GRUPO II', 'CECILIA SANTOS', '(27) 99999-9999', NULL, NULL),
(261, 'PEDRO BARBOSA', '2020-12-15', 'M', 'Brasil', 'GRUPO II', 'ROBERTA BARBOSA', '(27)99999-9999', 'MATHEUS BARBOSA', '(27)99999-9999'),
(262, 'RAFAELA FERREIRA', '2020-05-07', 'F', 'Brasil', 'GRUPO II', 'JULIANA FERREIRA', '(27)99999-9999', 'EDUARDO FERREIRA', '(27)99999-9999'),
(263, 'JUNIOR RENATO LIMA', '2021-02-09', 'M', 'Brasil', 'GRUPO II', 'VITORIA LIMA', '(27)99999-9999', 'FLAVIO RENATO LIMA', '(27)99999-9999');
COMMIT;
