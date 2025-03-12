import React from 'react';
import { useNavigate } from 'react-router-dom';

const GiftPage = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const giftOptions = {
    '50-100': {
      image: '/img/box1.jpg',
      points: '50-100',
    },
    '100-250': {
      image: '/img/box2.jpg',
      points: '100-250',
    },
    '250+': {
      image: '/img/box3.jpg',
      points: '250+',
    },
  };

  const handleSelectGift = (points) => {
    // Điều hướng đến trang quà tặng riêng biệt khi người dùng chọn món quà
    navigate(`/gift-detail/${points}`);
  };

  return (
    <div className="landing-page" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#87CEFA' }} role="main">
        <div 
          style={{ fontSize: '65px', fontWeight: 'bold', color: '#c1ff72', backgroundColor: '#004aad', padding: '25px', textAlign: 'center' }}
          role="banner"
        >
          Special Gift
      </div>
      <div 
        className="gift-options" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          margin: '10px auto',
          padding: '5px',
          flex: 1,
          alignItems: 'center',
          maxWidth: '1200px'
        }}
        role="region"
        aria-label="Gift options"
      >
        {Object.keys(giftOptions).map((key) => (
          <div 
            key={key} 
            className="gift-option" 
            style={{ 
              textAlign: 'center',
              padding: '10px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
              }
            }}
            role="article"
            aria-label={`Gift option for ${giftOptions[key].points} points`}
          >
            <img
              src={giftOptions[key].image}
              alt={`Gift box for ${giftOptions[key].points} points`}
              style={{ 
                width: '200px', 
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px'
              }}
            />
            <div 
              style={{ 
                marginTop: '10px', 
                fontSize: '20px', 
                fontWeight: '600',
                color: '#004aad'
              }}
              role="heading"
              aria-level="2"
            >
              {giftOptions[key].points} điểm
            </div>
            <div 
              style={{ 
                marginTop: '5px', 
                fontSize: '14px', 
                color: '#555',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {giftOptions[key].description}
            </div>
            <button
              onClick={() => handleSelectGift(key)}
              onKeyPress={(e) => e.key === 'Enter' && handleSelectGift(key)}
              style={{
                backgroundColor: '#004aad',
                color: 'white',
                padding: '12px 25px',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                marginTop: '10px',
                fontWeight: '600',
                transition: 'background-color 0.3s',
                ':hover': {
                  backgroundColor: '#003380'
                },
                ':focus': {
                  outline: '3px solid #c1ff72',
                  outlineOffset: '2px'
                }
              }}
              aria-label={`Select gift for ${giftOptions[key].points} points`}
            >
              Chọn quà
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftPage;
