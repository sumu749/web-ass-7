/* eslint-disable react-hooks/set-state-in-effect */
import "./App.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Hero from "./Components/Hero/Hero";
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/NavBar/Navbar";
import ticketsData from "./Components/data/tickets.json";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/footer";

function App() {
    const [tickets, setTickets] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [resolvedList, setResolvedList] = useState([]);

    useEffect(() => {
        // load all tickets on left side; start with no resolved tasks
        setTickets(ticketsData);
        setResolvedList([]);
    }, []);

    const handleStartTask = (ticket) => {
        // avoid duplicates
        if (taskList.find((t) => t.id === ticket.id)) return;
        setTaskList((prev) => [ticket, ...prev]);
        setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
        toast.info(`Added to in-progress: ${ticket.title}`);
    };

    const handleCompleteTask = (ticket) => {
        setTaskList((prev) => prev.filter((t) => t.id !== ticket.id));
        setResolvedList((prev) => [{ ...ticket, status: "resolved" }, ...prev]);
        toast.success(`Resolved: ${ticket.title}`);
    };
    return (
        <>
            <Navbar />
            <Hero
                inProgressCount={taskList.length}
                resolvedCount={resolvedList.length}
            />
            <MainSection
                tickets={tickets}
                taskList={taskList}
                resolvedList={resolvedList}
                onStartTask={handleStartTask}
                onCompleteTask={handleCompleteTask}
            />
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
            />
            <Footer />
        </>
    );
}

export default App;
