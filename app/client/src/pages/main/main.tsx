import Header from "../../components/header/header";
import WriteButton from "../../components/writeButton/writeButton";
import PFA from "../../assets/img/PFA.png";
import * as S from "./styles";
import Rank from "../../components/rank/rank";

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.SmallWrapper>
          <div>
            <S.Title>랭킹</S.Title>
            <Rank />
          </div>
          <div>
            <S.Title>작성</S.Title>
            <S.ButtonWrapper>
              <WriteButton label="활동 영역 작성" location="/write" />
              <WriteButton label="독서 영역 작성" location="/writeBook" />
            </S.ButtonWrapper>
          </div>
        </S.SmallWrapper>
        <img src={PFA} alt="PFA" />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
