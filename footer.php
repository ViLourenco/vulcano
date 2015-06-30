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

		</div><!-- .row -->
	</div><!-- #wrapper -->

	<footer id="footer" role="contentinfo">
		<div class="container">
			<p>&copy; <?php echo date( 'Y' ); ?> <a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a> - <?php _e( 'All rights reserved', 'vulcano' ); ?></p>
		</div><!-- .container -->
	</footer><!-- #footer -->

	<?php wp_footer(); ?>
</body>
</html>
