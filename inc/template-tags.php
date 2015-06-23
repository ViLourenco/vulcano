<?php
/**
 * Custom template tags for Vulcano.
 *
 * @package Vulcano
 * @since 1.0.0
 */

if ( ! function_exists( 'vulcano_classes_page_full' ) ) {

	/**
	 * Classes page full.
	 *
	 * @since 1.0.0
	 *
	 * @return string Classes name.
	 */
	function vulcano_classes_page_full() {
		return 'col-md-12';
	}
}

if ( ! function_exists( 'vulcano_classes_page_sidebar' ) ) {

	/**
	 * Classes page with sidebar.
	 *
	 * @since 1.0.0
	 *
	 * @return string Classes name.
	 */
	function vulcano_classes_page_sidebar() {
		return 'col-md-8';
	}
}

if ( ! function_exists( 'vulcano_classes_page_sidebar_aside' ) ) {

	/**
	 * Classes aside of page with sidebar.
	 *
	 * @since 1.0.0
	 *
	 * @return string Classes name.
	 */
	function vulcano_classes_page_sidebar_aside() {
		return 'widget-area col-md-4 hidden-xs';
	}
}

if ( ! function_exists( 'vulcano_posted_on' ) ) {

	/**
	 * Print HTML with meta information for the current post-date/time and author.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	function vulcano_posted_on() {
		if ( is_sticky() && is_home() && ! is_paged() ) {
			echo '<span class="featured-post">' . __( 'Sticky', 'vulcano' ) . ' </span>';
		}

		// Set up and print post meta information.
		printf( '<span class="entry-date">%s <time class="entry-date" datetime="%s">%s</time></span> <span class="byline">%s <span class="author vcard"><a class="url fn n" href="%s" rel="author">%s</a></span>.</span>',
			__( 'Posted in', 'vulcano' ),
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			__( 'by', 'vulcano' ),
			esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
			get_the_author()
		);
	}
}

if ( ! function_exists( 'vulcano_paging_nav' ) ) {

	/**
	 * Print HTML with meta information for the current post-date/time and author.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	function vulcano_paging_nav() {
		$mid  = 2;     // Total of items that will show along with the current page.
		$end  = 1;     // Total of items displayed for the last few pages.
		$show = false; // Show all items.

		echo vulcano_pagination( $mid, $end, false );
	}
}

if ( ! function_exists( 'vulcano_images' ) ) {

	/**
	 * Print HTML with meta information for the current post-date/time and author.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	function vulcano_images( $url = '', $echo = true ) {
		$url = get_template_directory_uri() . '/assets/images/' . $url;

		if ( $echo )
			echo $url;
		else
			return $url;
	}
}
