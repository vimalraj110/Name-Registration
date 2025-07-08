import React, { useState } from 'react';

function UserTable() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [rows, setRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      setRows((prevRows) => [...prevRows, { name, age }]);
      setName('');
      setAge('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
        <button type="submit">Add</button>
      </form>

      {rows.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;
