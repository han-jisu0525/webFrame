import { Container, Col, Row } from "react-bootstrap";
import Layout from "../layouts/Layout";
import { React, useState, useEffect } from "react";
import MyProg from "../components/MyProg";
import { FaCoins } from "react-icons/fa";

const MyPage = () => {
  const standby = "standby"; // 대기 문자열
  const progress = "progress"; // 진행 문자열
  const end = "end"; // 종료 문자열
  const uri = "http://localhost:3000/data/dummy.json"; // 테스트를 위한 더미 데이터
  const [myProgs, setMyProgs] = useState([]); // 더미 데이터를 받아오는 state
  const [progState, setProgState] = useState(standby); // 대기, 진행, 종료 분류를 위한 state ( 초기 화면의 경우 대기이기에 standby로 초기화 )
  const getmyprogs = async () => {
    const json = await (await fetch(uri)).json();
    console.log(json);
    setMyProgs(json); // 데이터를 받아와 myProgs에 저장
    // setLoading(false);
  };
  useEffect(() => {
    getmyprogs(); // 데이터 획득
  }, []);
  const filterdMyProgs = myProgs.filter((prog) => prog.state === progState); // 대기, 진행, 종료에 따라 분류한 배열
  let myProgIndex = filterdMyProgs.length; // 내림차순 인덱스를 위해 필터링 된 배열의 길이 저장

  return (
    <Layout>
      <Container className="p-5">
        <Row
          className="border border-dark"
          style={{
            minHeight: "180px",
            width: "75%",
            fontSize: "12px",
            display: "flex",
          }}
        >
          <Col className="d-flex flex-column border border-top-0 border-bottom-0 border-start-0 border-dark justify-content-between  p-4">
            <Row style={{ height: "75%" }}>
              <Col className="align-self-center">
                <FaCoins size={"5em"} />
              </Col>
              <Col className="align-self-center">
                <span style={{ color: "black", fontSize: "30px" }}>100</span>
              </Col>
            </Row>
            <Row className="align-self-center">
              <span style={{ color: "black" }}>
                이번 학기 취득 비교과 포인트
              </span>
            </Row>
          </Col>
          <Col className="d-flex flex-column border border-top-0 border-bottom-0 border-start-0 border-dark justify-content-between  p-4">
            <Row style={{ height: "75%" }}>
              <Col className="align-self-center">
                <FaCoins size={"5em"} />
              </Col>
              <Col className="align-self-center">
                <span style={{ color: "black", fontSize: "30px" }}>100</span>
              </Col>
            </Row>
            <Row className="align-self-center">
              <span style={{ color: "black" }}>
                지난 학기 이월 비교과 포인트
              </span>
            </Row>
          </Col>
          <Col className="d-flex flex-column border border-top-0 border-bottom-0 border-start-0 border-dark justify-content-between  p-4">
            <Row style={{ height: "75%" }}>
              <Col className="align-self-center">
                <FaCoins size={"5em"} />
              </Col>
              <Col className="align-self-center">
                <span style={{ color: "black", fontSize: "30px" }}>100</span>
              </Col>
            </Row>
            <Row className="align-self-center">
              <span style={{ color: "black" }}>
                다음 학기 이월 비교과 포인트
              </span>
            </Row>
          </Col>
          <Col className="d-flex flex-column justify-content-between p-4">
            <Row style={{ height: "75%" }}>
              <Col className="align-self-center">
                <FaCoins size={"5em"} />
              </Col>
              <Col className="align-self-center">
                <span style={{ color: "black", fontSize: "30px" }}>100</span>
              </Col>
            </Row>
            <Row className="align-self-center">
              <span style={{ color: "black" }}>전체 누적 포인트</span>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex mt-4" style={{ minHeight: "70px" }}>
          <Col
            type="button"
            style={
              progState === standby ? { color: "black", fontWeight: "600" } : {}
            }
            className="p-0 d-flex justify-content-center align-items-center border border-start-0 border-dark"
            onClick={() => setProgState(standby)} // 클릭 시 대기 상태로 변경
          >
            <span className="pb-2">대기</span>
          </Col>
          <Col
            type="button"
            style={
              progState === progress
                ? { color: "black", fontWeight: "600" }
                : {}
            }
            className="p-0 d-flex justify-content-center align-items-center border border-start-0 border-dark"
            onClick={() => setProgState(progress)} // 클릭 시 진행 상태로 변경
          >
            <span className="pb-2">진행</span>
          </Col>
          <Col
            type="button"
            style={
              progState === end ? { color: "black", fontWeight: "600" } : {}
            }
            className="p-0 d-flex justify-content-center align-items-center border border-start-0 border-end-0 border-dark"
            onClick={() => setProgState(end)} // 클릭 시 종료 상태로 변경
          >
            <span className="pb-2">종료</span>
          </Col>
        </Row>
        <Row // 표의 헤더를 작성하는 Row
          className="mt-2 border border-dark border-start-0 border-end-0 border-bottom-0"
          style={{
            height: "70px",
            background: "#001F99",
            color: "white",
            fontWeight: "600",
          }}
        >
          <Col
            className="d-flex justify-content-center align-items-center border"
            sm="1"
          >
            <span>번호</span>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center border"
            sm="5"
          >
            <span>프로그램명</span>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center border"
            sm="2"
          >
            <span>포인트</span>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center border"
            sm="2"
          >
            <span>상태</span>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center border"
            sm="2"
          >
            <span>비고</span>
          </Col>
        </Row>
        <Row className="d-flex flex-column">
          <div>
            {filterdMyProgs.map((myProg) => (
              <MyProg // 필터링된 프로그램 배열의 각 오브젝트에 대해 MyProg 생성
                key={myProg.index}
                number={myProgIndex--} // 번호는 내림차순으로
                name={myProg.title} // 프로그램 제목
                point={myProg.point} // 프로그램 포인트
                state={myProg.state} // 프로그램 상태
                cancel={myProg.state === standby ? false : true} // 대기 상태가 아니라면 신청 취소 버튼 비활성화
              />
            ))}
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default MyPage;
