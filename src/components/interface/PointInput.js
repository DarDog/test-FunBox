import React, {useState} from 'react';

const PointInput = () => {
  const [pointName, setPointName] = useState('')

  const handleChange = (e) => {
    setPointName(e.target.value)
  }

  return (
    <article className="container">
      <form className="form">
        <input onChange={handleChange} type="text" className="form__input"/>
      </form>
    </article>
  );
}

export default PointInput;
