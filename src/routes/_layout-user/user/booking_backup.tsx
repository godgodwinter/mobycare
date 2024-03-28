import { createFileRoute } from '@tanstack/react-router';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useCallback, useMemo,  useState } from 'react';

export const Route = createFileRoute('/_layout-user/user/booking_backup')({
  component: Datatable,
})

function Datatable() {
  const pagination = true;
const paginationPageSize = 100;
const paginationPageSizeSelector = [200, 500, 1000];

const defaultColDef = useMemo(() => {
  return {
    flex: 1,
    minWidth: 100,
  };
}, []);

  const CustomButtonComponent = (props:any) => {
  const { value } = props;
    return <>
    {/* {value} */}
    <button onClick={() => window.alert(`Edit ${value}`) }>Edit</button> | 
    <button onClick={() => window.alert(`Delete ${value}`) }>Delete</button>
    </>;
  };
    // Row Data: The data to be displayed.
    //@ts-ignore
    const [rowData, setRowData] = useState([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);
    
    // Column Definitions: Defines the columns to be displayed.
    //@ts-ignore
    const [colDefs, setColDefs] = useState([
      {
        field: "make",
        flex:1,
        cellRenderer: (params:any) => (
          <CustomButtonComponent
            value={params.data.make}
          />
        ),
        headerCheckboxSelection: true,
        checkboxSelection: true,
        showDisabledCheckboxes: true,
      },
      { field: "make", filter: true },
      { field: "model", filter: true },
      { field: "price", filter: true },
      { field: "electric", filter: true }
    ]);
  
    //@ts-ignore
    let gridApi;

    //@ts-ignore
  const onGridReady = useCallback((params) => {
    gridApi = params.api;
  }, []);
  //@ts-ignore
  const [temp, settemp] = useState([]);

  const handleShowSelectedData = useCallback(() => {
    //@ts-ignore
    if (gridApi) {
      const selectedData = gridApi.getSelectedRows();
      console.log(selectedData);
      settemp(selectedData);
    } else {
      console.warn('Grid API is not available.');
    }
  }, [gridApi]);
  return( <>
    <div className="p-2">
      {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aut doloribus beatae fugiat alias assumenda non sit, molestias nemo architecto eligendi nam distinctio inventore itaque est dolorem maxime repellendus ducimus. */}
        <div
     className="ag-theme-quartz" // applying the grid theme
     style={{ height: 500 , width: '100%'}} // the grid will fill the size of the parent container
    >
      
      <AgGridReact
          defaultColDef={defaultColDef}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true}
          rowData={rowData}
          //@ts-ignore
          columnDefs={colDefs}
            onGridReady={onGridReady}
            // onSelectionChanged={onSelectionChanged}
      />
    </div>
    
    <button onClick={handleShowSelectedData}>Tampilkan</button>
    <div>
          {/* Display selected data */}
          <h2>Selected Data:</h2>
          <ul>
            {/* //@ts-ignore */}
            {temp.map((data:any, index:any) => (
              <li key={index}>{data.make} - {data.model}</li>
            ))}
          </ul>
        </div>
    </div>
    </>)
}