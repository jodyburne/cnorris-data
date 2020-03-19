import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin, Card } from 'antd';
import axios from 'axios';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => {
          setCategories(res.data)    
      })
  }, []);

  const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };
    
  const color = '#09ade9';

  const renderCardTitle = () => (
    <h2 
      style={{
        textAlign: 'center', 
        color,
        margin: '0'}}>
        Categories
    </h2>
  );

  return ( 
    <div>
      <Card 
        bordered={false} 
        title={renderCardTitle()} 
        headStyle={{border: 'none' }}>
        {categories.length > 0 ? categories.map(cat => (
          <Link to={`/${cat}`}>
            <Card.Grid 
              key={cat} 
              style={gridStyle}>
                <span style={{color}}>{cat.toUpperCase()}</span>
            </Card.Grid>
          </Link>
        )) : 
          <div className='spin-wrapper'>
            <Spin
              size="large"
              style={{color}}
            />
         </div>
        }      
      </Card>
    </div>
  );
}
