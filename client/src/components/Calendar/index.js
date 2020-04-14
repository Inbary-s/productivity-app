import React, { useEffect, useState, useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import userContext from "../../utils/userContext";
import Tasks from '../Tasks'
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const DnDtasks = withDragAndDrop(Tasks);


export default () => {
    const { goals } = useContext(userContext);
    const [modGoals, setModGoals] = useState(goals);
    console.log("Goals from calendar page: ", goals)
    let [calendarEvent, setCalendarEvent] = useState({
        events: [
            {
                start: moment().toDate(),
                end: moment().add(1, "days").toDate(),
                title: "Build this thingy!"
            }
        ]
    })

    useEffect(() => {
        console.log(goals)
        const tasks = [];
        goals.map(goal => goal.Tasks.map(a => {
            tasks.push({
                title: a.name, start: moment().toDate(),
                end: moment().toDate()
            })
        }))
        const tasksWID = tasks.map((a, i) => { return { ...a, id: i } })

        setCalendarEvent({ events: tasksWID })
    }, [goals])

    const onEventResize = ({ event, start, end, allDay }) => {
        let newEvents = calendarEvent.events;
        newEvents[event.id].start = start;
        newEvents[event.id].end = end;
        setCalendarEvent({
            events: newEvents
        });

    }

    const onEventDrop = ({ event, start, end, allDay }) => {
        let newEvents = calendarEvent.events;
        newEvents[event.id].start = start;
        newEvents[event.id].end = end;
        setCalendarEvent({
            events: newEvents
        })
    }

    return (

        <div className="Calendar">
            <DnDCalendar
                defaultDate={moment().toDate()}
                defaultView="month"
                localizer={localizer}
                events={calendarEvent.events}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                resizable
                style={{ height: "100vh" }}
            />
        </div>

    )
}
