import icon1 from '../assets/icon/1.png'
import icon2 from '../assets/icon/2.png'
import icon3 from '../assets/icon/3.png'
import icon4 from '../assets/icon/4.png'
import icon5 from '../assets/icon/5.png'
import icon6 from '../assets/icon/6.png'
import icon7 from '../assets/icon/7.jpg'
import icon8 from '../assets/icon/8.png'
import icon9 from '../assets/icon/9.jpg'
// icon 
import banner1 from '../assets/auto-banner/1.png'
import banner2 from '../assets/auto-banner/2.jpg'
import banner3 from '../assets/auto-banner/3.png'
import banner4 from '../assets/auto-banner/4.png'
import banner5 from '../assets/auto-banner/5.png'
import banner6 from '../assets/auto-banner/6.jpg'
import banner7 from '../assets/auto-banner/7.jpg'

//banner
import carousel1 from '../assets/carousel/1.jpg'
import carousel2 from '../assets/carousel/2.jpg'
import carousel3 from '../assets/carousel/3.jpg'
import carousel4 from '../assets/carousel/4.jpg'
import carousel5 from '../assets/carousel/5.jpg'
//  carousel 
import dashboard1 from '../assets/dashboard/1.png'
import dashboard2 from '../assets/dashboard/2.png'
import dashboard3 from '../assets/dashboard/3.png'
import dashboard4 from '../assets/dashboard/4.png'
import dashboard5 from '../assets/dashboard/5.png'
// ===================
import img1 from '../assets/image/img1.jpg'
import img2 from '../assets/image/img2.jpg'
import img3 from '../assets/image/img3.jpg'
import img4 from '../assets/image/img4.jpg'


export const dataImg = [
    {id:1 , img:img1 , text:'Huế'},
    {id:2 , img:img2 , text:'Nha Trang'},
    {id:3 , img:img3 , text:'Ninh Bình'},
    {id:4 , img:img4 , text:'Sapa'},
]
export const headerData = [
    { id: 109, title: "Trang chủ", path: '/', role: ['1',] },
    { id: 3, title: "Tour", path: '/tour', role: ['1',] },
    { id: 4, title: "Khách sạn", path: '/hotel', role: ["1"] },
    { id: 213, title: "Tin tức", path: '/blog', role: ['1',] },
    { id: 44, title: "Giới thiệu", path: '/intro', role: ['1',] },
    { id: 5, title: "Liên hệ", path: '/connect', role: ['1',] },
]

export const dataHomepage = [
    { id: 1, title: 'Khám chuyên khoa', icon: icon1 },
    { id: 2, title: 'Khám từ xa', icon: icon2 },
    { id: 3, title: 'Khám tổng quát', icon: icon3 },
    { id: 4, title: 'Xét nghiệm y học', icon: icon4 },
    { id: 5, title: 'Sức khỏe tinh thần', icon: icon5 },
    { id: 6, title: 'Khám nha khoa', icon: icon6 },
    { id: 7, title: 'Gói phẫu thuật', icon: icon7 },
    { id: 8, title: 'Sản phẩm y tế', icon: icon8 },
    { id: 9, title: 'Sức khỏe doanh nghiệp', icon: icon9 },
]

export const dataBanner = [
    { id: 1, title: "Miễn phí khám vô sinh hiếm muộn tại Bệnh viện Nam học Hiếm muộn Việt - Bỉ", img: banner1, text: " Some quick example text to build on the card title and make up the  bulk of the card content." },
    { id: 2, title: "Ưu đãi tới 25% gói khám tổng quát tại Bệnh viện Quốc tế City", img: banner2, text: " Some quick example text to build on the card title and make up the  bulk of the card content." },
    { id: 3, title: "Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám", img: banner3, text: " Some quick example text to build on the card title and make up the  bulk of the card content." },
    { id: 4, title: "Điều trị da liễu chỉ từ 99k tại Phòng khám Chuyên khoa Da liễu Maia&Maia", text: " Some quick example text to build on the card title and make up the  bulk of the card content.", img: banner4 },
    { id: 5, title: "Tháng 3 bao la ưu đãi tại Phòng khám Chuyên khoa Da liễu PROSKIN", img: banner5, text: " Some quick example text to build on the card title and make up the  bulk of the card content." },
    { id: 6, title: "Khám mắt miễn phí tại Bệnh viện Mắt kỹ thuật cao Hitec   ", img: banner6, text: " Some quick example text to build on the card title and make up the  bulk of the card content." },
    { id: 7, title: "Trị mụn chuẩn y khoa giá ưu đãi tại Phòng khám Da liễu Hà Nội", img: banner7, text: " Some quick example text to build on the card title and make up the  bulk of the card content." },
]

export const dataCarousel1 = [
    { id: 1, title: 'Tư vấn, trị liệu Tâm lý từ xa', img: carousel1 },
    { id: 2, title: 'Sức khỏe tâm thần từ xa', img: carousel2 },
    { id: 3, title: 'Bác sĩ Da liễu từ xa', img: carousel3 },
    { id: 4, title: 'Bác sĩ Cơ-Xương-Khớp từ xa', img: carousel4 },
    { id: 5, title: 'Bác sĩ Tiêu hóa từ xa', img: carousel5 },
]
export const dataDashboard = [
    { id: 1, title: '', img: dashboard1 },
    { id: 2, title: '', img: dashboard2 },
    { id: 3, title: '', img: dashboard3 },
    { id: 4, title: '', img: dashboard4 },
    { id: 5, title: '', img: dashboard5 },
    { id: 6, title: '', img: dashboard1 },
    { id: 7, title: '', img: dashboard2 },
    { id: 8, title: '', img: dashboard3 },
    { id: 9, title: '', img: dashboard4 },
]
export const dataDepartment = [
    { id: 1, title: 'Cơ Xương Khớp', img: carousel1, path: '/dich-vu/co-xuong-khop' },
    { id: 2, title: 'Thần kinh', img: carousel2, path: '/dich-vu/than-kinh' },
    { id: 3, title: 'Tiêu hoá', img: carousel3, path: '/dich-vu/tieu-hoa' },
    { id: 4, title: 'Tim mạch', img: carousel4, path: '/dich-vu/tim-mach' },
    { id: 5, title: 'Tai mũi họng', img: carousel5, path: '/dich-vu/tai-mui-hong' },
    { id: 6, title: 'Cột sống ', img: carousel2, path: '/dich-vu/cot-song ' },
    { id: 7, title: 'Y học cổ chuyền', img: carousel1, path: '/dich-vu/y-hoc-co-chuyen' },
]
export const dataBreadCrumbs = [
    { id: 1, path: '/dich-vu', title: 'Dịch vụ', childs: dataDepartment }
]