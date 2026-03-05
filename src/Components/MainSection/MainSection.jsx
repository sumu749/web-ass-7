/* eslint-disable indent */
import React from "react";

const TicketCard = ({ ticket, onAdd }) => {
    const statusColor = ticket.status === "in-progress" ? "#f59e0b" : "#10b981"; // yellow for in-progress, green for open
    const statusText =
        ticket.status === "in-progress" ? "In- Progress" : "Open";
    return (
        <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer"
            onClick={() => onAdd(ticket)}
        >
            <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-800 leading-tight text-sm sm:text-base">
                    {ticket.title}
                </h3>
                <div className="shrink-0 ml-2">
                    <span
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: statusColor }}
                    >
                        {statusText}
                    </span>
                </div>
            </div>

            <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                {ticket.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                    <div className="text-gray-400">#{ticket.id}</div>
                    <div
                        style={{
                            color:
                                ticket.priority === "high"
                                    ? "#ef4444"
                                    : ticket.priority === "medium"
                                      ? "#f59e0b"
                                      : "#10b981",
                        }}
                        className="font-medium"
                    >
                        {ticket.priority.toUpperCase()} PRIORITY
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="text-gray-600">{ticket.customer}</div>
                    <div className="text-gray-400">
                        {new Date(ticket.createdAt).toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TaskItem = ({ ticket, onComplete }) => {
    return (
        <div className="bg-white p-2 rounded-md shadow-sm flex items-center justify-between">
            <div
                className="text-sm font-medium text-gray-800 truncate"
                title={ticket.title}
            >
                {ticket.title}
            </div>
            <button
                className="ml-3 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                onClick={() => onComplete(ticket)}
            >
                Complete
            </button>
        </div>
    );
};

const MainSection = ({
    tickets,
    onStartTask,
    taskList,
    onCompleteTask,
    resolvedList,
}) => {
    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-6 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Tickets grid */}
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">
                        Customer Tickets
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tickets.length === 0 && (
                            <div className="text-gray-500">
                                No tickets available.
                            </div>
                        )}
                        {tickets.map((t) => (
                            <TicketCard
                                key={t.id}
                                ticket={t}
                                onAdd={onStartTask}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Task Status */}
                <aside className="md:w-1/3">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="font-semibold text-xl">Task Status</h3>
                        <div className="text-sm text-gray-500 mt-1">
                            Select a ticket to add to Task Status
                        </div>
                        <div className="mt-3 space-y-3">
                            {taskList.length === 0 && (
                                <div className="text-sm text-gray-500">
                                    No tasks in progress.
                                </div>
                            )}
                            {taskList.map((t) => (
                                <TaskItem
                                    key={t.id}
                                    ticket={t}
                                    onComplete={onCompleteTask}
                                />
                            ))}
                        </div>

                        <div className="mt-6">
                            <h4 className="text-xl font-medium">
                                Resolved Task
                            </h4>
                            <div className="mt-2 space-y-2">
                                {resolvedList.length === 0 && (
                                    <div className="text-sm text-gray-500">
                                        No resolved tasks yet.
                                    </div>
                                )}
                                {resolvedList.map((r) => (
                                    <div
                                        key={r.id}
                                        className="text-sm text-gray-700 bg-[#E0E7FF] p-2 rounded shadow-sm"
                                    >
                                        {r.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default MainSection;
