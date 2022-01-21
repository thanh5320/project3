import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styles from "./footerPage.module.css";


const FooterPage = () => {
  return (
    <div className={styles.main}>
      <MDBFooter color="cyan" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">TP BOOKING</h5>
              <p>
                Lựa chọn khách sạn online, nhanh chóng, tiện lợi, an tâm cho bạn!
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Tác giả</h5>
              <ul>
                <li className="list-unstyled">
                  <p href="#!">Nguyễn Văn Thanh</p>
                </li>
                <li className="list-unstyled">
                  <p href="#!">Trần Ngọc Phiên</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {(new Date().getFullYear())+1-1 } Copyright:{" "}
            <a href="bachkhoahanoi"> bachkhoahanoi </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
