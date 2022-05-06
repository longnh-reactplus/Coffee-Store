import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    title: "Cà phê",
    id: 1,
  },
  {
    title: "Trà",
    id: 2,
  },
  {
    title: "Menu",
    id: 3,
  },
  {
    title: "Chuyện nhà",
    id: 4,
  },
  {
    title: "Cửa hàng",
    id: 5,
  },
  {
    title: "Tuyển dụng",
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
              {data.title}
              <Link to={'/order'}></Link>
            </Button>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
