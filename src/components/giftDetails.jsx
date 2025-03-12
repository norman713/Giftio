import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ModalForm from './modal'  // Đảm bảo ModalForm được import đúng

const GiftDetailPage = () => {
  const { points } = useParams(); // Lấy điểm quà tặng từ URL
  const [showModal, setShowModal] = useState(false); // Quản lý trạng thái hiển thị modal
  const [selectedImage, setSelectedImage] = useState(null); // Quản lý hình ảnh được chọn

  const giftOptions = {
    '50-100': {
      images: [
        '/img/first/1.png',
        '/img/first/2.png',
        '/img/first/3.png'
      ],
      title: '50-100 điểm',
      description: 'Món quà này dành cho những khách hàng có 50-100 điểm.'
    },
    '100-250': {
      images: [
        '/img/second/1.png',
        '/img/second/2.png',
        '/img/second/3.png'
      ],
      title: '100-250 điểm',
      description: 'Món quà này dành cho những khách hàng có từ 100 đến 250 điểm.'
    },
    '250+': {
      images: [
        '/img/third/1.png',
        '/img/third/2.png',
        '/img/third/3.png'
      ],
      title: '> 250 điểm',
      description: 'Món quà này dành cho những khách hàng có hơn 250 điểm.'
    },
  };

  const gift = giftOptions[points]; // Lấy thông tin quà tặng dựa trên điểm

  if (!gift) {
    return <div>Quà tặng không tồn tại</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);  // Cập nhật hình ảnh đã chọn
    setShowModal(true);  // Hiển thị modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Đóng modal
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      maxWidth: '1400px',
      margin: '0 auto',
      borderRadius: '12px'
    }}>
      <div style={{ 
        fontSize: '60px', 
        fontWeight: 'bold', 
        color: '#c1ff72', 
        backgroundColor: '#004aad', 
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '40px'
      }}>
        {gift.title}
      </div>
      <div style={{ marginTop: '30px' }}>
        <p style={{
          fontSize: '24px',
          color: '#333',
          marginBottom: '40px',
          lineHeight: '1.5'
        }}>{gift.description}</p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '50px', 
          marginTop: '20px',
          flexWrap: 'wrap'
        }}>
          {gift.images.map((image, index) => (
            <div
              key={index}
              style={{
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <img
                src={image}
                alt={`gift-${index}`}
                style={{ 
                  width: '400px', 
                  height: '400px', 
                  cursor: 'pointer',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s',
                }}
                onClick={() => handleImageClick(image)}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <ModalForm
          type="gift"
          selectedImage={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default GiftDetailPage;
