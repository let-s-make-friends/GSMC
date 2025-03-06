import PFA from "../../assets/img/PFA.png";
import { Header, Rank, WriteButton } from "../../components";
import * as S from "./styles";

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
              <WriteButton label="활동 영역 작성" location="write" />
              <WriteButton label="독서 영역 작성" location="writeBook" />
            </S.ButtonWrapper>
          </div>
        </S.SmallWrapper>
        <img src={PFA} alt="PFA" />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
