import { useNavigate } from "react-router-dom";

const HelloWorld = () => {
    const navigate = useNavigate();

  return (
    <>
      <div>Hello world</div>
      <button onClick={() => navigate("/hi")}>Go to say hi</button>
    </>
  );
};
export default HelloWorld;
