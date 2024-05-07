import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import { getUser } from "../../Services/EndPoint";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
// import { FiEdit } from "react-icons/fi";
import { Button } from "primereact/button";

const User = () => {
  const [data, setData] = useState("");
  const columns = [
    { field: "avatar", header: "Image" },
    { field: "first_name", header: "First Name" },
    { field: "last_name", header: "Last Name" },
    { field: "email", header: "Email" },
    { field: "action", header: "Action" },
  ];
  const [products, setProducts] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };

  const header = (
    <MultiSelect
      value={visibleColumns}
      options={columns}
      optionLabel="header"
      onChange={onColumnToggle}
      className="w-full sm:w-20rem"
      display="chip"
    />
  );

  function ImageBodyTemplate(rowData) {
    return (
      <img
        src={rowData.avatar}
        alt="Avatar"
        style={{ width: "50px", height: "50px", borderRadius: "100%" }}
      />
    );
  }
  function ActionBodyTemplate(rowData) {
    return (
      <div>
        <button className="btn btn-success">Edit</button>
        <button className="btn btn-danger ms-3">Delete</button>
      </div>
    );
  }

  const fetchDta = async () => {
    const res = await getUser();
    console.log(res);
    setData(res.data.data);
  };
  console.log(data);
  useEffect(() => {
    fetchDta();
  }, []);
  return (
    <div className="p-5">
      <AddUser />
      <div className="mt-3">
        <h3>User Management</h3>
      </div>
      <div className="card mt-3">
        <DataTable
          value={data}
          header={header}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="id" header="S no" />
          {visibleColumns.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              body={
                col.field === "action"
                  ? ActionBodyTemplate
                  : null || col.field === "avatar"
                  ? ImageBodyTemplate
                  : null
              }
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default User;
