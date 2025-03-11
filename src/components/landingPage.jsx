import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // import useNavigate for navigation
import ModalForm from './modal'; // Import modal component

const LandingPage = () => {
  const navigate = useNavigate();  // using useNavigate hook to navigate
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleShowGift = () => {
    navigate('/gifts');  // Navigate to the 'gifts' page
  };

  const handleGiveFeedback = () => {
    setShowModal(true);  // Show the feedback modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
  };

  return (
    <div className="landing-page">
      <div>
        <div style={{ fontSize: '60px', fontWeight: 'bold', color: '#c1ff72', backgroundColor: '#004aad', padding: '20px' }}>Special Gift</div>
      </div>
      <div className="content" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="text-container">
          <h2>CHƯƠNG TRÌNH TRI ÂN KHÁCH HÀNG</h2>
          <p>CẢM ƠN BẠN VÌ ĐÃ ĐỒNG HÀNH CÙNG FIVEFLEX</p>
          <p>
            Chúng tôi vô cùng trân trọng sự tin tưởng và ủng hộ của Quý Khách. Sự hài lòng của bạn là động lực để chúng tôi không ngừng cải thiện và mang đến trải nghiệm tốt nhất. Nếu có bất kỳ góp ý nào, đừng ngần ngại chia sẻ – chúng tôi luôn sẵn sàng lắng nghe!
          </p>
          <p>
            Hy vọng sẽ tiếp tục được phục vụ Quý Khách trong tương lai. Chúc bạn một ngày tốt lành
          </p>
          <p>
            FiveRent – Thuê dễ dàng, trải nghiệm tuyệt vời!
          </p>
        </div>
        <div className="button-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <button onClick={handleShowGift}>QUÀ TẶNG</button>
          <button onClick={handleGiveFeedback}>GÓP Ý</button>
        </div>
      </div>

      {/* Modal for Feedback */}
      {showModal && (
        <ModalForm type="feedback" onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default LandingPage;
