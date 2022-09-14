import React, { Children, cloneElement } from "react";
import styled from "styled-components";
import {
  md as mdMedia,
  sm as smMedia,
  l as lMedia,
  xl as xlMedia,
  xxl as xxlMedia,
} from "./medias";

const ItemStyled = styled.div`
  position: relative;
  flex-basis: 100%;

  ${({ sm }) => {
    if (sm) {
      return smMedia`
        flex-basis: ${sm}%
      `;
    }
    return "";
  }};

  ${({ md }) => {
    if (md) {
      return mdMedia`
        flex-basis: ${md}%
      `;
    }
    return "";
  }};

  ${({ l }) => {
    if (l) {
      return lMedia`
        flex-basis: ${l}%
      `;
    }
    return "";
  }};

  ${({ xl }) => {
    if (xl) {
      return xlMedia`
        flex-basis: ${xl}%
      `;
    }
    return "";
  }};

  ${({ xxl }) => {
    if (xxl) {
      return xxlMedia`
        flex-basis: ${xxl}% 
      `;
    }
    return "";
  }};
`;

const Item = ({ sm, md, l, xl, xxl, gutter, ...props }) => {
  return (
    <ItemStyled
      sm={sm}
      md={md}
      l={l}
      xl={xl}
      xxl={xxl}
      gutter={gutter}
      {...props}
    />
  );
};

const GridStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${({ gutter }) => gutter});
  margin-left: calc(-1 * ${({ gutter }) => gutter});

  > * {
    box-sizing: border-box;
    padding-left: ${({ gutter }) => gutter};
    padding-top: ${({ gutter }) => gutter};

    width: 100%;
    max-width: 100%;
  }
`;

const Grid = ({ gutter = "0px", children, ...props }) => {
  return (
    <GridStyled {...props} gutter={gutter}>
      {children}
    </GridStyled>
  );
};

Grid.Item = Item;

export default Grid;
