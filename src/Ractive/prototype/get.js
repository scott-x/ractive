import { normalise } from 'shared/keypaths';

var options = {
	capture: true, // top-level calls should be intercepted
	noUnwrap: true, // wrapped values should NOT be unwrapped
	fullRootGet: true // root get should return mappings
};

export default function Ractive$get ( keypath ) {

	var model = this.viewmodel.getContext( normalise( keypath ) );

	// For now we go through viewmodel to do capture
	return this.viewmodel.get( model, options );
}
