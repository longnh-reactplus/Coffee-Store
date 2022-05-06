import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    title: "Cà phê",
    path: "/coffee",
    id: 1,
  },
  {
    title: "Trà",
    path: "/tea",
    id: 2,
  },
  {
    title: "Menu",
    path: "/menu",
    id: 3,
  },
  {
    title: "Chuyện nhà",
    path: "/housestory",
    id: 4,
  },
  {
    title: "Cửa hàng",
    path: "/store",
    id: 5,
  },
  {
    title: "Tuyển dụng",
    path: "/recruit",
    id: 6,
  },
];

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}>
        {navList.map((data, i) => {
          return (
            <Button
              key={i}
              type="text"
              style={{ marginLeft: 0,marginTop:16,fontSize:14,fontWeight:'500'}}
            >
              <Link to={data.path}>{data.title}</Link>
            </Button>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
