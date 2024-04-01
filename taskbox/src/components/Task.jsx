import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
        <label
            htmlFor="checked"
            aria-label={`archiveTask-${id}`}
            className="checkbox"
        > 
            <input
                type="checkbox"
                disabled={true}
                name="checked"
                id={`archiveTask-${id}`}
                checked={state === "TASK_ARCHIVED"}
            />
            <span
                className="checkbox-custom"
                onClick={()=> onArchiveTask(id)}
            />
        </label>

        <label
            htmlFor="title"
            aria-label={title}
            className="title"
        >
            <input
                type="text"
                value={title}
                readOnly={true}
                name="title"
                placeholder="Input title"
            />
        </label>

        {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}

// propTypes for the Task component:
Task.propTypes = {
  // Prop 1: task
  // .shape() tells us the inner structure to expect for a prop object.
  task: PropTypes.shape({
    // For each attribute, we're defining the data type (string) and saying that it's required (isRequired).
    // If one or more of these attributes is not included, there will be a warning.
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  // Prop 2: onArchiveTask
  // This prop is an optional function.  
  onArchiveTask: PropTypes.func,
  // Prop 3: onPinTask
  // This prop is an optional function.
  onPinTask: PropTypes.func,
}