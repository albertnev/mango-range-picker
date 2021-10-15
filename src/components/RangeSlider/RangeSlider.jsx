import React, { useState, useEffect } from 'react';
import rangePropTypes from '../../shared/rangePropTypes';
import useRangeRefs from '../../hooks/useRangeRefs';
import styles from './styles.scss';

const RangeSlider = ({
  min,
  max,
  minHandlerValue,
  maxHandlerValue,
  rangeValues,
  onMinValueChange,
  onMaxValueChange,
}) => {
  const { sliderRef, activeRangeRef, minHandlerRef, maxHandlerRef, helpers } =
    useRangeRefs({ max, min });
  const {
    setActiveRangePosition,
    calculatePositionByValue,
    calculateValueByPosition,
    setMinHandlerPosition,
    setMaxHandlerPosition,
    calculateRelativeMousePosition,
    getMinHandlerMaxAllowedPosition,
    getMaxHandlerMinAllowedPosition,
    getClosestValue,
  } = helpers;

  const [isHandleBeingDragged, setIsHandleBeingDragged] = useState(false);
  const minValue = minHandlerValue || min;
  const maxValue = maxHandlerValue || max;

  useEffect(() => {
    setMinHandlerPosition(calculatePositionByValue(minValue));
    setMaxHandlerPosition(calculatePositionByValue(maxValue));
    setActiveRangePosition();
  }, [setActiveRangePosition, setMinHandlerPosition, setMaxHandlerPosition]);

  const disableMouseDragging = () => {
    setIsHandleBeingDragged(false);
  };

  const enableMouseDragging = () => {
    setIsHandleBeingDragged(true);
  };

  const handleOnMouseMove = (ev, ref) => {
    if (isHandleBeingDragged) {
      const parent = sliderRef.current;
      const mouseX = ev.clientX;

      let movedX = calculateRelativeMousePosition(mouseX);

      if (ref === minHandlerRef) {
        const minHandlerMaxAllowedPosition = getMinHandlerMaxAllowedPosition();
        if (movedX >= minHandlerMaxAllowedPosition) {
          movedX = minHandlerMaxAllowedPosition;
        }

        if (movedX < 0) {
          movedX = 0;
        }
      } else if (ref === maxHandlerRef) {
        const maxHandlerMinAllowedPosition = getMaxHandlerMinAllowedPosition();
        if (movedX <= maxHandlerMinAllowedPosition) {
          movedX = maxHandlerMinAllowedPosition;
        }

        if (movedX > parent.offsetWidth) {
          movedX = parent.offsetWidth;
        }
      }

      const valueByPosition = calculateValueByPosition(movedX);

      if (ref === minHandlerRef) {
        setMinHandlerPosition(movedX);
        const closestValue = getClosestValue(
          rangeValues,
          valueByPosition,
          maxHandlerValue
        );
        onMinValueChange(closestValue);
      } else if (ref === maxHandlerRef) {
        setMaxHandlerPosition(movedX);
        const closestValue = getClosestValue(
          rangeValues,
          valueByPosition,
          minHandlerValue
        );
        onMaxValueChange(closestValue);
      }
      setActiveRangePosition();
    }
  };

  return (
    <div
      className={styles.slider__wrapper}
      onMouseLeave={disableMouseDragging}
      onMouseEnter={disableMouseDragging}
    >
      <div
        data-testid="slider-container"
        className={styles.slider__container}
        ref={sliderRef}
      >
        <div
          className={styles.slider__active_range}
          data-testid="active-range"
          ref={activeRangeRef}
        />
        <span
          className={styles.slider__handler}
          data-testid="min-handler"
          tabIndex={0}
          role="button"
          ref={minHandlerRef}
          onMouseDown={enableMouseDragging}
          onMouseUp={disableMouseDragging}
          onMouseMove={(ev) => handleOnMouseMove(ev, minHandlerRef)}
        />
        <span
          className={styles.slider__handler}
          style={{ left: 100 }}
          data-testid="max-handler"
          tabIndex={0}
          role="button"
          ref={maxHandlerRef}
          onMouseDown={enableMouseDragging}
          onMouseUp={disableMouseDragging}
          onMouseMove={(ev) => handleOnMouseMove(ev, maxHandlerRef)}
        />
      </div>
    </div>
  );
};

RangeSlider.propTypes = rangePropTypes;

RangeSlider.defaultProps = {
  min: undefined,
  max: undefined,
  rangeValues: [],
};

export default RangeSlider;
