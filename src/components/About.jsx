import { useNavigate } from "react-router";

const About = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <p>아래버튼을 누르면 HOme으로 돌아갑니다.</p>
      <button
        onClick={() => {
          Navigate("/");
        }}
      >
        Home으로 가기
      </button>
    </div>
  );
};

export default About;
