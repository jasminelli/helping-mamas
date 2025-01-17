const EventData = require("../mongodb/models/event");
import dbConnect from "../mongodb/index";

export async function createEvent(newEventData, next) {
  const newEvent = new EventData(newEventData);

  await dbConnect();

  return newEvent
  .save()
  .then(() => {
    return;
  })
  .catch((err) => {
    next(err);
  });
}

export async function getEvents(next) {

  await dbConnect();

  return EventData.find({})
  .then((events) => {
    return events;
  })
  .catch(next);
}

export async function updateEvent(updateEventData, next) {
  await dbConnect();

  console.log(updateEventData);
  return EventData.findOneAndUpdate({ _id: updateEventData._id }, updateEventData, {
    new: true,
  })
    .then((event) => {
      return event;
    })
    .catch((err) => {
      next(err);
    });
}

export async function deleteEventID(eventID, next) {
  await dbConnect();

  return EventData.findOneAndDelete({ _id: eventID })
    .then(() => {
      return;
    })
    .catch(next);
}

export async function updateEventID(eventID, event) {
  await dbConnect();

  return EventData.findByIdAndUpdate(eventID, event, {
    new: true,
    useFindAndModify: true,
  }).then(() => {
    return;
  })
}
