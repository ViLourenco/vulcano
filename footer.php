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
				<span>&copy; <?php echo date( 'Y' ); ?> <a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a> - <?php _e( 'All rights reserved', 'vulcano' ); ?></span>
			</div><!-- .site-info -->
		</footer><!-- #footer -->
	</div><!-- .container -->

	<?php wp_footer(); ?>
</body>
</html>
