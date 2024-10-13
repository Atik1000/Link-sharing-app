import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
  });

  const addLink = () => {
    setLinks([...links, { id: Date.now(), platform: "", url: "" }]);
  };

  const updateLink = (id, data) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, ...data } : link))
    );
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const reorderLinks = (startIndex, endIndex) => {
    const newLinks = Array.from(links);
    const [reorderedItem] = newLinks.splice(startIndex, 1);
    newLinks.splice(endIndex, 0, reorderedItem);
    setLinks(newLinks);
  };

  const updateProfile = (data) => {
    setProfile({ ...profile, ...data });
  };

  return (
    <StoreContext.Provider
      value={{
        links,
        profile,
        addLink,
        updateLink,
        removeLink,
        reorderLinks,
        updateProfile,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
