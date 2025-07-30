import React from 'react';
import '../../PageStyles.css';

function ViewResponses() {
  return (
    <div className="container fade-in">
      <h2>Feedback Responses</h2>
      <p>This is where admin can view submitted feedback.</p>
      <div style={{ marginTop: '20px', background: '#fff3', padding: '10px', borderRadius: '10px' }}>
        <p><strong>User:</strong> user@example.com</p>
        <p><strong>Response:</strong> Very helpful session!</p>
      </div>
    </div>
  );
}
export default ViewResponses;
