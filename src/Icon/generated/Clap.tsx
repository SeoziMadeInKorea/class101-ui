import * as React from 'react';

import { IconProps } from '..';

export default class SvgClap extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.126 5.855a.986.986 0 011.466-.09c.315.31.647.636.832.82l5.585 5.587 1.263-3.51a1 1 0 01.94-.662h1.797v7a2 2 0 01-.585 1.414l-6 6a2 2 0 01-2.829 0l-7-7a2 2 0 01-.25-2.523l4-6c.154-.23.477-.65.78-1.036z"
          fill={this.props.fillColor}
        />
        <path
          d="M20.033 6.996V6h-2.306a1 1 0 00-.941.662l-.777 1.725 1.419 1.418.835-2.167a1 1 0 01.93-.64l.84-.002zM7.37 5.492L7.81 6l-4.146 6.256a3 3 0 00.38 3.778L9.509 21.5a2.121 2.121 0 01-3 0L2.32 17.31a4.5 4.5 0 01-.563-5.678L5.78 5.592a1 1 0 011.588-.1zM8 .5L8.5 4 6 2 8 .5zM10 .5V4l2-3-2-.5zM13.5 2l-2 2.5 3-.5-1-2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
