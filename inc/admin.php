<?php
/**
 * Vulcano admin functions.
 */

/**
 * Custom admin scripts.
 */
function vulcano_admin_scripts() {
	wp_enqueue_style( 'vulcano-inc-admin', get_template_directory_uri() . '/inc/assets/css/custom-admin.css' );
}

add_action( 'admin_enqueue_scripts', 'vulcano_admin_scripts' );
add_action( 'login_enqueue_scripts', 'vulcano_admin_scripts' );

/**
 * Remove logo from admin bar.
 */
function vulcano_admin_adminbar_remove_logo() {
	global $wp_admin_bar;

	$wp_admin_bar->remove_menu( 'wp-logo' );
}

add_action( 'wp_before_admin_bar_render', 'vulcano_admin_adminbar_remove_logo' );

/**
 * Custom Footer.
 */
function vulcano_admin_footer() {
	echo date( 'Y' ) . ' - ' . get_bloginfo( 'name' );
}

add_filter( 'admin_footer_text', 'vulcano_admin_footer' );

/**
 * Custom logo URL.
 */
function vulcano_admin_logo_url() {
	return home_url();
}

add_filter( 'login_headerurl', 'vulcano_admin_logo_url' );

/**
 * Custom logo title.
 */
function vulcano_admin_logo_title() {
	return get_bloginfo( 'name' );
}

add_filter( 'login_headertitle', 'vulcano_admin_logo_title' );

/**
 * Remove widgets dashboard.
 */
function vulcano_admin_remove_dashboard_widgets() {
	// remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
	// remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_secondary', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );

	// Yoast's SEO Plugin Widget
	remove_meta_box( 'yoast_db_widget', 'dashboard', 'normal' );
}

add_action( 'wp_dashboard_setup', 'vulcano_admin_remove_dashboard_widgets' );

/**
 * Remove Welcome Panel.
 */
remove_action( 'welcome_panel', 'wp_welcome_panel' );

/**
 * Compile SASS.
 */
function autoCompileSASS() {
	require_once( get_template_directory() . '/core/classes/class-scssc.php' );

	$scss = new scssc();
	$scss->setFormatter( 'scss_formatter_compressed' );
	$scss->setImportPaths( get_template_directory() . '/assets/sass/' );

	$css_file = $scss->compile( '@import "style.scss"' );
	file_put_contents( get_template_directory() . '/assets/css/style.css', $css_file );

	$css_file = $scss->compile( '@import "editor-style.scss"' );
	file_put_contents( get_template_directory() . '/assets/css/editor-style.css', $css_file );
}
if( is_user_logged_in() && !is_admin() ) {
	add_action('init', 'autoCompileSASS');
}
