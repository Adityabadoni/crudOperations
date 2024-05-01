import React, { useState } from "react";

function Ft1() {
  const dummyData = [
    {
      id: "1",
      name: "Aditya",
      phone: "78654",
    },
    {
      id: "2",
      name: "badoni",
      phone: "78654",
    },
    {
      id: "3",
      name: "ayash",
      phone: "78654",
    },
    {
      id: "4",
      name: "harshit",
      phone: "78654",
    },
    {
      id: "5",
      name: "SNEHA",
      phone: "78654",
    },
  ];

  const [search, setSearch] = useState('');

  const filteredData = dummyData.filter((item) => {
    const itemName = item && item.name && item.name.toLowerCase(); // Check if item and item.name are defined
    return itemName && itemName.includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search by Name"
      />
      <table className="table table-bordered table-striped table-hover table mt-3">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Phone no</td>
          </tr>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ft1;
