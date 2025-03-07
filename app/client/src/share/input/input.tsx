import * as S from "./styles";

interface InputProps {
  type?: "email" | "password" | "text",
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Input = ({ type, placeholder = "", onClick, onChange }: InputProps) => {
  return (
    <S.Input type={type} placeholder={placeholder} onClick={onClick} onChange={onChange} />
  );
};
export default Input;