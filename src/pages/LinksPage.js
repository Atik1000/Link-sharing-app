import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Container, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LinkForm from "../components/LinkForm";
import { useStore } from "../store/StoreContext";

const LinksPage = () => {
  const { links, addLink, updateLink, removeLink, reorderLinks } = useStore();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    reorderLinks(result.source.index, result.destination.index);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Customize your links
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<AddIcon />}
        onClick={addLink}
        sx={{ mb: 2 }}
      >
        Add new link
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="links">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {links.map((link, index) => (
                <Draggable
                  key={link.id}
                  draggableId={link.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <LinkForm
                        link={link}
                        updateLink={updateLink}
                        removeLink={removeLink}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>
        Save
      </Button>
    </Container>
  );
};

export default LinksPage;
