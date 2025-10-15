import PropTypes from "prop-types";
import '../styles/TaskItem.css';

export default function TaskItem({ task, onToggle, onEdit }) {
    return (
        <div className={`card ${task.completed ? 'done' : ''}`}>
            <div className="row">
                <span className={`dot ${task.priority}`} />
                <span className="title" title={task.title}>{task.title}</span>
            </div>

            {task.description && <div className="desc">{task.description}</div>}

            <div className="row actions">
                <button onClick={() => onToggle?.(task.id)}>
                    {task.completed ? 'Undo' : 'Done'}
                </button>
                <button onClick={() => onEdit?.(task)}>
                    Edit
                </button>
            </div>
        </div>
    );
}

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
        completed: PropTypes.bool.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    onToggle: PropTypes.func,
    onEdit: PropTypes.func,
}