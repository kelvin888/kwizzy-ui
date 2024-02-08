import React from 'react';

type IconSize = 'sm' | 'md' | 'lg' | 'xl' | 'inherit' | number;

interface UpdatedFontAwesomeIconProps extends Partial<any> {
  icon?: any
}

export type IconProps = {
  icon: any;
  iconProps?: UpdatedFontAwesomeIconProps;
  size?: IconSize;
  withoutBoundary?: boolean;
} & any;

const GRID_SIZE = 4;

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ size = 'md', withoutBoundary, icon, iconProps, ...props }, ref) => {
    if (size === 'inherit') {
      return (
        <span ref={ref} {...props}>
          {icon}
        </span>
      );
    }

    const fontSize = getFontSize(size);
    const boundarySize = withoutBoundary ? fontSize : fontSize + GRID_SIZE;

    return (
      <div
        is="span"
        ref={ref}
        display="inline-flex"
        width={boundarySize}
        height={boundarySize}
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        {icon}
      </div>
    );
  },
);

function getFontSize(size: Exclude<IconSize, 'inherit'>) {
  switch (size) {
    case 'sm':
      return GRID_SIZE * 3;
    case 'md':
      return GRID_SIZE * 4;
    case 'lg':
      return GRID_SIZE * 5;
    case 'xl':
      return GRID_SIZE * 6;
    default:
      return size;
  }
}

Icon.displayName = "Icon"

export default Icon;
