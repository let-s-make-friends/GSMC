import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
  const go = useNavigate();
  return (
    <S.Header>
      <S.Title onClick={() => go("/main")}>GSMC</S.Title>
      <S.Nav>
        <li>점수 계산 해보기</li>
        <li>예시 보기</li>
        <li>팀소개</li>
      </S.Nav>
      <S.Profile onClick={() => go("/profile")}>배경진</S.Profile>
    </S.Header>
  );
};

export default Header;
