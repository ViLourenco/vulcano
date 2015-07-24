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
		<div class="site-info">
			<div class="container">
				<div class="row">
					<div class="col-xs-9"><p>&copy; <?php echo date( 'Y' ); ?> <a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a> - <?php _e( 'All rights reserved', 'vulcano' ); ?></p></div>
					<div class="col-xs-3"><a href="http://www.vulcano.com.br" target="_blank" class="author-logo">Vulcano</a></div>
				</div>
			</div><!-- .container -->
		</div><!-- .site-info -->
	</footer><!-- #footer -->

	<?php wp_footer(); ?>
</body>
</html>
