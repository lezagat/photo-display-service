import styled from 'styled-components';

export const GridIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  border-right: 1px solid #656666;
  cursor: pointer;
  height: 32px;
  margin: 4px 11px 4px 0;
  padding-right: 16px;

  > svg {
    fill: white;
    margin: 12% 12%;
  }
`;

export const CloseModalIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  > svg {
    fill:white;
    height: 36px;
    width: 36px;
    margin: 6% 6%;
  }

  :hover {
    background: white;
    cursor: pointer;
    
    > svg {
      fill: rgba(16, 24, 32, 1);
    }
  }
`;

export const PlusIcon = styled.svg`
    fill:white;
    vertical-align: middle;
    margin-left: 3px;
    margin-bottom: 3px;
`;

export const MailIcon = styled.div`
  :hover {
    cursor: pointer;

    > a > svg {
      fill: #b70038;
    }
  }
`;

export const FacebookIcon = styled.div`
  margin: 0px 8px;
  :hover {
    cursor: pointer;

    > a > svg {
      fill: #3b5998;
    }

    ellipse {
      stroke: #3b5998;
    }
  }
`;

export const TwitterIcon = styled.div`
  margin: 0px 8px;
  :hover {
    cursor: pointer;

    > a > svg {
      fill: #1da1f2;
    }
    
    ellipse {
      stroke: #1da1f2;
    }
  }
`;

export const ShowMoreIcon = styled.div`
  margin: 0px 8px; 
  :hover {
    cursor: pointer;

    > svg {
      fill: white;
    }
    
    text {
      fill: #101820;
    }
}
`;
