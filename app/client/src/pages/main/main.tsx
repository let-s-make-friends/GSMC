import Header from "../../components/header/header";
import WriteButton from "../../components/writeButton/writeButton";
import PFA from "../../assets/img/PFA.png";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <div>
          <div>
            <S.Title>랭킹</S.Title>
          </div>
          <div>
            <S.Title>작성</S.Title>
            <WriteButton label="활동 영역 작성" location="/write" />
            <WriteButton label="독서 영역 작성" location="/writeBook" />
          </div>
        </div>
        <img src={PFA} alt="PFA" />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
