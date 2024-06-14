import React from "react";
import { v4 as uuidv4 } from "uuid";

const TableList = ({ listOfRecords, query }) => {
  const filteredData = React.useMemo(
    () =>
      listOfRecords.filter((medicine) =>
        medicine.name.toLowerCase().includes(query.toLowerCase())
      ),
    [listOfRecords, query]
  );

  const tableHeaders = [ "name", "manufacturer", "skuType","skuId", "skuLabel","quantity", "price"]

  return (  

<div class="relative overflow-x-auto  overflow-y-auto mt-2">
    <table class="w-full text-sm text-left rtl:text-right">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                {tableHeaders.map( (header) => (
                  <th scope="col" class="px-6 py-3" key={uuidv4()}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
{filteredData?.map((record) => {
            const { name, manufacturer, skuType, skuId, skuLabel, quantity, price} = record;

            return (
              <tr key={uuidv4()}>
                <td>{name}</td>
                <td>{manufacturer}</td>
                <td>
                  {skuType}
                </td>
                <td>{skuId}</td>
                <td>{skuLabel}</td>
                <td>{quantity}</td>
                <td>{price}</td>
              </tr>
            )
          })} 
        </tbody>
    </table>

    { filteredData.length === 0 && <p className="mt-5 text-center font-medium">Search Result not found</p>} 
</div>

  );
};

export default TableList;
