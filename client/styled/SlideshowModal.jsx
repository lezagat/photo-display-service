import styled from 'styled-components';

export const SlideshowViewIndex = styled.span`
  font: 15px/24px 'Calibre-Regular', sans-serif;
  letter-spacing: .013em;
  color: white;
  margin-right: 20px;
`;

export const SlideshowViewer = styled.div`
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

  height: calc(100vh - 76px - 92px - 20px);
  padding: 10px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  animation-name: ${props => (props.handleExit ? 'zoomOut' : 'none')};
  animation-duration: 0.3s;

  > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const SlideshowFooter = styled.div`
  width: 100%;
  height: 52px;
`;

export const SlideshowSeparator = styled.div`
  border-bottom: 1px white solid;
  border-top: 1px white solid;
  height: 2px;
  margin-bottom: 8px;
  margin-top: 16px;
  margin-left: 40px;
  width: 32px;
`;

export const SlideshowUserAvatar = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  margin-left: 40px;
  margin-right: 12px;
  vertical-align: middle;
`;

export const SlideshowUserName = styled.div`
  display: inline-block;
  color: white;
  font: 15px/24px 'Calibre-Regular', sans-serif;
  letter-spacing: 0.013em ;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: left;
`;
