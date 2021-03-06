/**
 * Tests for Gen 8 randomized formats
 */
'use strict';

const {testSet} = require('./tools');
const assert = require('../assert');

describe('[Gen 8] Random Battle', () => {
	const options = {format: 'gen8randombattle'};

	it('should not generate Golisopod without Bug STAB', () => {
		testSet('golisopod', options, set => {
			assert(set.moves.some(m => {
				const move = Dex.getMove(m);
				return move.type === 'Bug' && move.category !== 'Status';
			}), `Golisopod should get Bug STAB (got ${set.moves})`);
		});
	});
});

describe('[Gen 8] Random Doubles Battle', () => {
	const options = {format: 'gen8randomdoublesbattle'};

	it('should never generate Melmetal without Body Press', () => {
		testSet('melmetal', options, set => {
			assert(set.moves.includes('bodypress'), `Melmetal should get Body Press (got ${set.moves})`);
		});
	});
});

describe('[Gen 8] Random Battle (No Dmax)', () => {
	// No tests here yet!
	// This format is extremely new; this will be filled in later when I have to fix No Dmax bugs.

	// const options = {format: 'gen8randombattlenodmax', isDynamax: true};
});
