export default function parseEntityName( name = '' ) {
	const [ postType, key, revisions ] = name?.split( ':' );

	return {
		name: postType,
		key,
		isRevision: revisions === 'revisions',
	};
}
