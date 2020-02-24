import React from "react";
import PropTypes from "prop-types";

export default function ProductTable(props) {
  ProductTable.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.oneOf(["Electronics", "Clothes"])
  };
  const styleTable = {
    marginTop: "100px",
    width: "50%",
    height: "100%",
    margin: "auto"
  };
  const styleTd = {
    border: "1px solid #ddd",
    padding: "8px"
  };
  const styleTh = {
    paddingTop: "12px",
    paddingBottom: "12px",
    border: "1px solid #ddd",
    backgroundColor: "#4de8ec",
    color: "white"
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "30px" }}>
      <table style={styleTable}>
        <thead>
          <tr>
            <td style={styleTh}>Name</td>
            <td style={styleTh}>Cateory</td>
            <td style={styleTh}>Price</td>
          </tr>
        </thead>
        <tbody>
          {props.products.map((el, i) => (
            <tr key={i}>
              <td style={styleTd}>{el.name}</td>
              <td style={styleTd}>{el.category}</td>
              <td style={styleTd}>{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
