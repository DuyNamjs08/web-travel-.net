import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgImg from "../../assets/image/Cao-Bang-3_dd3eb.jpg";
import bgImg1 from "../../assets/image/newsletter.jpg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import ButtonPatern from "../../components/button/ButtonPatern";
import { dataBanner } from "../../constant";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Carousel from "../../components/carousel/Carousel";
import { getBlogDetails } from "../../redux/travelSlice";
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
    } catch (error) {
      toast.error("có lỗi xảy ra !");
    }
  };
  useEffect(() => {
    // if (token) {
    getDataDetails({ token, id: path.pathname.split("/")[2] });
    // }
  }, [token, active]);
  console.log("htmlElements", htmlElements);
  return (
    <>
      <div style={{ marginTop: "76px" }}></div>
      <Banner img={bgImg}></Banner>
      {htmlElements ? htmlElements : ""}
      <Container>
        <h2>Mang trái cây tươi vào Thái Lan có thể ngồi tù</h2>
        <p>
          “Move is More” là một ngụ ý trong tư duy du lịch nói về sự đúng đắn
          đằng sau mỗi hành trình “đi trốn” của mỗi người. Triết lý này ngày
          càng nổi tiếng và phát triển hơn ở nửa cuối thế kỷ 20 khi song hành
          cùng nhà văn nổi tiếng Nguyễn Tuân, người luôn cổ xuý tích cực cho
          trường phái Movementism – Chủ nghĩa xê dịch
        </p>
        <p>
          Kế thừa và phát triển tư duy đó với mong muốn tạo dựng một lối sống
          lành mạnh, tích cực cho bộ phận giới trẻ ngày nay, những lớp trẻ chúng
          tôi đã cùng nhau cho ra đời Box Travel. Tại đây, chúng tôi luôn mong
          muốn và hướng đến việc tạo ra những sản phẩm du lịch, những hành trình
          khám phá bền vững, tiết kiệm và bảo vệ môi trường.
        </p>
        <p>
          “Đi để nhận lại nhiều điều” – là tôn chỉ hoạt động của Box Travel,
          chúng ta không nên chỉ đi như những cái máy di chuyển, mà hãy đi để
          truyền bá những điều tốt đẹp và cũng để nhận lại những điều đẹp xinh
          hơn trong tâm hồn. Chúng tôi hi vọng sẽ có thể chia sẻ tinh thần này
          đến toàn bộ lớp trẻ hiện nay: “Thế giới là một cuốn sách, ai không đi
          thì chỉ đọc được một trang”
        </p>
        <img src={bgImg1} alt="" />
        <p>
          Kế thừa và phát triển tư duy đó với mong muốn tạo dựng một lối sống
          lành mạnh, tích cực cho bộ phận giới trẻ ngày nay, những lớp trẻ chúng
          tôi đã cùng nhau cho ra đời Box Travel. Tại đây, chúng tôi luôn mong
          muốn và hướng đến việc tạo ra những sản phẩm du lịch, những hành trình
          khám phá bền vững, tiết kiệm và bảo vệ môi trường.
        </p>
        <p>
          “Đi để nhận lại nhiều điều” – là tôn chỉ hoạt động của Box Travel,
          chúng ta không nên chỉ đi như những cái máy di chuyển, mà hãy đi để
          truyền bá những điều tốt đẹp và cũng để nhận lại những điều đẹp xinh
          hơn trong tâm hồn. Chúng tôi hi vọng sẽ có thể chia sẻ tinh thần này
          đến toàn bộ lớp trẻ hiện nay: “Thế giới là một cuốn sách, ai không đi
          thì chỉ đọc được một trang”
        </p>
      </Container>
      <div className="container my-5">
        <h3 className="my-4">Tin tức liên quan</h3>
        <Carousel
          width={"16rem"}
          data={dataBanner}
          iconCarousel={<FiChevronRight />}
          options={settings1}
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
