<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main div element.
 *
 * @package Vulcano
 * @since 1.0.0
 */
?>

		</div><!-- #main -->

		<footer id="footer" role="contentinfo">
			<div class="site-info">
				<span>&copy; <?php echo date( 'Y' ); ?> <a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a> - <?php _e( 'All rights reserved', 'vulcano' ); ?> | <?php echo sprintf( __( 'Powered by the <a href="%s" rel="nofollow" target="_blank">Vulcano</a> forces and <a href="%s" rel="nofollow" target="_blank">WordPress</a>.', 'vulcano' ), 'http://wpod.in/', 'http://wordpress.org/' ); ?></span>
			</div><!-- .site-info -->
		</footer><!-- #footer -->
	</div><!-- .container -->

	<?php wp_footer(); ?>
</body>
</html>
