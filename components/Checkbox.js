import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const CheckboxWrapper = styled.div`
  display: inline-grid;
  vertical-align: middle;
  @media (max-width: 480px) {
    margin-left: -10px;
    padding: 10px 0 10px 10px;
  }
`;

const Icon = styled.svg`
  fill: none;
  height: 14px;
  stroke: white;
  stroke-width: 4px;
  width: 14px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const backgroundColor = css`
  ${({ selected, theme }) => {
    if (selected) {
      return theme.colors.textColor;
    }
    return theme.colors.white;
  }}
`;

const focusBorder = css`
  ${({ selected, theme }) => {
    if (selected) {
      return theme.colors.textColor;
    }
    return theme.colors.grey500;
  }}
`;

const StyledCheckbox = styled.div`
  background: ${backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.grey500};
  border-radius: 4px;
  display: inline-grid;
  height: 20px;
  place-items: center;
  transition: all 120ms;
  width: 20px;
  ${HiddenCheckbox} {
    :focus + & {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.textColor};
    }
  }
  ${Icon} {
    visibility: ${(props) => (props.selected ? 'visible' : 'hidden')};
  }
`;

const WrapperLabel = styled.label`
  align-items: center;
  cursor: 'pointer'
  display: flex;
  &:hover ${StyledCheckbox} {
    box-shadow: 0 0 0 1px ${focusBorder};
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  margin-left: 12px;
`;

const Checkbox = (props, ref) => {
  const { name, checked, onChange, children, className, ...rest } = props;

  const changeValue = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      <WrapperLabel htmlFor={name} selected={checked}>
        <CheckboxWrapper>
          <HiddenCheckbox
            id={name}
            name={name}
            checked={checked}
            onChange={changeValue}
            {...rest}
            type="checkbox"
          />
          <StyledCheckbox selected={checked} ref={ref}>
            <Icon data-testid="icon" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxWrapper>
        {children && <Label>{children}</Label>}
      </WrapperLabel>
    </div>
  );
};

export default React.forwardRef(Checkbox);
