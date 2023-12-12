import { useEffect } from 'react';
import { Layout, Row, Image, Typography, Card } from "antd";
import logo from '../assets/logopersonalizados.svg'
import safari from '../assets/imghomesafari.png'
import boneca from '../assets/imghomeboneca.png'
import mar from '../assets/imghomemar.png'
import './styles.css'
import Meta from "antd/es/card/Meta";

function App() {
  useEffect(() => {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const elements = document.querySelectorAll('.hidden');

    elements.forEach((element) => myObserver.observe(element));

    // Limpar o observador quando o componente for desmontado
    return () => {
      elements.forEach((element) => myObserver.unobserve(element));
    };
  }, []);

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
      {/* home */}
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
      {/* produtos */}
      <Row className="ateliartt-row2-styles">
        <Row justify="center">
          <Typography.Title className="ateliartt-titlehome-styles">Catálogo</Typography.Title>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              className='ateliartt-cardImg-styles'
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignContent: "center"
              }}
              cover={
                <img
                  height="100%"
                  alt="Safari"
                  src={safari}
                />
              }
              hoverable
            >
              <Meta
                description="This is the description"
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              className='ateliartt-cardImg-styles'
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center"
              }}
              cover={
                <img
                  height="100%"
                  alt="Circo"
                  src={boneca}
                />
              }
              hoverable
            >
              <Meta
                description="This is the description"
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              className='ateliartt-cardImg-styles'
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignContent: "center"
              }}
              cover={
                <img
                  height="100%"
                  alt="Mar"
                  src={mar}
                />
              }
              hoverable
            >
              <Meta
                description="This is the description"
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              className='ateliartt-cardImg-styles'
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center"
              }}
              cover={
                <img
                  height="100%"
                  alt="Safari"
                  src={safari}
                />
              }
              hoverable
            >
              <Meta
                description="This is the description"
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              className='ateliartt-cardImg-styles'
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignContent: "center"
              }}
              cover={
                <img
                  height="100%"
                  alt="Circo"
                  src={boneca}
                />
              }
              hoverable
            >
              <Meta
                description="This is the description"
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              className='ateliartt-cardImg-styles'
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center"
              }}
              cover={
                <img
                  height="100%"
                  alt="mar"
                  src={mar}
                />
              }
              hoverable
            >
              <Meta
                description="This is the description"
              />
            </Card>
          </div>
        </Row>
      </Row>
    </Layout>
  );
}

export default App;
