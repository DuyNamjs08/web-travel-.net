import styled from "styled-components";
import SearchInput from "../../components/search/SearchInput";
import img1 from "../../assets/image/scaled.jpg";
import img2 from "../../assets/image/5252692-724x1024.jpg";
import { Link } from "react-router-dom";
import TruncatedText from "../../components/truncated-text/TruncatedText";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlog } from "../../redux/travelSlice";
const lisst = [
  { id: 1, title: " Mách bạn top 10 Resort ngắm hoàng hôn cực chấ tại Phú Quốc " },
  { id: 2, title: "Du lịch Huế nên đi đâu ? Cùng Box Travel “Unbox” 17 điểm đến thú vị sau đây." },
  { id: 3, title: "Top 25 điểm đến du lịch nổi tiếng nhất thế giới do TripAdvisor bình chọn  " },
  { id: 4, title: "Top 10 điểm đến nhất định phải ghé khi tới Ninh Bình" },
  { id: 5, title: "Khám phá Bình Thuận cùng các cảnh đẹp và món ăn ngon vô cùng hấp dẫn! " },
  { id: 6, title: "20 Món ngon không nên bỏ lỡ khi du lịch Vũng Tàu " },
];
const blogPost = [
  {
    img: img1,
    date: "2022-03-15",
    title: "10 tips to improve your productivity",
    id: 1,
    description:
      "In this blog post, we will explore 10 practical tips to help you be more productive and get more done in less time. From time management techniques to software tools, we've got you covered.",
  },
  {
    img: img1,
    title: "The benefits of yoga for mental health",
    id: 2,
    date: "2022-03-15",
    description:
      "In this blog post, we will discuss the many benefits of practicing yoga for your mental health. From reducing stress and anxiety to improving focus and concentration, you will learn how yoga can help you achieve a more balanced and peaceful state of mind.",
  },
  {
    img: img1,
    title: "How to start a successful online business",
    id: 3,
    date: "2022-03-15",
    description:
      "In this blog post, we will share our top tips for starting a successful online business. From choosing the right niche to building a strong brand, you will learn everything you need to know to get your business up and running and thriving.",
  },
  {
    img: img1,
    title: "The power of positive thinking",
    id: 4,
    date: "2022-03-15",
    description:
      "In this blog post, we will explore the science behind the power of positive thinking and how it can transform your life. From boosting your mood and increasing your resilience to enhancing your relationships and improving your physical health, you will learn how to harness the power of positivity to live your best life.",
  },
  {
    img: img1,
    title: "The art of effective communication",
    id: 5,
    date: "2022-03-15",
    description:
      "In this blog post, we will delve into the art of effective communication and how it can help you build better relationships, advance your career, and achieve your goals. From active listening to nonverbal cues, you will learn the key skills and strategies for communicating effectively in any situation.",
  },
];

function Blog(props) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const role = true;
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleGetdata = async () => {
    setLoading(true);
    try {
      await dispatch(getBlog({ token }))
        .unwrap()
        .then((res) => {
          console.log("res", res.data);
          setData(res?.data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    // if (token) {
      handleGetdata();
    // }
  }, [token, active]);
  return (
    <Container className="container">
      <Section1>
        <h3>Tin tức</h3>
        <p>
          "Du lịch là thứ duy nhất bạn bỏ tiền ra mua nhưng lại khiến bạn trở
          nên giàu có hơn"
        </p>
      </Section1>
      <Section2>
        <div className="main1">
          <div className="mb-2">
            {/* <SearchInput /> */}
          </div>
          <div className="list">
            {data.slice(0,10).map((item) => (
              <div className="item" key={item.id}>
                {item.title}
              </div>
            ))}
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="main2">
          <div className="main">
            {data.length > 0
              ? data.map((item) => (
                  <div className="post">
                    <div className="item1">
                      <h5>{item.title}</h5>
                      <p>
                        <TruncatedText text={item.content} maxLength={30} />
                      </p>
                      <Link to={`/blog/${item.id}`}>
                        <StyleButton>Xem chi tiết</StyleButton>
                      </Link>
                      <p>{item?.created_timeStr}</p>
                    </div>
                    <div className="item2">
                      <img src={item?.img} alt="picture blog" />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </Section2>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 76px;
`;
const Section2 = styled.div`
  display: flex;
  padding: 40px 0;
  .main1 {
    flex: 1;
    .list {
      img{
        margin-top: 20px;
        padding: 0 10px;
        width: 100%;
      }
      padding: 16px 0;
      .item {
        font-size: 16px;
        min-height: 30px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .main2 {
    flex: 3;
    .main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      .post {
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 8px;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 10px;
        .item1 {
          flex: 1;
        }
        .item2 {
          flex: 1;
          display: flex;
          justify-content: center;
          img {
            height: 240px;
            width: 90%;
            border-radius: 6px;
            object-fit: cover;
            transition: all ease-in-out 0.5s;
            &:hover {
              scale: 0.9;
            }
          }
        }
      }
    }
  }
`;
const StyleButton = styled.button`
  outline: none;
  border: none;
  background: #0c134f;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: #0a4d68;
  }
`;
const StyleButton2 = styled.button`
  outline: none;
  border: none;
  background: #e76161;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: #e48f8f;
  }
`;
const Section1 = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

export default Blog;

;