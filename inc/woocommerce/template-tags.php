<?php
/**
 * Custom template tags used to integrate this theme with WooCommerce.
 *
 * @package vulcano
 */

if ( ! function_exists( 'vulcano_cart_link' ) ) {
	/**
	 * Cart Link
	 * Displayed a link to the cart including the number of items present and the cart total
	 * @param  array $settings Settings
	 * @return array           Settings
	 * @since  1.0.0
	 */
	function vulcano_cart_link() {
		if ( is_cart() ) {
			$class = 'current-menu-item active';
		} else {
			$class = '';
		}
		?>
		<li class="<?php echo esc_attr( $class ); ?>">
			<a class="cart-contents" href="<?php echo esc_url( WC()->cart->get_cart_url() ); ?>" title="<?php _e( 'View your shopping cart', 'vulcano' ); ?>">
				<?php echo wp_kses_data( WC()->cart->get_cart_total() ); ?> <span class="count"><?php echo wp_kses_data( sprintf( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), 'vulcano' ), WC()->cart->get_cart_contents_count() ) );?></span>
			</a>
		</li>
		<?php
	}
}

if ( ! function_exists( 'vulcano_product_search' ) ) {
	/**
	 * Display Product Search
	 * @since  1.0.0
	 * @uses  is_woocommerce_activated() check if WooCommerce is activated
	 * @return void
	 */
	function vulcano_product_search() {
		if ( is_woocommerce_activated() ) { ?>
			<div class="site-search">
				<?php the_widget( 'WC_Widget_Product_Search', 'title=' ); ?>
			</div>
		<?php
		}
	}
}

if ( ! function_exists( 'vulcano_header_cart' ) ) {
	/**
	 * Display Header Cart
	 * @since  1.0.0
	 * @uses  is_woocommerce_activated() check if WooCommerce is activated
	 * @return void
	 */
	function vulcano_header_cart() {
		if ( is_woocommerce_activated() ) { ?>
			<ul class="site-header-cart menu">
				<?php vulcano_cart_link(); ?>
				<?php the_widget( 'WC_Widget_Cart', 'title=' ); ?>
			</ul>
		<?php
		}
	}
}
