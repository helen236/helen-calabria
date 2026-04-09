const { hostname } = window.location;

export const showControls =
  hostname !== "helencalabria.com" &&
  hostname !== "www.helencalabria.com";
