import styled from "styled-components";

interface ContainerImgProps {
  type: "column" | "row";
}

export const ContainerImg = styled.div<ContainerImgProps>`
  width: ${(props) => (props.type === "row" ? "60%" : "100%")};
  height: ${(props) => (props.type === "row" ? "100%" : "50%")};
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
