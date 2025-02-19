import { useEffect } from "react";
import { Container } from "./styles";
import RankMember from "../rankMember/rankMember";

const Rank = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <RankMember />
      <RankMember />
      <RankMember />
      <RankMember />
      <RankMember />
    </Container>
  );
};

export default Rank;
