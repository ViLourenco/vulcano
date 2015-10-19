/*global tinymce */
(function() {

	/**
	 * Add the shortcodes downdown.
	 */
	tinymce.PluginManager.add( 'vulcano_shortcodes', function( editor ) {
		var ed      = tinymce.activeEditor;
		var vulcano_ui = new Vulcano_Shortcode_UI( editor, ed );

		editor.addButton(
			'vulcano', {
				text: ed.getLang( 'vulcano.shortcode_title' ),
				type: 'menubutton',
				menu: [ {
					text   : ed.getLang( 'vulcano.button' ),
					onclick: function() {
						vulcano_ui.button();
					}
				}, {
					text   : ed.getLang( 'vulcano.group_button' ),
					onclick: function() {
						vulcano_ui.group_button();
					}
				}, {
					text   : ed.getLang( 'vulcano.alert' ),
					onclick: function() {
						vulcano_ui.alert();
					}
				}, {
					text   : ed.getLang( 'vulcano.label' ),
					onclick: function() {
						vulcano_ui.label();
					}
				}, {
					text   : ed.getLang( 'vulcano.badge' ),
					onclick: function() {
						vulcano_ui.badge();
					}
				}, {
					text   : ed.getLang( 'vulcano.icon' ),
					onclick: function() {
						vulcano_ui.icon();
					}
				}, {
					text   : ed.getLang( 'vulcano.well' ),
					onclick: function() {
						vulcano_ui.well();
					}
				}, {
					text   : ed.getLang( 'vulcano.table' ),
					onclick: function() {
						vulcano_ui.table();
					}
				}, {
					text   : ed.getLang( 'vulcano.grid' ),
					onclick: function() {
						vulcano_ui.grids();
					}
				}, {
					text   : ed.getLang( 'vulcano.progress_bar' ),
					onclick: function() {
						vulcano_ui.progress();
					}
				}, {
					text   : ed.getLang( 'vulcano.panel' ),
					onclick: function() {
						vulcano_ui.panel();
					}
				}, {
					text   : ed.getLang( 'vulcano.tabs' ),
					onclick: function() {
						vulcano_ui.tabs();
					}
				}, {
					text   : ed.getLang( 'vulcano.accordion' ),
					onclick: function() {
						vulcano_ui.accordion();
					}
				}, {
					text   : ed.getLang( 'vulcano.tooltip' ),
					onclick: function() {
						vulcano_ui.tooltip();
					}
				}, {
					text   : ed.getLang( 'vulcano.map' ),
					onclick: function() {
						vulcano_ui.map();
					}
				}, {
					text   : ed.getLang( 'vulcano.clear' ),
					onclick: function() {
						vulcano_ui.clear();
					}
				}, {
					text   : ed.getLang( 'vulcano.qrcode' ),
					onclick: function() {
						vulcano_ui.qrcode();
					}
				} ]
			} );
	} );
})();

