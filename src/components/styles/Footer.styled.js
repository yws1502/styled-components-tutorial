import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
    li {
      margin-bottom: 20px;
    }
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`