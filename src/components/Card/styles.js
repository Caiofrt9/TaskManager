import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 1px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 10px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    display: flex;
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
    padding: 5px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }
`

export const Label = styled.span`
  width: 20px;
  height: 5px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`
