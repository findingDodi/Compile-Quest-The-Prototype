# Compile-Quest-The-Prototype
The Prototype

## Funktionale Anforderungen
- Leveldesign
- clickable Objects
  - tooltips
- interaction with NPC (compiler troll)
  - dialogs
  - tooltips
- inventory !!
  box1 = [168, 158];
  box2 = [363, 158];
  box3 = [558, 158];
  box4 = [753, 158];
  box5 = [948, 158];
  box6 = [1143, 158];
  box7 = [1338, 158];
  box8 = [1533, 158];
  box9 = [1728, 158];

## umgesetzte Anforderungen
- clickable Objects
  - drag & drop / click & click
- changing scenes by moving out of scenes
- Player (can move left and right)
- Player faces direction of walking
- Player animation
- different scenes
  - 4 game Scenes
    - plus StartScene
    - plus MenuScene

## Leveldesign
- Hintergründe
- Scene Decoration
  - static
  - moving
  - trigger
- interaktive Objekte
- NPCs
- States
  - Scenes
  - inventory

## Probleme


## gelöste Probleme
- Scene Transition in vorherige Szenen (wegen Position)
  - globalen Speicher schreiben für GameState (lösgelöst von GameObjects und Scenes)
  - localStorage nutzen: https://www.dynetisgames.com/2018/10/28/how-save-load-player-progress-localstorage/
  - https://stackoverflow.com/questions/76631414/phaser-how-to-keep-game-data-organized-right-way