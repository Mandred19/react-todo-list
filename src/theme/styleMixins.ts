import {hexToRgb} from '../utils';

interface ISizeMixin {
  width: number | string,
  height: number | string,
}

export const sizeMixin = (value: number | string): ISizeMixin => ({
  width: value,
  height: value,
});

type stylesContentValueInputType = { [key: string]: string | number };

interface IBetweenChildrenMixinOutput {
  [key: string]: {
    [key: string]: stylesContentValueInputType,
  },
}

export const betweenChildrenMixin = (value: stylesContentValueInputType): IBetweenChildrenMixinOutput => ({
  '& > *': {
    '&:not(:last-child)': {
      ...value,
    },
  },
});

interface IBreakpointMixinOutput {
  [key: string]: stylesContentValueInputType,
}

export const breakpointMixin = (min: number, max: number, content: any): IBreakpointMixinOutput => {
  if (max === 0) {
    return {
      [`@media only screen and (min-width: ${min + 1}px)`]: {
        ...content,
      },
    };
  }
  return {
    [`@media only screen and (min-width: ${min}px) and (max-width: ${max - 1}px)`]: {
      ...content,
    },
  };
};

interface IFlexLayoutMixin {
  display: string,
  alignItems: string,
  justifyContent: string,
}

export const flexLayoutMixin = (alignItems = 'center', justifyContent = 'center'): IFlexLayoutMixin => ({
  display: 'flex',
  alignItems,
  justifyContent,
});

export const oneLineTextMixin = () => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
});

export const customScrollBarMixin = (hex: string) => {
  const {r, g, b} = hexToRgb(hex);

  return {
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 8,
      background: `rgba(${r}, ${g}, ${b}, 0.15)`,
      margin: 0,
    },
    '&::-webkit-scrollbar-button:vertical:decrement': {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      height: 8,
    },
    '&::-webkit-scrollbar-button:vertical:increment': {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      height: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      minHeight: 32,
      background: '#999',
      borderRadius: 2,
      backgroundClip: 'content-box',
    },
    '-webkit-overflow-scrolling': 'touch',
  };
};
