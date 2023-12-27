import { useEffect } from 'react';
import { Layout, Row, Image, Typography, Card, FloatButton } from "antd";
import what from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import safari from '../assets/imghomesafari.png'
import boneca from '../assets/imghomeboneca.png'
import mar from '../assets/imghomemar.png'
import './styles.css'
// Importação dos produtos
const img: any = [];
for (let i = 1; i <= 54; i++) {
  img.push(require(`../assets/products/img${i < 10 ? '0' : ''}${i}.jpeg`));
}

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
      <div className="ateliartt-asteristic_blue" style={{ top: '16%', left: '46%' }}></div>
      <div className="ateliartt-asteristic_pink" style={{ top: '82%', left: '75%' }}></div>
      {/* home */}
      <Row className='ateliartt-rowHead-styles' justify="end" align="middle">
        <div style={{ marginRight: 20 }}>
          <a href="https://www.instagram.com/bru.ateliartt?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="instagram noreferrer">
            <Image
              height={50}
              src={instagram}
              preview={false}
            />
          </a>
        </div>
        <div style={{ marginRight: 20 }}>
          <a href="https://wa.me/992887750" target="_blank" rel="whatsapp noreferrer">
            <Image
              height={40}
              src={what}
              preview={false}
            />
          </a>
        </div>
      </Row>
      <Row className='ateliartt-row1-styles' justify="center" align="middle">
        <div className="ateliartt-title" style={{ top: '20%', left: '12%' }}>
          <Typography.Title
            className="ateliartt-title-styles"
          >
            Ateliartt
          </Typography.Title>
        </div>
      </Row>
      <Row className='ateliartt-row1Body-styles' justify="center" align="middle">
        <div className="ateliartt-title" style={{ top: '35%', left: '6%' }}>
          <Typography
            className="ateliartt-Subtitle-styles"
          >
            Papelaria Personalizada
          </Typography>
        </div>
        <div className="ateliartt-img_safari" style={{ top: '20%', left: '50%' }}>
          <Image
            className='ateliartt-img_safari-height'
            height={400}
            src={safari}
            alt="safari"
            preview={false}
          />
        </div>
        <div className="ateliartt-img_mar" style={{ top: '20%', left: '80%' }}>
          <Image
            className='ateliartt-img_mar-height'
            height={250}
            src={mar}
            alt="safari"
            preview={false}
          />
        </div>
        <div className="ateliartt-img_boneca" style={{ top: '57%', left: '80%' }}>
          <Image
            className='ateliartt-img_boneca-height'
            height={250}
            src={boneca}
            alt="safari"
            preview={false}
          />
        </div>
        <div className="ateliartt-title" style={{ top: '55%', left: '5%' }}>
          <Typography
            className="ateliartt-about-styles"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sed viverra, velit in tristique pharetra, erat massa convallis <br />
            nisl, vitae eleifend tellus enim sit amet
            libero. Cras rutrum aliquet molestie.
          </Typography>
        </div>
      </Row>
      {/* produtos */}
      <Row className="ateliartt-row2-styles">
        <Row justify="center">
          <Typography.Title className="ateliartt-title2-styles">Catálogo</Typography.Title>
        </Row>
        {img.map((image: any, index: any) => (
        <Row key={index} justify={index % 2 === 0 ? "end" : "start"}>
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt={`img${index + 1}`}
                src={image}
              />
            </Card>
          </div>
        </Row>
        ))}
      </Row>
      <FloatButton.BackTop visibilityHeight={0} />
    </Layout>
  );
}

export default App;
