import { alienrpgActorSheet } from '/systems/alienrpg/module/actor/actor-sheet.js';
/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class alienrpgEnhancedActorSheet extends alienrpgActorSheet {

  /** @override */
  get template() {
		const path = 'modules/alien-enhanced/templates/';

		if (game.settings.get('alienrpg', 'aliencrt')) {
			return `${path}crt/${this.actor.type}-sheet.html`;
		} else {
			return `${path}${this.actor.type}-sheet.html`;
		}
	}
}