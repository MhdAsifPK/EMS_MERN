import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
    const { name, date, location, description } = event;

    const handleRSVP = () => {
        alert(`You have RSVP'd for ${name}`);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
                <strong>Date:</strong> {date}
            </p>
            <p className="text-gray-700 text-base">
                <strong>Location:</strong> {location}
            </p>
            <p className="text-gray-700 text-base">
                <strong>Description:</strong> {description}
            </p>
            <button
                onClick={handleRSVP}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                RSVP
            </button>
        </div>
    );
};

// PropTypes for validation
EventCard.propTypes = {
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default EventCard;