import * as S from "./styles";

interface DefaultButtonProps {
  label: string,
  active: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DefaultButton = ({ label, active, onClick }: DefaultButtonProps) => {
  return (
    <S.Button onClick={onClick} $isActive={active} >
      <S.Label $isActive={active}>{label}</S.Label>
    </S.Button >
  );
};
export default DefaultButton;