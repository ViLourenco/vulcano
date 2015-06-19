<?php
use MatthiasMullie\Minify;

$minifier = new Minify\JS();

foreach ( scandir( get_template_directory() . '/assets/js/libs' ) as $key => $value ) {
	if ( strlen( $value ) > 2 )
		$minifier->add( get_template_directory() . '/assets/js/libs/' . $value );
}

$minifiedPath = get_template_directory() . '/assets/js/libs.min.js';
$minifier->gzip( $minifiedPath );
