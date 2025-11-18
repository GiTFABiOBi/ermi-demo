<?php

add_action( 'genesis_before_entry_content', 'theme_prefix_show_notice' );
/**
 * Display a custom notice.
 */
function theme_prefix_show_notice() {
	echo '<p class="notice">This page has a custom template.</p>';
}

genesis();