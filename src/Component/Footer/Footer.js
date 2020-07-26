import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-wrapper">
          <div className="footer-header">
            <div className="header-content-wrapper">
              <div className="header-flex-left">
                <div className="header-left-text">론위즐리 이야기</div>
                <div className="header-left-text">개인정보처리방침</div>
                <div className="header-left-text">이용안내</div>
                <div className="header-left-text">사업자 정보확인</div>
                <div className="header-left-text">이용약관</div>
              </div>
              <div className="header-flex-right">
                <div className="header-title-login">
                  <div className="header-title-login">로그인</div>
                </div>
                <div className="header-title-link">고객센터</div>
                <div className="header-title-link">대량구매</div>
                <div className="header-title-link">인재채용</div>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="pc-flex">
              <div className="pc-footer">
                <div className="info">
                  <p className="info-bold"> 주식회사 론위즐리컴퍼니</p>
                  <p className="info-text">
                    서울특별시 성동구 왕십리로 125, 8층(성수동1가, KD타워),
                    대표자: 김동욱
                  </p>
                  <p className="info-text">
                    사업자등록번호: 344-88-00965, 통신사판매업신고번호:
                    2019-서울성동-01739
                  </p>
                  <p className="info-text">
                    개인정보보호책임자: 천민기(mkchon@wiselyshave.com),
                    전화번호: 1833-9133 E-mail: help@wiselyshave.com
                  </p>
                  <p className="info-text-margin-top">
                    고객님은 안전하게 거래를 위해 현금 등으로 결제 시 저희
                    쇼핑몰에서 가입한 나이스페이먼츠(주)의 구매안전서비스를
                    이용하실 수 있습니다. &nbsp;
                    <span className="underline-service-certification">
                      서비스가입사실 확인
                    </span>
                  </p>
                  <p className="info-text">
                    와이즐리는 서비스 품질 보증을 위하여 개인정보배상책임보험 과
                    생산물 피해보상보험에 가입하였습니다.
                  </p>
                </div>
                <div className="sns-logo">
                  <div className="facebook">
                    <img
                      alt="facebook"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/facebook.svg"
                    />
                  </div>
                  <div className="instagram">
                    <img
                      alt="instagram"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/instagram.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="copyright">
                Copyright ©2020 &nbsp;
                <span className="text-bold">WISELY.</span> All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
