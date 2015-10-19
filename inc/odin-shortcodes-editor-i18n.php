<?php

if ( ! defined('ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$strings = 'tinyMCE.addI18n({' . _WP_Editors::$mce_locale . ': {
	vulcano: {
		shortcode_title: "' . esc_js( __( 'Vulcano shortcodes', 'vulcano' ) ) . '",
		id: "' . esc_js( __( 'Id', 'vulcano' ) ) . '",
		default: "' . esc_js( __( 'default', 'vulcano' ) ) . '",
		buttons: "' . esc_js( __( 'Buttons', 'vulcano' ) ) . '",
		button: "' . esc_js( __( 'Button', 'vulcano' ) ) . '",
		title: "' . esc_js( __( 'Title', 'vulcano' ) ) . '",
		text: "' . esc_js( __( 'Text', 'vulcano' ) ) . '",
		type: "' . esc_js( __( 'Type', 'vulcano' ) ) . '",
		size: "' . esc_js( __( 'Size', 'vulcano' ) ) . '",
		lg: "' . esc_js( __( 'lg (large)', 'vulcano' ) ) . '",
		sm: "' . esc_js( __( 'sm (small)', 'vulcano' ) ) . '",
		xs: "' . esc_js( __( 'xs (extra small)', 'vulcano' ) ) . '",
		link: "' . esc_js( __( 'Link', 'vulcano' ) ) . '",
		class: "' . esc_js( __( 'Class', 'vulcano' ) ) . '",
		tooltip: "' . esc_js( __( 'Tooltip', 'vulcano' ) ) . '",
		direction: "' . esc_js( __( 'Direction', 'vulcano' ) ) . '",
		top: "' . esc_js( __( 'top', 'vulcano' ) ) . '",
		left: "' . esc_js( __( 'left', 'vulcano' ) ) . '",
		right: "' . esc_js( __( 'right', 'vulcano' ) ) . '",
		bottom: "' . esc_js( __( 'bottom', 'vulcano' ) ) . '",
		success: "' . esc_js( __( 'success', 'vulcano' ) ) . '",
		danger: "' . esc_js( __( 'danger', 'vulcano' ) ) . '",
		warning: "' . esc_js( __( 'warning', 'vulcano' ) ) . '",
		info: "' . esc_js( __( 'info', 'vulcano' ) ) . '",
		group_button: "' . esc_js( __( 'Group button', 'vulcano' ) ) . '",
		list: "' . esc_js( __( 'List', 'vulcano' ) ) . '",
		alert: "' . esc_js( __( 'Alert', 'vulcano' ) ) . '",
		vertical: "' . esc_js( __( 'vertical', 'vulcano' ) ) . '",
		group: "' . esc_js( __( 'group', 'vulcano' ) ) . '",
		justified: "' . esc_js( __( 'Justified', 'vulcano' ) ) . '",
		content: "' . esc_js( __( 'Content', 'vulcano' ) ) . '",
		close: "' . esc_js( __( 'Close', 'vulcano' ) ) . '",
		label: "' . esc_js( __( 'Label', 'vulcano' ) ) . '",
		badge: "' . esc_js( __( 'Badge', 'vulcano' ) ) . '",
		well: "' . esc_js( __( 'Well', 'vulcano' ) ) . '",
		table: "' . esc_js( __( 'Table', 'vulcano' ) ) . '",
		striped: "' . esc_js( __( 'striped', 'vulcano' ) ) . '",
		hover: "' . esc_js( __( 'hover', 'vulcano' ) ) . '",
		condensed : "' . esc_js( __( 'condensed', 'vulcano' ) ) . '",
		responsive: "' . esc_js( __( 'responsive', 'vulcano' ) ) . '",
		border: "' . esc_js( __( 'Border', 'vulcano' ) ) . '",
		cols: "' . esc_js( __( 'Columns', 'vulcano' ) ) . '",
		rows: "' . esc_js( __( 'Rows', 'vulcano' ) ) . '",
		progress: "' . esc_js( __( 'Progress bar', 'vulcano' ) ) . '",
		progress_bar: "' . esc_js( __( 'Progress bar', 'vulcano' ) ) . '",
		progress_striped: "' . esc_js( __( 'progress-striped', 'vulcano' ) ) . '",
		active: "' . esc_js( __( 'active', 'vulcano' ) ) . '",
		value_progress: "' . esc_js( __( 'Value (%)', 'vulcano' ) ) . '",
		max: "' . esc_js( __( 'Max value', 'vulcano' ) ) . '",
		min: "' . esc_js( __( 'Min value', 'vulcano' ) ) . '",
		panel: "' . esc_js( __( 'Panel', 'vulcano' ) ) . '",
		primary: "' . esc_js( __( 'primary', 'vulcano' ) ) . '",
		data: "' . esc_js( __( 'Data', 'vulcano' ) ) . '",
		qrcode: "' . esc_js( __( 'QRcode', 'vulcano' ) ) . '",
		clear: "' . esc_js( __( 'Clear', 'vulcano' ) ) . '",
		latitude: "' . esc_js( __( 'Latitude', 'vulcano' ) ) . '",
		longitude: "' . esc_js( __( 'Longitude', 'vulcano' ) ) . '",
		zoom: "' . esc_js( __( 'Zoom', 'vulcano' ) ) . '",
		width: "' . esc_js( __( 'Width', 'vulcano' ) ) . '",
		height: "' . esc_js( __( 'Height', 'vulcano' ) ) . '",
		maptype: "' . esc_js( __( 'Map type', 'vulcano' ) ) . '",
		ROADMAP: "' . esc_js( __( 'ROADMAP', 'vulcano' ) ) . '",
		SATELLITE: "' . esc_js( __( 'SATELLITE', 'vulcano' ) ) . '",
		HYBRID: "' . esc_js( __( 'HYBRID', 'vulcano' ) ) . '",
		TERRAIN: "' . esc_js( __( 'ROADMAP', 'vulcano' ) ) . '",
		TERRAIN: "' . esc_js( __( 'TERRAIN', 'vulcano' ) ) . '",
		address: "' . esc_js( __( 'Address', 'vulcano' ) ) . '",
		kml: "' . esc_js( __( 'Kml', 'vulcano' ) ) . '",
		kmlautofit: "' . esc_js( __( 'Kml autofit', 'vulcano' ) ) . '",
		marker: "' . esc_js( __( 'Marker', 'vulcano' ) ) . '",
		markerimage: "' . esc_js( __( 'Marker image', 'vulcano' ) ) . '",
		traffic: "' . esc_js( __( 'Traffic', 'vulcano' ) ) . '",
		bike: "' . esc_js( __( 'Bike', 'vulcano' ) ) . '",
		fusion: "' . esc_js( __( 'Fusion', 'vulcano' ) ) . '",
		infowindow: "' . esc_js( __( 'Info window', 'vulcano' ) ) . '",
		infowindowdefault: "' . esc_js( __( 'Info window default', 'vulcano' ) ) . '",
		hidecontrols: "' . esc_js( __( 'Hide controls', 'vulcano' ) ) . '",
		scale: "' . esc_js( __( 'Scale', 'vulcano' ) ) . '",
		scrollwheel: "' . esc_js( __( 'Scrollwheel', 'vulcano' ) ) . '",
		map: "' . esc_js( __( 'Map', 'vulcano' ) ) . '",
		accordion: "' . esc_js( __( 'Accordion', 'vulcano' ) ) . '",
		accordions_id: "' . esc_js( __( 'Accordion id', 'vulcano' ) ) . '",
		childs: "' . esc_js( __( 'Childs', 'vulcano' ) ) . '",
		grid: "' . esc_js( __( 'Grid', 'vulcano' ) ) . '",
		columns: "' . esc_js( __( 'Columns', 'vulcano' ) ) . '",
		tabs: "' . esc_js( __( 'Tabs', 'vulcano' ) ) . '",
		icon: "' . esc_js( __( 'Icon', 'vulcano' ) ) . '",
	}
}});';
