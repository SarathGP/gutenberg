<?php
/**
 * Server-side rendering of the `core/back-to-top` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/back-to-top` block on the server.
 *
 * @param array   $attributes Block attributes.
 * @return string Return the back to top link.
 */
function render_block_core_back_to_top( $attributes ) {
	$link_text          = isset( $attributes['text'] ) ? $attributes['text'] : __( 'Back to top' );
	$wrapper_attributes = get_block_wrapper_attributes();

	return sprintf(
		'<p %1$s><a href="#top">%2$s</a></p>',
		$wrapper_attributes,
		wp_kses_post( $link_text )
	);
}

/**
 * Registers the `core/back_to_top` block on the server.
 */
function register_block_core_back_to_top() {
	register_block_type_from_metadata(
		__DIR__ . '/back-to-top',
		array(
			'render_callback' => 'render_block_core_back_to_top',
		)
	);
}
add_action( 'init', 'register_block_core_back_to_top' );
