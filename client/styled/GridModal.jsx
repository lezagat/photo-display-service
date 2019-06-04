import styled from 'styled-components';

export const GridViewer = styled.div`
  @keyframes zoomOut {
    from {
      opacity: 1;
      }

      50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
      }

      to {
      opacity: 0;
      }
  }

  height: calc(100vh - 76px - 20px);
  width: 96%;
  margin: 1% 2%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2px;
  animation-name: ${props => (props.handleExit ? 'zoomOut' : 'none')};
  animation-duration: 0.3s;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-corner {
    background:transparent;
  }
`;

export const GridModalPhoto = styled.div`
  height: 31vw;
  width: 31vw;
  position: relative;
  overflow: hidden;
  margin: 2px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  ::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.15);
    transition: all 0.4s;
  }

  :hover {
    ::before {
      opacity: 1;
      z-index: 1;
      cursor: pointer;
    }
    > img {
      transform: scale(1.015);
      transition: all 0.4s;
    }
  }

`;
