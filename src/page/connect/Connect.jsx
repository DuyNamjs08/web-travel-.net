import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgImg from "../../assets/image/cau-vang-da-nang.jpg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import ButtonPatern from "../../components/button/ButtonPatern";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import {PostMail } from "../../redux/travelSlice";
import { toast } from "react-toastify";

function Connect(props) {

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
  const onSubmitHandler = async(value) => {
    setLoading(true);
    try {
      await dispatch(PostMail({...value ,  token }))
        .unwrap()
        .then((res) => {
          console.log("res", res.data);
          setLoading(false);
          toast.success("Gửi mail thành công")
        });
    } catch (error) {
      setLoading(false);
      toast.error("Có lỗi xảy ra")
    }
    reset()
  }
  
  return (
    <>
      <div style={{ marginTop: "76px" }}></div>
      <Banner img={bgImg}>
        <h2>Liên Hệ</h2>
      </Banner>
      <Container className="container">
        <div className="main1">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form">
              <h3>Để lại lời nhắn</h3>
              <div>
                <input  {...register("name_register")} placeholder="Họ tên" type="text" />
                <p style={{display:'block' , color: "red" }}>{errors.name_register?.message}</p>
                <input  {...register("email_register")} placeholder="Email" type="text" />
                <p style={{ color: "red" }}>{errors.email_register?.message}</p>
              </div>
              <div className="my-2">
                <input  {...register("address_register")} placeholder="Địa chỉ" type="text" />
                <p style={{ color: "red" }}>{errors.address_register?.message}</p>
                <input  {...register("phone_register")} placeholder="Phone" type="text" />
                <p style={{ color: "red" }}>{errors.phone_register?.message}</p>
              </div>
              <ButtonPatern type={'submit'} text={"Gửi"} />
            </div>
          </form>
        </div>
        <div className="main2">
          <h3>Liên hệ với chúng tôi</h3>
          <h6>Công ty cổ phần Thương mại và Dịch vụ Box Travel</h6>
          <p>Số ĐKKD: 0108915757</p>
          <p>Do Sở kế hoạch và đầu tư thành phố Hà Nội Cấp ngày 25/9/2019</p>
          <p>Địa chỉ: 66 Hàng Buồm, Hoàn Kiếm, Hà Nội</p>
          <p>Hotline: 082 888 5757</p>
          <p>Email: contact@boxtravelvn.com</p>
          <h3>Trang xã hội</h3>
          <div className="icon">
            <div className="icon1">
              <FaFacebookSquare />
            </div>
            <div className="icon2">
              <FaInstagram />
            </div>
            <div className="icon3">
              <FaYoutube />
            </div>
          </div>
          <h3>Giờ mở cửa</h3>
          <p>Thứ 2 đến Chủ Nhật 9:00 – 22:00</p>
        </div>
      </Container>
      <Section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.09237878556!2d105.77762377417058!3d21.028989387772732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cfde86451%3A0x60a850064c8ac759!2zMTggVMO0biBUaOG6pXQgVGh1eeG6v3QsIEThu4tjaCBW4buNbmcgSOG6rXUsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1684746806741!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
    </>
  );
}
const Section = styled.div`
  margin: 40px 0;
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
  display: flex;
  padding: 0 100px;
  gap: 20px;
  .main1 {
    flex: 1;
    .form {
      div {
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
        input {
          flex: 1;
          outline: none;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          border: 1px solid #ddd;
          padding: 4px 6px;
          max-width: 240px;
        }
      }
    }
  }
  .main2 {
    flex: 1;
    h3 {
      margin-bottom: 16px;
    }
    .icon {
      display: flex;
      gap: 1rem;
      align-items: center;
      .icon1 {
        background: #3a589d;
      }
      .icon2 {
        background: #3b6994;
      }
      .icon3 {
        background: #c33223;
      }
      div {
        height: 40px;
        width: 40px;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 18px;
        color: #fff;
      }
    }
  }
`;

export default Connect;
