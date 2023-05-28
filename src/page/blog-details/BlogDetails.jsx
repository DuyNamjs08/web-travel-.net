import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgImg from "../../assets/image/Cao-Bang-3_dd3eb.jpg";
import bgImg1 from "../../assets/image/newsletter.jpg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import ButtonPatern from "../../components/button/ButtonPatern";
import { dataBanner } from "../../constant";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Carousel from "../../components/carousel/Carousel";
import { getBlogDetails  , getListImg , getBlog} from "../../redux/travelSlice";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactHtmlParser from "react-html-parser";
function BlogDetails(props) {
  const [toggler, setToggler] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const role = true;
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const [htmlElements, setHtmlElements] = useState("");
  const path = useLocation();
  const [dataCategory, setDataCategory] = useState([]);
  const [listImgs, setListImgs] = useState([]);
  const [dataRelease, setDataRelease] = useState([]);
  const getDataDetails = async (value) => {
    try {
      await dispatch(getBlogDetails(value))
        .unwrap()
        .then((res) => {
          console.log(res);
          setData(res.resultObj);
          setHtmlElements(ReactHtmlParser(res.resultObj?.contents))
          setValue(res.name);
        });
        await dispatch(getBlog({ token }))
        .unwrap()
        .then((res) => {
          setDataRelease(res?.data);
        });
      await dispatch(getListImg({id: path.pathname.split("/")[2] , type:"blog" , token}))
        .unwrap()
        .then((res) => {
          setListImgs(res.data)
        });
    } catch (error) {
      toast.error("có lỗi xảy ra !");
    }
  };
  useEffect(() => {
    // if (token) {
    getDataDetails({ token, id: path.pathname.split("/")[2] });
    // }
  }, [token, active]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("htmlElements", htmlElements);
  return (
    <>
      <div style={{ marginTop: "76px" }}></div>
      <Banner img={bgImg}></Banner>
     
      <Container>
      {htmlElements ? htmlElements : ""}
      </Container>
      <div className="container my-5">
        <h3 className="my-4">Tin tức liên quan</h3>
        <Carousel
          width={"16rem"}
          data={dataRelease}
          iconCarousel={<FiChevronRight />}
          options={settings1}
          path='blog'
        />
      </div>
    </>
  );
}
const Section1 = styled.div`
  padding: 60px;
  h3 {
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 30px;
  }
  .main {
    display: flex;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h5 {
        text-align: center;
      }
    }
  }
`;
const Section = styled.div`
  h3 {
    text-align: center;
  }
  h6 {
    text-align: center;
    margin-bottom: 30px;
  }
  .main {
    display: flex;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        text-align: left;
      }
    }
  }
  margin: 40px 0;
  padding: 40px 100px;
  height: 50vh;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  color: #fff;
`;
const Banner = styled.div`
  height: 80vh;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-left: 60px;
  color: #fff;
`;
const Container = styled.div`
  margin: 40px 0;
  padding: 0 100px;
  img {
    width: 100%;
    margin: 20px 0;
  }
`;
const settings1 = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        // right: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <div className="text-carousel">
        <FiChevronRight />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        // left: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <div className="text-carousel">
        <FiChevronLeft />
      </div>
    </div>
  );
}
export default BlogDetails;
