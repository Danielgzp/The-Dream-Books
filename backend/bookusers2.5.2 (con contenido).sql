-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 11-01-2022 a las 11:51:37
-- Versión del servidor: 10.3.28-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `qtpwgbeq_proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authors`
--

CREATE TABLE IF NOT EXISTS `authors` (
  `id_author` int(11) NOT NULL,
  `author` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `authors`
--

INSERT INTO `authors` (`id_author`, `author`) VALUES
(1, 'Thomas Greanias'),
(2, 'Christopher Paolini'),
(3, 'Mark Twain'),
(4, 'Christie Golden'),
(5, 'Paul Strathern'),
(6, 'Gabriel García Márquez'),
(7, 'Orson Scottcard'),
(8, 'H.G Wells'),
(9, 'Jeffrey Archer'),
(10, 'Isabel Allende'),
(11, 'David Foster Wallace'),
(12, 'Sigmund Freud'),
(13, 'J.K Rowling'),
(14, 'Neil Gaiman'),
(15, 'Isaac Asimov'),
(16, 'Eduardo Mendoza'),
(17, 'Roald Dahl'),
(18, 'Geronimo Stilton'),
(19, 'Robert E. Howard'),
(20, 'Stephen King'),
(21, 'Ken Robinson'),
(22, 'Rafael Santandreu'),
(23, 'Javier Reverte'),
(24, 'Eben Alexander'),
(25, 'Alan M. Turing'),
(26, 'AA.VV'),
(27, 'Santiago Posteguillo'),
(28, 'Juan Eslava Galán'),
(29, 'Robert Graves'),
(30, 'Primo Levi'),
(31, 'Antonio Muñoz Molina'),
(32, 'Owen Jones'),
(33, 'Brian Greene'),
(34, 'Ilya Prigogine'),
(35, 'José Saramago'),
(36, 'William Faulkner');



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id_book` int(11) NOT NULL,
  `book_image` text NOT NULL,
  `book_name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `download` text NOT NULL,
  `price` double NOT NULL,
  `upload_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `books`
--

INSERT INTO `books` (`id_book`, `book_image`, `book_name`, `description`, `download`, `price`, `upload_date`) VALUES
(1, 'https://i.imgur.com/HTz1oya.png', 'El Resurgir de la Atlántida', 'En laa Antártida, un terremoto glacial se traga a un equipo de científicos y deja al descubierto un misterioso monumento más antiguo que la propia Tierra. En Perú, el doctor Conrad Yeats, arqueólogo, es apresado por las Fuerzas Especiales de los Estados Unidos para que desentrañe la clave final de los orígenes de la raza humana. En Roma, el Papa convoca al Vaticano a una activista medioambiental, la doctora Serena Serghetti, con el fin de revelarle la terrorífica visión de un desastre apocalíptico. En el espacio, un satélite de seguimiento climático informa acerca de cuatro descomunales tormentas que se están formando alrededor del Polo Sur… Las leyendas de una civilización perdida y las profecías de las religiones más importantes del mundo conducen a un descubrimiento estremecedor que cambiará el destino de la Humanidad. Es el último viaje, una travesía hacia el núcleo del tiempo, tan asombrosa y conmovedora como los albores del hombre… Es el resurgir de la Atlántida.', 'http://descargar.lelibros.online/Thomas%20Greanias/El%20Resurgir%20de%20la%20Atlantida%20(337)/El%20Resurgir%20de%20la%20Atlantida%20-%20Thomas%20Greanias.pdf', 1.99, '2022-01-08 12:10:24'),
(2, 'https://i.imgur.com/xUcnglj.png', 'Eldest', 'Eragon y su dragona, Saphira, acaban de impedir que las poderosas fuerzas del rey Galbatorix, cruel regente del Imperio, destruyan para siempre el ejército rebelde de los vardenos en Farthen Dur, la ciudad montaña de los enanos. Pocos días después de la sangrienta batalla contra los urgalos, Eragon y Saphira tienen que viajar a Ellesméra, el país de los elfos, para continuar con su formación en la magia y la lucha con la espada, las dos habilidades especiales de los Jinete de Dragón, para poder enfrentarse al malvado Rey. Los acompañarán Ayra, la elfa, y Orik, el enano, en un viaje plagado de descubrimientos y aventuras, con parajes fabulosos y nuevas amistades. Pero el caos y la traición los acecharán sin descanso, y Eragon no sabrá en quién confiar. Entre tanto, los sones inconfundibles de la guerra tienen en vilo al reino de Alagaësia. Las espadas se afilan y las nubes de oscuridad presagian terror y muerte. A Carvahall, cerca de las montañas Vertebradas, también llega el miedo: dos Ra’zac han aparecido acompañados de un destacamento para capturar a Roran, el primo de Eragon. Roran tendrá que huir, pero pronto se dará cuenta de que no es posible escapar siempre.', 'http://descargar.lelibros.online/Christopher%20Paolini/Eldest%20%28146%29/Eldest%20-%20Christopher%20Paolini.pdf', 1.99, '2022-01-08 12:12:59'),
(3, 'https://i.imgur.com/7Iy9R0X.png', 'Las Aventuras de Tom Sawyer', 'Las aventuras de Tom Sawyer es el relato de unos meses en la vida de este niño que vive en una ciudad pequeña del suroeste de Estados Unidos a orillas del río Misisipi. Criado por su tía Polly, que lo quiere de corazón pero que lo somete a una disciplina que se le hace absurda y desagradable, Tom contempla el mundo de una manera muy distinta a como lo hacen los adultos con los que tiene que convivir. Precisamente porque existe ese distanciamiento nos entretiene con sus reacciones divertidas y nobles. Más agreste y rebelde contra ese universo de las personas mayores es su amigo Huckleberry Finn, el compañero ideal de Tom que es envidiado por los demás niños que contemplan en su vida una forma de existencia que a ellos les gustaría llevar. Juntos vivirán aventuras humorísticas y dramáticas de las que podrán salir más airosos de lo que hubiera podido hacerlo cualquier adulto.', 'http://descargar.lelibros.online/Mark%20Twain/Las%20Aventuras%20de%20Tom%20Sawyer%20(12)/Las%20Aventuras%20de%20Tom%20Sawyer%20-%20Mark%20Twain.pdf', 1.99, '2022-01-08 12:17:34'),
(4, 'https://i.imgur.com/nYA3S4D.png', 'Aristóteles en 90 Minutos', 'La colección Filósofos en 90 minutos incluye interpretaciones breves, pero autorizadas, de los más grandes pensadores de la humanidad y descifra sus filosofías en una forma amena y accesible que las hace interesantes y comprensibles a casi cualquiera. Aristóteles fue preceptor de Alejandro Magno. La Historia no registra detalles de esta relación, pero sabemos que, con el tiempo, Alejandro estuvo a punto de firmar la sentencia de muerte de Aristóteles, si bien se olvidó y se dispuso, en su lugar, a invadir la India. De no ser por este golpe de suerte, habríamos perdido al hombre cuya filosofía había de dominar el pensamiento europeo durante los 1.500 años siguientes. Gracias a Aristóteles, el mundo medieval persistió en sus creencias de que el sol giraba alrededor de la tierra y que todo estaba compuesto de tierra, aire, fuego y agua. Una introducción y un epílogo sitúan la obra de Aristóteles dentro del panorama de la filosofía; también se ofrece una lista cronológica de fechas filosóficas importantes. Finalmente, una selección de citas de sus obras más importantes, incluyendo la Ética Nicomáquea, da indicación de sus intenciones, conceptos más importantes y de su estilo.', 'Link de descarga', 1.99, '2022-01-08 12:18:41'),
(5, 'https://i.imgur.com/GObZQfU.png', 'Yo no Vengo a Decir un Discurso', 'Los textos que Gabriel García Márquez ha reunido en este libro fueron escritos con la intención de ser leídos por él mismo en público, ante una audiencia, y recorren prácticamente toda su vida, desde el primero, que escribe a los diecisiete años para despedir a sus compañeros del curso superior en Zipaquirá, hasta el que lee ante las Academias de la Lengua y los reyes de España al cumplir ochenta años. Estos discursos del premio Nobel nos ayudan a comprender más profundamente su vida y nos desvelan sus obsesiones fundamentales como escritor y ciudadano: su fervorosa vocación por la literatura, la pasión por el periodismo, su inquietud ante el desastre ecológico que se avecina, su propuesta de simplificar la gramática, los problemas de su tierra colombiana o el recuerdo emocionado de amigos escritores como Julio Cortázar o Álvaro Mutis, entre otros muchos. El lector tiene entre sus manos el complemento indispensable a una obra narrativa que nos seguirá hablando en un largo porvenir.', 'http://descargar.lelibros.online/Gabriel%20Garcia%20Marquez/Yo%20no%20vengo%20a%20decir%20un%20discurso%20(518)/Yo%20no%20vengo%20a%20decir%20un%20discurso%20-%20Gabriel%20Garcia%20Marquez.pdf', 1.99, '2022-01-08 12:21:20'),
(6, 'https://i.imgur.com/hUdNeig.png', 'La Saga de Worthing', 'El imperio de Capitol se cimenta en el somec, la droga capaz de crear en los humanos la ilusión de la inmortalidad. Pero sólo algunos, los ricos y los poderosos, obtienen el privilegio de dormir durante largos años y despertar como si no hubiera transcurrido el tiempo. El somec permite gestar ambiciosos planes y dominar un vasto imperio, pero también implica amenazas y peligros. La saga de Worthing es una emotiva crónica de Capitol y su droga, el somec, en la que se nos habla del poder subversivo de Abner Doon, que destruyó el imperio, de la estirpe de telépatas que engendró Jason Worthing y del mundo que éstos llegaron a crear.', 'http://descargar.lelibros.online/Orson%20Scott%20Card/La%20Saga%20de%20Worthing%20(550)/La%20Saga%20de%20Worthing%20-%20Orson%20Scott%20Card.pdf', 1.99, '2022-01-08 12:23:19'),
(7, 'https://i.imgur.com/aS5cjQK.png', 'El Hombre Invisible', 'Escrita en 1897, poco después de «La máquina del tiempo», El hombre invisible cuyo personaje central ha alcanzado, como Drácula o Frankenstein, un lugar en el imaginario del mundo moderno­ da forma definitiva a uno de los motivos que habrían de cobrar más relieve, y en cierto sentido hacerse pavorosa realidad, en el siglo XX: el del uso irreflexivo e inescrupuloso del conocimiento científico y las consecuencias nefastas de ponerlo al servicio de causas egoístas o espurias.', 'http://descargar.lelibros.online/H.%20G.%20Wells/El%20Hombre%20Invisible%20(583)/El%20Hombre%20Invisible%20-%20H.%20G.%20Wells.pdf', 1.99, '2022-01-08 12:25:51'),
(8, 'https://i.imgur.com/hbQX6rJ.png', 'Como los Cuervos', 'No le fue fácil a Charlie alcanzar el objetivo de amasar una fortuna; sin embargo algo había en él que le hacía un predestinado al triunfo y, como apreciará el lector, este algo tiene mucho que ver con su capacidad de trabajo, astucia, coraje, ganas de aprender y un maravilloso abuelo el de más fino olfato para la venta que le guio con su ejemplo en sus primeros tiempos. Desde las primeras páginas la historia se convierte en una trepidante aventura sobre el mundo de los negocios, en una ascensión ilusionada desde la humilde situación de vendedor de verduras callejero hasta la realización de un gran proyecto empresarial: es la historia de un tendero que metido a negociante termina creando una importante red de establecimientos comerciales mientras van desfilando los grandes acontecimientos de este siglo.', 'http://descargar.lelibros.online/Jeffrey%20Archer/Como%20los%20Cuervos%20(357)/Como%20los%20Cuervos%20-%20Jeffrey%20Archer.pdf', 1.99, '2022-01-08 12:28:26'),
(9, 'https://i.imgur.com/NhozHqz.png', 'El plan infinito', 'El plan infinito narra la historia de Gregory Reeves, un gringo que se hace a sí mismo en el difícil mundo de los hispanos de California. Gregory quiere llevar a la práctica el peculiar «plan infinito» que se trazó a sí mismo en su infancia. Sin embargo, para conseguirlo debe recorrer un duro camino lleno de obstáculos: la marginación social, el racismo, el brutal contraste entre pobreza y riqueza, la guerra de Vietnam… Ésta es una de las novelas más logradas y apasionantes de la gran escritora chilena.', 'http://descargar.lelibros.online/Isabel%20Allende/El%20Plan%20Infinito%20(97)/El%20Plan%20Infinito%20-%20Isabel%20Allende.pdf', 1.99, '2022-01-08 12:29:52'),
(10, 'https://i.imgur.com/XhjkUCv.png', 'Esto es agua', 'Había una vez dos peces jóvenes que iban nadando y se encontraron por casualidad con un pez mayor que nadaba en dirección contraria; el pez mayor les saludó con la cabeza y les dijo: “Buenos días, chicos. ¿Cómo está el agua?”». A los seis años de la muerte de David Foster Wallace se publica «Esto es agua», la legendaria conferencia que impartió en la ceremonia de graduación de la Universidad de Kenyon, ante un auditorio plagado de alumnos embelesados. Escrito en 2005 y debatido ampliamente tras su muerte, este discurso es el conciso legado de uno de los más grandes autores de nuestro tiempo, que se quitó la vida en el momento álgido de su fama y con tan solo cuarenta y seis años.', 'http://descargar.lelibros.online/David%20Foster%20Wallace/Esto%20es%20Agua%20(374)/Esto%20es%20Agua%20-%20David%20Foster%20Wallace.pdf', 1.99, '2022-01-08 12:31:44'),
(11, 'https://i.imgur.com/fu0sj9V.png', 'La Interpretación de los Sueños', 'La primera edición de Die Traumdeutung (La interpretación de los sueños) se publicó unos días antes del siglo, aunque en la portada constara ya la fecha «1900». Es posible observar en esta pequeña licencia algún indicio del valor inaugural que el mismo Freud, clarividente, reservaba a su obra cumbre. La primera edición tuvo una desastrosa acogida por parte del público y la crítica. En una carta a su amigo Fliess, pocos días después de la publicación del libro, el autor se lamentaba: «No hemos adelantado demasiado a nuestro tiempo…». No obstante era también consciente de que, de uno u otro modo, el enigma de los sueños había sido por fin desvelado y que el destino de La interpretación de los sueños era convertirse inexorablemente, en la obra pionera del psicoanálisis. Hoy es también una de las obras maestras de la literatura y el pensamiento del siglo XX. Los progresos científicos alcanzados no han conseguido restar valor ni actualidad a la exposición freudiana de los temas oníricos, aquí presentada en la magistral traducción de Luis López-Ballesteros y de Torres, que mereciera ya en 1923, un comentario elogioso del mismo Freud.', 'http://descargar.lelibros.online/Sigmund%20Freud/La%20Interpretacion%20de%20los%20Suenos%20(137)/La%20Interpretacion%20de%20los%20Suenos%20-%20Sigmund%20Freud.pdf', 1.99, '2022-01-08 12:32:58'),
(12, 'https://i.imgur.com/W2CAsFG.png', 'Animales fantásticos y Donde encontrarlos', 'Hay un ejemplar de Animales fantásticos y dónde encontrarlos en casi todos los hogares de magos del país. Ahora, sólo por cierto tiempo, también los muggles pueden descubrir dónde viven los quintapeds, qué come el puffskein y por qué es mejor no dejar leche fuera de casa para un knarl.', 'http://descargar.lelibros.online/J.%20K.%20Rowling/Animales%20Fantasticos%20y%20Donde%20Encont%20(110)/Animales%20Fantasticos%20y%20Donde%20En%20-%20J.%20K.%20Rowling.pdf', 1.99, '2022-01-08 15:18:11'),
(13, 'https://i.imgur.com/TG2JOlk.png', 'American Gods', 'Días antes de salir de prisión, la mujer de Sombra, Laura, muere en un misterioso accidente de coche. Aturdido por el dolor, emprende el regreso a casa. En el avión, se encontrará con el enigmático señor Wednesday, que dice ser un refugiado de una guerra antigua, un dios y también el rey de América. Juntos se embarcan en un viaje extraño a través de los Estados Unidos, mientras una tormenta de dimensiones épicas amenaza con desencadenarse. Poco a poco descubriremos que Wednesday es una encarnación de Odín y que está reclutando viejos dioses, cuyos poderes han disminuido por el tiempo y la falta de creyentes, para participar en una guerra contra los nuevos dioses: aquellos que conforman la tecnología moderna.', 'http://descargar.lelibros.online/Neil%20Gaiman/American%20Gods%20(402)/American%20Gods%20-%20Neil%20Gaiman.pdf', 1.99, '2022-01-08 15:25:07'),
(14, 'https://i.imgur.com/EXNVe9M.png', 'Azazel', 'Azazel es un demonio rojo de dos centímetros, dotado con una impetuosa personalidad y maravillosos poderes mágicos. Susceptible de ser invocado sólo por George Bitternut, un excéntrico lingüista que ha descubierto antiguas fórmulas para llamar a demonios y a espíritus, Azazel no permitirá que sus poderes sean utilizados en provecho personal de George. Sin embargo, el diminuto demonio ayudará a los amigos de George cuando éstos lo necesiten. El único problema es que este singular ser posee poca comprensión de las cuestiones humanas y sus intervenciones producen situaciones sorprendentes.', 'http://descargar.lelibros.online/Isaac%20Asimov/Azazel%20(801)/Azazel%20-%20Isaac%20Asimov.pdf', 1.99, '2022-01-08 15:28:04'),
(15, 'https://i.imgur.com/KXvDROq.png', 'El asombroso Viaje de Pompino Flato', 'En el siglo I de nuestra era, Pomponio Flato viaja por los confines del Imperio romano en busca de unas aguas de efectos portentosos. El azar y la precariedad de su fortuna lo llevan a Nazaret, donde va a ser ejecutado el carpintero del pueblo, convicto del brutal asesinato de un rico ciudadano. Muy a su pesar, Pomponio se ve inmerso en la solución del crimen, contratado por el más extraordinario de los clientes: el hijo del carpintero, un niño candoroso y singular, convencido de la inocencia de su padre, hombre en apariencia pacífico y taciturno, que oculta, sin embargo, un gran secreto. Cruce de novela histórica, novela policíaca, hagiografía y parodia de todas ellas, aquí se ajustan las cuentas a muchas novelas de consumo, y se construye una nueva modalidad del género más característico de Eduardo Mendoza: la trama detectivesca original e irónica, que desemboca en una sátira literaria y en una desternillante creación novelesca.', 'http://descargar.lelibros.online/Eduardo%20Mendoza/El%20Asombroso%20Viaje%20de%20Pomponio%20Flat%20(538)/El%20Asombroso%20Viaje%20de%20Pomponio%20-%20Eduardo%20Mendoza.pdf', 1.99, '2022-01-08 15:30:46'),
(16, 'https://i.imgur.com/8AxaRzN.png', 'Las Brujas', 'Las brujas de todo el mundo, bajo la apariencia de señoras corrientes, están celebrando su Congreso Anual. Han decidido aniquilar con un ratonizador mágico a todos los niños. ¿Conseguirán vencerlas el protagonista de esta historia y su abuela?', 'http://descargar.lelibros.online/Roald%20Dahl/Las%20Brujas%20(158)/Las%20Brujas%20-%20Roald%20Dahl.pdf', 1.99, '2022-01-08 17:24:43'),
(17, 'https://i.imgur.com/RgzIzN4.png', 'El castillo de Roca Tacaña', 'Geronimo Stilton es el editor del Eco del Roedor, el periódico más leído de la Isla de los Ratones. La profesión de Geronimo le hará vivir muchas peripecias que, trasladadas a la vida ratonil, se parecen mucho a la vida real: reporteros agresivos, noticias exclusivas, robos de manuscritos, arriesgadas expediciones… pero siempre respetando «el código de honor» del buen reportero -sinceridad, igualdad y paz- del que Stilton y su equipo hacen gala. El mundo del periodismo en clave… ratonil. Una boda es una oportunidad para encontrarse con la familia, divertirse y pasarlo en grande. Sin embargo, cuando el que se casa es la persona más tacaña de Ratonia, la oportunidad se convierte en una experiencia única. Al menos así lo vivió Geronimo Stilton cuando llegó a Roca Tacaña a felicitar por su enlace a Virgilio, el hijo del Tío Milordo, y a Cloaquita Pestoseta, su futura esposa, una ratoncita gris, pero millonaria. La visita se transformó en el gran acontecimiento. Geronimo conoció todos los secretos del ahorro, y Trampita, hasta dónde llega la paciencia de Geronimo. Pero quizás la mayor sorpresa se la llevó la sumisa Cloaquita cuando conoció a la decidida y valiente Tea, que le ayudó a dar una vuelta a su destino.', 'http://descargar.lelibros.online/Geronimo%20Stilton/El%20Castillo%20de%20Roca%20Tacana%20(181)/El%20Castillo%20de%20Roca%20Tacana%20-%20Geronimo%20Stilton.pdf', 1.99, '2022-01-08 17:26:41'),
(18, 'https://i.imgur.com/59E43bo.png', 'Todo oscuro, sin estrellas', 'Creo que existe otro hombre dentro de cada hombre, un extraño…» son palabras de la confesión que escribe Wilfred Leland James en «1922», el primer relato de este cuarteto hipnotizador y profundamente oscuro. El ser desconocido que James lleva dentro se despierta cuando su esposa Arlette le anuncia que piensa vender el terreno que acaba de heredar y que va a trasladarse a la ciudad. Sus palabras le empujan hacia el asesinato y la locura. En «Camionero Grande». Tess, una escritora de novelas simpáticas de intriga, se encuentra con un hombre gigantesco cuando vuelve a casa por una carretera rural después de dar una charla en un club de lectura. Violada y abandonada tras ser dada por muerta, Tess planea su venganza y para llevarla a cabo tendrá que sacar de sí misma un lado totalmente desconocido. «Una extensión justa», el relato más corto, es el más malvado y el más divertido. Harry Streeter hace un pacto con el diablo quien le quitará no solamente su cáncer mortal, sino también todos los rencores que había sentido en su vida. Y finalmente, en «Un buen matrimonio» conocemos a Darcy Anderson quien, un día en que su marido está fuera por trabajo, va a buscar pilas al garaje y descubre una caja que él tenía allí escondida. Su contenido es tan horrendo como el ser desconocido que hay dentro de su marido. En un solo instante acabarán veinte felices años de matrimonio. Stephen King es autor de más de cincuenta libros, todos best sellers internacionales. Los más recientes incluyen La cúpula, Después del anochecer, Duma Key, Cell, La historia de Lisey, Todo es eventual y los últimos tomos de La Torre Oscura. En 2003 fue galardonado con la medalla del National Book Foundation for Distinguished Contribution to American Letters, y en 2007 fue nombrado Gran Maestro de los Mystery Writers of America. Vive en Maine con su esposa Tabitha King, también novelista. «Todo oscuro, Sin estrellas es una colección de relatos extraordinaria, terrorífica, sin piedad. El autor está en el cénit de su poder creativo». The Telegraph «Un libro que te obliga a seguir leyendo. King domina tanto la novela corta como la novela muy larga». The New York Times', 'http://descargar.lelibros.online/Stephen%20King/Todo%20Oscuro,%20Sin%20Estrellas%20(304)/Todo%20Oscuro,%20Sin%20Estrellas%20-%20Stephen%20King.pdf', 1.99, '2022-01-08 17:34:32'),
(19, 'https://i.imgur.com/kv1doHG.png', 'El elemento', 'El mundo cambia a una velocidad vertiginosa. Es imposible adivinar cómo viviremos en el futuro: lo único que sabemos es que hará falta mucha imaginación y creatividad para transformarnos y afrontar los nuevos retos. Descubrir el Elemento es recuperar capacidades sorprendentes en nuestro interior, y desarrollarlo dará un giro radical no sólo a tu entorno laboral, sino también a tus relaciones y, en definitiva, a tu vida.', 'http://descargar.lelibros.online/Ken%20Robinson/El%20Elemento%20(172)/El%20Elemento%20-%20Ken%20Robinson.pdf', 1.99, '2022-01-08 18:06:56'),
(20, 'https://i.imgur.com/9iWFnIZ.png', 'El Arte de no amargarse la vida', 'El arte de no amargarse la vida. ¿Sufres de terribilitis? Rafael Santandreu explica que muchos de los problemas emocionales actuales son causa de una mala filosofía de vida. Con gran facilidad nos creemos deprimidos, ansiosos o muy desgraciados. El arte de no amargarse la vida cuenta que todos estos trastornos emocionales podrían calificarse de terribilitis. En nuestra sociedad tenemos muchas creencias que nos hacen ser infelices como que si no tienes pareja eres desdichado o que hay que tener un puesto de trabajo muy importante para realizarse. Siguiendo la saga de los grandes libros de psicología para el gran público Rafael Santandreu, expone en esta obra un método práctico y claro, aunque completamente científico, para caminar hacia el cambio psicológico. Nuestro destino es convertirnos en personas más fuertes y felices. Con anécdotas extraídas tanto de su consulta como de su historia personal, el autor nos muestra cómo transformarnos a nosotros mismos. De deprimidos, ansiosos o “cascarrabias” podemos convertirnos en hombres y mujeres serenos, alegres y optimistas, con la ayuda de un terapeuta o ¡por nosotros mismos!', 'http://descargar.lelibros.online/Rafael%20Santandreu/El%20arte%20de%20no%20amargarse%20la%20vida%20(153)/El%20arte%20de%20no%20amargarse%20la%20vida%20-%20Rafael%20Santandreu.pdf', 1.99, '2022-01-08 18:10:33'),
(21, 'https://i.imgur.com/1HJXMsR.jpeg', 'Canaan negro y otros relatos de horror sobrenaturales', 'A pesar de la brevedad de su carrera literaria, Rober E. Howard (1906-1936), que nunca abandonó la casa familiar en la localidad texana de Cross Plains, contribuyó de un modo decisivo al surgimiento y auge de la literatura pulp norteamericana en los años 20 y 30 del pasado siglo con la publicación en revistas populares, como Weird Tales, de centenares de relatos de terror, aventuras, fantásticos, históricos, etc., fruto de su poderosa imaginación. Impulsó junto con su amigo epistolar H.P. Lovercraft y el californiano Clark Ashton Smith, «los tres mosqueteros de Weird Tales», el fenómeno , que tanta influencia ha tenido en la cultura popular, y dio origen anticipándose unos años a JRR Tolkien, al género de fantasía heroica (Espada y Brujería) con su héroe Conan el Cimerio o el peregrino justiciero del siglo XVI Solomon Kane. Sobre la variedad de registro y temáticas de que era capaz la fértil imaginación de Howard, el aficionado encontrará en este volumen «Canaan negro y otros relatos de terror sobrenatural», una buena muestra. Los dieciocho relatos reunidos en esta antología han sido traducidos directamente de los textos originales, la mayoría publicados en vida de Howard, desechando las ilegítimas adulteraciones que sufrieron en ediciones posteriores. Entre ellos se pueden destacar «Los moradores bajo la tumba» y «Canaan negro», dos soberbias narraciones de horror sobrenatural; los cuentos de fantasmas «La perdición de Dermod» y «Aguas inquietas»; los relatos de civilización perdida «Delenda Est», «La Casa de Arabu» y «La marca del cabo», o dos piezas que podrían adscribirse al género de weird menace, «La Cosa con pezuñas» y «El fantasma del anillo».', 'http://descargar.lelibros.online/Robert%20E.%20Howard/Canaan%20Negro%20y%20Otros%20Relatos%20de%20Hor%20(283)/Canaan%20Negro%20y%20Otros%20Relatos%20de%20-%20Robert%20E.%20Howard.pdf', 1.99, '2022-01-09 17:10:49'),
(22, 'https://i.imgur.com/BOlOlOB.png', 'El sueño de Africa', 'Surcar el continente africano, Javier Reverte emprende un camino donde a cada paso se trasluce el amor, su fascinación y su respeto por aquellas lejanas tierras. Como en las otras entregas de la trilogía, el prolífico periodista asume el papel de viajero en pos de un mito que se irá revelando a través del contacto directo con las gentes y los paisajes africanos. Este libro, que trata de la historia blanca del África negra, entrelaza las grandes y las pequeñas narraciones que surgen a su encuentro con el pasado, con las ciudades del presente, con el conocimiento de tribus ancestrales en franco proceso de extinción... Impregnada de lúcido realismo, de exuberante belleza y de leyenda, esta crónica revela en clave homérica que el placer del viaje, más que en llegar a un destino, consiste en enriquecerse como ser humano a lo largo del itinerario.', 'http://descargar.lelibros.online/Javier%20Reverte/El%20Sueno%20de%20Africa%20(131)/El%20Sueno%20de%20Africa%20-%20Javier%20Reverte.pdf', 1.99, '2022-01-09 17:26:37'),
(23, 'https://i.imgur.com/f8t989e.png', 'La prueba del Cielo', 'El 8 de noviembre de 2008 me desperté con un terrible dolor de cabeza que en apenas dos horas desembocó en un derrame cerebral. Caí en un coma profundo, y durante siete días permanecí en ese estado, durante el cual viví una experiencia increíble y fuera de este mundo. El lugar en el que estuve es un sitio maravilloso, reconfortante y lleno de amor. No tengo miedo a morir porque ahora sé que no es el final». Doctor Eben Alexander. La lógica científica del doctor Alexander jamás había dado crédito a las experiencias cercanas a la muerte. Sin embargo, después de haber pasado por esto sabe que no son meras fantasías: Dios y el alma existen realmente, y la muerte no es el final de la existencia personal, sino una mera transición.', 'http://descargar.lelibros.online/Eben%20Alexander/La%20Prueba%20del%20Cielo%20(100)/La%20Prueba%20del%20Cielo%20-%20Eben%20Alexander.pdf', 1.99, '2022-01-09 17:41:49'),
(24, 'https://i.imgur.com/IhXpL4J.png', '¿Puede pensar una maquina?', 'En 1947 Alan M. Turing pronunció una conferencia ante un auditorio compuesto en su mayor parte por miembros del National Physical Laboratory de Londres en la que intentaba responder a la vieja y controvertida pregunta ¿Puede pensar una máquina? Lo expuesto en ese acto apareció publicado tres años más tarde en Mind —una importante revista de filosofía británica— y es lo que ofrecemos aquí al lector en su traducción castellana. Este texto se convirtió enseguida en uno de los escritos fundacionales de la lógica informática y la inteligencia artificial, al presentar las líneas generales por las que debería discurrir una respuesta precisa y manejable (aunque no indiscutible) a la pregunta formulada. Se trata del famoso Test de Turing, una prueba para decidir si una máquina es inteligente (o «piensa»). Para ello Turing diseñó un juego de imitación en el que participan una máquina y seres humanos; podemos decir que una máquina piensa si un ser humano que se comunica con la máquina y con otros seres humanos no logra distinguir cuando su interlocutor es una máquina y cuando un humano. Una «máquina de Turing» como la que participa en el juego, es un dispositivo ideal de cálculo, capaz de resolver una función computable —una función cuya solución es susceptible de ser obtenida por un procedimiento mecánico—. Pero lo más significativo es que Turing demostró que hay una máquina peculiar —la máquina universal de Turing— en la que se puede representar cualquier máquina que sea capaz de computar una función particular. De acuerdo con esto, una máquina universal de Turing sería una especie de sistema operativo en el que se implementan diferentes programas (máquinas de Turing especiales), un poco a la manera en que nos es familiar en los ordenadores personales. La denominada «metáfora del ordenador» como modelo capaz de simular la mente humana y, por ende, el pensar, tiene aquí su fuente.', 'http://descargar.lelibros.online/Alan%20M.%20Turing/_Puede%20Pensar%20una%20Maquina_%20(582)/_Puede%20Pensar%20una%20Maquina_%20-%20Alan%20M.%20Turing.pdf', 1.99, '2022-01-09 17:44:40'),
(25, 'https://i.imgur.com/ArU8GUS.png', 'La tragedia de la luna', 'Asimov habla en esta obra de la Luna y de otros pequeños mundos que pueblan nuestro sistema solar; se ocupa del carbono, del descubrimiento del DNA, de la función de la glándula tiroidea, de los microorganismos y de la velocidad de la luz; reflexiona sobre cuestiones sociales tan importantes como el racismo y el futuro de los medios de comunicación.', 'http://descargar.lelibros.online/Isaac%20Asimov/La%20Tragedia%20de%20la%20Luna%20(302)/La%20Tragedia%20de%20la%20Luna%20-%20Isaac%20Asimov.pdf', 1.99, '2022-01-09 17:49:33'),
(26, 'https://i.imgur.com/qjPu1L7.png', 'Economía para andar por casa', '¿Por qué sube la gasolina? ¿Son de fiar las empresas que nos ofrecen refinanciar nuestras deudas? ¿Cómo me afecta la reforma laboral? ¿Qué son los fondos de inversión? ¿A qué edad es recomendable hacer un plan de pensiones? Cada día desde que nos levantamos nos enfrentamos a un sinfín de cuestiones que tienen un trasfondo económico: desde la luz que ilumina nuestro hogar hasta el combustible que utilizamos para desplazarnos, los impuestos que pagamos y los servicios que contratamos con los bancos. Un afamado economista y tres reconocidos periodistas han hecho el ejercicio de sintetizar las dudas más comunes que afectan a cualquier ciudadano para convertirlas en preguntas que se responden de forma sencilla y clara, aclarando conceptos y desmontando tópicos. El resultado es una obra de lectura obligada para todos aquellos que quieran saber qué ocurre con su dinero y cómo funciona la economía', 'http://descargar.lelibros.online/AA.%20VV_/Economia%20Para%20Andar%20por%20Casa%20(279)/Economia%20Para%20Andar%20por%20Casa%20-%20AA.%20VV_.pdf', 1.99, '2022-01-09 17:51:51'),
(27, 'https://imgur.com/kegKovp.png', 'Eragon', 'En el reino legendario de Alagaësia la guerra se está gestando. Los jinetes protectores de la paz del Imperio y los únicos capaces de controlar a los inteligentes dragones, se han extinguido o han pasado a formar parte de las tropas del malvado rey Galbatorix. Los elfos hace tiempo que se han exiliado a un lugar oculto y los vardenos, un grupo disidente, se ocultan en ciudades protegidas. Cuando Eragon, un joven de 15 años que vive en una pequeña aldea, se encuentra con una piedra preciosa en medio del bosque a donde ha ido a cazar, poco se espera que ese suceso vaya a cambiar su vida y el destino de Alagaësia. Lo único que desea es venderla para así asegurar la subsistencia de su familia durante el duro invierno. Sin embargo, una noche la gema se rompe y lo que sale de ella lo llevará a un viaje que lo convertirá en héroe. ¿Podrá Eragon tomar la responsabilidad de los legendarios jinetes de dragones? La esperanza del Imperio descansa en sus manos...', 'http://descargar.lelibros.online/Christopher%20Paolini/Eragon%20(53)/Eragon%20-%20Christopher%20Paolini.pdf', 1.99, '2022-01-09 17:54:15'),
(28, 'https://imgur.com/0XzkYIb.png', 'Las Aventuras de Huckleberry Finn', 'El protagonista de este libro es un niño desharrapado, que no va a la escuela, roba y utiliza un lenguaje barriobajero. A través de sus atónitos ojos de chiquillo espabilado, Mark Twain consigue realizar sus mayores ambiciones literarias, pues a partir del color local creó una historia universal, cuyo impacto en el lector es profundo y duradero: todo un clásico de literatura universal.', 'http://descargar.lelibros.online/Mark%20Twain/Las%20Aventuras%20de%20Huckleberry%20Finn%20(313)/Las%20Aventuras%20de%20Huckleberry%20Fi%20-%20Mark%20Twain.pdf', 1.99, '2022-01-09 17:58:43'),
(29, 'https://imgur.com/TaGvv3a.png', 'Derrida en 90 Minutos', 'El desconstructivismo de Derrida es nada menos que un intento de destruir toda escritura demostrando su inevitable falsedad. El escritor escribe con una mano, pero ¿qué hace con la otra? Todo escrito, todo texto, insiste Derrida, contiene su propia agenda escondida, sus propias suposiciones metafísicas. El propio lenguaje del escritor distorsiona inevitablemente lo que piensa y escribe. Se socava así la verdad de todo conocimiento; llega el posestructuralismo. En Derrida en 90 minutos, Paul Strathern presenta un recuento preciso y experto de la vida e ideas de Derrida, y explica su influencia en la lucha del hombre por comprender su existencia en el mundo. El libro incluye una selección de escritos de Derrida, una breve lista de lecturas sugeridas para aquellos que deseen profundizar en su pensamiento, así como cronologías que sitúan a Derrida en su época y en una sinopsis más amplia de la filosofía.', 'http://descargar.lelibros.online/Paul%20Strathern/Derrida%20en%2090%20Minutos%20(466)/Derrida%20en%2090%20Minutos%20-%20Paul%20Strathern.pdf', 1.99, '2022-01-09 18:07:34'),
(30, 'https://imgur.com/ql85tf7.png', 'Cien años de soledad', 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo». Macondo, en ese entonces, era una pequeña aldea a la que llegaban todos los años, por el mes de marzo, los gitanos dirigidos por Melquíades, llevando los últimos inventos de la ciencia. El patriarca y fundador de Macondo, José Arcadio Buendía, se obsesiona con los inventos de los gitanos al extremo de descuidar a su familia. Descubre que la tierra es redonda y planea un viaje para encontrar la tierra de los inventos, pero luego de un peligroso viaje, sólo llega al mar. Ante su decisión de abandonar Macondo, Úrsula, su mujer, lo detiene y le dice que se ocupe de sus hijos. José Arcadio se entretiene en darles leccciones poco verídicas a sus hijos, José Arcadio y Aureliano. Cuando vuelven los gitanos, José Arcadio se entera de la muerte de Melquíades. Además, junto con sus dos hijos, conoce el hielo, que el cree es el más grande invento de su tiempo.', 'http://descargar.lelibros.online/Gabriel%20Garcia%20Marquez/Cien%20anos%20de%20soledad%20(68)/Cien%20anos%20de%20soledad%20-%20Gabriel%20Garcia%20Marquez.pdf', 1.99, '2022-01-09 18:09:52'),
(31, 'https://imgur.com/hePn4L7.png', 'La Tierra Desprevenida', 'La Primera Guerra Fórmica está a punto de estallar. La nave minera Cavadora se encuentra alejada de la Tierra, en las profundidades del Cinturón de Kuiper. Otras naves mineras, y las familias que viven en ellas, están tan cerca como lejos de ella. Los sistemas de la nave minera son viejos y empiezan a fallar, y la familia se está volviendo demasiado grande para el tamaño de la nave. Tantos son los problemas cotidianos, que cuando divisan un enorme objeto que se mueve a una fracción similar a la velocidad de la luz, no le dan ninguna importancia. Sin embargo, están del todo equivocados, ya que la presencia de este extraño ente será decisiva para el futuro de la humanidad durante los próximos millones de años. Antes de que Ender Wiggin naciera, mucho antes de que la Escuela de Batalla fuera construida, los alienígenas llevaron la guerra a la galaxia.', 'http://descargar.lelibros.online/Orson%20Scott%20Card/La%20Tierra%20Desprevenida%20(460)/La%20Tierra%20Desprevenida%20-%20Orson%20Scott%20Card.pdf', 1.99, '2022-01-09 18:14:13'),
(32, 'https://imgur.com/z8hNLMZ.png', 'La Máquina del Tiempo', 'Obra que se halla en los inicios de la novela de ciencia-ficción, La máquina del tiempo (1895) sigue conservando el mismo poder de fascinación y vigor narrativo que le valieron el éxito inmediato en el momento de su publicación. Afortunada síntesis de los conocimientos científicos del autor, del maquinismo que hacía furor en la época y de la visión escéptica de H.G. Wells (1866-1946) respecto al rumbo tomado por la sociedad que le tocó vivir, el relato ­un clásico­ describe un futuro inquietante en el que dos razas semibestiales, los eloi y los morlock, comparten en una peculiar simbiosis un planeta extraño y desolado sobre el que se han cernido catástrofes y transformaciones, pero en el que brilla aún, como tenue esperanza, un hálito de humanidad.', 'http://descargar.lelibros.online/H.%20G.%20Wells/La%20Maquina%20del%20Tiempo%20(850)/La%20Maquina%20del%20Tiempo%20-%20H.%20G.%20Wells.pdf', 1.99, '2022-01-10 18:46:06'),
(33, 'https://imgur.com/WaHoiqA.png', 'La Falsificación', '¿Por qué una anciana es asesinada en su mansión de Inglaterra la madrugada del 11 de septiembre de 2001? ¿Por qué un exitoso banquerode Nueva York no se sorprende al recibir por correo la oreja de una vieja dama? ¿Por qué un prestigioso abogado trabaja para un único cliente sin cobrar honorarios? ¿Por qué una joven ejecutiva roba un Van Gogh si no es una ladrona? ¿Por qué una brillante licenciada trabaja como secretaria después de heredar una fortuna? ¿Por qué una atleta cobra un millón de dólares por cumplir una misión? ¿Por qué una aristócrata estaría dispuesta a matar si sabe que pasará el resto de su vida en prisión? ¿Por qué un magnate japonés del acero va a dar una fuerte suma de dinero a una mujer a la que no conoce? ¿Por qué un experto agente del FBI tiene que averiguar cuál es la conexión entre estas ocho personas aparentemente sin relación entre ellas? Las respuestas a todas estas preguntas las da esta absorbente novela: en ella, una conspiración internacional, cuyo objetivo es uno de los lienzos más valiosos del mundo, introduce al lector en el mercado negro del arte, desde Nueva York hasta Londres, desde Bucarest hasta Tokio, tras las huellas de falsificadores y asesinos a sueldo, en un relato cuya lectura no da tregua.', 'http://descargar.lelibros.online/Jeffrey%20Archer/La%20Falsificacion%20(161)/La%20Falsificacion%20-%20Jeffrey%20Archer.pdf', 1.99, '2022-01-10 18:54:10'),
(34, 'https://imgur.com/gKjbDiF.png', 'Inés del Alma Mía', 'Inés del alma mía es un libro de la autora chilena Isabel Allende, que relata la vida de Inés Suárez, primera mujer española en llegar a Chile. En la novela se narran los principales hechos de la vida de doña Inés, que están destinados a ser leídos por su hija adoptiva Isabel. Es una especie de diario que ella deja por miedo a que sus memorias sean olvidadas. Relata los duros viajes antes de llegar a Chile, la decadencia del imperio Inca bajo Francisco Pizarro y la dura conquista de Chile donde comienza su vida de pareja con Pedro de Valdivia y más tarde, su matrimonio con Rodrigo de Quiroga. Allende muestra a Doña Inés como una mujer con extremado coraje, dispuesta a hacer todo por el hombre al que ama, pero sin dejar de lado sus propósitos ni su honor, ni sus ansias de conquistar nuestras tierras indómitas. En esta novela épica el aliento del amor concede una tregua a la rudeza, la violencia y la crueldad de un momento histórico inolvidable. A través de la pluma de Isabel Allende se confirma que la realidad puede ser tan sorprendentemente o más que la mejor ficción, e igualmente cautivadora.', 'http://descargar.lelibros.online/Isabel%20Allende/Ines%20del%20Alma%20Mia%20(352)/Ines%20del%20Alma%20Mia%20-%20Isabel%20Allende.pdf', 1.99, '2022-01-10 19:05:32'),
(35, 'https://imgur.com/COcpo2T.png', 'Harry Potter y el Prisionero de Azkaban', 'Por la cicatriz que lleva en la frente, sabemos que Harry Potter no es un niño como los demás, sino el héroe que venció a lord Voldemort, el mago más temible y maligno de todos los tiempos y culpable de la muerte de los padres de Harry. Desde entonces, Harry no tiene más remedio que vivir con sus pesados tíos y su insoportable primo Dudley, todos ellos muggles, o sea, personas no magas, que desprecian a su sobrino debido a sus poderes. Igual que en las dos primeras partes de la serie –La piedra filosofal y La cámara secreta– Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia y Hechicería. Tras haber cumplido los trece años, solo y lejos de sus amigos de Hogwarts, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a eliminar a Harry del mapa. Y por si esto fuera poco, Harry deberá enfrentarse también a unos terribles monstruos, los dementores, seres abominables capaces de robarles la felicidad a los magos y de borrar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho más.', 'http://descargar.lelibros.online/J.%20K.%20Rowling/Harry%20Potter%20y%20el%20Prisionero%20de%20Azka%20(16)/Harry%20Potter%20y%20el%20Prisionero%20de%20-%20J.%20K.%20Rowling.pdf', 1.99, '2022-01-10 19:08:16'),
(36, 'https://imgur.com/d1ZZwTG.png', 'Coraline', 'El día después de que se mudaran, Coraline se fue a explorar… Cuando Coraline atraviesa una de las puertas de la casa nueva de su familia, se encuentra que hay otra casa extrañamente similar a la suya (aunque la nueva sea, definitivamente, mejor). Al principio, todo parece maravilloso: la comida es más sabrosa que la de casa y el cajón de los juguetes está repleto de angelitos de papel que vuelan solos y de calaveras de dinosaurios que parecen vivas y se arrastran haciendo castañetear los dientes. Pero resulta que hay otra madre que vive ahí, y otro padre, y quieren que Coraline se quede con ellos y se convierta en su pequeña. Quieren cambiarla y no dejarla ir jamás. Coraline tendrá que enfrentarse a ellos con todo su ingenio y las herramientas que encuentre, si es que ha de conseguir salvarse y volver a su vida normal.', 'http://descargar.lelibros.online/Neil%20Gaiman/Coraline%20(841)/Coraline%20-%20Neil%20Gaiman.pdf', 1.99, '2022-01-10 19:43:50'),
(37, 'https://imgur.com/x2u5yoJ.png', 'El Año del Diluvio', 'Mendoza narra el conflicto en el que se ve envuelta sor Consuelo, una monja que administra un ruinoso hospital. Para conseguir la financiación, se dirige al cacique de San Ubaldo de Bassora, aunque todo empieza a complicarse cuando éste la seduce. La invención expresiva constante de Mendoza y su inigualada habilidad para la recreación de estilos y géneros sustenta el cañamazo de una historia rica en hallazgos y sorpresas. Por su maestría narrativa, desplegada en los más varios registros, y por el empuje y poder de convicción con que transmite al lector un mundo propio y unos personajes de contorno imborrable, El año del diluvio se cuenta entre los logros mayores de Eduardo Mendoza.', 'http://descargar.lelibros.online/Eduardo%20Mendoza/El%20Ano%20del%20Diluvio%20(603)/El%20Ano%20del%20Diluvio%20-%20Eduardo%20Mendoza.pdf', 1.99, '2022-01-10 20:12:27'),
(38, 'https://imgur.com/NyLGBbZ.png', 'Charlie y la Fábrica de Chocolate', 'Esta historia muestra cómo a veces una decisión puede transformar radicalmente toda una vida... Y esto es justo lo que sucede a Charlie. En este maravilloso relato, Roald Dahl realiza una de sus mejores críticas sobre el comportamiento humano. Un niño que vive en la pobreza, en una casa de sólo dos habitaciones, con sus padres y abuelos, recibe siempre por su cumpleaños una sola tableta de chocolate. Junto a su casa, una gran fábrica de chocolate sortea una visita guiada y cinco tabletas a quien encuentre el premio en uno de los envoltorios.', 'http://descargar.lelibros.online/Roald%20Dahl/Charlie%20e%20o%20Grande%20Elevador%20De%20Vidr%20(970)/Charlie%20e%20o%20Grande%20Elevador%20De%20%20-%20Roald%20Dahl.pdf', 1.99, '2022-01-10 20:14:14'),
(39, 'https://imgur.com/VyYNup2.png', 'El Misterioso Manuscrito de Nostrarratus', 'Geronimo Stilton es el editor del Eco del Roedor, el periódico más leído de la Isla de los Ratones. La profesión de Geronimo le hará vivir muchas peripecias que, trasladadas a la vida ratonil, se parecen mucho a la vida real: reporteros agresivos, noticias exclusivas, robos de manuscritos, arriesgadas expediciones… pero siempre respetando «el código de honor» del buen reportero -sinceridad, igualdad y paz- del que Stilton y su equipo hacen gala. El mundo del periodismo en clave… ratonil. Los editores de Ratonia huelen los buenos libros como el queso, a kilómetros de distancia. Geronimo Stilton estaba seguro de que el manuscrito de Nostrarratus sería todo un éxito de ventas. Él lo había predicho todo, ¡hasta la fecha del fin del mundo! Pero Geronimo no era el único editor interesado en el manuscrito. Por eso, cuando menos lo esperaba, su vil competidora, Sally Ratonen, se lo robó. ¡Ojalá fuera esa sólo la única preocupación del editor de El Eco del Roedor! Antes de recuperar el manuscrito deberá sobrevivir a un importante viaje a Ratonkfurt organizado por Pinky, su alocada y divertida secretaria adolescente.', 'http://descargar.lelibros.online/Geronimo%20Stilton/El%20Misterioso%20Manuscrito%20de%20Nostrar%20(217)/El%20Misterioso%20Manuscrito%20de%20Nos%20-%20Geronimo%20Stilton.pdf', 1.99, '2022-01-10 20:22:45'),
(40, 'https://imgur.com/L5hRHJh.png', 'El Pistolero', 'En un mundo extrañamente parecido al nuestro Roland Deschain de Gilead persigue a su enemigo, el hombre de negro. Roland, solitario, quizá maldito, anda sin descanso a través de un paisaje triste y abandonado. Conoce a Jake, un chico de Nueva York pero de otro tiempo, y ambos unen sus destinos. Ante ellos están las montañas. Y mucho más allá, la Torre Oscura… «El hombre de negro huía a través del desierto y el pistolero iba en pos de él». Estas palabras las escribió Stephen King en 1970, cinco años antes de la publicación de su primera novela, y con ellas abrió la puerta a un nuevo mundo que muchos lectores todavía no conocen bien. De esta forma se inició una fantasía épica en siete tomos, siete tomos, La Torre Oscura, que ya se ha convertido en un clásico del género. Stephen King tardó treinta y tres años en terminar el ciclo. Ahora, por primera vez en castellano, ofrecemos la versión revisada de este primer volumen, enriquecido con las ilustraciones de Michael Whelan para una edición limitada que publicó Donald M. Grant en 1982, junto con una nueva introducción y un prólogo del autor.', 'http://descargar.lelibros.online/Stephen%20King/El%20pistolero%20(298)/El%20pistolero%20-%20Stephen%20King.pdf', 1.99, '2022-01-10 20:24:44'),
(41, 'https://imgur.com/Rz5S1g8.png', 'Las Gafas de la Felicidad', 'Rafael Santandreu vuelve con más soluciones para superar los complejos y los problemas que dificultan y amargan la vida de tantas personas. Rafael Santandreu es uno de los psicólogos más prestigiosos de España. Está especializado en ayudar a las personas a desarrollar su fortaleza emocional. A través de su método miles de personas han conseguido perder sus miedos de forma permanente.Ahora te toca a ti descubrir las lentes que te enseñarán a graduar tu corazón y tu mente. ¡Ponte las gafas de la felicidad!', 'http://descargar.lelibros.online/Rafael%20Santandreu/Las%20gafas%20de%20la%20felicidad%20(209)/Las%20gafas%20de%20la%20felicidad%20-%20Rafael%20Santandreu.pdf', 1.99, '2022-01-10 20:36:42'),
(42, 'https://imgur.com/44vBaLD.png', 'Corazón de Ulises', '«Corazón de Ulises» es un libro que, desde su primera edición, ha sido considerado un clásico de la literatura de viajes de nuestro país. Leído y estudiado en las universidades y recomendado también en numerosas guías, profundo y ameno, sabio y cercano, este libro reúne lo mejor de la literatura de su autor: la pedagogía y la emoción, el saber y la información, la poesía y la historia, el humor y la reflexión. Javier Reverte nos cuenta en él su viaje por lo territorios de la Grecia actual, pero también nos acerca a los territorios del ayer griego. Y funde en sus páginas la Grecia pretérita y la del presente. Cualquiera que viaje a la Grecia de hoy, pretendiendo entender al tiempo su imponente legado, debería llevar este libro con él. Porque Corazón de Ulises es un recorrido por la Grecia del presente escrito para quien lo quiera leer mientras viaja. Y también para los que, sin ánimo de viajar, deseen saber cómo fueron los caminos que trazaron los antiguos griegos. Javier Reverte ha creado un género literario nuevo con su forma de contar la vida de las gentes. Recuperar una obra tan significativa en esta nueva edición es una forma de acercar la cultura clásica a los lectores ávidos de viajar y de saber, en un lenguaje tan eterno como nuevo. Corazón de Ulises nos enseña a viajar con la cultura a cuestas.', 'http://descargar.lelibros.online/Javier%20Reverte/Corazon%20de%20Ulises%20(652)/Corazon%20de%20Ulises%20-%20Javier%20Reverte.pdf', 1.99, '2022-01-10 20:40:47'),
(43, 'https://imgur.com/v0YIMeT.png', 'Humor Cósmico', 'La ciencia ficción —puro entretenimiento en sus inicios— se ha convertido en un género literario tremendamente serio. Sus nuevos universos, poblados por nuevas y extrañas razas, no son más que nuevos escenarios para los mismos dramas, las mismas contradicciones de nuestra vieja Tierra. Pero en su vagar por el cosmos, el lector de ciencia ficción puede también tener sorpresas. Y encontrarse, por ejemplo, con una mortífera bomba H que tiene un ojo azul, o con un robot transparente enamorado de su interior o con un ejército de Supermans. Así de insólitos —o más, y lean los relatos del presente volumen para comprobarlo— son los resultados de la alianza entre el sentido del humor y la fantasía científica: una mezcla que de puro corrosiva, puede llegar a ser detonante…', 'http://descargar.lelibros.online/AA.%20VV_/Humor%20Cosmico%20%28114%29/Humor%20Cosmico%20-%20AA.%20VV_.pdf', 1.99, '2022-01-10 20:42:22');
INSERT INTO `books` (`id_book`, `book_image`, `book_name`, `description`, `download`, `price`, `upload_date`) VALUES
(44, 'https://imgur.com/9oVo05n.png', 'It (eso)', '¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.', 'http://descargar.lelibros.online/Stephen%20King/It%20(23)/It%20-%20Stephen%20King.pdf', 1.99, '2022-01-10 20:43:28'),
(45, 'https://imgur.com/V4gFC2a.png', 'Matilda', 'Matilda es una lectora empedernida con sólo cinco años. Sensible e inteligente, todos la admiran menos sus mediocres padres, que la consideran una inútil. Además tiene poderes extraños y maravillosos… Un día, Matilda decide desquitarse y empieza a emplearlos contra la abominable y cruel señorita Trunchbull.', 'http://descargar.lelibros.online/Roald%20Dahl/Matilda%20(946)/Matilda%20-%20Roald%20Dahl.pdf', 1.99, '2022-01-10 20:45:01'),
(46, 'https://imgur.com/wTkQB9G.png', 'Harry Potter y la Cámara Secreta', 'Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y hechicería. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.', 'http://descargar.lelibros.online/J.%20K.%20Rowling/Harry%20Potter%20y%20la%20Camara%20Secreta%20(15)/Harry%20Potter%20y%20la%20Camara%20Secret%20-%20J.%20K.%20Rowling.pdf', 1.99, '2022-01-10 20:46:29'),
(47, 'https://imgur.com/kSqG5Gu.png', 'Trajano y Decébalo en la Rumanía del Siglo XXI', 'Las novelas de Santiago Posteguillo consiguen atrapar a los lectores gracias, entre otras cosas, a su exhaustiva labor de documentación. Para recrear con la mayor fidelidad posible la conquista de la Dacia por Trajano, Santiago Posteguillo realizó un viaje por la Rumanía actual siguiendo los pasos del emperador hispano. En este documento el lector podrá recorrer paso a paso, calzada a calzada, los movimientos que el ejército romano realizó en su guerra contra Decébalo. Un documento de gran valor informativo, escrito con una pizca de humor y aderezado con imágenes de fotografías tomadas por el propio autor; así surge la complicidad con los lectores.', 'http://descargar.lelibros.online/Santiago%20Posteguillo/Trajano%20y%20Decebalo%20en%20la%20Rumania%20del%20(28)/Trajano%20y%20Decebalo%20en%20la%20Rumani%20-%20Santiago%20Posteguillo.pdf', 1.99, '2022-01-10 20:48:17'),
(48, 'https://imgur.com/EEfGdcj.png', 'El Fraude de la Sábana Santa y las Reliquias de Cristo', '«Un artista anónimo del siglo XIV descubrió los principios de la fotografía y falsificó el sudario de Cristo. Hoy, aquella reliquia ha dado origen a una pseudociencia, la sindonología, sustentada por poderosas asociaciones y sectas de todo el mundo. El objeto de la sindonología es probar con argumentos científicos que Cristo fue Dios. Para ello, científicos poco escrupulosos, e incluso claramente mendaces, no han vacilado en emplear las técnicas más avanzadas de la era espacial en apoyo de un gigantesco fraude y de un gran negocio encubierto bajo el pretexto de la religión. Este libro, en el que la ironía y el humor se aúnan con el rigor histórico, denuncia no sólo los manejos de los sindonólogos sino el resto de fraudes perpetrados con supuestas y pintorescas reliquias de Cristo a lo largo de la Historia: los abundantes Santos Prepucios, los Santos Pañales, las innumerables astillas de la Cruz, el guardarropa de la Virgen, los Santos Rostros y Verónicas, las Santas Espinas, los Santos griales, los Santos lugares… y todo el inmenso arsenal de mentiras fraguado para estafar a los crédulos devotos.', 'http://descargar.lelibros.online/Juan%20Eslava%20Galan/El%20Fraude%20de%20la%20Sabana%20Santa%20y%20las%20(153)/El%20Fraude%20de%20la%20Sabana%20Santa%20y%20-%20Juan%20Eslava%20Galan.pdf', 1.99, '2022-01-10 20:49:23'),
(49, 'https://imgur.com/RoCMwAL.png', 'Los Mitos Griegos', 'Apasionado por el mundo clásico, Robert Graves publicó en 1955 esta recreación narrada de los mitos griegos, que se ha convertido con el paso de los años en una obra de referencia ineludible para iniciarse en el fascinante mundo de la antigüedad. La erudición y la magistral prosa de Graves combinadas dan como resultado una deslumbrante inmersión en los avatares de los héroes y los dioses, a través de una sucesión de mitos que siguen hoy iluminándonos sobre temas eternos como las pasiones, el odio, los celos, la culpa, la ambición, la codicia, el miedo, la traición, los deseos inconfesables… Forjadores de un universo simbólico que ha marcado el imaginario de Occidente a lo largo de la historia, por estas páginas desfilan Zeus, Narciso, Afrodita, Hermes, Atenea, Orestes, las Parcas, Apolo, Poseidón, Dioniso, Perseo, Sísifo, Midas, Teseo, Edipo, Penélope, Heracles… Un delicioso paseo por el mundo de los mitos griegos. Un clásico imprescindible en cualquier biblioteca.', 'http://descargar.lelibros.online/Robert%20Graves/Los%20Mitos%20Griegos%20(104)/Los%20Mitos%20Griegos%20-%20Robert%20Graves.pdf', 1.99, '2022-01-10 20:50:53'),
(50, 'https://i.imgur.com/1HJXMsR.jpeg', '¿Hay Alguien Ahí?', 'El proverbial talento divulgador de Isaac Asimov se pone de manifiesto una vez más en este volumen misceláneo, que presenta una rica variedad de ensayos hilvanados antes que nada por la extraordinaria curiosidad del autor. Desde el funcionamiento del cerebro hasta los viajes en el tiempo y el futuro del Universo, muchas son en efecto las cuestiones que Asimov aborda en estas páginas. Pero si hay un tema que sobresale en esta variopinta colección, éste es el de la vida extraterrestre y sus posibilidades de existencia. ¿Hay alguien ahí, en algún lugar de los inmensos espacios del Universo, dotado de inteligencia y con el cual se pueda establecer algún tipo de comunicación? Sea cual sea la respuesta, lo cierto es que ésta desde hace años ha dejado de pertenecer ya al ámbito puramente imaginario de la ciencia-ficción.', 'http://descargar.lelibros.online/Isaac%20Asimov/_Hay%20Alguien%20Ahi_%20(802)/_Hay%20Alguien%20Ahi_%20-%20Isaac%20Asimov.pdf', 1.99, '2022-01-10 20:52:08'),
(51, 'https://imgur.com/9pjH9cd.png', 'El Sistema Periódico', 'No es frecuente que un libro despierte el entusiasmo unánima e incondicional de la crítica en todos aquellos países en los que ha sido publicado. Así ha ocurrido con EL SISTEMA PERIÓDICO, una obra que aúna sutilmente realidad y ficción gracias a la lucidez prodigiosa y a la maestría literaria de su autor. Nacido en Turín en 1919 y doctorado en Química en 1941, PRIMO LEVI ha acumulado los premios más prestigiosos de Italia: Strega, Bagutta, Campiello (dos veces), Viareggio, Prato y Sirmione-Catullo. Científico y humanista, testigo y protagonista de algunos de los episodios más duros de nuestra historia contemporánea (fue deportado a Auschwitz en 1943), vertió sus vivencias y reflexiones, su fantasía y su capacidad de observación en una serie de obras testimoniales, relatos y novelas entre las que destaca por la originalidad de su concepción El sistema periódico. Estructurado en veintiún capítulos, dedicado cada uno de ellos a un elemento químico convertido en metáfora del hombre o de las relaciones humanas, el libro da testimonio de la variedad de registros de la prosa del autor. Si la nostalgia irónica permea el capítulo dedicado al «Argón» (en que Levi traza la historia de sus antepasados) o la poesía aflora en su reflexión sobre el «Hierro» y su amistad con Sandro (más tarde hecho prisionero por los fascistas y asesinado por un niño-carnicero), la imaginación pura domina el relato que le sugiere el «Mercurio», a la vez que un dramatismo atenuado por la lucidez preside el capítulo correspondiente al «Vanadio», narración del reencuentro del escritor —acabada la guerra y por razones profesionales— con uno de sus carceleros de Auschwitz. Microhistoria de toda una generación, El sistema periódico fue recibido por Italo Calvino como «un libro extraordinario y fascinante que no puede por menos de dejar una profunda huella en el lector».', 'http://descargar.lelibros.online/Primo%20Levi/El%20Sistema%20Periodico%20(697)/El%20Sistema%20Periodico%20-%20Primo%20Levi.pdf', 1.99, '2022-01-10 20:53:33'),
(52, 'https://imgur.com/bGsO7sK.png', 'Todo lo que era sólido', 'Un ensayo directo y apasionado, una reflexión narrativa y testimonial, al más puro estilo de los ensayos de George Orwell o de Virginia Woolf. Una propuesta de acción concreta y entusiasta para avanzar desde el actual deterioro económico, político y social hacia la realidad que queremos construir. Partiendo tanto de documentos periodísticos como de la tradición literaria, Antonio Muñoz Molina escribe esgrimiendo razón y respeto, sin eludir verdades por amargas que estas sean, porque saber es el único camino para cambiar las cosas. «Hace falta una serena rebelión cívica. Hay cosas inaplazables». Una invitación a un debate imprescindible.', 'http://descargar.lelibros.online/Antonio%20Munoz%20Molina/Todo%20lo%20Que%20era%20Solido%20(34)/Todo%20lo%20Que%20era%20Solido%20-%20Antonio%20Munoz%20Molina.pdf', 1.99, '2022-01-10 20:54:40'),
(53, 'https://imgur.com/CAP1a5L.png', 'Chavs', 'En la Gran Bretaña actual, la clase trabajadora se ha convertido en objeto de miedo y escarnio. Desde la Vicky Pollard de Little Britain a la demonización de Jade Goody, los medios de comunicación y los políticos desechan por irresponsable, delincuente e ignorante a un vasto y desfavorecido sector de la sociedad cuyos miembros se han estereotipado en una sola palabra cargada de odio: chavs. En este aclamado estudio, Owen Jones analiza cómo la clase trabajadora ha pasado de ser «la sal de la tierra» a la «escoria de la tierra». Owen Jones, desvelando la ignorancia y el prejuicio que están en el centro de la caricatura chav, retrata una realidad mucho más compleja: el estereotipo chav, dice, es utilizado por los gobiernos como pantalla para evitar comprometerse de verdad con los problemas sociales y económicos y justificar el aumento de la desigualdad. Basado en una investigación exhaustiva y original, este libro es una crítica irrefutable de los medios de comunicación y de la clase dirigente, y un retrato esclarecedor e inquietante de la desigualdad y el odio de clases en la Gran Bretaña actual.', 'http://descargar.lelibros.online/Owen%20Jones/Chavs%20(185)/Chavs%20-%20Owen%20Jones.pdf', 1.99, '2022-01-10 20:55:32'),
(54, 'https://imgur.com/jzWNpsF.png', 'La Realidad Oculta', 'Del autor de los bestsellers El universo elegante y El tejido del cosmos llega su libro más ambicioso y accesible, una obra que aborda una de las preguntas de mayor complejidad: ¿es el nuestro el único universo? Tenemos la intuición de que existe una entidad que engloba y contiene «todo». Es lo que tradicionalmente se ha denominado «Universo». No existe ninguna unidad conceptual más fundamental que ésta, aunque su naturaleza y relación con el espacio y el tiempo continúen siendo problemáticas. Eso sí, de lo que no parecía haber duda es de que el Universo, fuese lo que fuese, es único. Semejante creencia comenzó a ser socavada a mediados de la década de 1950, cuando para evitar el serio problema conceptual que implicaba aceptar que en el proceso de observación la naturaleza se manifiesta solo en una de las diferentes posibilidades físicas, se propuso la teoría de los «muchos universos»: las restantes posibilidades físicas se plasman en otros universos paralelos. Ahora bien, la mecánica cuántica ya no es el único escenario teórico que la favorece, como muestra en este libro el distinguido físico teórico Brian Greene: «Veremos (…) que si el espacio se extiende indefinidamente –una proposición que es compatible con todas las observaciones– entonces debe haber dominios allá fuera (probablemente muy allá) donde copias de usted y de mí y de todo lo demás disfrutan de versiones alternativas de la realidad que experimentamos aquí». Y no sustancia estas radicales afirmaciones a la manera de la ciencia ficción, sino basándose en la física más actual: en la teoría cosmológica inflacionaria y en diversas versiones de la teoría de cuerdas. Todo esto parece mera especulación, imaginación desbordada, pero la ciencia nos ha dado ya demasiadas muestras de que lo que es hoy es inimaginable mañana puede ser realidad.', 'http://descargar.lelibros.online/Brian%20Greene/La%20Realidad%20Oculta%20(335)/La%20Realidad%20Oculta%20-%20Brian%20Greene.pdf', 1.99, '2022-01-10 20:56:26'),
(55, 'https://imgur.com/KTQ9sCu.png', 'El Nacimiento del Tiempo', 'Presentamos al lector el texto de dos breves conferencias sobre el mismo tema, el tiempo, dadas por Ilya Prigogine a pocos años de distancia una de la otra. Originadas ambas por una invitación de la empresa Montedison, tienen solamente del escrito circunstancial la frescura y el tono de divulgación obligados por las limitaciones del medio: una exposición oral para un auditorio no especializado. Con el mérito añadido de ofrecer, en pocas páginas y sin el auxilio de complejos aparatos matemáticos, con gran claridad, las sólidas tesis de su autor. Esto es lo que nos ha convencido de la utilidad de la publicación conjunta de las dos conferencias. La breve nota biográfica y el texto de la conversación que las preceden introducirán al lector en la compleja problemática que nos presenta Prigogine.', 'http://descargar.lelibros.online/Ilya%20Prigogine/El%20Nacimiento%20del%20Tiempo%20(86)/El%20Nacimiento%20del%20Tiempo%20-%20Ilya%20Prigogine.pdf', 1.99, '2022-01-10 20:57:20'),
(56, 'https://imgur.com/Xt3eMPn.png', 'El Cuento de la isla Desconocida', 'Un suceso histórico, la intención de un noble portugués de ser autorizado por el rey para utilizar una de sus carabelas en la búsqueda de la isla desconocida, le sirve al autor de pretexto para realizar una fábula descarnada del hombre moderno. «... un dulce y sutil cuento sobre el amor y la búsqueda de la identidad personal.» The Washington Post Book World Saramago nos muestra que soñar, a veces, es el verdadero camino hacia la felicidad.', 'http://descargar.lelibros.online/Jose%20Saramago/El%20Cuento%20de%20la%20isla%20Desconocida%20(104)/El%20Cuento%20de%20la%20isla%20Desconocid%20-%20Jose%20Saramago.pdf', 1.99, '2022-01-10 20:59:18'),
(57, 'https://imgur.com/C5tC72x.png', 'Mientras Agonizo', 'Mientras agonizo es una novela publicada en 1930 escrita por William Faulkner, uno de los novelistas más reconocidos de la literatura estadounidense del siglo XX. Es la quinta de su producción literaria, y fue escrita según palabras del autor, en «seis frenéticas semanas», mientras trabajaba como bombero y vigilante nocturno en la central eléctrica de la Universidad de Missisipi. Faulkner se refirió a ella como un «tour de force». El libro está narrado mediante la técnica del flujo de conciencia con 15 narradores en 59 capítulos. Es la historia de la muerte de Addie Bundren, la mujer de un humilde granjero de Misisipi, y la búsqueda de la familia, noble o egoísta, que quiere honrar su deseo de ser enterrada con «su gente» en el pueblo de Jefferson. En el viaje, el niño favorito de Addie, Jewel, salva el cuerpo de su madre de una inundación y de las llamas. Además, se van revelando los pensamientos de cada uno de los Bundrens. Darl, el segundo mayor, demuestra dotes para averiguar el futuro e intenta terminar con el viaje familiar. Tal y como ocurre en muchos trabajos de Faulkner, la historia está ambientada en Yoknapatawpha County, Misisipi, un condado imaginario que recuerda a Lafayette Country en el que el autor vivió.', 'http://descargar.lelibros.online/William%20Faulkner/Mientras%20Agonizo%20(515)/Mientras%20Agonizo%20-%20William%20Faulkner.pdf', 1.99, '2022-01-10 21:01:11'),
(58, 'https://images.cdn2.buscalibre.com/fit-in/360x360/4b/d1/4bd1c770b3c09787cbf39158f2cb4886.jpg', 'Arthas', 'Su maldad es legendaria. Es el señor de la plaga de los no-muertos, el poseedor de la hojarruna Agonía de Escarcha y el enemigo del pueblo de Azeroth. El Rey Exánime es una entidad de poder incalculable y maldad sin paragón; su gélida alma ha sido consumida totalmente por sus planes de destruir todo lo que esta vivo en... World Of Warcraft. Pero esto no siempre fue así. Mucho antes de que su alma se fundiera con la del orco chamán Ner´Zhul, El rey Exánime era Arthas Menethil, príncipe de Lordaeron y fiel paladín de la Mano de Plata. Cuando una plaga de no-muertos amenazó todo cuanto amaba, Arthas se embarcó en una misión de trágicas consecuencias en busca de una hojarruna lo bastante poderosa como para salvar su patria. Sin embargo, poseer esa espada que tanto ansiaba conllevaba pagar un alto precio: que su nuevo duelo iniciara un aterrador descenso a los infiernos. De ese modo, los senderos de la fortuna acabarían levando a Arthas a través de los páramos árticos del norte hasta el trono helado , donde tendría que afrontar, por fin el mas tenebroso de los destinos.', 'http://descargar.lelibros.online/Christie%20Golden/Arthas%20(281)/Arthas%20-%20Christie%20Golden.pdf', 1.99, '2022-01-10 21:07:00'),
(59, 'https://imgur.com/24FbpUL.png', 'Relatos de Faerun', 'En enero de 2003, una encuesta realizada la página de Wizards animaba a los lectores a elegir sus relatos preferidos aparecidos en las ocho antologías previas de Reinos Olvidados (que no se han publicado en castellano), y este volumen es el resultado. En él se incluyen catorce cuentos: trece escogidos por los lectores y un relato inédito de R. A. Salvatore. De la mano de Ed Greenwood, J. Robert King, Jean Rabe, Elaine Cunningham y otros autores os invitamos a este peculiar recorrido por la mítica historia de Faerun.', 'http://descargar.lelibros.online/Christie%20Golden/Relatos%20de%20Faerun%20%28113%29/Relatos%20de%20Faerun%20-%20Christie%20Golden.pdf', 1.99, '2022-01-10 21:08:01'),
(60, 'https://imgur.com/BOAw5pJ.png', 'Mi Tío Oswald', 'Este libro recoge una época particularmente desenfrenada de la vida del legendario tío Oswald, millonario, esteta, bon vivant y un Don Juan infatigable, cuya vida amatoria deja en pañales a la del mismísimo Casanova. El tío Oswald es el mayor fornicador de todos los tiempos, afirma su sobrino y transcriptor de sus Diarios. Muy joven empieza a amasar su fabulosa fortuna: con polvo de escarabajo sudanés inventa unas píldoras de extraordinarias virtudes afrodisíacas, funda un banco de esperma y, en compañía de la excitante Yasmin, parte en busca de celebridades cuyo semen congelado será adquirido a precio de oro por acaudaladas clientas, ansiosas de tener retoños con pedigree. En este peculiar safari, las aventuras picarescas, a veces escabrosas, otras delirantes, se suceden a un ritmo trepidante. Yasmin, armada con las infalibles píldoras, seduce a Stravinsky, Renoir, Picasso, Nijinski, Joyce, Freud, Einstein, Conan Doyle, Proust y a una apreciable colección de testas coronadas.', 'http://descargar.lelibros.online/Roald%20Dahl/Mi%20Tio%20Oswald%20(453)/Mi%20Tio%20Oswald%20-%20Roald%20Dahl.pdf', 1.99, '2022-01-10 21:09:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id_category` int(11) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id_category`, `category`) VALUES
(1, 'Aventura'),
(2, 'Biografias y Memorias'),
(3, 'Ciencia y Ficcion'),
(4, 'Drama'),
(5, 'Ensayos'),
(6, 'Fantasia'),
(7, 'Humor'),
(8, 'Infantil'),
(9, 'Terror y Suspenso'),
(10, 'Autoayuda'),
(11, 'Viajes y Guias'),
(12, 'Espiritualidad'),
(13, 'Ciencias Exactas'),
(14, 'Ciencias Naturales'),
(15, 'Ciencias Sociales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories_books`
--

CREATE TABLE IF NOT EXISTS `categories_books` (
  `id_category` int(11) NOT NULL,
  `id_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categories_books`
--

INSERT INTO `categories_books` (`id_category`, `id_book`) VALUES
(1, 1),
(1, 3),
(1, 28),
(1, 58),
(1, 59),
(2, 4),
(2, 5),
(2, 29),
(2, 34),
(3, 6),
(3, 7),
(3, 31),
(3, 32),
(3, 33),
(3, 37),
(3, 39),
(3, 43),
(4, 8),
(4, 9),
(4, 57),
(5, 10),
(5, 11),
(5, 56),
(6, 2),
(6, 12),
(6, 13),
(6, 27),
(6, 30),
(6, 35),
(6, 40),
(6, 46),
(7, 14),
(7, 15),
(7, 45),
(7, 60),
(8, 16),
(8, 17),
(8, 38),
(9, 18),
(9, 21),
(9, 36),
(9, 44),
(10, 19),
(10, 20),
(10, 41),
(10, 47),
(11, 22),
(11, 42),
(12, 23),
(12, 48),
(12, 49),
(13, 24),
(13, 54),
(13, 55),
(14, 25),
(14, 50),
(14, 51),
(15, 26),
(15, 52),
(15, 53);


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authors_books`
--

CREATE TABLE IF NOT EXISTS `authors_books` (
  `id_author` int(11) NOT NULL,
  `id_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `authors_books`
--

INSERT INTO `authors_books` (`id_author`, `id_book`) VALUES
(1, 1),
(2, 2),
(2, 27),
(3, 3),
(3, 28),
(4, 58),
(4, 59),
(5, 4),
(5, 29),
(6, 5),
(6, 30),
(7, 6),
(7, 31),
(8, 7),
(8, 32),
(9, 8),
(9, 33),
(10, 9),
(10, 34),
(11, 10),
(12, 11),
(13, 12),
(13, 35),
(13, 46),
(14, 13),
(14, 36),
(15, 14),
(15, 25),
(15, 50),
(16, 15),
(16, 37),
(17, 16),
(17, 38),
(17, 45),
(17, 60),
(18, 17),
(18, 39),
(19, 21),
(20, 18),
(20, 40),
(20, 44),
(21, 19),
(22, 20),
(22, 41),
(23, 22),
(23, 42),
(24, 23),
(25, 24),
(26, 26),
(26, 43),
(27, 47),
(28, 48),
(29, 49),
(30, 51),
(31, 52),
(32, 53),
(33, 54),
(34, 55),
(35, 56),
(36, 57);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase`
--

CREATE TABLE IF NOT EXISTS `purchase` (
  `id_purchase` int(11) NOT NULL,
  `id_user` int(11) NOT NULL DEFAULT 0,
  `payment_method` varchar(100) DEFAULT NULL,
  `paid` int(5) NOT NULL DEFAULT 0,
  `purchase_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase_details`
--

CREATE TABLE IF NOT EXISTS `purchase_details` (
  `id_purchase` int(11) DEFAULT NULL,
  `id_book` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `age` int(2) NOT NULL,
  `date_birth` date NOT NULL,
  `country` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `privilege` varchar(20) NOT NULL,
  `account_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `name`, `last_name`, `age`, `date_birth`, `country`, `email`, `password`, `privilege`, `account_date`) VALUES
(1, 'Administrador', 'Administrador', 19, '0000-00-00', 'Venezuela', 'admin@admin.com', '12345678', 'administrador', '0000-00-00 00:00:00'),
(2, 'Daniel', 'Gonzalez', 20, '2022-01-10', 'Venezuela', 'daniel@gmail.com', '12345678', 'usuario', '2022-01-10 17:05:52'),
(3, 'Alejandro', 'Gonzalez', 29, '1992-08-17', 'Venezuela', 'josealex191910@gmail.com', 'alex1919472', 'usuario', '2022-01-10 17:33:22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id_author`);

--
-- Indices de la tabla `authors_books`
--
ALTER TABLE `authors_books`
  ADD PRIMARY KEY (`id_author`,`id_book`),
  ADD KEY `authors_books_ibfk_1` (`id_book`);

--
-- Indices de la tabla `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id_book`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `categories_books`
--
ALTER TABLE `categories_books`
  ADD PRIMARY KEY (`id_category`,`id_book`),
  ADD KEY `categories_books_ibfk_1` (`id_book`);

--
-- Indices de la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id_purchase`),
  ADD KEY `FK_purchase_users` (`id_user`);

--
-- Indices de la tabla `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD KEY `FK_purchase_details_purchase` (`id_purchase`),
  ADD KEY `FK_purchase_details_books` (`id_book`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `authors`
--
ALTER TABLE `authors`
  MODIFY `id_author` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `books`
--
ALTER TABLE `books`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id_purchase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `authors_books`
--
ALTER TABLE `authors_books`
  ADD CONSTRAINT `authors_books_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_books_ibfk_2` FOREIGN KEY (`id_author`) REFERENCES `authors` (`id_author`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `categories_books`
--
ALTER TABLE `categories_books`
  ADD CONSTRAINT `categories_books_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categories_books_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `FK_purchase_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD CONSTRAINT `FK_purchase_details_books` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_purchase_details_purchase` FOREIGN KEY (`id_purchase`) REFERENCES `purchase` (`id_purchase`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
