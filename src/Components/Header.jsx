import HeaderFoot from "./HeaderFoot";

function Header() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.toggle("add");
  }
  return (
    <header>
      <div className="manu-bar-mobile">
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="header-left-part">
              <div className="header-logo">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="h-icon1"
                >
                  <path
                    d="M35.0451 5.95494C31.1824 2.12446 26.0966 0 20.6566 0C15.2167 0 10.1309 2.12446 6.26823 5.95494C3.27467 8.9485 1.31115 12.7468 0.602994 16.8348C0.538616 17.2532 0.474238 17.6717 0.442049 18.0901C0.40986 18.5086 0.377671 18.927 0.345482 19.3455C0.313293 19.6674 0.313293 20.0215 0.313293 20.3433V23.1116V24.367V25.6223V40.7189H15.4099H16.6652H17.9206C17.9528 40.3648 17.9528 40.0429 17.9528 39.6888V36.9528H16.6974H4.07939V25.5901V23.1116V20.3755C4.07939 20.0215 4.07939 19.6996 4.11158 19.3455C4.14377 18.927 4.17595 18.5086 4.24033 18.0901C4.30471 17.6717 4.36909 17.2532 4.46565 16.8348C5.14162 13.6803 6.75106 10.8476 8.9399 8.62661C11.9335 5.63305 16.0858 3.76609 20.6566 3.76609C29.7983 3.76609 37.2339 11.2017 37.2339 20.3433C37.2339 24.9142 35.3669 29.0665 32.3734 32.0601C30.1524 34.2811 27.3197 35.8584 24.1652 36.5343V36.8884V39.6567C24.1652 39.9142 24.1652 40.1395 24.1652 40.397C28.2532 39.6888 32.0515 37.7253 35.0451 34.7318C38.8755 30.9013 41 25.7833 41 20.3433C41 14.9034 38.8755 9.78541 35.0451 5.95494Z"
                    fill="#F7654A"
                  />
                </svg>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  id="h-icon2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0794 4.07939H24.3348H25.5901H36.9528V15.442V16.6974V17.9528V20.6888C36.9528 21.0429 36.9528 21.3648 36.9206 21.7189C36.8884 22.1373 36.8562 22.5558 36.7919 22.9742C36.7275 23.3927 36.6631 23.8111 36.5665 24.2296C35.8906 27.3841 34.2811 30.2167 32.0923 32.4378C29.0987 35.4313 24.9464 37.2983 20.3755 37.2983C11.2339 37.2983 3.79828 29.8626 3.79828 20.721C3.79828 16.1502 5.66524 11.9978 8.6588 9.00428C10.8798 6.78325 13.7124 5.206 16.867 4.53003V1.40771C16.867 1.1502 16.867 0.924881 16.867 0.66737C12.779 1.37552 8.98069 3.33904 5.98713 6.33261C2.12446 10.0987 0 15.2167 0 20.6566C0 26.0966 2.12446 31.1824 5.95494 35.0451C9.78541 38.8755 14.9034 41 20.3433 41C25.7833 41 30.8691 38.8755 34.7318 35.0451C38.3369 31.4399 40.4292 26.7081 40.6545 21.6545C40.6545 21.4936 40.6545 21.3326 40.6867 21.1717C40.6867 21.0751 40.6867 21.0107 40.6867 20.9142C40.6867 20.8176 40.6867 20.7532 40.6867 20.6566V17.8884V0.313293H25.5901H24.3348H23.0794C23.0472 0.667371 23.0472 0.989259 23.0472 1.34334L23.0794 4.07939Z"
                    fill="#F7654A"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="header-right-part">
              <div className="manu-bar">
                <a href="#" onClick={hiddenManu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                  >
                    <path
                      fill="white"
                      d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="header-texts">
              <div className="header-text1-flex">
                <div className="header-text1">
                  РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ
                </div>
              </div>
              <div className="header-text2">
                стадионы, газопроводы, мосты, дамбы
              </div>
            </div>
          </div>
        </div>
        <div className="header-footer">
          <div className="row">
            <div className="col-lg-3 ">
              <HeaderFoot />
            </div>
            <div className="col-lg-3 ">
              <HeaderFoot />
            </div>
            <div className="col-lg-3 ">
              <HeaderFoot />
            </div>
            <div className="col-lg-3 ">
              <HeaderFoot />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
