import { css } from 'styled-components';

export const zoomIn = css`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

export const zoomOut = css`
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
`;
