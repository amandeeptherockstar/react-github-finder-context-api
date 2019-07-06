import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

function Pagination(props) {
  return (
    <div className={styles.pagination}>
      <span className={styles.span} onClick={props.prev}>&laquo;</span>
      {
        !props.disableNextButton && <span className={styles.span} onClick={props.next}>&raquo;</span>
      }
    </div>
  )
}

Pagination.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  disableNextButton: PropTypes.bool
}

export default Pagination;