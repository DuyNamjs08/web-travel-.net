import Pages from '../page/index'
const TRANG_CHU = "/"
const TOUR = "/tour"
const HOTEL = "/hotel"
const BLOG = "/blog"
const CONNECT= "/connect"
const INTRO = "/intro"
const BENH_NHAN = "/benh-nhan"
const DON_THUOC = "/don-thuoc"



const RouterWeb = [
    { id: 1, path: TRANG_CHU, role: ['1', '2', '3'], component: <Pages.Homepage /> },
    {
        id: 2, path: TOUR, component: <Pages.TourTotal />,
        role: ['1', '2', '3'],
        child: [
            {
                path: '',
                component: <Pages.Tour />,
            },
            {
                path: ':id',
                component: <Pages.TourDetails />,
            },
        ],
    },
    {
        id: 3, path: HOTEL, role: ['1', '2', '3'], component: <Pages.HotelTotal />, child: [
            {
                path: '',
                component: <Pages.Hotel />,
            },
            {
                path: ':id',
                component: <Pages.HotelDetails />,
            },
        ],
    },
    {
        id: 4, path: BLOG, role: ['1', '2'], component: <Pages.BillTotals />, child: [
            {
                path: '',
                component: <Pages.Blog />,
            },
            {
                path: ':id',
                component: <Pages.BlogDetails />,
            },
        ],
    },
    {
        id: 5, path: CONNECT, role: ['1', '2'], component: <Pages.Connect />,
        // child: [
        //     {
        //         path: '',
        //         component: <Pages.ManagerDoctor />,
        //     },
        //     {
        //         path: ':id',
        //         component: <Pages.ViewDoctor />,
        //     },
        // ],
    },
    {
        id: 6, path: INTRO, role: ['1',], component: <Pages.Intro />,
        // child: [
        //     {
        //         path: '',
        //         component: <Pages.ExaminationPackage />,
        //     },
        //     {
        //         path: ':id',
        //         component: <Pages.ViewAccount />,
        //     },
        // ],
    },
    { id: 7, role: ['1', '2'], path: BENH_NHAN, component: <Pages.Support /> },
    { id: 8, path: DON_THUOC, role: ['3'], component: <Pages.Pamacy /> },
]

export default RouterWeb