import React, { PropTypes } from 'react';

import CustomPropTypes from './util/propTypes';
import { dataText } from './util/dataHelpers';

class DropdownListInput extends React.Component {
  static propTypes = {
    value: PropTypes.any,
    placeholder: PropTypes.string,
    textField: CustomPropTypes.accessor,
    valueField: PropTypes.string,
    valueComponent: CustomPropTypes.elementType
  };

  render() {
    let {
        placeholder
      , value
      , textField
      , valueField
      , valueComponent: Component } = this.props;

    return (
      <div className="rw-input">
        {!value || valueField && !value[valueField] && placeholder
          ? <span className='rw-placeholder'>{placeholder}</span>
          : Component
            ? <Component item={value} />
            : dataText(value, textField)
        }
      </div>
    )
  }
}
export default DropdownListInput;
