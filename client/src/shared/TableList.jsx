import React from 'react'
const TableList = ({ listOfRecords, query }) => {
  return (
    <div>
        {listOfRecords.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>SKU Label</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {listOfRecords
                .filter((medicine) =>
                  medicine.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((medicine) => {
                  const {
                    name,
                    manufacturer,
                    price,
                    skuLabel,
                    quantity,
                    skuId,
                  } = medicine;
                  return (
                    <tr key={skuId}>
                      <td>{name}</td>
                      <td>{manufacturer}</td>
                      <td>{skuLabel}</td>
                      <td>{quantity}</td>
                      <td>{price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <p>No records available.</p>
        )}
      </div>
  )
}

export default TableList;