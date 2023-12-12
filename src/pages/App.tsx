import { Layout, Row, Image, Typography } from "antd";
import logo from '../assets/logopersonalizados.svg'
import safari from '../assets/imghomesafari.png'
import boneca from '../assets/imghomeboneca.png'
import mar from '../assets/imghomemar.png'
import './styles.css'

function App() {
  return (
    <Layout className='ateliartt-layout-aling'>
      <div className="ateliartt-butterfly" style={{ top: '100px', left: '50px' }}></div>
      <div className="ateliartt-butterfly" style={{ top: '200px', left: '150px' }}></div>
      <div className="ateliartt-mesa" style={{ top: '270px', left: '150px' }}></div>
      <div className="ateliartt-butterfly" style={{ top: '500px', left: '1800px' }}></div>
      <div className="ateliartt-galho" style={{ top: '200px', left: '1500px' }}></div>
      <div className="ateliartt-kit" style={{ top: '600px', left: '100px' }}></div>
      <div className="ateliartt-kit" style={{ top: '600px', left: '650px' }}></div>
      <div className="ateliartt-kit" style={{ top: '600px', left: '1190px' }}></div>
      <Row className='ateliartt-row1-styles' justify="center" align="middle">
        <Row style={{ display: "block" }}>
          <Row justify="center">
            <Typography.Title className="ateliartt-titlehome-styles animated-text">Bem Vindo!</Typography.Title>
          </Row>
          <Row style={{ marginTop: -150, marginBottom: -150, marginLeft: 200, marginRight: 200 }}>
            <Image
              className="animated-text"
              height={700}
              src={logo}
              alt="logo ateliartt"
              preview={false}
            />
          </Row>
          <Row className="animated-text" justify="space-between">
            <Image
              className="ateliartt-image-styles"
              height={300}
              src={safari}
              alt="safari"
              preview={false}
            />
            <Image
              className="ateliartt-image-styles"
              height={300}
              src={boneca}
              alt="bonecas"
              preview={false}
            />
            <Image
              className="ateliartt-image-styles"
              height={300}
              src={mar}
              alt="fundo do mar"
              preview={false}
            />
          </Row>
        </Row>
      </Row>
    </Layout>
  );
}

export default App;
