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
        'data:image/jpeg;base64,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',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkt71bhx67y8dd',
        'https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/product/2024-04-23/gau-bong-heo-con-om-binh-sua-dang-yeu-thu-nhoi-bong-con-heo-hang-cao-cap-mem-min-12048-0-66272ff087e85bba44ee0443.webp',
      ],
      title: '50-100 điểm',
      description: 'Món quà này dành cho những khách hàng có 50-100 điểm.'
    },
    '100-250': {
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Dlw3ppqsg12iftrzsapFHJABA0Nd0ug9CA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3_PFCAd8qrrl3FssKnsxitgYcfX0-2Jhv6B57aQc967QNVi8FSnT7JpQaUCLe0Dzqx8&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXY2tKx8blZXuVFKphBU9OCXUzs6tPcNOhw&s',
      ],
      title: '100-250 điểm',
      description: 'Món quà này dành cho những khách hàng có từ 100 đến 250 điểm.'
    },
    '250+': {
      images: [
        'https://gomsuhoanggia.vn/wp-content/uploads/2020/04/b%E1%BB%99-b%C3%ACnh-xanh-l%E1%BB%A5c-b%E1%BA%A3o-tr%C6%A1n-cao-c%E1%BA%A5p-545k.jpg',
        'https://product.hstatic.net/200000296482/product/img_0336-bia-1_9c9c836ca48a407a9dff85694a1c30b7_master.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix8dBGVlv0EoTvu0hzLKtzww3YJwvHduIJQ&s',
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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: '60px', fontWeight: 'bold', color: '#c1ff72', backgroundColor: '#004aad', padding: '20px' }}>
        {gift.title}
      </div>
      <div style={{ marginTop: '30px' }}>
        <p>{gift.description}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {gift.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`gift-${index}`}
              style={{ width: '150px', height: '150px', cursor: 'pointer' }}
              onClick={() => handleImageClick(image)}
            />
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
