import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'



export default function App() {
  var districts = [
    {
      "id": 1,
      "title": "Kasargod",
      "description": "Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district.",
      "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2020/09/Places-To-Visit-In-Kasargod-cover.jpg",
      "link": "https://en.wikipedia.org/wiki/Kasaragod",
    },
    {
      "id": 2,
      "title": "Kannur",
      "description": "Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade.",
      "image": "https://ourbackpacktales.com/wp-content/uploads/2019/11/Kannur-Eye-in-Palakkayam-Thattu-Kannur-OurBackpackTales-1024x722.jpg",
      "link": "https://en.wikipedia.org/wiki/Kannur"
    },
    {
      "id": 3,
      "title": "Wayanad",
      "link": "https://en.wikipedia.org/wiki/Wayanad_district",
      "description": "Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets.",
      "image": "https://wayanadtourism.co.in/images/places-to-visit/headers/chembra-peak-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg"},


    {
      "id": 4,
      "title": "Calicut",
      "link": "https://en.wikipedia.org/wiki/Kozhikode",
      "description": "Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498.",
      "image": "https://www.trawell.in/admin/images/upload/148645698PeruvannamuzhiDam_Main.jpg"},


    {
      "id": 5,
      "title": "Malappuram",
      "link": "https://en.wikipedia.org/wiki/Malappuram",
      "description": "Malappuram, is one of the 14 districts in the Indian state of Kerala, with a coastline of 70 km. It is the most populous district of Kerala, which is home to around 13% of the total population of the state.",
      "image": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101690-Malappuram-District.jpg"
    },


    {
      "id": 6,
      "title": "Palakkad",
      "link": "https://en.wikipedia.org/wiki/Palakkad",
      "description": "Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival.",
      "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/cover-Things-To-Do-In-Palakkad.jpg"
    },


    {
      "id": 7,
      "title": "Thrissur",
      "link": "https://en.wikipedia.org/wiki/Thrissur",
      "description": "Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals.",
      "image": "https://assets-news.housing.com/news/wp-content/uploads/2022/08/18064753/Thrissur-7.jpg"
    },


    {
      "id": 8,
      "title": "Ernakulam",
      "link": "https://en.wikipedia.org/wiki/Ernakulam",
      "description": "Ernakulam is one of the most developed districts of Kerala covering an area of 3068 sqkm and based in the heartland of the state. It is the commercial capital of the state yielding the highest revenue among all districts in Kerala. Having its headquarters based at Kakkanad, it has the biggest metropolitan region, Cochin in its geographical limitations. Formed on 1st April,1958, the district is one of the most visited place and records the highest number of tourist visit in the state.",
      "image": "https://images.unsplash.com/photo-1579012727768-7c7c09d94c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
    },
  ];
  return (
    <Container>
      <Row>
        {
          districts.map((district, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={district.image} />
                  <Card.Body>
                    <Card.Title>{district.title}</Card.Title>
                    <Card.Text>{district.description}</Card.Text>
                    <Button><a style={{color:'white'}} href={district.link}>click here</a></Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}



