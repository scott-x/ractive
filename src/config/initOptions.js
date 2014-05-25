import 'legacy';

var defaults, initOptions, flags;

defaults = {
	el:                 null,
	template:           '',
	complete:           null,
	preserveWhitespace: false,
	append:             false,
	twoway:             true,
	modifyArrays:       true,
	lazy:               false,
	debug:              false,
	noIntro:            false,
	transitionsEnabled: true,
	magic:              false,
	noCssTransform:     false,
	adapt:              [],
	sanitize:           false,
	stripComments:      true,
	isolated:           false,
	delimiters:         [ '{{', '}}' ],
	tripleDelimiters:   [ '{{{', '}}}' ],
	computed:           null
};

flags = [ 'adapt', 'modifyArrays', 'magic', 'twoway', 'lazy', 'debug', 'isolated' ];

initOptions = {
	keys: Object.keys( defaults ),
	defaults: defaults,
	flags: flags
};

export default initOptions;
