import styled from 'styled-components';

export const ButtonBar = styled.div`
  position: absolute;
  right: 0px;
  top: 20px;
  z-index: 10;
`;

const slideButton = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 46%;
  text-align: center;
  border-radius: 50%;

  > svg {
    fill: white;
    height: 100%;
    width: 100%;
  }

  :hover {
    background:rgba(16,24,32,0.95); 
    cursor: pointer;
  }
`;

export const PrevSlideBtn = styled(slideButton)`
  left: 40px;
`;

export const NextSlideBtn = styled(slideButton)`
  right: 40px;
`;
