import React from "react";

const Table = ({ task, userData, page, size, prevClick, nextClick }) => {
  if (task === "task5") {
    return (
      <div>
        <table className="w-full overflow-scroll">
          <tr>
            <th className="text-left p-4"> Serial No. </th>
            <th> City </th>
            <th> User count </th>
            <th> Average income </th>
          </tr>

          {userData.map((data, id) => {
            const { _id, userCount, avgIncome } = data;
            return (
              <tr key={id}>
                <td>{(page - 1) * size + (id + 1)}</td>
                <td>{_id}</td>
                <td>{userCount}</td>
                <td>{avgIncome}</td>
              </tr>
            );
          })}
        </table>
        <div className="absolute right-12 bottom-12 flex gap-8">
          <button
            className="px-6 py-2 bg-primary hover:bg-secondary shadow-lg rounded-lg transition-all"
            onClick={prevClick}
          >
            Previous
          </button>
          <button
            className="px-6 py-2 bg-primary hover:bg-secondary shadow-lg rounded-lg transition-all"
            onClick={nextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <table className="w-full overflow-scroll">
        <tr>
          <th className="text-left p-4"> Serial No. </th>
          <th> First name </th>
          <th> Last name </th>
          <th> Email </th>
          <th> Gender </th>
          <th> Income </th>
          <th> Phone price </th>
          <th> Car </th>
          <th> City </th>
          <th> Quote </th>
        </tr>

        {userData.map((data, id) => {
          const {
            first_name,
            last_name,
            email,
            gender,
            income,
            phone_price,
            car,
            city,
            quote,
          } = data;
          return (
            <tr key={id}>
              <td>{(page - 1) * size + (id + 1)}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{income}</td>
              <td>{phone_price}</td>
              <td>{car}</td>
              <td className="whitespace-normal">{city}</td>
              <td>{quote}</td>
            </tr>
          );
        })}
      </table>
      <div className="absolute right-12 bottom-12 flex gap-8">
        <button
          className="px-6 py-2 bg-primary hover:bg-secondary shadow-lg rounded-lg transition-all"
          onClick={prevClick}
        >
          Previous
        </button>
        <button
          className="px-6 py-2 bg-primary hover:bg-secondary shadow-lg rounded-lg transition-all"
          onClick={nextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
