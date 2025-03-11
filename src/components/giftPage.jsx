import React from 'react';
import { useNavigate } from 'react-router-dom';

const GiftPage = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const giftOptions = {
    '50-100': {
      image: 'https://static.vecteezy.com/system/resources/previews/035/512/020/large_2x/ai-generated-present-box-clipart-design-illustration-free-png.png', // URL của ảnh
      points: '50-100',
 
    },
    '100-250': {
      image: 'https://static.vecteezy.com/system/resources/previews/035/512/037/non_2x/ai-generated-present-box-clipart-design-illustration-free-png.png', // Đường dẫn ảnh local
      points: '100-250',
    
    },
    '250+': {
      image: 'https://static.vecteezy.com/system/resources/previews/035/512/043/large_2x/ai-generated-present-box-clipart-design-illustration-free-png.png',  // Đường dẫn ảnh PNGEgg
      points: '250+',

    },
  };

  const handleSelectGift = (points) => {
    // Điều hướng đến trang quà tặng riêng biệt khi người dùng chọn món quà
    navigate(`/gift-detail/${points}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '60px', fontWeight: 'bold', color: '#c1ff72', backgroundColor: '#004aad', padding: '20px' }}>
        Special Gift
      </div>
      <div className="gift-options" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        {Object.keys(giftOptions).map((key) => (
          <div key={key} className="gift-option" style={{ textAlign: 'center' }}>
            <img
              src={giftOptions[key].image}
              alt={giftOptions[key].points}
              style={{ width: '150px', height: '150px' }}
            />
            <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: '500' }}>
              {giftOptions[key].points} điểm
            </div>
            <div style={{ marginTop: '5px', fontSize: '14px', color: '#555' }}>
              {giftOptions[key].description}
            </div>
            <button
              onClick={() => handleSelectGift(key)}
              style={{
                backgroundColor: '#0f8cd8',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                marginTop: '10px',
              }}
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
