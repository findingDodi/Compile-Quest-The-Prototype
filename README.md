# Compile-Quest-The-Prototype
The Prototype

## Funktionale Anforderungen
- different scenes
- clickable Objects
  - drag & drop / click & click
- changing scenes by moving out of scenes
- 4 game Scenes
  - plus StartScene
  - plus MenuScene
- Player (can move left and right)
- interaction with NPC (compiler troll)
- inventory !!

## Probleme
- Scene Transition in vorherige Szenen (wegen Position)
  - globalen Speicher schreiben für GameState (lösgelöst von GameObjects und Scenes)
  - localStorage nutzen: https://www.dynetisgames.com/2018/10/28/how-save-load-player-progress-localstorage/
  - https://stackoverflow.com/questions/76631414/phaser-how-to-keep-game-data-organized-right-way