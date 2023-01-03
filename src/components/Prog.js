import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Prog({ id, progImg, title, name, date }) {
  return (
    <Card style={{ width: "17rem", height: "24rem" }}>
      {/* 이미지 클릭 시 해당하는 id의 상세 페이지로 이동 */}
      <Link to={`/prog/${id}`}>
        <Card.Img variant="top" src={progImg} alt={title} />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Link
            to={`/prog/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title style={{ fontSize: "16px", fontWeight: "600" }}>
              {title}
            </Card.Title>
          </Link>
          <Card.Subtitle style={{ fontSize: "12px" }}>
            운영 : {date}
          </Card.Subtitle>
        </div>
        <div>
          <div className="d-flex flex-column align-items-end">
            <p className="mb-1" style={{ fontSize: "10px" }}>
              신청 마감 : 2022/11/06
            </p>
            <Button
              className="d-flex justify-content-center align-items-center mask flex-center"
              style={{ width: "100%", height: "24px", fontSize: "14px" }}
            >
              간편 신청
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ fontSize: "14px" }}>#온라인 #개인</p>
            <p style={{ fontSize: "14px" }}>D-5</p>
          </div>
        </div>
      </Card.Body>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ background: "aliceblue", minHeight: "20px" }}
      >
        <hr
          style={{
            width: "90%",
            margin: "0",
            borderTop: "5px solid red",
          }}
        />
      </div>
    </Card>
  );
}

export default Prog;
