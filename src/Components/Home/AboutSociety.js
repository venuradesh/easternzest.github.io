import React, { useEffect } from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Society = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    tl.fromTo(".logo-eastern-waves", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
    tl.fromTo(".waves-text", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });

    tl2.fromTo(".logo-eastern-zest", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
    tl2.fromTo(".zest-text", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });

    ScrollTrigger.create({
      animation: tl,
      scrub: true,
      trigger: ".eastern-waves",
      start: "top 90%",
      end: "bottom 60%",
    });

    ScrollTrigger.create({
      animation: tl2,
      trigger: ".eastern-zest",
      scrub: true,
      start: "top 90%",
      end: "bottom 70%",
    });
  }, []);

  return (
    <Container>
      <div className="eastern-waves" id="eastern-waves">
        <div className="logo logo-eastern-waves">
          <img src="/images/eastern-waves-logo.png" alt="eastern waves logo" />
        </div>
        <div className="text-container waves-text">
          <div className="title">Eastern Waves</div>
          <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea in voluptatem aperiam incidunt neque nobis exercitationem? Facilis, labore vero architecto at porro veniam ab adipisci quia officia eius, quae nihil voluptatem consequatur expedita suscipit pariatur molestias aspernatur molestiae. Voluptate, magnam?</div>
          <div className="btn-container">
            <div className="learn-more btn">Learn More</div>
            <div className="learn-more btn">
              <FacebookOutlinedIcon />
              <a href="https://www.facebook.com/estwaves">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <div className="eastern-zest">
        <div className="logo logo-eastern-zest" id="eastern-zest">
          <img src="/images/eastern-zest-logo-black.png" alt="Eastern zest logo" />
        </div>
        <div className="text-container zest-text">
          <div className="title">Eastern Waves Zest</div>
          <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea in voluptatem aperiam incidunt neque nobis exercitationem? Facilis, labore vero architecto at porro veniam ab adipisci quia officia eius, quae nihil voluptatem consequatur expedita suscipit pariatur molestias aspernatur molestiae. Voluptate, magnam?</div>
          <div className="btn-container">
            <div className="learn-more btn">Learn More</div>
            <div className="learn-more btn">
              <FacebookOutlinedIcon />
              <a href="https://www.facebook.com/ewzest">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Society;

const Container = styled.div`
  padding: 80px 200px;
  display: flex;
  flex-direction: column;
  row-gap: 130px;
  box-sizing:border-box;
  max-width: 100vw;
  overflow:hidden;

  .eastern-waves, .eastern-zest {
    display: flex;
    justify-content:space-between;

    .logo {
      flex-1;
      width: 40%;
      display:flex;
      justify-content:center;
      align-items:center;

      img{
        max-width: 500px;
      }
    }

    .text-container{
      flex:1;
      display:flex;
      max-width: 50%;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      .title{
        font-size: 2rem;
        font-weight: 700;
        text-transform:uppercase;
        color: var(--txt-dark-clr);
        margin-bottom:20px;
        text-align:center;
      }

      .desc{
        font-size:1rem;
        color:#262A3A;
        margin-bottom:20px;
        font-weight: 500;
        text-align:center;
      }
    }

    .btn-container{
      display:flex; 
      column-gap:30px;
      margin-top:10px;

      .btn{
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        width: 200px;
        padding:0px 10px;
        text-transform:uppercase;
        height: 50px;
        font-size:0.8rem;
        font-weight: 700;
        background-color:var( --bg-dark-clr );
        color:var(--bg-white-clr);
        cursor:pointer;
        transition:all 0.3s ease-in-out;

        a{
          text-decoration:none;
          color: var(--bg-white-clr);
        }

        &:hover{
          background-color:var(--bg-light-clr);
        }
      }
    }
  }

  .eastern-zest{
    flex-direction:row-reverse;

    .logo{
      img{
        max-width: 300px;
      }
    }
  }

  @media only screen and (max-width: 1350px){
    .eastern-waves{
      .logo{
        img{
          max-width: 400px;
        }
      }
    }

    .eastern-zest{
      .logo{
        img{
          max-width: 250px;
        }
      }
    }
  }

  @media only screen and (max-width: 1280px){
    .eastern-waves, .eastern-zest{
      .logo{
        img{
          max-width: 300px;
        }
      }

      .text-container{
        .title{
          font-size:1.5rem;
        }

        .desc{
          font-size:0.8rem;
        }

        .btn-container{
          .btn{
            width: 130px;
          }
        }
      }
    }

    .eastern-zest{
      .logo{
        img{
          max-width: 250px
        }
      }
    }
  }

  @media only screen and (max-width: 1080px){
    padding: 80px 100px;
  }

  @media only screen and (max-width: 900px){
    padding: 80px 50px;
    row-gap: 100px;

    .eastern-waves{
      .logo{
        img{
          max-width: 250px;
        }
      }
    }

    .eastern-zest{
      .logo{
        img{
          max-width: 200px;
        }
      }
    }
  }

  @media only screen and (max-width: 700px){

    .eastern-waves{
      .logo{
        width: 30%;

        img{
          max-width: 200px;
        }
      }

      .text-container{
        max-width: 60%;
      }
    }

    .eastern-zest{
      .logo{
        width: 30%;

        img{
          max-width: 150px;
        }
      }

      .text-container{
        max-width: 60%;
      }
    }
  }

  @media only screen and (max-width: 580px){
    padding:40px 0;
    
    .eastern-waves, .eastern-zest{
      flex-direction:column;
      align-items:center;
      max-width: 70vw;
      margin:0 auto;

      .logo{
        margin:0 auto;
        margin-bottom:20px;
      }

      .text-container{
        margin: 0 auto;
        width: 50vw;

        .title{
          width: 50vw;
        }

        .desc{
          width: 50vw;
        }

        .btn-container{
          .btn{
            font-size:0.7rem;
            width: 110px;
            height: 40px;
            padding: 0 10px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 420px){
    padding: 80px 20px;
    row-gap:80px;

    .eastern-waves, .eastern-zest{

      .text-container{

        .title{
          width: calc(100vw - 40px);
        }

        .desc{
          width: calc(100vw - 40px);
        }

        .btn-container{
          .btn{
            font-size:0.7rem;
            width: 110px;
            height: 40px;
            padding: 0 10px;
          }
        }
      }
    }
  }
`;
