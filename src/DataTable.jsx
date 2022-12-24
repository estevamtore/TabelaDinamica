import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import "./styles.css";

const Table = (props) => {
  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      grow: 0,
    },
    {
      name: "Nome",
      selector: "name",
      sortable: true,
      grow: 2,
    },
    {
      name: "kWp",
      selector: "kWp",
      sortable: true,
    },
    {
      name: "Valor Projeto",
      selector: "valorProjeto",
      sortable: true,
      cell: (row) => (row.showButtons ? <div className="zzz">123</div> : null),
    },
    {
      name: "Criação",
      selector: "datapro",
      sortable: true,
      hide: "md",
    },
    {
      name: "Ações",
      button: true,
      cell: (row) =>
        row.showButtons ? (
          <div className="rdt_TableCol">
            <button
              onClick={() => props.click(row.name)}
              style={{ marginRight: "5px", backgroundColor: "red" }}
            >
              Delete
            </button>
            <button
              onClick={() => props.click(row.name)}
              style={{ marginRight: "5px" }}
            >
              Edit
            </button>
            <button onClick={() => props.click(row.name)}>Copy</button>
          </div>
        ) : null,
    },
  ];

  //filtros
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
