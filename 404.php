<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Vulcano
 * @since 1.0.0
 */

get_header(); ?>

	<main id="content" class="<?php echo vulcano_classes_page_full(); ?>" tabindex="-1" role="main">

			<header class="page-header">
				<h1 class="page-title"><?php _e( 'Not Found', 'vulcano' ); ?></h1>
			</header>

			<div class="page-content">
				<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'vulcano' ); ?></p>

				<?php get_search_form(); ?>
			</div><!-- .page-content -->

	</main><!-- #main -->

<?php
get_footer();
