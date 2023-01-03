import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import {
  Container,
  Form,
  Button,
  InputGroup,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Prog from "../components/Prog";
import styles from "./Home.module.css";
import artist from "./home_img/artist.png";
import engineering from "./home_img/engineering.png";
import book from "./home_img/book.png";
import future from "./home_img/future.png";

const Home = () => {
  const uri = "http://localhost:3000/data/dummy.json";
  // const [loading, setLoading] = useState(true);
  const [progs, setProgs] = useState([]);
  const getProgs = async () => {
    const json = await (await fetch(uri)).json();
    // console.log(json);
    setProgs(json);
    // setLoading(false);
  };
  useEffect(() => {
    getProgs();
  }, []);
  return (
    <Layout>
      <Container className="p-5">
        <Row className="mt-2 mb-5">
          <Col
            sm={9}
            className="d-flex align-items-center pe-5 ps-5 border border-5 border-primary rounded"
            // style={{border: " 4mm ridge", borderColor: "#001f99"}}
          >
            <div
              className="btn btn-outline-primary border border-3 border-primary"
              type="button"
              style={{ margin: 25, color: "#f3969a"}}
            >
              <img src={artist} alt="예술"></img>
              예술
            </div>
            <div
              className="btn btn-outline-primary border border-3 border-primary"
              type="button"
              style={{ margin: 25, color: "#f3969a" }}
            >
              <img src={engineering} alt="공학"></img>
              공학
            </div>
            <div
              className="btn btn-outline-primary border border-3 border-primary"
              type="button"
              style={{ margin: 25, color: "#f3969a" }}
            >
              <img src={book} alt="문학"></img>
              문학
            </div>
            <div
              className="btn btn-outline-primary border border-3 border-primary"
              type="button"
              style={{ margin: 25, color: "#f3969a" }}
            >
              <img src={future} alt="진로"></img>
              진로
            </div>
          </Col>
          <Col sm={3} className={styles.user_info}>
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Header className="d-flex justify-content-between">
                <span style={{ color: "black", fontWeight: "600" }}>
                  내 정보
                </span>
                {/* <Button
                  size="sm"
                  style={{
                    zIndex: 0,
                    width: "25%",
                    height: "100%",
                    fontSize: "10px",
                    background: "grey",
                    border: "0",
                  }}
                >
                  로그아웃
                </Button> */}
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title
                  className="d-flex justify-content-between"
                  style={{ fontSize: "15px", fontWeight: "600" }}
                >
                  <span className="align-self-center">
                    <span style={{ color: "black", fontWeight: "600" }}>
                      오찬근
                    </span>
                    님 | 컴퓨터공학부
                  </span>
                </Card.Title>
                <Card.Subtitle style={{ fontSize: "14px" }}>
                  1891239
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <span className="mt-4">
                  <Link 
                    style={{ color: "black",
                             padding: "10px",
                             borderRadius: "20px",
                             background: "rgba(243, 150, 154, 0.5"
                             }} to={`/mypage`}>
                    마이페이지
                  </Link>
                  <Button 
                  size="sm"
                  style={{
                    float:"right",
                    zIndex: 0,
                    width: "30%",
                    height: "150%",
                    fontSize: "15px",
                    background: "grey",
                    border: "0",
                  }}
                >
                  로그아웃
                </Button>

                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <InputGroup className="p-0">
            <Form.Control placeholder="비교과 프로그램" style={{height: "45px"}}/>
            <Button variant="primary">검 색</Button>
          </InputGroup>
        </Row>

        <Row bsPrefix={styles.progs_container}>
          <div className={styles.progs}>
            {progs.map((prog) => (
              <Prog
                key={prog.index}
                id={prog.index}
                progImg={prog.picture}
                title={prog.title}
                company={prog.company}
                date={prog.registered}
              />
            ))}
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
