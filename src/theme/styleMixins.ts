interface ISizeMixin {
  width: number | string,
  height: number | string,
}

export const sizeMixin = (value: number | string): ISizeMixin => ({
  width: value,
  height: value,
});

export const betweenChildrenMixin = (value: any) => ({
  '& > *': {
    '&:not(:last-child)': {
      ...value,
    },
  },
});

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
