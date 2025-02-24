import * as S from "./styles";
import { useNavigate } from "react-router-dom";

interface DefaultButtonProps {
  label: string,
  location: string,
  active: boolean
}

const DefaultButton = ({ label, location, active }: DefaultButtonProps) => {
  const N = useNavigate();
  return (
    <S.Button onClick={() => N("/" + location)} $isActive={active} >
      <S.Label $isActive={active}>{label}</S.Label>
    </S.Button >
  );
};
export default DefaultButton;