import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import ModalForm from './modal'; 

const LandingPage = () => {
  const navigate = useNavigate();  
  const [showModal, setShowModal] = useState(false); 

  return (
    <div className="landing-page" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#87CEFA' }} role="main">
      {/* Header */}
      <header>
        <div 
          style={{ fontSize: '65px', fontWeight: 'bold', color: '#c1ff72', backgroundColor: '#004aad', padding: '25px', textAlign: 'center' }}
          role="banner"
        >
          Special Gift
        </div>
      </header>

      {/* Nội dung chính */}
      <div className="content" style={{ display: 'flex', flexDirection: 'column', flex: '1', padding: '40px', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-container" style={{ textAlign: 'center', maxWidth: '900px', marginBottom: '40px' }} role="article">
          <h2 style={{ color: '#004aad', fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
            CHƯƠNG TRÌNH TRI ÂN KHÁCH HÀNG
          </h2>
          <p style={{ fontSize: '1.7em', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>
            CẢM ƠN BẠN VÌ ĐÃ ĐỒNG HÀNH CÙNG FIVEFLEX
          </p>
          <p style={{ fontSize: '1.5em', margin: '0 auto', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
            Sự hài lòng của bạn là động lực để chúng tôi không ngừng cải thiện và mang đến trải nghiệm tốt nhất.
          </p>
          <p style={{ fontStyle: 'italic', color: '#333', fontSize: '1.4em', fontWeight: 'bold' }}>
            FiveFlex – Linh hoạt từng lựa chọn, tối ưu mọi nhu cầu!
          </p>
        </div>

        {/* Các nút điều hướng */}
        <nav className="button-container" style={{ display: 'flex', flexDirection: 'row', gap: '35px', marginTop: '20px' }} role="navigation">
          <button
            onClick={() => navigate('/gifts')}
            style={{
              padding: '18px 50px',
              fontSize: '1.3em',
              fontWeight: 'bold',
              backgroundColor: '#004aad',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#003a8c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#004aad'}
          >
            QUÀ TẶNG
          </button>

          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: '18px 50px',
              fontSize: '1.3em',
              fontWeight: 'bold',
              backgroundColor: '#c1ff72',
              color: '#004aad',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#a1df52'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#c1ff72'}
          >
            GÓP Ý
          </button>
        </nav>
      </div>

      {/* Modal Góp Ý */}
      {showModal && <ModalForm type="feedback" onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default LandingPage;
