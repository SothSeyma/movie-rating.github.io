import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './newspage.css'

function Newspage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/Data/News.json') // file
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="page-wrapper">
      <h1 style={{fontWeight:'bold',textAlign:'center'}}>Movies News</h1>
      <div className="news-container">
        {news.map((newsItem) => (
          <Link  style={{ textDecoration: 'none' }}>
            <div className="my-card mb-1">
              <div className='cardnews'>
                <img
                  src={process.env.PUBLIC_URL + newsItem.image}
                  alt={newsItem.title}
                  className="card-img-top"
                
                />
                <div className="card-body">
                  <h2 >{newsItem.title}</h2>
                  <p >{newsItem.summary}</p>
                  <h3>Publish:{newsItem.Publish_date}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Newspage