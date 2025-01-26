import EventCard from "../../components/EventCard";


const EventListScreen = () => {
    // Dummy data for events
    const events = [
        {
            name: 'React Conference 2023',
            date: 'March 15, 2023',
            location: 'San Francisco, CA',
            description: 'Join us for a day of talks and workshops on React.',
        },
        {
            name: 'JavaScript Meetup',
            date: 'April 10, 2023',
            location: 'New York, NY',
            description: 'A meetup for JavaScript enthusiasts to share ideas.',
        },
        {
            name: 'Web Development Workshop',
            date: 'May 20, 2023',
            location: 'Los Angeles, CA',
            description: 'Learn the latest web development techniques in this hands-on workshop.',
        },
        {
            name: 'CSS Tricks Seminar',
            date: 'June 5, 2023',
            location: 'Chicago, IL',
            description: 'Explore advanced CSS techniques and best practices.',
        },
        {
            name: 'Full-Stack Development Bootcamp',
            date: 'July 15, 2023',
            location: 'Austin, TX',
            description: 'An intensive bootcamp covering full-stack development.',
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventListScreen;