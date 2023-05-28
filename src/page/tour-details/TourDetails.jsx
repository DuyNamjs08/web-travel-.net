import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ButtonPatern from "../../components/button/ButtonPatern";
import img1 from "../../assets/image/newsletter.jpg";

import { FaUserAlt, FaCouch } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import { dataBanner } from "../../constant";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Carousel from "../../components/carousel/Carousel";
import {
  getTourDetails,
  GetCmtTour,
  getTour,
  getTourImg,
  getListImg,
} from "../../redux/travelSlice";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import * as yup from "yup";
import { PostMailTour } from "../../redux/travelSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactHtmlParser from "react-html-parser";
import _ from "lodash";

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
  const [dataRelease, setDataRelease] = useState([]);
  const [listImgs, setListImgs] = useState([]);
  const [valueCmt, setValueCmt] = useState("");
  const [newCmt, setNewCmt] = useState([]);


  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://192.168.1.3:5001/chat")
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => console.log("Connection started!"))
        .catch((err) => console.log("Error while establishing connection :("));

      connection.on("SendMessage", function (id_tour, messageSend, starCount) {
        // const newObject = {
        //   id: newCmt.length + 1,
        //   content: messageSend,
        //   star: starCount,
        // };
        // setNewCmt([...newCmt, newObject]);
      });
    }
  }, [connection]);
  console.log("newCmt", newCmt);
  const sendDataToHub = async (e) => {
    e.preventDefault();
    if (connection) {
      if (!valueCmt || !start) {
        return toast.warning("Bạn cần điền field");
      }
      await connection.send(
        "SendMessage",
        +path.pathname.split("/")[2],
        valueCmt,
        start
      );
      const newObject = {
        id: newCmt.length + 1,
        content: valueCmt,
        star: start,
      };
      const arr = [...newCmt, newObject].reverse()
      setNewCmt(arr);
      setValueCmt("");
      setStart(0);
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
      await dispatch(getTour({}))
        .unwrap()
        .then((res) => {
          console.log("res", res.data);
          setDataRelease(res?.data);
        });
      await dispatch(
        getListImg({ type: "tour", id: path.pathname.split("/")[2], token })
      )
        .unwrap()
        .then((res) => {
          // console.log(res);
          setListImgs(res.data);
        });
      await dispatch(GetCmtTour(value))
        .unwrap()
        .then((res) => {
          console.log("res", res);
          setDataCmt(res.resultObj.reverse());
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
  const schema = yup.object().shape({
    name_register: yup.string().required(),
    address_register: yup.string().required(),
    phone_register: yup.string().required(),
    email_register: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (value) => {
    setLoading(true);
    try {
      await dispatch(
        PostMailTour({ ...value, token, id_tour: path.pathname.split("/")[2] })
      )
        .unwrap()
        .then((res) => {
          console.log("res", res.data);
          setLoading(false);
          toast.success("Gửi mail thành công");
        });
    } catch (error) {
      setLoading(false);
      toast.error("Có lỗi xảy ra");
    }
    reset();
  };
  const handleView = () => {};
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
                <img
                  onClick={() => setToggler(!toggler)}
                  src={listImgs[0]?.img_src}
                  alt="img"
                />
              </div>
              <div>
                <img
                  onClick={() => setToggler(!toggler)}
                  src={listImgs[1]?.img_src}
                  alt="img"
                />
              </div>
            </div>
            <div className="item2">
              <img
                onClick={() => setToggler(!toggler)}
                src={listImgs[2]?.img_src}
                alt="img"
              />
            </div>
          </div>
          <div className="main__img2">
            {listImgs?.slice(0, 4)?.map((item, index) => {
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
                    <img src={item?.img_src} alt="img" />
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
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form">
              <h5>Thông tin đăng kí</h5>
              <input
                {...register("name_register")}
                placeholder="Họ tên"
                type="text"
              />
              <p style={{ display: "block", color: "red" }}>
                {errors.name_register?.message}
              </p>
              <input
                {...register("email_register")}
                placeholder="Email"
                type="text"
              />
              <p style={{ color: "red" }}>{errors.email_register?.message}</p>
              <input
                {...register("address_register")}
                placeholder="Địa chỉ"
                type="text"
              />
              <p style={{ color: "red" }}>{errors.address_register?.message}</p>
              <input
                {...register("phone_register")}
                placeholder="Phone"
                type="text"
              />
              <p style={{ color: "red" }}>{errors.phone_register?.message}</p>
              <ButtonPatern type={"submit"} text={"Gửi yêu cầu"} />
            </div>
          </form>
        </div>
      </Section1>
      <div>
        <h2 className="my-3">{data?.name}</h2>
        <img src={data?.background_image} alt="tour" />
        <h5 className="my-3">Thông tin</h5>
        <p> {ReactHtmlParser(data?.infor)}</p>
        <h5 className="my-3">Giới thiệu</h5>
        <p> {ReactHtmlParser(data?.intro)}</p>
        <h5 className="my-3">Giá {data?.price}</h5>
        <h5 className="my-3">Chính sách</h5>
        <p> {ReactHtmlParser(data?.policy)}</p>
        <h5 className="my-3">Lịch trình</h5>
        <p> {ReactHtmlParser(data?.schedule)}</p>
        <h5 className="my-3">Chú ý</h5>
        <p> {ReactHtmlParser(data?.note)}</p>
        <h5 className="my-3">Bảo hiểm</h5>
        <p> {ReactHtmlParser(data?.isurance)}</p>
        <h5 className="my-3">Hướng dẫn viên</h5>
        <p> {ReactHtmlParser(data?.tour_guide)}</p>
        <h6 className="my-3">Thời gian update : {data?.created_timeStr}</h6>
      </div>
      {/* <Section2>
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
      </Section2> */}
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
            <textarea
              placeholder="Nhập comment"
              className="my-3"
              name=""
              id=""
              cols="30"
              rows="10"
              value={valueCmt}
              onChange={(e) => {
                setValueCmt(e.target.value);
              }}
            ></textarea>
            {/* <ButtonPatern text={"Gửi"} /> */}
            <button
              onClick={sendDataToHub}
              style={{
                border: "none",
                width: "60px",
                background: "#ffd400",
                color: "white",
              }}
            >
              Gửi
            </button>
          </form>
        </div>
        {newCmt.reverse().slice(0, 6).map((item) => (
          <div key={item.id} className="comments">
            <div className="item__cmt">
              <div className="item1">
                <h6>Anonymous</h6>
                <Rating
                  sx={{
                    fontSize: "16px",
                  }}
                  name="read-only"
                  value={4}
                  readOnly
                />
                <div style={{ color: "#ccc" }}>{item?.created_timeStr}</div>
              </div>
              <div className="item2">{item?.content}</div>
            </div>
          </div>
        ))}
        {dataCmt.slice(0, 6).map((item) => (
          <div key={item.id} className="comments">
            <div className="item__cmt">
              <div className="item1">
                <h6>Anonymous</h6>
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
            data={dataRelease}
            iconCarousel={<FiChevronRight />}
            options={settings1}
            small
            path="tour"
            handleView={handleView}
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
