import { inject, observer } from 'mobx-react';
import * as React from 'react';
import * as ReactModal from 'react-modal';
import styled from 'styled-components';

const StyledLeftBar = styled(ReactModal)<IStyledLeftBarProps>`
  background-color: #eeeeee;
  height: 100%;
  outline: none;
  overflow: scroll;
  padding: 0;
  position: absolute;
  width: 300px;
  z-index: 1000;
  margin-left: ${(props) => props.isOpen ? '0' : '-300'}px;
`;

export const CloseButton = styled.div`
  background-color: red;
  background-size: 45px auto;
  border: 0;
  height: 45px;
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  z-index: 1000;
`;


@inject('leftBarStore')
@observer
export default class LeftBar extends React.Component<ILeftBarProps, {}> {
    public render() {
        return (
            <StyledLeftBar 
                style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                }}
                isOpen={this.props.leftBarStore.isOpen} 
            >
                <h2>11111</h2>
            </StyledLeftBar>
        )
    }
}

interface ILeftBarProps {
    leftBarStore?: any
  }

interface IStyledLeftBarProps {
    isOpen: boolean
} 