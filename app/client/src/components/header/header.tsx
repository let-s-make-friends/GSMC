import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Title>GSM 인증제</S.Title>
      <S.Nav>
        <li>점수 계산 해보기</li>
        <li>예시 보기</li>
        <li>팀소개</li>
      </S.Nav>
      <S.Profile>배경진</S.Profile>
    </S.Header>
  );
};

export default Header;
