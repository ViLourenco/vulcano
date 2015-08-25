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

// Add Shortcode
function shortcode_grid( $atts , $content = null ) {
	$atts = shortcode_atts( array(
		'open'   => false,
		'close'  => false,
		'cols'   => '',
		'offset' => '',
		'class'  => ''
	), $atts );

	if ( $atts['cols'] > 0 )
		$atts['cols'] = sprintf( 'col-xs-%d', $atts['cols'] );
	if ( $atts['offset'] > 0 )
		$atts['offset'] = sprintf( 'col-xs-offset-%d', $atts['offset'] );

	$return = sprintf( '<div class="%s %s %s">%s</div>', $atts['cols'], $atts['offset'], $atts['class'], apply_filters( 'the_content', $content ) );
	if ( $atts['open'] )
		$return = '<div class="row">' . $return;
	if ( $atts['close'] )
		$return = $return . '</div>';

	return $return;
}
add_shortcode( 'grid', 'shortcode_grid' );

function remove_empty_tags_around_shortcodes( $content ){
	$tags = array(
		'<p>[' => '[',
		']</p>' => ']',
		']<br>' => ']',
		']<br />' => ']'
	);

	$content = strtr( $content, $tags );
	return $content;
}
add_filter( 'the_content', 'remove_empty_tags_around_shortcodes' );

//Fix Contact Form 7 Submit Button
remove_action( 'wpcf7_init', 'wpcf7_add_shortcode_submit', 20 );
add_action( 'wpcf7_init', 'wpcf7_add_shortcode_submit_button' );

function wpcf7_add_shortcode_submit_button() {
	wpcf7_add_shortcode( 'submit', 'wpcf7_submit_button_shortcode_handler' );
}

function wpcf7_submit_button_shortcode_handler( $tag ) {
	$tag = new WPCF7_Shortcode( $tag );

	$class = wpcf7_form_controls_class( $tag->type );

	$atts = array();

	$atts['class'] = $tag->get_class_option( $class );
	$atts['id'] = $tag->get_id_option();
	$atts['tabindex'] = $tag->get_option( 'tabindex', 'int', true );

	$value = isset( $tag->values[0] ) ? $tag->values[0] : '';

	if ( empty( $value ) )
		$value = __( 'Send', 'contact-form-7' );

	$atts['type'] = 'submit';

	$atts = wpcf7_format_atts( $atts );

	$html = sprintf( '<button %1$s>%2$s</button>', $atts, $value );

	return $html;
}
