import React, { useState } from 'react';


const NameFormControlled = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitted) {
      alert(`Controlled: User Name: ${userName}, Password: ${password}`);
      setIsSubmitted(true);
    }
  };

 
};

export default NameFormControlled;




