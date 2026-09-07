# Blend In

A multiplayer browser-based hide-and-seek game inspired by *Mecha Chameleon*. Players must dynamically paint their 3D avatars to camouflage into the environment and avoid being caught by the Seeker. Built entirely in the browser using React Three Fiber.

## Tech Stack

**Frontend:**
*   React & React Three Fiber (R3F)
*   @react-three/drei (Helpful 3D abstractions)
*   @react-three/rapier (Physics engine)
*   Zustand (State management)

**Backend:**
*   Node.js & Express
*   Socket.io (Real-time multiplayer networking)

## Roadmap & To-Do List

This project is broken down into isolated milestones to make development manageable:

- [ ] **Phase 1: Local Movement & Physics**
  - [ ] Set up basic R3F Canvas and a gray-box arena.
  - [ ] Implement Rapier physics (`<RigidBody>`) for collision detection.
  - [ ] Create a custom hook for WASD keyboard inputs and character movement.
- [ ] **Phase 2: The Painting Mechanic**
  - [ ] Create an off-screen HTML5 `<canvas>`.
  - [ ] Implement Three.js Raycaster to map click events to UV coordinates.
  - [ ] Draw strokes on the canvas and pipe it into a `meshStandardMaterial` as a `canvasTexture`.
- [ ] **Phase 3: Multiplayer Foundation**
  - [ ] Set up a Node.js + Socket.io server.
  - [ ] Broadcast local `[x, y, z]` position to the server.
  - [ ] Use Zustand to track opponent coordinates and render dummy cubes in the scene.
- [ ] **Phase 4: Networked Painting**
  - [ ] Emit brush stroke data `(uvX, uvY, color, size)` to the server instead of sending full images.
  - [ ] Receive broadcasted strokes and replicate them on opponent canvas textures locally.
- [ ] **Phase 5: Game Logic & UI**
  - [ ] Build server authority for game states (Lobby -> Match -> End).
  - [ ] Implement Seeker vs. Hider logic and shooting mechanics.
  - [ ] Build HTML/CSS UI overlays (Main Menu, Health Bars, Timers) outside the R3F Canvas.

## Local Installation

1. Clone the repository:
```bash
   git clone https://github.com/sumoondev/blend-in.git
   cd blend-in
```

2. Install frontend dependencies:
```bash
    cd client
    npm install
```

3. Install backend dependencies:
```bash
    cd ../server
    npm install
```


4. Start both development servers (in separate terminals):
```bash
    # Terminal 1
    cd server && npm run dev

    # Terminal 2
    cd client && npm run dev
```

## License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).