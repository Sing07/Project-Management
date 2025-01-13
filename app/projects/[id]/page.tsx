"use client";

import React from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";
import TimelineView from "../TimelineView";
import TableView from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
    params: { id: string };
};

export default function Project({ params }: Props) {
    const { id } = params;

    const [activeTab, setActiveTab] = React.useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = React.useState(false);

    return (
        <div>
            <ModalNewTask
                isOpen={isModalNewTaskOpen}
                onClose={() => setIsModalNewTaskOpen(false)}
                id={id}
            />
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" && (
                <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "List" && (
                <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Timeline" && (
                <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Table" && (
                <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    );
}
