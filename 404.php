<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Vulcano
 * @since 1.0.0
 */

get_header(); ?>

	<div id="primary" class="<?php echo vulcano_classes_page_full(); ?>">
		<main id="main-content" class="site-main" role="main">

			<header class="page-header">
				<h1 class="page-title"><?php _e( 'Not Found', 'vulcano' ); ?></h1>
			</header>

			<div class="page-content">
				<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'vulcano' ); ?></p>

				<?php get_search_form(); ?>
			</div><!-- .page-content -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
