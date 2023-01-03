import React from "react";
import Layout from "../layouts/Layout";
import { Container, Col, Row, Button, Badge } from "react-bootstrap";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import up from "./up.png";
import boogie from "./boogie_2.png";

function Detail() {
  const { id } = useParams(); // 전달받은 id 획득
  const uri = `http://localhost:3000/data/dummy_detail${id}.json`; // 해당 id의 상세 정보를 담고 있는 더미 json
  const [prog, setProg] = useState({});
  const getProg = async () => {
    const json = await (await fetch(uri)).json();
    console.log(json);
    setProg(json);
  };
  useEffect(() => {
    getProg();
  }, []);

  const [favbtn, setFavbtn] = useState(false);
  return (
    <Layout>
      <div className={styles.container}>
        <Container className="d-grid">
          <Row className="d-flex justify-content-end mb-3">
            <FaStar
              className="d-flex justify-content-end align-items-center p-0"
              style={{ width: "30px", height: "30px" }}
              color={favbtn ? "gold" : "grey"}
              onClick={() => {
                setFavbtn((prev) => !prev);
              }}
            />
          </Row>
          <Row>
            <Col sm={6}>
              <img
                src={prog.main_img}
                alt="Images"
                className={styles.prog_img}
              />
            </Col>
            <Col sm={5} className="d-flex flex-column justify-content-between">
              <div>
                <h4>{prog.title}</h4>
                <p>
                  접수중 {prog.apply_current}명 / {prog.apply_capacity}명
                </p>
              </div>
              <div>
                <p>신청 : {prog.apply_period} </p>
                <p>운영 : {prog.operate_period}</p>
                <p>장소 : {prog.location}</p>
                </div>
                <Button style={{ width: "100%", height: "40px" }}>
                  신청하기
                </Button>
            </Col>
            <Col sm={1} className="d-flex flex-column pe-0">
              <div>
                <Badge style={{ width: "100%" }}>{prog.hits} hits</Badge>
                <Badge
                  className="mt-2"
                  bg="warning"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  P {prog.point}

                </Badge>                
              </div>
              <div className="d-flex align-items-end flex-column">
              <img className="mt-5 p-2" src={boogie}></img>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>세부 내용</h5>
            <hr />
            <div>
              <img
                src={prog.detail_img}
                alt="detail img"
                style={{ width: "100%" }}
              />
              <p>{prog.detail_contents}</p>
            </div>
          </Row>
          <Row className="mt-5">
            {/* 게시자 정보 표현 형식 고안 필요 */}
            <div>
              <p>
                학술정보관 학술정보팀 ebagil@hansung.ac.kr 02-760-5663
                학술정보관
              </p>
            </div>
          </Row>
        </Container>
      </div>
      <div style={{
                width:"50px", height: "50px",
                boxShadow:"2px 2px", borderRadius: "50%", display: "block",
                position: "fixed", bottom: "50px", right: "30px"}}>
        <a href="#"><img src={up}></img></a>
      </div>
    </Layout>
  );
}

export default Detail;
