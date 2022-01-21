import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function HomeHeader() {
  const { infos } = useSelector((state) => state.userReducer);
  return (
    <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarToggler
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <MDBNavbarNav right className="mb-2 mb-lg-0">
            <MDBNavbarItem active>
              <MDBNavbarLink aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">0967648120</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Hợp tác với chúng tôi</MDBNavbarLink>
            </MDBNavbarItem>
            {!infos.isLogin && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">Đăng nhập</MDBNavbarLink>
              </MDBNavbarItem>
            )}
            {!infos.isLogin && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/signup">Đăng ký</MDBNavbarLink>
              </MDBNavbarItem>
            )}
            {infos.isLogin && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/account/info">Tài Khoản</MDBNavbarLink>
              </MDBNavbarItem>
            )}

            <MDBNavbarItem>
              <MDBNavbarLink href="#">Về chúng tôi</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </div>
      </MDBContainer>
    </MDBNavbar>
    // <header>
    //   <MDBNavbar expand="lg" light bgColor="white">
    //     <MDBContainer fluid>
    //       <MDBNavbarToggler
    //         aria-controls="navbarExample01"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <MDBIcon fas icon="bars" />
    //       </MDBNavbarToggler>
    //       <div className="collapse navbar-collapse" id="navbarExample01">
    //         <MDBNavbarNav right className="mb-2 mb-lg-0">
    //           <MDBNavbarItem active>
    //             <MDBNavbarLink aria-current="page" href="/">
    //               Home
    //             </MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href="#">0967648120</MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href="#">Hợp tác với chúng tôi</MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href="/login">Đăng nhập</MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href="/signup">Đăng ký</MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href="#">Về chúng tôi</MDBNavbarLink>
    //           </MDBNavbarItem>
    //         </MDBNavbarNav>
    //       </div>
    //     </MDBContainer>
    //   </MDBNavbar>

    //   <div
    //     id="intro-example"
    //     className="p-5 text-center bg-image"
    //     style={{
    //       backgroundImage:
    //         "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
    //     }}
    //   >
    //     <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
    //       <div className="d-flex justify-content-center align-items-center h-100">
    //         <div className="text-white">
    //           <h1 className="mb-3">Dự đoán giá nhà</h1>
    //           <h5 className="mb-4">
    //             Chính xác, nhanh chóng, tiện lợi, an tâm khi mua nhà!!!
    //           </h5>
    //           <Link to="/predict">
    //           <p
    //             className="btn btn-outline-light btn-lg m-2"
    //             role="button"
    //             rel="nofollow"
    //           >
    //             Dự đoán
    //           </p>
    //           </Link>

    //           <Link to="/dashboard">
    //           <p
    //             className="btn btn-outline-light btn-lg m-2"
    //             role="button"
    //           >
    //             Phân tích, thống kê
    //           </p>
    //           </Link>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
