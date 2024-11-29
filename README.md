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