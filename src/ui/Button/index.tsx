import styled, { css } from 'styled-components'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary'
}

const ButtonModifiers = {
  sizes: {
    small: () => css`
      height: 3rem;
      font-size: 1.2rem;
      padding: 0.4rem 1.6rem;
    `,

    medium: () => css`
      height: 4rem;
      font-size: 1.4rem;
      padding: 0.8rem 3.2rem;
    `,

    large: () => css`
      height: 5rem;
      font-size: 1.6rem;
      padding: 0.8rem 4.8rem;
    `,
  },

  colors: {
    primary: () => css`
      background-color: var(--color-primary);
      color: var(--color-white);
    `,
  },
}

export const Button = styled.button<ButtonProps>`
  ${({ size = 'medium', color = 'primary' }) => css`
    border: 0;
    border-radius: 100px;
    backface-visibility: hidden;
    cursor: pointer;
    font-family: inherit;

    transition: all .2s;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top:0;
      left:0;
      height: 100%;
      width: 100%;
      background-color: inherit;
      border-radius: 100px;
      z-index: -1;

      transition: all .4s;
    }

    &:hover {
      box-shadow: 0 1rem 2rem rgba(0,0,0, 0.2);
      transform: translateY(-3px);

      &::before {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }

    &:active {
      box-shadow: 0 0.5rem 1rem rgba(0,0,0, 0.2);
      transform: translateY(-1px);
    }

    ${!!color && ButtonModifiers.colors[color]}
    ${!!size && ButtonModifiers.sizes[size]}
  `}
`
