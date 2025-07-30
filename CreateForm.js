import React, { useState } from 'react';
import '../../PageStyles.css';

function CreateForm() {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form created: ' + title);
  };

  return (
    <div className="form-container slide-in">
      <h2>Create Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Form Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Add your question here" value={question} onChange={e => setQuestion(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default CreateForm;
