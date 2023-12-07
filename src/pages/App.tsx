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
      <div className="ateliartt-butterfly" style={{ top: '500px', left: '1800px' }}></div>
      <div className="ateliartt-galho" style={{ top: '200px', left: '1500px' }}></div>
      <div className="ateliartt-ramos" style={{ top: '600px', left: '100px' }}></div>
      <div className="ateliartt-ramos" style={{ top: '600px', left: '700px' }}></div>
      <div className="ateliartt-ramos" style={{ top: '600px', left: '1100px' }}></div>
      <Row className='ateliartt-row1-styles' justify="center" align="middle">
        <Row style={{ display: "block" }}>
          <Row justify="center">
            <Typography.Title className="ateliartt-titlehome-styles">Bem Vindo!</Typography.Title>
          </Row>
          <Row style={{ marginTop: -150, marginBottom: -150, marginLeft: 200, marginRight: 200 }}>
            <Image
              height={700}
              src={logo}
              alt="logo ateliartt"
              preview={false}
            />
          </Row>
          <Row justify="space-between">
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