function Vulcano_Shortcode_UI( _editor, _ed ) {
	var editor = _editor;
	var ed     = _ed;

	this.button = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.button' ),
			body    : [ {
				type : 'textbox',
				name : 'text',
				label: ed.getLang( 'vulcano.text' )
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'vulcano.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'vulcano.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'vulcano.danger' ),
					value: 'danger'
				}, {
					text : ed.getLang( 'vulcano.link' ),
					value: 'link'
				} ]
			}, {
				type  : 'listbox',
				name  : 'size',
				label : ed.getLang( 'vulcano.size' ),
				values: [ {
					text : ed.getLang( 'vulcano.lg' ),
					value: 'lg'
				}, {
					text : ed.getLang( 'vulcano.sm' ),
					value: 'sm'
				}, {
					text : ed.getLang( 'vulcano.xs' ),
					value: 'xs'
				} ]
			}, {
				type : 'textbox',
				name : 'link',
				id   : 'link_button_input',
				label: ed.getLang( 'vulcano.link' )
			}, {
				type : 'textbox',
				name : 'class_css',
				id   : 'class_button_input',
				label: ed.getLang( 'vulcano.class' )
			}, {
				type : 'textbox',
				name : 'tooltip',
				label: ed.getLang( 'vulcano.tooltip' )
			}, {
				type  : 'listbox',
				name  : 'direction',
				label : ed.getLang( 'vulcano.direction' ),
				values: [ {
					text : ed.getLang( 'vulcano.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'vulcano.top' ),
					value: 'top'
				}, {
					text : ed.getLang( 'vulcano.right' ),
					value: 'right'
				}, {
					text : ed.getLang( 'vulcano.left' ),
					value: 'left'
				}, {
					text : ed.getLang( 'vulcano.bottom' ),
					value: 'bottom'
				} ]
			} ],
			onsubmit: function( e ) {
				// From textfield fields
				var text      = isEmpty( e.data.text ) ? '' : e.data.text,
				    link      = isEmpty( e.data.link ) ? '' : 'link="' + e.data.link + '" ',
				    class_css = isEmpty( e.data.class_css ) ? '' : 'class="' + e.data.class_css + '" ',
				    tooltip   = isEmpty( e.data.tooltip ) ? '' : 'tooltip="' + e.data.tooltip + '" ';
				// From dropdown fields
				var type      = 'type="' + e.data.type + '" ',
				    size      = 'size="' + e.data.size + '" ',
				    direction = e.data.direction == 'default' ? '' : 'direction="' + e.data.direction + '" ';

				editor.insertContent( '[button ' + type + size + link + class_css + tooltip + direction + ']' + text + '[/button]' );
			}
		} );

		jQuery( '#class_button_input' ).attr( 'placeholder', 'hover' );
		jQuery( '#link_button_input' ).attr( 'placeholder', 'http://www.site.com' );

	};

	this.group_button = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.group_button' ),
			minWidth: 300,
			body    : [ {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.vertical' ),
					value: 'vertical'
				}, {
					text : ed.getLang( 'vulcano.group' ),
					value: 'group'
				} ]
			}, {
				type  : 'listbox',
				name  : 'size',
				label : ed.getLang( 'vulcano.size' ),
				values: [ {
					text : ed.getLang( 'vulcano.lg' ),
					value: 'lg'
				}, {
					text : ed.getLang( 'vulcano.sm' ),
					value: 'sm'
				}, {
					text : ed.getLang( 'vulcano.xs' ),
					value: 'xs'
				} ]
			}, {
				type   : 'checkbox',
				name   : 'justified',
				label  : ed.getLang( 'vulcano.justified' ),
				checked: false
			} ],
			onsubmit: function( e ) {
				var type      = 'type="' + e.data.type + '" ',
				    size      = 'size="' + e.data.size + '" ',
				    justified = 'justified="' + e.data.justified + '" ';
				editor.insertContent( '[button_group ' + type + size + justified + ']  #content  [/button_group]' );
			}
		} );
	};

	this.alert = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.alert' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'vulcano.content' )
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'vulcano.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'vulcano.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'vulcano.danger' ),
					value: 'danger'
				} ]
			}, {
				type   : 'checkbox',
				name   : 'close',
				label  : ed.getLang( 'vulcano.close' ),
				checked: false
			} ],
			onsubmit: function( e ) {
				var type  = 'type="' + e.data.type + '" ',
				    close = true === e.data.close ? 'close="' + e.data.close + '" ' : '';

				editor.insertContent( '[alert ' + type + close + ']' + e.data.content + '[/alert]' );
			}
		} );
	};

	this.label = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.label' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'vulcano.content' )
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'vulcano.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'vulcano.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'vulcano.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'vulcano.danger' ),
					value: 'danger'
				} ]
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[label ' + type + ']' + e.data.content + '[/label]' );
			}
		} );
	};

	this.badge = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.badge' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'vulcano.content' )
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[badge ]' + e.data.content + '[/badge]' );
			}
		} );
	};

	this.grids = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.grid' ),
			body    : [ {
				type : 'textbox',
				name : 'columns',
				label: ed.getLang( 'vulcano.columns' )
			}, {
				type : 'textbox',
				name : 'rows',
				label: ed.getLang( 'vulcano.rows' )
			} ],
			onsubmit: function( e ) {
				var rows          = e.data.rows,
				    columns       = e.data.columns > 12 ? 12 : e.data.columns,
				    final_content = '';

				for( var r = 0; r < rows; r ++ ) {
					final_content += '[row] \n';
					for( var c = 0; c < columns; c ++ ) {
						final_content += '[col class="col-md-' + Math.floor( 12 / columns ) + '"] Column# ' + c + ' Row# ' + r + ' [/col]\n';
					}
					final_content += '[/row] \n';
				}

				final_content = final_content.replace( /\n/ig, "<br>" );
				editor.insertContent( final_content );
			}
		} );
	};

	this.icon = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.icon' ),
			minWidth: 200,
			body    : [ {
				type : 'textbox',
				name : 'icon',
				label: ed.getLang( 'vulcano.icon' ),
			} ],

			onsubmit: function( e ) {
				var icon = 'type="' + e.data.icon + '" ';
				editor.insertContent( '[icon ' + icon + ']' );
			}
		} );
	};

	this.well = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.well' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'vulcano.content' )
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[well]' + e.data.content + '[/well]' );
			}
		} );
	};

	this.table = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.table' ),
			minWidth: 500,
			body    : [ {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.striped' ),
					value: 'striped'
				}, {
					text : ed.getLang( 'vulcano.hover' ),
					value: 'hover'
				}, {
					text : ed.getLang( 'vulcano.condensed' ),
					value: 'condensed'
				}, {
					text : ed.getLang( 'vulcano.responsive' ),
					value: 'responsive'
				} ]
			}, {
				type   : 'checkbox',
				name   : 'border',
				label  : ed.getLang( 'vulcano.border' ),
				checked: false
			}, {
				type : 'textbox',
				name : 'cols',
				id   : 'cols_table_input',
				label: ed.getLang( 'vulcano.cols' ),
			}, {
				type : 'textbox',
				name : 'rows',
				id   : 'rows_table_input',
				label: ed.getLang( 'vulcano.rows' ),
			} ],
			onsubmit: function( e ) {
				var type   = 'type="' + e.data.type + '" ',
				    border = true === e.data.border ? 'border=true" ' : '',
				    cols   = 'cols="' + e.data.cols + '" ',
				    rows   = 'rows="' + e.data.rows + '" ';

				editor.insertContent( '[table ' + type + border + cols + rows + ' ] ' );
			}
		} );

		jQuery( '#cols_table_input' ).attr( 'placeholder', 'Column 1, Column 2, ...' );
		jQuery( '#rows_table_input' ).attr( 'placeholder', 'Column 1 row 1, Column 2 row1 | Column 1 row 2' );
	};

	this.progress = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.progress' ),
			body    : [ {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.success' ),
					value: 'striped'
				}, {
					text : ed.getLang( 'vulcano.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'vulcano.warning' ),
					value: 'warning '
				}, {
					text : ed.getLang( 'vulcano.danger' ),
					value: 'danger'
				} ]
			}, {
				type  : 'listbox',
				name  : 'class_css',
				label : ed.getLang( 'vulcano.class' ),
				values: [ {
					text : ed.getLang( 'vulcano.progress_striped' ),
					value: 'progress-striped'
				}, {
					text : ed.getLang( 'vulcano.active' ),
					value: 'active'
				} ]
			}, {
				type : 'slider',
				name : 'value',
				label: ed.getLang( 'vulcano.value_progress' ),
			}, {
				type : 'textbox',
				name : 'max',
				label: ed.getLang( 'vulcano.max' ),
				value: '100'
			}, {
				type : 'textbox',
				name : 'min',
				label: ed.getLang( 'vulcano.min' ),
				value: '0'
			} ],
			onsubmit: function( e ) {
				var type      = 'type="' + e.data.type + '" ',
				    class_css = 'class="' + e.data.class + '" ',
				    value     = 'value="' +((e.data.value * 0.01) * e.data.max - e.data.min) + '" ',
				    max       = 'max="' + e.data.max + '" ',
				    min       = 'min="' + e.data.min + '" ';

				editor.insertContent( '[progress ' + type + class_css + value + max + min + ' ] ' );
			}
		} );
	};

	this.panel = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.panel' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'vulcano.content' )
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'vulcano.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'vulcano.primary' ),
					value: 'primary'
				}, {
					text : ed.getLang( 'vulcano.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'vulcano.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'vulcano.danger' ),
					value: 'danger'
				} ]
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';

				editor.insertContent( '[panel '+ type +'][panel_body]' + e.data.content + '[/panel_body][/panel]' );
			}
		} );
	};

	this.tabs = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.tabs' ),
			body    : [ {
				type : 'textbox',
				name : 'tabs',
				id   : 'childs_tabs_input',
				label: ed.getLang( 'vulcano.childs' ),
			} ],
			onsubmit: function( e ) {
				var tabs          = e.data.tabs,
				    tabs_title    = '',
				    tabs_content  = '',
				    final_content = '';

				for( var i = 0; i < tabs; i ++ ) {
					tabs_title += ' [tab id="tab_id_' + i + '" ' +( 0 === i ? 'active = "true"' : "") + ' ]Title #' + i + ' [/tab] \n ';
					tabs_content += ' [tab_content id="tab_id_' + i + '" ' +( 0 === i ? 'active = "true"' : "") + ' ]' + 'content #' + i + '[/tab_content] \n';
				}

				//formating the output to break line
				final_content += '[tabs]\n' + tabs_title + '[/tabs]\n';
				final_content += '[tab_contents]\n' + tabs_content + '[/tab_contents]\n';
				final_content = final_content.replace( /\n/ig, '<br>' );

				editor.insertContent( final_content );

			}
		} );
		jQuery( '#childs_tabs_input' ).attr( 'placeholder', '3' );
	};

	this.accordion = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.accordion' ),
			body    : [ {
				type : 'textbox',
				name : 'accordions_id',
				label: ed.getLang( 'vulcano.accordions_id' ),
				value: 'vulcano-accordion'
			}, {
				type : 'textbox',
				name : 'childs',
				id   : 'childs_accordion_input',
				label: ed.getLang( 'vulcano.childs' ),
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'vulcano.type' ),
				values: [ {
					text : ed.getLang( 'vulcano.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'vulcano.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'vulcano.primary' ),
					value: 'primary'
				}, {
					text : ed.getLang( 'vulcano.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'vulcano.warning' ),
					value: 'warning '
				}, {
					text : ed.getLang( 'vulcano.danger' ),
					value: 'danger '
				} ]
			} ],
			onsubmit: function( e ) {
				var type          = ' type="' + e.data.type + '" ',
				    accordions_id = ' id="' + e.data.accordions_id + '" ',
				    childs        = e.data.childs <= 0 ? 1 : e.data.childs,
				    accordions    = '',
				    final_content = '';

				for( var i = 0; i < childs; i ++ ) {
					accordions += '[accordion id=accordion#' + i + ' title="title#' + i + '" ' + ( 0 === i ? " active='true' " : " " ) + ' ]' + 'content #' + i + ' [/accordion] \n';
				}

				final_content += ' [accordions' + accordions_id + ' ] \n';
				final_content += accordions;
				final_content += '[/accordions] \n';
				final_content = final_content.replace( /\n/ig, '<br>' );
				editor.insertContent( final_content );
			}
		} );
		jQuery( '#childs_accordion_input' ).attr( 'placeholder', '3' );
	};

	this.tooltip = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.tooltip' ),
			body    : [ {
				type : 'textbox',
				name : 'title',
				label: ed.getLang( 'vulcano.title' )
			}, {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'vulcano.content' )
			}, {
				type : 'textbox',
				name : 'link',
				id   : 'link_tooltip_input',
				label: ed.getLang( 'vulcano.link' )
			}, {
				type  : 'listbox',
				name  : 'direction',
				label : ed.getLang( 'vulcano.direction' ),
				values: [ {
					text : ed.getLang( 'vulcano.top' ),
					value: 'top'
				}, {
					text : ed.getLang( 'vulcano.right' ),
					value: 'right'
				}, {
					text : ed.getLang( 'vulcano.left' ),
					value: 'left'
				}, {
					text : ed.getLang( 'vulcano.bottom' ),
					value: 'success'
				} ]
			} ],
			onsubmit: function( e ) {
				var direction = 'direction="' + e.data.direction + '" ',
				    title     = 'title="' + e.data.title + '" ',
				    link      = 'link="' + e.data.link + '" ';

				editor.insertContent( ' [tooltip ' + title + direction + link + ']' + e.data.content + '[/tooltip]' );

			}
		} );

		jQuery( '#link_tooltip_input' ).attr( 'placeholder', 'http://www.site.com' );
	};

	this.clear = function() {
		editor.insertContent( '[clear]' );
	};

	this.qrcode = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'vulcano.qrcode' ),
			body    : [ {
				type : 'textbox',
				name : 'data',
				id   : 'data_qr_input',
				label: ed.getLang( 'vulcano.data' )
			}, {
				type : 'textbox',
				name : 'size',
				label: ed.getLang( 'vulcano.size' ),
				value: '150x150'
			}, {
				type : 'textbox',
				name : 'title',
				label: ed.getLang( 'vulcano.title' )
			} ],
			onsubmit: function( e ) {
				var data  = 'data="' + e.data.data + '" ',
				    size  = 'size="' + e.data.size + '" ',
				    title = 'title="' + e.data.title + '" ';

				editor.insertContent( ' [qrcode ' + data + size + title + ']' );
			}
		} );

		jQuery( '#data_qr_input' ).attr( 'placeholder', 'http://www.site.com' );
	};

	this.map = function() {
		editor.windowManager.open( {
			maxHeight: 500,
			minHeight: 300,
			maxWidth : 700,
			minWidth : 450,
			title    : ed.getLang( 'vulcano.map' ),
			id       : 'map-shortcode-panel',
			body     : [ {

				type : 'textbox',
				name : 'id',
				value: 'vulcano_gmap',
				label: ed.getLang( 'vulcano.id' )
			}, {
				type : 'textbox',
				name : 'latitude',
				id   : 'lat_map_input',
				label: ed.getLang( 'vulcano.latitude' )
			}, {
				type : 'textbox',
				name : 'longitude',
				id   : 'long_map_input',
				label: ed.getLang( 'vulcano.longitude' )
			}, {
				type : 'textbox',
				name : 'zoom',
				value: '10',
				label: ed.getLang( 'vulcano.zoom' )
			}, {
				type : 'textbox',
				name : 'width',
				value: '600',
				label: ed.getLang( 'vulcano.width' )
			}, {
				type : 'textbox',
				name : 'height',
				value: '400',
				label: ed.getLang( 'vulcano.height' )
			}, {
				type  : 'listbox',
				name  : 'maptype',
				label : ed.getLang( 'vulcano.maptype' ),
				values: [ {
					text : ed.getLang( 'vulcano.ROADMAP' ),
					value: 'ROADMAP'
				}, {
					text : ed.getLang( 'vulcano.SATELLITE' ),
					value: 'SATELLITE'
				}, {
					text : ed.getLang( 'vulcano.HYBRID' ),
					value: 'HYBRID'
				}, {
					text : ed.getLang( 'vulcano.TERRAIN' ),
					value: 'TERRAIN'
				} ]
			}, {
				type : 'textbox',
				name : 'address',
				label: ed.getLang( 'vulcano.address' )
			}, {
				type : 'textbox',
				name : 'kml',
				id   : 'kml_map_input',
				label: ed.getLang( 'vulcano.kml' )
			}, {
				type   : 'checkbox',
				name   : 'kmlautofit',
				label  : ed.getLang( 'vulcano.kmlautofit' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'marker',
				label  : ed.getLang( 'vulcano.marker' ),
				checked: false
			}, {
				type : 'textbox',
				name : 'markerimage',
				id   : 'markerimg_map_input',
				label: ed.getLang( 'vulcano.markerimage' )
			}, {
				type   : 'checkbox',
				name   : 'traffic',
				label  : ed.getLang( 'vulcano.traffic' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'bike',
				label  : ed.getLang( 'vulcano.bike' ),
				checked: false
			}, {
				type : 'textbox',
				name : 'fusion',
				label: ed.getLang( 'vulcano.fusion' ),

			}, {
				type : 'textbox',
				name : 'infowindow',
				label: ed.getLang( 'vulcano.infowindow' ),

			}, {
				type   : 'checkbox',
				name   : 'infowindowdefault',
				label  : ed.getLang( 'vulcano.infowindowdefault' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'hidecontrols',
				label  : ed.getLang( 'vulcano.hidecontrols' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'scale',
				label  : ed.getLang( 'vulcano.scale' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'scrollwheel',
				label  : ed.getLang( 'vulcano.scrollwheel' ),
				checked: true
			} ],
			onsubmit : function( e ) {
				var id                = ' id="' + e.data.id + '" ',
				    latitude          = '' === e.data.latitude ? '' : ' latitude="' + e.data.latitude + '" ',
				    longitude         = '' === e.data.longitude ? '' : ' longitude="' + e.data.longitude + '" ',
				    zoom              = ' zoom="' + e.data.zoom + '" ',
				    width             = ' width="' + e.data.width + '" ',
				    height            = ' height="' + e.data.height + '" ',
				    maptype           = ' maptype="' + e.data.maptype + '" ',
				    address           = ' address="' + e.data.address + '" ',
				    kml               = ' kml="' + e.data.kml + '" ',
				    kmlautofit        = ' kmlautofit="' + e.data.kmlautofit + '" ',
				    marker            = ' marker="' + e.data.marker + '" ',
				    markerimage       = ' markerimage="' + e.data.markerimage + '" ',
				    traffic           = ' traffic="' + e.data.traffic + '" ',
				    fusion            = ' fusion="' + e.data.fusion + '" ',
				    bike              = ' bike="' + e.data.bike + '" ',
				    infowindow        = ' infowindow="' + e.data.infowindow + '" ',
				    infowindowdefault = ' infowindowdefault="' + e.data.infowindowdefault + '" ',
				    hidecontrols      = ' hidecontrols="' + e.data.hidecontrols + '" ',
				    scale             = ' scale="' + e.data.scale + '" ',
				    scrollwheel       = ' scrollwheel="' + e.data.scrollwheel + '" ';

				editor.insertContent( ' [map' + id + latitude + longitude + zoom + width + height + maptype + address +
					kml + kmlautofit + marker + markerimage + traffic + fusion + bike + infowindow + infowindowdefault + scale + scrollwheel + ']' );
			}
		} );

		jQuery( '#lat_map_input' ).attr( 'placeholder', '-25.363882' );
		jQuery( '#long_map_input' ).attr( 'placeholder', '131.044922' );
		jQuery( '#markerimg_map_input' ).attr( 'placeholder', 'http://.../beachflag.png' );
		jQuery( '#kml_map_input' ).attr( 'placeholder', 'http://.../ggeoxml/cta.kml' );
	};
}

/**
 * Check is empty.
 *
 * @param  {string} value
 * @return {bool}
 */
this.isEmpty = function( value ) {
	value = value.toString();

	if ( 0 !== value.length ) {
		return false;
	}

	return true;
};
