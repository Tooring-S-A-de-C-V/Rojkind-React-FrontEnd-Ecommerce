import Head from "next/head";
import Link from "next/link";
import GithubCorner from "./GithubCorner";
import Footer from '../shared/Footer/footer';
import Search from './globalSearch';
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>POST Up</title>
      </Head>
      <div className="col-md-12">
       <span className="d-inline-block" style={{color:"white"}}><h2 className="heading">PostUp</h2></span>
        <div className="col-md-6 try d-inline-block">
          {/* <span className="a133_780">Try artist, date, genre or venue</span> */}
          <Search />
        </div>
        <div className="col-md-6 shows">
          <span className="a133_812">Shows</span>
          <span className="a133_813">Editorial</span>
          <div className="a133_835">
            <span className="">💖</span><span style={{ color: "white" }}> Saved</span>
          </div>
        </div>
        {/* <Link href="/">
          <a>Movies</a>
        </Link>
        <Link href="/people">
          <a>People</a>
        </Link> */}
      </div>
      {/* <GithubCorner /> */}
      <div id="main">{props.children}</div>
      <footer>
        <Footer />
        {/* <a href="http://sanity.io">
          <img src="/sanity-logo.svg" alt="Sanity Logo" />
        </a>
        +
        <a href="https://github.com/zeit/next.js" alt="NextJs Logo" >
          <img
            className="next"
            src="/nextjs-logo.svg"
          />
        </a>
        = 💖 */}
      </footer>
      <style jsx>{`
        footer {
          padding: 5rem 1rem;
          text-align: center;
          font-size: 2rem;
        }
        .shows{
          display:block;
          left:60%;
          margin-top: -2%;
        }
        .try{
          display:block;
          left:7%;
          color:white;
        }
        .heading{
          left: 17%;
          position: relative;
        }
        footer img {
          display: inline-block;
          height: 1em;
          width: auto;
          padding: 0 0.4em;
        }

        nav {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #1c1c1c;
          font-size: 1rem;
          height: 3.5rem;
        }

        nav a {
          flex-grow: 1;
          color: #fff;
          text-decoration: none;
          text-align: center;
        }
        .a144_92 {
          width: 271px;
          height: 29px;
          background: url("../images/a144_92.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 8%;
          left: 0px;
          overflow: hidden;
        }

        .a133_811 {
          width: 15px;
          height: 21px;
          background: url("../images/a133_811.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 14px;
          left: 0px;
          transform: rotate(-45deg);
          overflow: hidden;
        }
        .a133_780 {
          width: 242px;
          color: rgba(255,255,255,1);
          position: absolute;
          top: 0px;
          left: 29px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 0.4000000059604645;
          text-align: left;
        }
        .a135_24 {
          width: 250px;
          height: 31px;
          background: url("../images/a135_24.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: -5%;
          right: -30%;
          overflow: hidden;
        }
        
        .a133_812 {
          width: 52px;
          color: rgba(241,87,58,1);
          position: relative;
          top: 0px;
          left: 0px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 1;
          text-align: right;
        } 

        .a133_813 {
          width: 64px;
          color: rgba(255,255,255,1);
          position: absolute;
          top: 0px;
          left: 82px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 1;
          text-align: right;
        }

        .a133_835 {
          width: 74px;
          height: 29px;
          background: url("../images/a133_835.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 0px;
          left: 176px;
          overflow: hidden;
        }
        .a133_814 {
          width: 50px;
          color: rgba(255,255,255,1);
          position: absolute;
          top: 0px;
          left: 25px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 1;
          text-align: right;
          padding-left:10px;
        }
        .MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth{
          display:d-inline-block:
        }
      `}</style>
      <style jsx global>{`
        body {
          background-color:#1c1c1c;
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 3.5rem 0 0;
        }
      `}</style>
    </div>
  );
}
