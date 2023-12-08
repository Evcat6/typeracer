import { Players } from "../types/types";

const getRoomsKeysArray = (map: Map<string, Players>) => {
  const rooms: any[] = [];
  for (const room of map.keys()) {
    rooms.push(room);
  }
  return rooms;
};

export { getRoomsKeysArray };
