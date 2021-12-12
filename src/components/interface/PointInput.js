import React, {useState} from 'react';

const PointInput = (props) => {
  const [pointName, setPointName] = useState('')

  const handleChange = evt => {
    setPointName(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    setPointName('')
    props.onAdd({
      _id: Date.now(),
      order: Date.now(),
      name: pointName,
      coords: props.coords
    })
  }

  return (
    <article className="container">
      <form onSubmit={handleSubmit} className="form" name={'addPointForm'}>
        <input value={pointName} onChange={handleChange} type="text" className="form__input"/>
      </form>
    </article>
  );
}

export default PointInput;
