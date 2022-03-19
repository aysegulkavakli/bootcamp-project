import React, {useState} from "react";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {Box, Stack} from "@chakra-ui/react";
import {ListItem} from "./index";

export default function List(): JSX.Element {

    const itemsFromBackend = [
        {id: "1", content: "First task"},
        {id: "2", content: "Second task"},
        {id: "3", content: "Third task"},
        {id: "4", content: "Fourth task"},
        {id: "5", content: "Fifth task"}
    ];
    const columnsFromBackend = {
        "1": {
            name: "Requested",
            items: itemsFromBackend
        },
        "2": {
            name: "To do",
            items: []
        },
       "3": {
            name: "In Progress",
            items: []
        },
        "4": {
            name: "Done",
            items: []
        }
    };
    const [columns, setColumns] = useState(columnsFromBackend);
    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };
    return (
        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
            {Object.entries(columns).map(([columnId, column], index) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                        key={columnId}
                    >
                        <h2>{column.name}</h2>
                        <Box display="flex " justifyContent="center" alignItems="center" borderRadius="8" minW="300px" minH="200px"
                             bgColor="#ffcab0" boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)">
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided, snapshot) => {
                                    return (
                                        <Stack
                                            spacing="4"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver
                                                    ? "lightblue"
                                                    : "#ffcab0",
                                                padding: 4,
                                                width: 250,
                                                minHeight: 500
                                            }}
                                        >
                                            {column.items.map((item, index) => {
                                                return (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={item.id}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}

                                                               ><ListItem content={item.content} backgroundColor={snapshot.isDragging ? "#263B4A"
                                                                    : "#456C86"}/></div>
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </Stack>
                                    );
                                }}
                            </Droppable>
                        </Box>
                    </div>
                );
            })}
        </DragDropContext>
    )


}