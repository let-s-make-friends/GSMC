import * as S from "./styles";

interface InputProps {
  label: string,
  placeholder?: string
}

const Input = ({ label, placeholder = "" }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input type="text" placeholder={placeholder} />
    </S.InputWrapper>
  );
};
export default Input;