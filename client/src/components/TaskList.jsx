import PropTypes from "prop-types";
import '../styles/TaskList.css';
import TaskItem from './TaskItem';

export default function TaskList({
                                     tasks,
                                     onToggle,
                                     onEdit,
                                     durationSec = 20,
                                     gapRem = 1,
                                     pauseOnHover = true,
                                     minToLoop = 4,
                                 }) {
    if (!tasks?.length) return <div className="carousel-empty">No tasks yet.</div>;

    const loop = tasks.length >= minToLoop;
    const content = loop ? [...tasks, ...tasks] : tasks;

    return (
        <div className="carousel-frame">
            <div
                className={`carousel-viewport ${loop ? 'is-loop' : 'no-loop'}${pauseOnHover ? ' pause-on-hover' : ''}`}
                style={{'--gap': `${gapRem}rem`, '--duration': `${durationSec}s`}}
            >
                <div className="carousel-track">
                    {content.map((t, i) => (
                        <TaskItem
                            key={`${t.id}-${i}`}
                            task={t}
                            onToggle={onToggle}
                            onEdit={onEdit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onToggle: PropTypes.func,
    onEdit: PropTypes.func,
    durationSec: PropTypes.number,
    gapRem: PropTypes.number,
    pauseOnHover: PropTypes.bool,
    minToLoop: PropTypes.number,
};
