import axios from 'axios';
// import ListScheduledJobs from '../components/getScheduledJobs';

export async function rsvpToEvent(eventId, eventDateObj, userName, plusOne) {

    axios.post('https://meetup-rsvp-server.michalfasanek2.repl.co/eventRSVP', {
        eventId,
        eventDateObj,
        userName,
        plusOne
    })
        .then(res => {
            console.log(`Response status: ${res.status}`);
            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
        .finally(() => window.location.reload())
};