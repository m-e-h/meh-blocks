<?php
/**
 * Plugin Name: meh Blocks
 * Plugin URI: https://github.com/m-e-h/meh-blocks
 * Description: Custom blocks for the WP Gutenberg editor.
 * Version:           0.1.0
 * Author:            Marty Helmick
 * License:           GNU General Public License v2
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       meh-blocks
 * GitHub Plugin URI: https://github.com/m-e-h/meh-blocks
 * Requires WP:       4.8
 * Requires PHP:      5.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'enqueue_block_editor_assets', 'meh_blocks_editor_assets' );
add_action( 'enqueue_block_assets', 'meh_blocks_style_assets' );

function meh_blocks_editor_assets() {
	wp_enqueue_script(
		'meh-blocks-script',
		plugins_url( 'dist/main.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	wp_enqueue_style(
		'meh-blocks-style-editor',
		plugins_url( 'dist/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);
}

function meh_blocks_style_assets() {
	wp_enqueue_style(
		'meh-blocks-style',
		plugins_url( 'dist/style.css', __FILE__ ),
		array( 'wp-blocks' )
	);
}
