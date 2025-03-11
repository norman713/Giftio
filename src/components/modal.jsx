import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng

const ModalForm = ({ type, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    productCode: '',
    feedback: '',
  });

  const navigate = useNavigate(); // Hook để điều hướng

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi thông tin!');
    if (type === 'feedback') {
      onClose(); // Đóng modal khi bấm "Gửi"
    } else {
      navigate('/'); // Điều hướng về trang LandingPage khi bấm "Gửi"
      onClose(); // Đóng modal
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{type === 'feedback' ? 'Góp Ý' : 'Thông tin nhận quà'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {type === 'feedback' ? (
            <>
              <input
                type="text"
                name="productCode"
                placeholder="Mã thuê sản phẩm"
                value={formData.productCode}
                onChange={handleChange}
                required
              />
              <textarea
                name="feedback"
                placeholder="Góp ý cho chúng tôi"
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ nhận quà"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button type="submit" style={styles.button}>Gửi</button>
            <button type="button" onClick={onClose} style={styles.button}>Đóng</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#0f8cd8',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    flex: 1, // Để các button chiếm cùng chiều rộng
    margin: '0 10px', // Khoảng cách giữa các button
  },
};

export default ModalForm;
