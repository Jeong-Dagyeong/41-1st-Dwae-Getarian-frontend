import React from 'react';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './SignUp.scss';
import GenderOption from './GenderOption';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    mobile_number: '',
  });

  const [whatGender, setGender] = useState(0);

  const [startDate, setState] = useState('');

  const [disable, setDisabled] = useState(false);

  const [filledInput, setFilledInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    mobile_number: '',
    postcode: '',
    date_of_birth: '',
    gender_id: '',
  });

  console.log(filledInput);
  const fillIn = e => {
    const { value } = e.target;
    setFilledInput(e.target.value);
    if (filledInput.includes(e.target.value)) {
      setDisabled(false);
    }
  };

  // const onDisabled = () => {};

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    fetch('http://10.58.52.134:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        address: form.address,
        postcode: '',
        phone_number: form.mobile_number,
        gender_id: whatGender,
        date_of_birth: startDate,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="signup">
        <div className="header-box">
          <div className="header-box-inner">
            <h1 className="header-box-login-title">회원가입</h1>
            <button type="button" className="header-box-btn">
              <TfiClose />
            </button>
          </div>
        </div>
      </div>
      <section className="container-signin">
        <form action="" className="singin-box" onSubmit={handleSubmit}>
          <input
            type="text"
            className="signin-full-name"
            placeholder="이름"
            name="name"
            value={form.name}
            onChange={handleChange}
            onInput={fillIn}
          />
          <input
            type="text"
            className="signin-email"
            placeholder="이메일"
            name="email"
            value={form.email}
            onChange={handleChange}
            onInput={fillIn}
          />
          <input
            type="password"
            className="signin-pw"
            placeholder="비밀번호"
            name="password"
            value={form.password}
            onChange={handleChange}
            onInput={fillIn}
          />
          <input
            type="text"
            className="signin-postcode"
            placeholder="우편번호"
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            onInput={fillIn}
          />
          <input
            type="text"
            className="signin-address"
            placeholder="주소"
            name="address"
            value={form.signin_address}
            onChange={handleChange}
            onInput={fillIn}
          />
          <input
            type="text"
            className="signin-phone"
            placeholder="핸드폰 번호"
            name="mobile_number"
            value={form.mobile_number}
            onChange={handleChange}
          />
          <GenderOption setGender={setGender} onInput={fillIn} />
          <p className="birth-text">생년월일</p>
          <input
            type="date"
            className="signin-birth"
            onChange={e => setState(e.target.value)}
            onInput={fillIn}
          />
          <div className="signin-btn-box">
            <button
              type="button"
              className="signin-btn"
              onClick={handleClick}
              disabled={true}
            >
              회원가입
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
