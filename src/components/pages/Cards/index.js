import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const data = [
  {
    title: "BAHADURGARH",
    imageUrl:
      "https://images1.livehindustan.com/uploadimage/library/2019/10/08/16_9/16_9_6/bahadurgarh_1570532181.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "BHARATPUR",
    imageUrl:
      "https://cdn.britannica.com/48/142548-050-10B757FF/Lohargarh-Fort-Bharatpur-Rajasthan-India.jpg",
    time: "( 09:15 am )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "DARBANGA BIHAR",
    time: "( 05:00 pm )",
    imageUrl:
      "https://images1.livehindustan.com/uploadimage/library/2021/06/17/16_9/16_9_1/darbhanga_junction_1623940271.jpg",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "DISAWER",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuuICaF6PX-1pOjDBGoSsx8AUMWS0AAd2fw&usqp=CAU",
    time: "( 05:00 am )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "FARIDABAD",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCxoH4QZgCH1OqhC2pEKx3j2jWZ5Hd21WTw&usqp=CAU",
    time: "( 06:00 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "GALI",
    imageUrl:
      "https://lh3.googleusercontent.com/6CJIBhWDirc4DEes0N_uW4fpxHJuUIp2u03M17AmyCgR_2_2Uz21CmvTw36nWWBVIEvRWTUrkjvIoFcB1tngZoAYDyXa=w1000",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "GHAZIABAD",
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/270x200/85982018.jpg?k=80066c642a3edca4212f20f5dcf0038e5395789d0fda555580fb887ea00ba2a8&o=",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "HAJI ALI",
    imageUrl: "https://i.ytimg.com/vi/_-Fzx0YcUog/maxresdefault.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "HARIDWAR",
    imageUrl:
      "https://m.economictimes.com/thumb/msid-82017096,width-1200,height-900,resizemode-4,imgsize-147055/photo-ani.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "KALA BHOOTH",
    imageUrl: "https://wallpapercave.com/wp/wp2050413.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "MAJIM VIP",
    imageUrl:
      "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "MALDA BENGAL",
    imageUrl:
      "https://wbtourism.gov.in/home/download/places/dakhil-darwaza.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "PREM NAGAR",
    imageUrl:
      "https://haridwar.tourismindia.co.in/images/places-to-visit/header/prem-nagar-ashram-haridwar-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "RAJIV COLONY",
    imageUrl:
      "https://teja12.kuikr.com/is/p/t20/430x200/public/images/gallery/locality_masthead/35789/Panipat_TehsilCamp_Masthead_5614d26de39d2.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "SARASWATI",
    imageUrl:
      "https://images.news18.com/ibnlive/uploads/2021/10/saraswati-mata.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "SHIVKASHI",
    imageUrl:
      "https://static.langimg.com/imagenext/nbtblogs/photo/viral-adda/wp-content/uploads/2018/07/shiv4.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "TOTA MAINA",
    imageUrl:
      "https://media.istockphoto.com/photos/scarlet-macaws-picture-id157375891?k=20&m=157375891&s=170667a&w=0&h=t-zRoqEUzRjdXpKq3N2eiQhmn7vlWNM9hD2AJ3-o5qc=",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
  {
    title: "TUKLAKABAD",
    imageUrl:
      "https://www.sushanttravels.com/uploads/dYzEATm_TUGHLAQABAD_FORT_BAOLI_1_-_Copy.jpg",
    time: "( 05:30 pm )",
    numberToday: 18,
    numberYesterday: 21,
  },
];

const Cards = () => {
  let history = useHistory();
  const buttonHandler = (e) => {
    e.preventDefault();
    history.push("/results");
  };
  return (
    <Container fluid style={{ paddingLeft: "25px", paddingRight: "25px" }}>
      <Row className="NoGutter">
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="PageHeader">
            <h1>Games List</h1>
          </div>
        </Col>
        {data.map((card, key) => {
          return (
            <Col lg={2} md={6} sm={6} xs={6} key={key} className="CustomCol">
              <Card
                style={{ width: "100%" }}
                className="CustomCard"
                onClick={buttonHandler}
              >
                <Card.Img
                  variant="top"
                  src={card.imageUrl}
                  className="CustomCardImage"
                />
                <Card.Body className="CustomCardBody">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="CardTime">{card.time}</Card.Text>
                  <Card.Text className="CardNumber">
                    [ {card.numberToday} ]
                    <span className="BlinkText"> New </span>[
                    {card.numberYesterday} ]
                  </Card.Text>
                  <div className="d-grid gap-2 CardButtons">
                    <Button variant="danger" onClick={buttonHandler}>
                      Result
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Cards;
