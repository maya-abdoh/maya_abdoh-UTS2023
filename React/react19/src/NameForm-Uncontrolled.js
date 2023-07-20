import React, { useRef } from 'react';

const NameFormUncontrolled = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  let isSubmitted = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    if (!isSubmitted) {
      alert(`Uncontrolled: User Name: ${userName}, Password: ${password}`);
      isSubmitted = true;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>
          Name:
          <input type="text" ref={userNameRef} />
        </label>
        <label style={{ marginRight: '10px' }}>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NameFormUncontrolled;









