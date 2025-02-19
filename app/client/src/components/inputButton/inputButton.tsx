import * as S from "./styles";

interface InputButtonProps {
  label: string
}

const InputButton = ({ label }: InputButtonProps) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input type="text" />
    </S.InputWrapper>
  );
};
export default InputButton;