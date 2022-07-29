import movie from "../assets/img/brunner.jpg";
import styled from "styled-components";

export default function Footer({ posterUrl, title, sessionDay, sessionHour }) {
  return (
    <FooterS>
      {sessionDay ? (
        <FooterContent2>
          <img src={posterUrl} />
          <div>
            <h2>{title} </h2>
            <h4>
              {sessionDay} - {sessionHour}
            </h4>
          </div>
        </FooterContent2>
      ) : (
        <FooterContent>
          <img src={posterUrl} />
          <h2>{title} </h2>
        </FooterContent>
      )}
    </FooterS>
  );
}

const FooterS = styled.div`
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  width: 100%;
  height: 100px;
  display: flex;
  align-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const FooterContent2 = styled.div`
  height: 100%;
  padding: 10px 10px;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 80px;
    object-fit: cover;
    border: 7px solid white;
  }
  div h2 {
    font-weight: 300;
    font-size: 24px;
    margin-left: 15px;
  }
  div h4 {
    font-weight: 300;
    font-size: 24px;
    margin-left: 15px;
  }
`;

const FooterContent = styled.div`
  height: 100%;
  padding: 10px 10px;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 80px;
    object-fit: cover;
    border: 7px solid white;
  }
  h2 {
    font-weight: 300;
    font-size: 24px;
    margin-left: 15px;
  }
`;
