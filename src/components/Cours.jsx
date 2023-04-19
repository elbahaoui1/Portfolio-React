import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';

function Cours() {
  return (
    <section style={{ padding: '10vh 20vh 10vh 20vh' ,textAlign:"left"}}>
    <Accordion defaultActiveKey="8">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Java et Java avancee</Accordion.Header>
        <Accordion.Body>
          <ul class="course-objectives"><li>Acquisition d'une solide compréhension des bases de la programmation Java, y compris la JVM, le JDK, les concepts de base du langage Java et les principes de la programmation orientée objet</li><li>Appréhension approfondie des concepts clés de la programmation orientée objet en Java, tels que les classes, les objets, les associations, l'héritage et le polymorphisme, pour le développement d'applications bien structurées et modulaires</li><li>Gestion efficace des exceptions dans les applications Java, garantissant ainsi une gestion robuste des erreurs et évitant les plantages inattendus pour améliorer la fiabilité des applications</li><li>Maîtrise de l'utilisation des collections Java, y compris les collections Set, List et Map, pour le stockage, la manipulation et la gestion efficace de données complexes dans les applications Java</li><li>Acquisition d'une compréhension approfondie de l'API JDBC (Java Database Connectivity) pour interagir avec des bases de données relationnelles en Java, y compris la création de connexions, l'exécution de requêtes SQL, la gestion des transactions et la manipulation de données</li><li>Maîtrise de l'utilisation de Hibernate et JPQL pour la gestion d'objets persistants en Java, y compris la configuration de Hibernate, la création de requêtes JPQL pour interagir avec les bases de données, et la gestion des transactions</li><li>Approfondissement des concepts avancés des sockets et des threads en Java, tels que la gestion des connexions réseau, la communication bidirectionnelle, la sécurisation des sockets, la gestion des exceptions dans les sockets, la synchronisation des threads, les verrous, les conditions, les moniteurs, les interblocages et les stratégies de gestion des threads pour le développement d'applications réseau et concurrentes robustes</li><li>Conception et développement d'interfaces graphiques utilisateur interactives en utilisant JavaFX pour les applications de bureau, et utilisation de JSP et Ajax pour créer des applications web interactives, en comprenant les concepts d'Ajax et de jQuery pour créer des applications web modernes et interactives</li></ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>DevOps</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>JEE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Programmation Mobile</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Python</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Conception</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Programmation Multiplatform</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
    </section>
  )
}

export default Cours;
