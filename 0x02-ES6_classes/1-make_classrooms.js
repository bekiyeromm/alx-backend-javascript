// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implement initializeRooms function
function initializeRooms () {
  // array of ClassRoom objects
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];

  return rooms;
}

// Export the initializeRooms function
export default initializeRooms;
