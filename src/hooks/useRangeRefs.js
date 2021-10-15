import { useRef } from 'react';

const useRangeRefs = ({ max, min }) => {
  const sliderRef = useRef(null);
  const activeRangeRef = useRef(null);
  const minHandlerRef = useRef(null);
  const maxHandlerRef = useRef(null);

  const getRelativePosition = (ref) => ref?.current?.offsetLeft;

  const setActiveRangePosition = () => {
    activeRangeRef.current.style.left = `${getRelativePosition(
      minHandlerRef
    )}px`;
    activeRangeRef.current.style.right = `${
      sliderRef?.current?.offsetWidth - getRelativePosition(maxHandlerRef)
    }px`;
  };

  const calculatePositionByValue = (value) => {
    const valueDifference = max - min;
    const selectableValue = value - min;
    return Math.round(
      (selectableValue * sliderRef.current.offsetWidth) / valueDifference
    );
  };

  const calculateValueByPosition = (position) => {
    const positionPercentage = (position * 100) / sliderRef.current.offsetWidth;
    const valueDifference = max - min;
    return Math.round(min + (valueDifference * positionPercentage) / 100);
  };

  const setMinHandlerPosition = (position) => {
    minHandlerRef.current.style.left = `${position}px`;
  };
  const setMaxHandlerPosition = (position) => {
    maxHandlerRef.current.style.left = `${position}px`;
  };

  const calculateRelativeMousePosition = (mousePosition) => {
    const sliderOffset = sliderRef.current.getBoundingClientRect().left;
    return mousePosition - sliderOffset;
  };

  const getMinHandlerMaxAllowedPosition = () => {
    const securityMargin = minHandlerRef.current.offsetWidth / 2;
    const maxHandlerPosition = getRelativePosition(maxHandlerRef);
    return maxHandlerPosition - securityMargin;
  };

  const getMaxHandlerMinAllowedPosition = () => {
    const securityMargin = maxHandlerRef.current.offsetWidth / 2;
    const minHandlerPosition = getRelativePosition(minHandlerRef);
    return minHandlerPosition + securityMargin;
  };

  const getClosestValue = (rangeValues, currentValue, valueToAvoid) => {
    if (rangeValues.length) {
      let closest = rangeValues[0];
      rangeValues.forEach((val) => {
        if (
          Math.abs(currentValue - val) < Math.abs(currentValue - closest) &&
          val !== valueToAvoid
        ) {
          closest = val;
        }
      });
      return closest;
    }

    return currentValue;
  };

  return {
    sliderRef,
    activeRangeRef,
    minHandlerRef,
    maxHandlerRef,
    helpers: {
      setActiveRangePosition,
      calculatePositionByValue,
      calculateValueByPosition,
      setMinHandlerPosition,
      setMaxHandlerPosition,
      calculateRelativeMousePosition,
      getMinHandlerMaxAllowedPosition,
      getMaxHandlerMinAllowedPosition,
      getClosestValue,
    },
  };
};

export default useRangeRefs;
