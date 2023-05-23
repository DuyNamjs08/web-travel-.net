import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgImg from "../../assets/image/Cao-Bang-3_dd3eb.jpg";
import bgImg1 from "../../assets/image/newsletter.jpg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import ButtonPatern from "../../components/button/ButtonPatern";
function Intro(props) {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 36) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount === 68) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 60);
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount === 1128) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 1);
    setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount3((prevCount) => {
        if (prevCount === 17) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div style={{ marginTop: "76px" }}></div>
      <Banner img={bgImg}>
        <h2>Giới thiệu</h2>
      </Banner>
      <Container>
        <h2>Giới thiệu</h2>
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
      </Container>
      <Section img={bgImg1}>
        <h3>Vài điều thú vị về chúng tôi</h3>
        <h6>CÙNG KHÁM PHÁ</h6>
        <div className="main">
          <div>
            <h1>{count}</h1>
            <div>Du lịch miền núi</div>
          </div>
          <div>
            <h1>{count1}</h1>
            <div>Du lịch biển đảo</div>
          </div>
          <div>
            <h1>{count2}</h1>
            <div>Hình ảnh feedback</div>
          </div>
          <div>
            <h1>{count3}</h1>
            <div>Du lịch du thuyền</div>
          </div>
        </div>
      </Section>
      <Section1>
        <h3>Các dịch vụ chúng tôi cung cấp</h3>
        <p>CÙNG KHÁM PHÁ</p>
        <div className="main">
          <div>
            <h5>Chuyến đi</h5>
            <p>
              Với kinh nghiệm tổ chức du lịch lâu năm của đội ngũ nhân sự, Box
              team đã và đang có hơn 1000 sản phẩm du lịch đa dạng trải dài khắp
              nơi trên đất nước Việt Nam
            </p>
          </div>
          <div>
            <h5>Chuyến đi</h5>
            <p>
              Với kinh nghiệm tổ chức du lịch lâu năm của đội ngũ nhân sự, Box
              team đã và đang có hơn 1000 sản phẩm du lịch đa dạng trải dài khắp
              nơi trên đất nước Việt Nam
            </p>
          </div>
          <div>
            <h5>Chuyến đi</h5>
            <p>
              Với kinh nghiệm tổ chức du lịch lâu năm của đội ngũ nhân sự, Box
              team đã và đang có hơn 1000 sản phẩm du lịch đa dạng trải dài khắp
              nơi trên đất nước Việt Nam
            </p>
          </div>
        </div>
      </Section1>
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
`;

export default Intro;
