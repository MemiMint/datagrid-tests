import * as React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {  createFakeServer } from "@mui/x-data-grid-generator";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id"
  },
  {
    field: "leadDate",
    headerName: "Lead Date"
  },
  {
    field: "duration",
    headerName: "Duration"
  },
  {
    field: "type",
    headerName: "Type"
  },
  {
    field: "callStatus",
    headerName: "Call Status"
  },
  {
    field: "saleStatus",
    headerName: "Sale Status"
  },
  {
    field: "appointmentDate",
    headerName: "Appt Date"
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number"
  },
  {
    field: "leadResulted",
    headerName: "Resulted"
  },
  {
    field: "caller",
    headerName: "Caller",
    renderCell: ((params) => {
      return (
        <p>{params.value.firstName}</p>
      )
    })
  }
]

function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [ágeSize, setPageSize] = React.useState<number>(0);

  const URL  = `
      https://lpltestapis.azure-api.net/view-leads/sales-between?userAccount=870690&startDate=2022-07-01&endDate=2022-08-07&subscription-key=82f9a7e80b47433eb8a83460424a0bc0
    `;

  const fetchApiData = async () => {
    setIsLoading(true);
    const response = await fetch(URL, {
      headers: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2NjM3MDI5ODQsIm5iZiI6MTY2MzYxNjU4NCwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9ieWx0ZWlhbS5iMmNsb2dpbi5jb20vMGNhZGUyNTctZjdlYi00ZTYxLTk5ZDYtNGUzOTU1Y2JkY2JiL3YyLjAvIiwic3ViIjoiZDU3ZjM3YjUtODc3Ny00YWJiLTg4MmQtNTZlMmE0N2I5MGM3IiwiYXVkIjoiMzcyMmNkNWYtYjUyYi00ZmRiLTkzYTctMzNhM2U4NTBmNGRiIiwibm9uY2UiOiI0ZmM3YjdiZS1lNDhmLTRkZmMtYjRhMi1kMjRlYjQ5ZWZkN2EiLCJpYXQiOjE2NjM2MTY1ODQsImF1dGhfdGltZSI6MTY2MzYxNjU4NCwiZW1haWxzIjpbImFhbGxlbmRlckBzYWZlc3RlcHR1Yi5jb20iXSwiZXh0ZW5zaW9uX1NlY0xldmVsIjo4LCJleHRlbnNpb25fVXNlcm5hbWUiOiJBbmRpMiIsInRmcCI6IkIyQ18xX0xQTFNpZ25JbiJ9.W6IksjuLD5HeNMb3gT4HL4SqENHezwbavm9H0AHo8pZdVysClnB_vra95sws0Z3mOoE2LXw9K_XXd_rxcxIWNRJ_ujMOb_lDCFjXRjWiLc9sTSTlfdatG8YNMKad-FTFNlgRwLxOPYj-iOhqi2pb8qCMEoIkmS7v5D4sjB9gwsdTP3UeOWzSSddDHQtMFdBCPVACjYv5rc-ddRBPVK1-15reibTQrQ11TimiQ4fm5Dasg4I64zv9O42CClrZy1h35L6NLbbkK1hZv6gWrYrpZcQMQA-drZEkPVE3r4YZb-ypYc34PNAPh019M6_2aTbYoE2eSOEN-L5SlepJl5Wgjg`
      },
      method: "GET",
    });

    setData(await response.json());

    setIsLoading(false);

  }
  
  React.useEffect(() => {
    fetchApiData();
  }, [])

  return (
    <div style={{ height: 400, width: '90vw', padding: 10 }}>
      <DataGrid
        columns={columns}
        rows={data}
        loading={isLoading}
      />
    </div>
  );
}

export default App;