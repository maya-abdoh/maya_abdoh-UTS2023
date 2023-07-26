import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ExamPage.css';
const initialFormData = {
  name: '',
  email: '',
  password: '',
  telephone: '',
  dropdown: 'C#',
  address: '',
  note: '',
};

const languageOptions = [
  { label: 'C#', value: 'C#' },
  { label: 'ReactJs', value: 'ReactJs' },
  { label: 'Java', value: 'Java' },
  { label: 'C++', value: 'C++' },
  { label: 'Python', value: 'Python' },
];

const ExamPage = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = () => {
    const { name, email, password, telephone } = formData;
  
    if (!name.match(/^[A-Za-z]+$/)) {
      toast.error('Name must only contain characters!');
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Invalid email format!');
      return;
    }
  
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }
  
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      toast.error('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character!');
      return;
    }
  
    if (!/^[0-9]+$/.test(telephone)) {
      toast.error('Telephone must contain only numbers!');
      return;
    }
  

    toast.success('Form submitted successfully!');
  };
  

  return (
    <div className="exam-page" style={{ border: '1px solid black', width: '600px',marginTop:'20px' ,marginLeft:'450px', padding: '20px', backgroundColor: '#94d8de' }}>
      <h1 className="registration-heading">REGISTRATION FORM</h1>
      <div className="input">
        <label htmlFor="name">Name :</label>
        <div>
          <InputText style={{ width: '300px' }} id="name" value={formData.name} onChange={(e) => handleChange(e, 'name')} />
        </div>
      </div>
            <div className="input">
        <label htmlFor="address">Address :</label>
        <div>
          <InputText style={{ width: '300px' }} id="address" value={formData.address} onChange={(e) => handleChange(e, 'address')} />
        </div>
      </div>
      <div className="input">
        <label htmlFor="email">E-mail :</label>
        <div>
          <InputText style={{ width: '300px' }} id="email" value={formData.email} onChange={(e) => handleChange(e, 'email')} />
        </div>
      </div>
      <div className="input">
        <label htmlFor="password">Password :</label>
        <div>
          <InputText style={{ width: '300px' }} type="password" id="password" value={formData.password} onChange={(e) => handleChange(e, 'password')} />
        </div>
      </div>
      <div className="input">
        <label htmlFor="telephone">Telephone :</label>
        <div>
          <InputText style={{ width: '300px' }} id="telephone" value={formData.telephone} onChange={(e) => handleChange(e, 'telephone')} />
        </div>
      </div>





      <div className="input">
        <label  htmlFor="dropdown">Course :</label>
        <div>
          <select
            id="dropdown"
            value={formData.dropdown}
            onChange={(e) => handleChange(e, 'dropdown')}
            style={{ width: '305px' ,height:'23px'}}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>



      
      <div className="input">
        <label htmlFor="note">Note</label>
        <div>
          <InputText
            style={{ height: '50px', width: '300px' }}
            id="note"
            value={formData.note}
            onChange={(e) => handleChange(e, 'note')}
          />
        </div>
      </div>

      <Button style={{ color: 'yellow', backgroundColor: '#4040ff', width: '305px' }} label="save" onClick={handleSubmit} />
      <Button style={{ color: 'yellow', marginTop: '10px', backgroundColor: '#4040ff', width: '305px' }} label="Reset " onClick={ handleReset} />
      <ToastContainer />
    </div>
  );
};

export default ExamPage;



