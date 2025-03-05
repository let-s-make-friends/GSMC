import * as S from "./styles";

interface DefaultButtonProps {
  label: string,
  active: boolean,
  fullW?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DefaultButton = ({ label, active, fullW = false, onClick }: DefaultButtonProps) => {
  return (
    <S.Button onClick={onClick} isActive={active} isFull={fullW} >
      <S.Label isActive={active}>{label}</S.Label>
    </S.Button >
  );
};
export default DefaultButton;