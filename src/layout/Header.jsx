import React, { useState } from "react";
import { FcHeadset } from "react-icons/fc";
import logo from "../assets/image/logomain.jpg";
import styled from "styled-components";
import { headerData } from "../constant";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/search/SearchInput";

const Container = styled.div`
  width: 100vw;
  position: fixed;
  background: #fff;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
const StyleHeader = styled.div`
  height: 76px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 1140px;
  .active {
    color: #ffd400 !important;
    a {
      div {
        font-size: 18px;
        color: #ffd400 !important;
      }
    }
  }
`;
const StyleImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 75px;
  object-fit: contain;
`;
const StyleTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const StyleText = styled.div`
  font-size: 14px;
  color: "#ccc";
`;
const StyleIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
const StyleSupport = styled.div`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const StyleLink = styled.div`
  cursor: pointer !important;

  a {
    div {
      font-size: 18px;
      color: #000;
    }
    cursor: pointer !important;
    text-decoration: none;
  }
`;
function Header(props) {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setData(headerData.filter((item) => item.role.includes("1")));
  }, []);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerStyle = {
    boxShadow: scrollY > 40 ? "0px 2px 2px rgba(0, 0, 0, 0.1)" : "none",
  };
  return (
    <Container style={headerStyle}>
      <StyleHeader className="d-flex gap-3">
        <div className="d-flex gap-3 align-items-center">
          <Link to="/">
            <StyleImg src={logo} alt="" />
          </Link>
        </div>
        <div className="d-flex gap-4 align-items-center">
          {data.map((item, index) => {
            if (true) {
              return (
                <StyleLink
                  onClick={() => setActive(index + 1)}
                  className={`link ${active === index + 1 ? "active" : ""} `}
                  key={item.id}
                >
                  <Link to={item.path}>
                    <StyleTitle>{item.title}</StyleTitle>
                    <StyleText>{item.text}</StyleText>
                  </Link>
                </StyleLink>
              );
            }
          })}
        </div>
        <div className="d-flex align-items-center gap-1">
          <StyleSupport className="mb-0 link">
            <StyleLink>
              <SearchInput />
            </StyleLink>
          </StyleSupport>
        </div>
      </StyleHeader>
    </Container>
  );
}

export default Header;
