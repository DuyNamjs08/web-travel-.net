import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/image/banner.jpg";
import scape from "../../assets/image/scaled.jpg";
import fruit from "../../assets/image/Fruit.jpeg";
import fruit1 from "../../assets/image/tesst1.jpeg";
import fruit2 from "../../assets/image/tesst2.jpeg";
import fruit3 from "../../assets/image/tesst3.jpg";
import beautiImg from "../../assets/image/shutterstock.jpg";
import beautiImg1 from "../../assets/image/newsletter.jpg";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import {
  dataHomepage,
  dataBanner,
  dataCarousel1,
  dataDashboard,
  dataImg,
} from "../../constant";
import Carousel from "../../components/carousel/Carousel";
import Ifame from "../../components/iframe/Ifame";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Loading from "../loading/Loading";
import Banner from "../../components/banner/Banner";
import ButtonPatern from "../../components/button/ButtonPatern";
import { AiFillCaretRight } from "react-icons/ai";
import ModelCustom from "../../components/model-custom/ModelCustom";
import { Link } from "react-router-dom";

function Homepage(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {show && <ModelCustom setShow={setShow} />}
      <Container>
        <StyleBanner img={bannerImg}>
          <h1>wellcome</h1>
          <h3>wellcome to Viet Nam</h3>
        </StyleBanner>
        <Section1 className="container">
          <div className="section1__item">
            <h3> Kỳ nghỉ của bạn</h3>
            <p>
              Chỉ với một vài thao tác đơn giản, bạn đã có thể thiết kế cho mình
              và người thân một chuyến đi chi tiết theo đúng ý mình.
            </p>
            <Link style={{ textDecoration: "none" }} to={"/tour"}>
              <ButtonPatern text={"Thiết kế chuyến đi"} />
            </Link>
          </div>
          <div className="section1__item">
            <Banner />
          </div>
        </Section1>
        <Section2 className="container">
          {dataImg.map((item) => (
            <StyleImg key={item.id} img={item.img}>
              {/* <img src={item.img} alt="" /> */}
              <Link style={{ textDecoration: "none" }} to={"/hotel"}>
                <p>{item.text}</p>
              </Link>
            </StyleImg>
          ))}
        </Section2>
        <Section3 img={scape}>
          <div className="container">
            <div className="item">
              <div className="ribbon">
                <p>COMBO SAPA</p>
              </div>
              <h2>25%</h2>
              <div className="text">
                <b>Sapa Jade Hill Resort </b>
                <span>
                  là điểm đến cực hot tại địa đàng núi rừng Sapa, ưu đãi tới 25%
                  giá thành cho combo 2 ngày 1 đêm là món quà mà Box Travel gửi
                  đến tất cả các bạn với mong muốn thôi thúc những đôi chân Việt
                  Nam đi và yêu lấy thiên nhiên tổ quốc.
                </span>
              </div>
              <Link style={{ textDecoration: "none" }} to={"/tour"}>
                <ButtonPatern text={"Chi tiết"} />
              </Link>
            </div>
            <div className="item">
              <div className="ribbon">
                <p>COMBO SAPA</p>
              </div>
              <h2>25%</h2>
              <div className="text">
                <b>Sapa Jade Hill Resort </b>
                <span>
                  là điểm đến cực hot tại địa đàng núi rừng Sapa, ưu đãi tới 25%
                  giá thành cho combo 2 ngày 1 đêm là món quà mà Box Travel gửi
                  đến tất cả các bạn với mong muốn thôi thúc những đôi chân Việt
                  Nam đi và yêu lấy thiên nhiên tổ quốc.
                </span>
              </div>
              <Link style={{ textDecoration: "none" }} to={"/tour"}>
                <ButtonPatern text={"Chi tiết"} />
              </Link>
            </div>
          </div>
        </Section3>
        <Section4 className="container">
          <div className="item">
            <h2>Tin tức</h2>
            <Link
              style={{ textDecoration: "none", color: "unset" }}
              to={"/blog"}
            >
              <div className="item__img">
                <img src={fruit} alt="" />
                <div>
                  <h5>Mang trái cây tươi vào Thái Lan có thể ngồi tù</h5>
                  <p>
                    Du khách nhập cảnh cố tình mang theo trái cây, rau quả tươi
                    mà không có giấy phép nhập khẩu, không ...
                  </p>
                </div>
              </div>
            </Link>
            <ul>
              <li>
                {" "}
                <div></div> Villa quanh Hà Nội – Top 10 Villa đẹp nhất
              </li>
              <li>
                {" "}
                <div></div> Hổ Quyền – Đấu trường La Mã độc đáo của Việt Nam
              </li>
              <li>
                {" "}
                <div></div>Nghỉ lễ 2/9 đi đâu và chơi gì ở miền Bắc ?
              </li>
              <li>
                {" "}
                <div></div> Sapa mùa lúa chín – “Mùa vàng” của những kẻ mộng mơ
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Cẩm nang</h2>
            <Link
              style={{ textDecoration: "none", color: "unset" }}
              to={"/blog"}
            >
              <div className="item__img">
                <img src={fruit1} alt="" />
                <div>
                  <h5>
                    Những lưu ý để tránh rắc rối khi đi xem World Cup ở Qatar
                  </h5>
                  <p>
                    Chỉ những người 21 tuổi trở lên mới được phép mua đồ uống có
                    cồn, say xỉn nơi công cộng có thể đối …
                  </p>
                </div>
              </div>
            </Link>
            <ul>
              <li>
                {" "}
                <div></div> Chỗ ngồi tốt và tệ nhất trên máy bay
              </li>
              <li>
                {" "}
                <div></div> Top 30 điểm đến nhất định phải ghé khi tới Phú Quốc
              </li>
              <li>
                {" "}
                <div></div> Food tour Hải Phòng có gì ?
              </li>
              <li>
                {" "}
                <div></div>Top 10 điểm du lịch hấp dẫn nhất ở Sapa
              </li>
            </ul>
          </div>
        </Section4>
        <Section4 className="container">
          <div className="item">
            <h2>Thế Giới</h2>
            <Link
              style={{ textDecoration: "none", color: "unset" }}
              to={"/blog"}
            >
              <div className="item__img">
                <img src={fruit2} alt="" />
                <div>
                  <h5>Những trải nghiệm đáng nhớ ở Mông Cổ</h5>
                  <p>
                    Hóa thân thành người du mục rong ruổi trên lưng ngựa hay
                    cưỡi lạc đà băng qua những đụn cát trên sa …
                  </p>
                </div>
              </div>
            </Link>
            <ul>
              <li>
                {" "}
                <div></div> Top 25 điểm đến du lịch nổi tiếng nhất thế giới do
                TripAdvisor bình chọn
              </li>
              <li>
                {" "}
                <div></div> Kinh nghiệm du lịch Bhutan tự túc giá rẻ: Chi phí,
                Lịch trình
              </li>
              <li>
                {" "}
                <div></div> Villa quanh Hà Nội – Top 10 Villa đẹp nhất
              </li>
              <li>
                {" "}
                <div></div>12 Món ăn nhất định phải thử khi đến Bhutan
              </li>
            </ul>
          </div>
          <div className="item">
            <h2>Inside the Box</h2>
            <Link
              style={{ textDecoration: "none", color: "unset" }}
              to={"/blog"}
            >
              <div className="item__img">
                <img src={fruit3} alt="" />
                <div>
                  <h5>Journey to the heart – Hành trình chạm đến trái tim</h5>
                  <p>
                  Có lẽ, điều làm đội ngũ Box Travel băn khoăn nhất là làm sao để mỗi bước chân, mỗi hành trình của …
                  </p>
                </div>
              </div>
            </Link>
            <ul>
              <li>
                {" "}
                <div></div> Box Travel x BHD Star Cinemas: Du lịch mê say – Phim hay cực đã !
              </li>
              <li>
                {" "}
                <div></div> Rộn ràng du hý – đăng ký thành viên cùng Box Travel
              </li>
              <li>
                {" "}
                <div></div> Xê dịch thông minh
              </li>
              <li>
                {" "}
                <div></div> Villa quanh Hà Nội – Top 10 Villa đẹp nhất
              </li>
            </ul>
          </div>
        </Section4>

        <Section5 img={beautiImg}>
          <div className="overlay"></div>
          <div className="main">
            <h4>Nhịp đập Việt Nam</h4>
            <p>Chuyến đi thực hiện bởi Box Team</p>
            <div className="icon__main">
              <div onClick={() => setShow(true)} className="icon">
                <AiFillCaretRight />
              </div>
            </div>
          </div>
        </Section5>
        <Section6 img={beautiImg1}>
          <h3>Đăng ký để theo dõi những thông tin mới nhất của Box Travel</h3>
          <div className="d-flex ">
            <input placeholder="Nhập email của bạn" type="text" />
            <ButtonPatern text={"Đăng kí"} />
          </div>
        </Section6>

        {/* <StyeleDiv></StyeleDiv> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 76px;
`;
const StyleBanner = styled.div`
  width: 100%;
  height: 90vh;
  background-position: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;

  h3 {
    position: absolute;
    margin-top: 20px;
    font-size: 40px;
    letter-spacing: 2.5px;
    color: #f1eeee;
  }
  h1 {
    text-transform: uppercase;
    font-size: 140px;
    letter-spacing: 8px;
    color: rgba(223, 223, 43, 0.726);
  }
`;
const Section1 = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  .section1__item {
    flex: 1;
    width: 50%;
    p {
      width: 70%;
    }
  }
`;
const Section2 = styled.div`
  /* overflow: hidden; */
  margin-top: 30px;
  height: 400px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const StyleImg = styled.div`
  position: relative;
  cursor: pointer;
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: all 0.4s ease-out;
  &:hover {
    transform: scale(0.92);
  }
  display: flex;
  flex-direction: column;
  justify-content: end;
  p {
    color: #fff;
    padding: 10px;
    font-size: 20px;
  }
`;
const Section3 = styled.div`
  margin-top: 30px;
  height: 70vh;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  .container {
    display: flex;
    gap: 20px;
    padding: 5vh 0;

    .item {
      flex: 1;
      padding: 12px;
      position: relative;
      background-color: rgba(247, 247, 247, 0.7);
      height: 60vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      .ribbon {
        position: absolute;
        top: -6px;
        left: -6px;
        p {
          background-color: #efaa32;
          color: #fff;
          width: 150px;
          text-align: center;
          margin-top: 50px;
          transform: translateY(-50%) translateX(-50%) translateX(50px)
            rotate(-45deg);
        }
      }
      h2 {
        margin-top: 40px;
        font-size: 100px;
        color: #107cd3;
      }
      .text {
        letter-spacing: 1.2px;
        margin-bottom: 20px;
      }
    }
  }
`;
const Section4 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  .item {
    flex: 1;
    .item__img {
      display: flex;
      gap: 10px;
      img {
        height: 100px;
      }
      p {
        color: #999999;
      }
    }
    ul {
      margin-top: 20px;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 10px;
        div {
          width: 8px;
          height: 8px;
          border-radius: 10px;
          background: #efaa32;
        }
      }
    }
  }
`;
const Section5 = styled.div`
  margin-top: 30px;
  background-image: url(${(props) => props.img});
  height: 80vh;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .main {
    color: #fff;
    z-index: 100;
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .icon__main {
      display: flex;
      justify-content: center;
    }
    .icon {
      cursor: pointer;
      align-items: center;
      height: 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: 2px solid #fff;
      border-radius: 50%;
      transition: all ease-in-out 0.3s;
      &:hover {
        background-color: #ffd400;
      }
      svg {
        font-size: 40px;
      }
    }
  }
`;
const Section6 = styled.div`
  height: 50vh;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  color: #fff;
  margin: 40px 0;
  h3 {
    text-align: center;
    padding: 40px 0;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 30px;
    input {
      outline: none;
      border: none;
      background-color: rgba(255, 255, 255, 0.2) !important;
      border-color: rgba(255, 255, 255, 0.09);
      border-radius: 8px;
      color: #fff;
      min-width: 300px;
      padding: 0 20px;
      ::placeholder {
        color: #fff;
      }
    }
  }
`;

const StyeleDiv = styled.div`
  height: 40px;
  background-color: #fff;
`;

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
export default Homepage;
