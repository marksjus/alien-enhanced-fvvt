import { alienrpgEnhancedActorSheet } from "./module/character-sheet.mjs";

Hooks.once('init', async function () {
  Actors.registerSheet('alienrpg', alienrpgEnhancedActorSheet, {
      types: ['character', 'synthetic'],
      makeDefault: true,
    });
});