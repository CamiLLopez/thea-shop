import Alert from "react-bootstrap/Alert";


export default function Home(props) {
    
  return (
      <Alert variant="light">
        <Alert.Heading className="d-flex justify-content-center">
        <p>Buenos días {props.mensaje}</p>
        </Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia,
          suscipit eum velit cum ut hic praesentium quasi dolorem molestiae
          saepe soluta, sint magni et voluptate iusto voluptatem! Tempora,
          fugiat.
        </p>
      </Alert>
  );
}
