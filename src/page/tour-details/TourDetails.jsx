import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonPatern from "../../components/button/ButtonPatern";
import img1 from "../../assets/image/newsletter.jpg";

import { FaUserAlt, FaCouch } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import { dataBanner } from "../../constant";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Carousel from "../../components/carousel/Carousel";
import { getTourDetails, GetCmtTour , getTourImg } from "../../redux/travelSlice";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { HubConnectionBuilder } from "@microsoft/signalr";

function TourDetails(props) {
  const listImg = [img1, img1, img1, img1, img1, img1, img1];
  const [toggler, setToggler] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const role = true;
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const path = useLocation();
  const [dataCategory, setDataCategory] = useState([]);
  const [start, setStart] = useState(0);
  const [connection, setConnection] = useState(null);
  const [receivedData, setReceivedData] = useState("");
  const [dataCmt, setDataCmt] = useState([]);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://192.168.1.2:5001/chat")
      .withAutomaticReconnect()
      .build();
    // connect.on("ReceiveMessage", function (user, message) {
    //   console.log("hello23132131");
    // });
    // const idConnection = connect.connectionId
    // const path = path.pathname.split("/")[2]
    connect.on("GetMessage", ( message ) => {
      // console.log("namdz");
      // console.log("message", message);
      // setReceivedData(message);
    });
    setConnection(connect);
  }, []);
  useEffect(() => {
    if (connection) {
      // console.log("connection", connection);
      connection
        .start()
        .then(() => {
          connection.on("PreviousMessage", (message) => {
            console.log("namdz");
            console.log("message", message);
            setReceivedData(message);
          });
        })
        .catch((error) => console.log(error));
      console.log("hello");
      connection.on("PreviousMessage", (message) => {
        console.log("message", message);
        // setReceivedData(message);
      });
    }
  }, [connection]);
  const sendDataToHub = async () => {
    if (connection) {
      console.log("hello");
      await connection.send("GetMessage", 43, connection.connectionId);
    }
  };

  const getDataDetails = async (value) => {
    try {
      await dispatch(getTourDetails(value))
        .unwrap()
        .then((res) => {
          // console.log(res);
          setData(res.resultObj);
          setValue(res.name);
        });
      await dispatch(getTourImg(value))
        .unwrap()
        .then((res) => {
          console.log(res);
          // setData(res.resultObj);
          // setValue(res.name);
        });
      await dispatch(GetCmtTour(value))
        .unwrap()
        .then((res) => {
          console.log("res", res);
          setDataCmt(res.resultObj);
          // setData(res.resultObj);
          // setValue(res.name);
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
  return (
    <Container className="container">
      <>
        {/* <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button> */}
        <FsLightbox toggler={toggler} sources={[img1, img1, img1]} />
      </>
      <Section1>
        <div className="main1">
          <div className="main__img1">
            <div className="item1">
              <div>
                <img onClick={() => setToggler(!toggler)} src={img1} alt="" />
              </div>
              <div>
                <img onClick={() => setToggler(!toggler)} src={img1} alt="" />
              </div>
            </div>
            <div className="item2">
              <img onClick={() => setToggler(!toggler)} src={img1} alt="" />
            </div>
          </div>
          <div className="main__img2">
            {listImg.slice(0, 4).map((item, index) => {
              if (index === 3) {
                return (
                  <div
                    onClick={() => setToggler(!toggler)}
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ position: "absolute", color: "#fff" }}>
                      +{listImg.length - 4} ảnh
                    </h4>
                    <img src={item} alt="" />
                  </div>
                );
              } else {
                return (
                  <img onClick={() => setToggler(!toggler)} src={item} alt="" />
                );
              }
            })}
          </div>
        </div>
        <div className="main2">
          <div className="form">
            <h5>Thông tin đăng kí</h5>
            <input placeholder="Họ và tên" type="text" name="" id="" />
            <input placeholder="Số điện thoại" type="text" name="" id="" />
            <input placeholder="Số lượng" type="text" name="" id="" />
            <input placeholder="Email" type="text" name="" id="" />
            <textarea
              placeholder="Ghi chú"
              name=""
              id=""
              cols="10"
              rows="10"
            ></textarea>
            <ButtonPatern text={"Gửi yêu cầu"} />
          </div>
        </div>
      </Section1>
      <Section2>
        <h2>Villa Quanh Hà Nội: Morocco Homestay – Tam Đảo</h2>
        <h5>Giá:0</h5>
        <h4>Thông tin khu nghỉ</h4>
        <hr />
        <p>Vị trí: Hiển thị trên bản đồ </p>
        <p>
          Tọa lạc tại thành phố Vĩnh Phúc, Morocco Homestay có hồ bơi ngoài trời
          mở cửa quanh năm và cung cấp chỗ nghỉ với Wi-Fi miễn phí cũng như chỗ
          đỗ xe riêng miễn phí cho những khách lái xe.
        </p>
        <p>
          Mỗi phòng đều có phòng tắm riêng và vòi sen, máy lạnh, TV màn hình
          phẳng và tủ lạnh.
        </p>
        <p>
          Biệt thự phục vụ bữa sáng kiểu Á hàng ngày. Morocco Homestay có sân
          hiên. Chỗ nghỉ có tiện nghi BBQ và sảnh khách chung. Sân bay gần nhất
          là sân bay quốc tế Nội Bài, cách đó 49 km.
        </p>
        <h4>Lịch trình</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Phù hợp cho</th>
              <th scope="col">Loại chỗ nghỉ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <FaUserAlt /> <FaUserAlt />{" "}
              </td>
              <td>
                <b>Biệt Thự 1 Phòng Ngủ Thấp Tầng</b>
                <p>
                  <b>Phòng ngủ 1</b> Giường Đôi lớn <FaCouch />{" "}
                </p>
              </td>
            </tr>
            <tr>
              <td scope="row">
                <FaUserAlt /> <FaUserAlt />{" "}
              </td>
              <td>
                <b>Biệt Thự 1 Phòng Ngủ Thấp Tầng</b>
                <p>
                  <b>Phòng ngủ 1</b> Giường Đôi lớn <FaCouch />{" "}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </Section2>
      <div>
        <button onClick={sendDataToHub}>Send Data to Hub</button>
        <p>Received data: {receivedData}</p>
      </div>
      <div>
        <h3>Đánh giá</h3>
        <Rating
          name="simple-controlled"
          value={start}
          onChange={(event, newValue) => {
            setStart(newValue);
          }}
        />
        <div className="chat">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="outlined-basic"
              label="Tên"
              variant="outlined"
              sx={{ maxWidth: "200px" }}
              size="small"
            />
            <textarea
              placeholder="Nhập comment"
              className="my-3"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <ButtonPatern text={"Gửi"} />
          </form>
        </div>
        {dataCmt.map((item) => (
          <div key={item.id} className="comments">
            <div className="item__cmt">
              <div className="item1">
                <h6>Suy Nam</h6>
                <Rating
                  sx={{
                    fontSize: "16px",
                  }}
                  name="read-only"
                  value={4}
                  readOnly
                />
                <div style={{ color: "#ccc" }}>{item.created_timeStr}</div>
              </div>
              <div className="item2">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
      <Section3>
        <div className="container my-5">
          <h3 className="my-4">Sản phẩm tương tự</h3>
          <Carousel
            width={"16rem"}
            data={dataBanner}
            iconCarousel={<FiChevronRight />}
            options={settings1}
            small
          />
        </div>
      </Section3>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 76px;
  .comments {
    margin-top: 20px;
    .item__cmt {
      display: flex;
      .item1 {
        max-width: 200px;
        min-width: 100px;
      }
    }
  }
  .chat {
    textarea {
      outline: none;
      width: 300px;
      height: 100px;
      &:focus {
        border: 1px solid #117ec2;
      }
    }
  }
`;
const Section3 = styled.div``;
const Section2 = styled.div`
  .table {
    border: 1px solid #eee;
    thead {
      background: #ffd400;
      th {
        border-right: 1px solid #eee;
      }
    }
  }
`;
const Section1 = styled.div`
  gap: 10px;
  display: flex;
  margin-bottom: 40px;
  .main1 {
    flex: 3;
    .main__img1 {
      display: flex;
      gap: 20px;
      .item1 {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        img {
          max-width: 100%;
          cursor: pointer;
        }
      }
      .item2 {
        flex: 2;
        img {
          max-width: 100%;
          cursor: pointer;
        }
      }
    }
    .main__img2 {
      margin: 20px;
      display: flex;
      overflow-x: auto;
      gap: 10px;
      img {
        flex: 1;
        max-width: 200px;
        cursor: pointer;
      }
    }
  }
  .main2 {
    flex: 1;
    .form {
      padding: 20px;
      background: #eee;
      border-radius: 10px;
      input {
        width: 100%;
        margin: 10px 0;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 4px 6px;
      }
      textarea {
        width: 100%;
        height: 80px;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 4px 6px;
      }
    }
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
export default TourDetails;
