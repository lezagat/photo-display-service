import styled from 'styled-components';

const OpenGridBox = styled.div`
    position: absolute;
    background-color: rgba(16,24,32,0.75);
    height: 40px;
    padding-right: 10px;
    padding-left: 16px;
    right: 40px;
    top: calc(50% - 15px);
    color: white;
    font: 12px/40px 'Calibre-Medium', sans-serif;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    z-index: 1;

    :hover {
      background-color: #101820;
      cursor: pointer;
    }
`;

export default OpenGridBox;
