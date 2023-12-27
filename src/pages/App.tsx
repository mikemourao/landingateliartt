import { useEffect } from 'react';
import { Layout, Row, Image, Typography, Card, FloatButton } from "antd";
import what from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import safari from '../assets/imghomesafari.png'
import boneca from '../assets/imghomeboneca.png'
import mar from '../assets/imghomemar.png'
import './styles.css'
import Meta from "antd/es/card/Meta";
// produtos
import img01 from '../assets/products/img01.jpeg';
import img02 from '../assets/products/img02.jpeg';
import img03 from '../assets/products/img03.jpeg';
import img04 from '../assets/products/img04.jpeg';
import img05 from '../assets/products/img05.jpeg';
import img06 from '../assets/products/img06.jpeg';
import img07 from '../assets/products/img07.jpeg';
import img08 from '../assets/products/img08.jpeg';
import img09 from '../assets/products/img09.jpeg';
import img10 from '../assets/products/img10.jpeg';
import img11 from '../assets/products/img11.jpeg';
import img12 from '../assets/products/img12.jpeg';
import img13 from '../assets/products/img13.jpeg';
import img14 from '../assets/products/img14.jpeg';
import img15 from '../assets/products/img15.jpeg';
import img16 from '../assets/products/img16.jpeg';
import img17 from '../assets/products/img17.jpeg';
import img18 from '../assets/products/img18.jpeg';
import img19 from '../assets/products/img19.jpeg';
import img20 from '../assets/products/img20.jpeg';
import img21 from '../assets/products/img21.jpeg';
import img22 from '../assets/products/img22.jpeg';
import img23 from '../assets/products/img23.jpeg';
import img24 from '../assets/products/img24.jpeg';
import img25 from '../assets/products/img25.jpeg';
import img26 from '../assets/products/img26.jpeg';
import img27 from '../assets/products/img27.jpeg';
import img28 from '../assets/products/img28.jpeg';
import img29 from '../assets/products/img29.jpeg';
import img30 from '../assets/products/img30.jpeg';
import img31 from '../assets/products/img31.jpeg';
import img32 from '../assets/products/img32.jpeg';
import img33 from '../assets/products/img33.jpeg';
import img34 from '../assets/products/img34.jpeg';
import img35 from '../assets/products/img35.jpeg';
import img36 from '../assets/products/img36.jpeg';
import img37 from '../assets/products/img37.jpeg';
import img38 from '../assets/products/img38.jpeg';
import img39 from '../assets/products/img39.jpeg';
import img40 from '../assets/products/img40.jpeg';
import img41 from '../assets/products/img41.jpeg';
import img42 from '../assets/products/img42.jpeg';
import img43 from '../assets/products/img43.jpeg';
import img44 from '../assets/products/img44.jpeg';
import img45 from '../assets/products/img45.jpeg';
import img46 from '../assets/products/img46.jpeg';
import img47 from '../assets/products/img47.jpeg';
import img48 from '../assets/products/img48.jpeg';
import img49 from '../assets/products/img49.jpeg';
import img50 from '../assets/products/img50.jpeg';
import img51 from '../assets/products/img51.jpeg';
import img52 from '../assets/products/img52.jpeg';
import img53 from '../assets/products/img53.jpeg';
import img54 from '../assets/products/img54.jpeg';

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
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img01"
                src={img01}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img02"
                src={img02}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img03"
                src={img03}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img04"
                src={img04}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img05"
                src={img05}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img06"
                src={img06}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img07"
                src={img07}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img08"
                src={img08}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img09"
                src={img09}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img10"
                src={img10}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img11"
                src={img11}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img12"
                src={img12}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img13"
                src={img13}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img14"
                src={img14}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img15"
                src={img15}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img16"
                src={img16}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img17"
                src={img17}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img18"
                src={img18}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img19"
                src={img19}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img20"
                src={img20}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img21"
                src={img21}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img22"
                src={img22}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img23"
                src={img23}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img24"
                src={img24}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img25"
                src={img25}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img26"
                src={img26}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img27"
                src={img27}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img28"
                src={img28}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img29"
                src={img29}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img30"
                src={img30}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img31"
                src={img31}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img32"
                src={img32}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img33"
                src={img33}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img34"
                src={img34}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img35"
                src={img35}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img36"
                src={img36}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img37"
                src={img37}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img38"
                src={img38}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img39"
                src={img39}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img40"
                src={img40}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img41"
                src={img41}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img42"
                src={img42}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img43"
                src={img43}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img44"
                src={img44}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img45"
                src={img45}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img46"
                src={img46}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img47"
                src={img47}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img48"
                src={img48}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img49"
                src={img49}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img50"
                src={img50}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img51"
                src={img51}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img52"
                src={img52}
              />
            </Card>
          </div>
        </Row>
        <Row justify="end">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img53"
                src={img53}
              />
            </Card>
          </div>
        </Row>
        <Row justify="start">
          <div className="hidden">
            <Card
              hoverable
            >
              <img
                className='ateliartt-cardImg-styles'
                alt="img54"
                src={img54}
              />
            </Card>
          </div>
        </Row>
      </Row>
      <FloatButton.BackTop visibilityHeight={0} />
    </Layout>
  );
}

export default App;
