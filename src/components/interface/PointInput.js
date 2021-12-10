import React, {useState} from 'react';

const PointInput = () => {
  const [pointName, setPointName] = useState('')

  const handleChange = evt => {
    setPointName(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    setPointName('')
      //TODO создавать объект точки с уникальным ID и отправлять в список точек
  }

  return (
    <article className="container">
      <form onSubmit={handleSubmit} className="form">
        <input value={pointName} onChange={handleChange} type="text" className="form__input"/>
      </form>
    </article>
  );
}

export default PointInput;
