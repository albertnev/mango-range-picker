import PropTypes from 'prop-types';

export default {
  min: PropTypes.number,
  max: PropTypes.number,
  rangeValues: (props) => {
    if (
      props.min === undefined &&
      props.max === undefined &&
      (!Array.isArray(props.rangeValues) || props.rangeValues.length === 0)
    ) {
      return new Error(
        'rangeValues prop is required if no min and max values are provided'
      );
    }

    return null;
  },
};
