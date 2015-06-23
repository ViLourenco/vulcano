<?php
use MatthiasMullie\Minify;

$minifier = new Minify\JS();

foreach ( scandir( get_template_directory() . '/assets/js/libs' ) as $key => $value ) {
	if ( strpos( $value, '.js' ) )
		$minifier->add( get_template_directory() . '/assets/js/libs/' . $value );
}

$minifiedPath = get_template_directory() . '/assets/js/libs.min.js';
$minifier->minify( $minifiedPath );
