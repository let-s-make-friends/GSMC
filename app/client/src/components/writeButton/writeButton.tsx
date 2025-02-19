import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/svg/arrow.svg";
import { Button } from "./styles";

interface WriteButtonProps {
  label: string;
  location: string;
}

const WriteButton = ({ label, location }: WriteButtonProps) => {
  const N = useNavigate();
  return (
    <Button onClick={() => N("/" + location)}>
      {label}
      <img src={Arrow} alt=">" />
    </Button>
  );
};
export default WriteButton;
