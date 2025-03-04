import * as S from "./styles";

interface InputProps {
  label: string,
  type?: "email" | "password" | "text",
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Input = ({ label, type, placeholder = "", onClick, onChange }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input type={type} placeholder={placeholder} onClick={onClick} onChange={onChange} />
    </S.InputWrapper>
  );
};
export default Input;