



var Grapher = new Object( );

Grapher = {
	
	points: [],
	range: [-Math.PI * 2, Math.PI * 2],
	resolution: .01,
	zoom_level: .5,
	max_zoom_level: 2,
	min_zoom_level: .1,
	draw_color: 'black',
	origin: function( )
	{
		var plane = this.plane( );
		var width = as_number( plane.style.width );
		var height = as_number( plane.style.height );
		var x_origin = width / 2;
		var y_origin = height / 2;
		return [x_origin, y_origin];
	},
	plane: function( )
	{
		if ( document.getElementById )
		{
			return document.getElementById( 'plane' );
		}
		else
		{
			return false;
		}
	},
	plot_point: function( x, y )
	{
		x *= this.zoom_level * 100; x += this.origin( )[0];
		y *= this.zoom_level * 100; y += this.origin( )[1];
		this.points.push( [x, y] );
	},
	generate_points: function( fx, for_a, point )
	{
		if ( typeof( axis ) == 'undefined' )
		{
			axis = 0;
		}
		if ( for_a != 0 && for_a != 2 )
		{
			fx = fx.replace( /y/gi, 'x' ); /* Replace y with x, since y = x in For y mode */
		}
		var where_pattern = /(?: )*where(?: )+(.+)/gi;
		if ( where_pattern.test( fx ) )
		{
			var variables = RegExp.$1.toString( ).split( ',' );
			for ( var i = 0; i < variables.length; ++i )
			{
				eval( variables[i] );
			}
			fx = fx.replace( where_pattern, '' );
		}
		fx = fx.toLowerCase( );
		var forms = [
			/([a-z]+)(?: )+([a-z0-9\.]+)/gi, /* Transforms sin x into sin(x) */
			/\[([^\]]+)\]/gi, /* Transforms [x] into floor(x) */
			/\|([^\|]+)\|/gi, /* Transforms |x| into abs(x) */
			/([0-9\.]+|\b(?:x|y))([a-z]+)/g, /* Turns 2x into 2*x */
			/([a-z0-9\.]+)(?:\^|\*\*)([a-z0-9\.]+)/gi, /* Transforms x^2 or x**2 into pow( x, 2 ) */
			/\(([^\)]+)\)(?:\^|\*\*)([a-z0-9\.]+)/gi, /* Transforms x^2 or x**2 into pow( x, 2 ) */
			/(alert|confirm|prompt|open|function)/i, /* Remove alerts, confirms, prompts, window opens, and functions for no disturbance */
			/([^=]+=)/ /* Remove any y = or x = since the list decides what to use */
		];
		var transform_to = [
			'$1($2)',
			'floor($1)',
			'abs($1)',
			'$1*$2',
			'pow($1,$2)',
			'pow($1,$2)',
			'',
			''
		];
		for ( var i = 0; i < forms.length; ++i )
		{
			fx = fx.replace( forms[i], transform_to[i] );
		}
		if ( typeof( x ) == 'undefined' )
		{
			var x = this.range[0];
		}
		if ( typeof( y ) == 'undefined' )
		{
			var y = 0;
		}
		while ( x <= this.range[1] )
		{
			try
			{
				y = eval(
					'with ( Math ) {'
					+
						fx
					+
					'}'
				);
			}
			catch ( error )
			{
				this.trigger_error( );
			}
			if ( !isNaN( y ) )
			{
				if ( for_a == 0 ) /* For y */
				{
					this.plot_point( x, -y );
				}
				else if ( for_a == 1 ) /* For x */
				{
					this.plot_point( y, -x );
				}
				else if ( for_a == 2 ) /* For +/- y */
				{
					this.plot_point( x, -y );
					this.plot_point( x, y );
				}
				else if ( for_a == 3 ) /* For +/- x */
				{
					this.plot_point( -y, x );
					this.plot_point( y, x );
				}
			}
			x += this.resolution;
			
		}
	},
	trigger_error: function( reason )
	{
		var error_div = document.createElement( 'div' );
		error_div.setAttribute( 'id', 'error' );
		if ( typeof( reason ) == 'undefined' )
		{
			reason = '';
		}
		else
		{
			reason = ': ' + reason;
		}
		error_div.appendChild( document.createTextNode( 'Fatal Error' + reason ) );
		this.plane( ).appendChild( error_div );
	},
	draw: function( )
	{
		var i = 0;
		while ( i < this.points.length ) /* Massive act here. Points are in big number! */
		{
			var point = this.points[i];
			var x = point[0], y = point[1];
			var div = document.createElement( 'div' );
			div.style.left = x + 'px';
			if ( /MSIE 6|(?:5.5)[^(?:Opera)]/i.test( navigator.userAgent ) ) /* Fix for IE 6 and IE 5.5 */
			{
				div.style.marginTop = -12 + 'px';
			}
			div.style.top = y + 'px';
			div.className = 'point';
			div.style.borderColor = this.draw_color;
			div.onmouseover = function( )
			{
				var x = as_number( this.style.left );
				var y = as_number( this.style.top );
				var x_original = ( ( x - Grapher.origin( )[0] ) / Grapher.zoom_level ) / 100;
				var y_original = ( ( Grapher.origin( )[1] - y ) / Grapher.zoom_level ) / 100;
				var coordinates_info = 'x = ' + x_original.toFixed( 3 ) + ',' +
				'y = ' + y_original.toFixed( 3 );
				window.status = coordinates_info;
				var div = document.getElementById( 'coordinates' );
				if ( div.childNodes.length > 0 )
				{
					for ( var i = 0; i < div.childNodes.length; ++i )
					{
						div.childNodes[i].nodeValue = '';
					}
				}
				div.appendChild( document.createTextNode( coordinates_info ) );
			}
			this.plane( ).appendChild( div );
			i++;
		}
	},
	form_grid: function( )
	{
		var x_origin = this.origin( )[0], y_origin = this.origin( )[1];
		var plane_width = x_origin * 2, plane_height = y_origin * 2;
		var grid = Math.PI / ( this.zoom_level * 2 );
		var i = 0, j = 0;
		while ( ( grid * i ) < plane_width || ( grid * j ) < plane_height )
		{
			var x_line = grid * i, y_line = grid * j;
			var x_original = ( ( x_line / this.zoom_level ) / 100 );
			var y_original = ( ( y_line / this.zoom_level ) / 100 );
			var font_size = as_number( document.getElementById( 'plane' ).style.fontSize );
			var default_border_style = '1px solid #cccccc';
			var x_pos = ( plane_height / 2 ) + 4;
			var y_pos = y_line + y_origin - 6;
			var x_gridline = document.createElement( 'div' );
			x_gridline.style.left = x_line + 'px';
			if ( Math.floor( x_line ) == Math.floor( x_origin ) )
			{
				x_gridline.style.borderLeft = '2px solid blue';
			}
			else if ( Math.round( Math.abs( x_line ) % ( 2 * Math.PI ) ) == Math.round( Math.PI ) )
			{
				x_gridline.style.borderLeft = '1px solid gray';
			}
			else
			{
				x_gridline.style.borderLeft = default_border_style;
			}
			x_gridline.className = 'grid-x';
			var y_gridline = document.createElement( 'div' );
			y_gridline.style.top = y_line + 'px';
			if ( Math.floor( y_line ) == Math.floor( y_origin ) )
			{
				y_gridline.style.borderTop = '2px solid red';
				y_gridline.style.zIndex = 2;
			}
			else
			{
				y_gridline.style.borderTop = default_border_style;
			}
			y_gridline.className = 'grid-y';
			if ( x_line < plane_width )
			{
				this.plane( ).appendChild( x_gridline );
			}
			if ( y_line < plane_height )
			{
				this.plane( ).appendChild( y_gridline );
			}
			var x_info = document.createElement( 'div' );
			x_info.style.left = x_line + x_origin - font_size / ( font_size / 10 ) + 'px';
			x_info.style.top = x_pos + 'px';
			x_info.className = 'label-x';
			x_info.setAttribute( 'title', x_original );
			var neg_x_info = document.createElement( 'div' );
			neg_x_info.style.right = x_line + x_origin - font_size / ( font_size / 10 ) + 'px';
			neg_x_info.style.top = x_pos + 'px';
			neg_x_info.className = 'label-x';
			neg_x_info.setAttribute( 'title', -x_original );
			var y_info = document.createElement( 'div' );
			y_info.style.bottom = y_pos + 'px';
			y_info.style.left = x_origin + 6 + 'px';
			y_info.className = 'label-y';
			y_info.setAttribute( 'title', y_original );
			var neg_y_info = document.createElement( 'div' );
			neg_y_info.style.top = y_pos + 'px';
			neg_y_info.style.left = x_origin + 6 + 'px';
			neg_y_info.className = 'label-y';
			neg_y_info.setAttribute( 'title', -y_original );
			if ( Math.ceil( x_original ) != 0 ||
				Math.ceil( y_original ) != 0 ) /* Ignore (0,0) there is no need for a label there */
			{
				var x_label = x_original.toFixed( 1 ).toString( );
				var y_label = y_original.toFixed( 1 ).toString( );
				if ( x_label.indexOf( '.' ) < 0 )
				{
					x_label += '.0';
				}
				if ( y_label.indexOf( '.' ) < 0 )
				{
					y_label += '.0';
				}
				if ( x_line < ( plane_width / 2 ) )
				{
					x_info.appendChild( document.createTextNode( x_label ) );
					neg_x_info.appendChild( document.createTextNode( '-' + x_label ) );
					this.plane( ).appendChild( x_info );
					this.plane( ).appendChild( neg_x_info );
				}
				if ( y_line < ( plane_height / 2 ) )
				{
					y_info.appendChild( document.createTextNode( y_label ) );
					neg_y_info.appendChild( document.createTextNode( '-' + y_label ) );
					this.plane( ).appendChild( y_info );
					this.plane( ).appendChild( neg_y_info );
				}
			}
			var inc = ( this.zoom_level / 4 ) * 100;
			i += inc; j += inc;
		}
	}
	
}

/* More Math functions */

Math.sinh = function( x )
{
	return ( ( Math.pow( Math.E, x ) - Math.pow( Math.E, -x ) ) / 2 );
}

Math.cosh = function( x )
{
	return ( ( Math.pow( Math.E, x ) + Math.pow( Math.E, -x ) ) / 2 );
}

Math.tanh = function( x )
{
	return ( Math.sinh( x ) / Math.cosh( x ) );
}

Math.coth = function( x )
{
	return ( Math.cosh( x ) / Math.sinh( x ) );
}

Math.sech = function( x )
{
	return ( 1 / Math.cosh( x ) );
}

Math.csch = function( x )
{
	return ( 1 / Math.sinh( x ) );
}

Math.hypot = function( )
{
	var sum = 0;
	for ( var i = 0; i < arguments.length; ++i )
	{
		var x = arguments[i];
		sum += x * x;
	}
	if ( x < 0 && arguments.length == 1 )
	{
		return -Math.sqrt( sum );
	}
	else
	{
		return Math.sqrt( sum );
	}
}

Math.csc = function( x )
{
	return ( 1 / Math.sin( x ) );
}

Math.sec = function( x )
{
	return ( 1 / Math.cos( x ) );
}

Math.cot = function( x )
{
	return ( 1 / Math.tan( x ) );
}

Math.radical = function( x ) /* Alias of Math.sqrt */
{
	return Math.sqrt( x );
}

Math.sgn = function( x )
{
	if ( x == 0 )
	{
		return 0;
	}
	if ( eval( x ) < 0 )
	{
		return -1;
	}
	else
	{
		return 1;
	}
}

Math.pi = Math.PI;
Math.e = Math.E;
var PI = Math.PI;
Math.i = 0;

/* More location functions */

location.http_GET = function( )
{
	var url = location.href;
	var request = url.substr( url.indexOf( '?' ) + 1, url.length );
	var request_sub = request.split( '&' );
	for ( var i = 0; i < request_sub.length; ++i )
	{
		var each = request_sub[i];
		each = each.replace( /\+/g, '%20' );
		var name = decodeURIComponent(
			each.substr( 0, each.indexOf( '=' ) )
		);
		var value = decodeURIComponent(
			each.substr( each.indexOf( '=' ) + 1, each.length )
		);
		value = value.replace( /#.*/i, '' );
		if ( arguments[0] == name )
		{
			return value;
		}
	}
	return false;
}

location.update = function( getvar )
{
	var url = location.href.replace( /#.*/g, '' );
	if ( url.indexOf( '?' ) > -1 )
	{
		var pattern = new RegExp( getvar.split( '=' )[0] + '=[^=&]*' );
		if ( pattern.test( url ) )
		{
			url = url.replace( pattern,
			getvar.split( '=' )[0] + '=' + getvar.split( '=' )[1] );
		}
		else
		{
			url += '&' + getvar;
		}
	}
	else
	{
		url += '?' + getvar;
	}
	location.href = url;
	return false;
}

/* Some more functions */

var as_number = function( str )
{
	return str.match( /[0-9\.]+/ );
}

var init = function( )
{
	if ( !document.getElementById )
	{
		return false;
	}
	if ( location.http_GET( 'zoom' ) )
	{
		var zoom = parseFloat( location.http_GET( 'zoom' ) );
		if ( zoom <= Grapher.min_zoom_level )
		{
			zoom = Grapher.min_zoom_level;
		}
		else if ( zoom > Grapher.max_zoom_level )
		{
			zoom = Grapher.max_zoom_level;
		}
		Grapher.zoom_level = zoom;
		document.getElementById( 'zoom' ).value = zoom;
	}
	if ( location.http_GET( 'range_x' ) && location.http_GET( 'range_y' ) )
	{
		document.getElementById( 'range_x' ).value = location.http_GET( 'range_x' );
		document.getElementById( 'range_y' ).value = location.http_GET( 'range_y' );
		Grapher.range = [
			Math.PI * parseFloat( eval( location.http_GET( 'range_x' ) ) ),
			Math.PI * parseFloat( eval( location.http_GET( 'range_y' ) ) )
		];
	}
	Grapher.form_grid( );
	if ( location.http_GET( 'color' ) )
	{
		var color = location.http_GET( 'color' );
		if ( /^[0-9]+,[0-9]+,[0-9]+$/.test( color ) )
		{
			color = 'rgb(' + color + ')';
		}
		Grapher.draw_color = color;
		document.getElementById( 'current-color' ).style.backgroundColor = color;
	}
	if ( location.http_GET( 'fx' ) && location.http_GET( 'axis' ) )
	{
		var fx = location.http_GET( 'fx' ).split( ';' );
		document.getElementById( 'axis' ).value = location.http_GET( 'axis' );
		var i = 0;
		var draw = window.setInterval( function( )
		{
			Grapher.generate_points( fx[i], location.http_GET( 'axis' ) );
			Grapher.draw( );
			++i;
			if ( i >= fx.length )
			{
				clearInterval( draw );
			}
		}, 1000 );
		document.getElementById( 'fx' ).value = fx.join( ';' );
		var prefix = ' - Function: ';
		if ( document.title || document.title.indexOf( prefix ) < 0 )
		{
			document.title += prefix + fx.join( ',' );
		}
		if ( location.href.indexOf( '#' ) < 0 )
		{
			location.href += '#plane';
		}
		document.getElementById( 'fx' ).focus( );
	}
	return false;
}

function make_changes( )
{
	if ( !document.getElementById )
	{
		return false;
	}
	if ( Math.abs( document.getElementById( 'range_x' ).value ) > 4
		|| document.getElementById( 'range_y' ).value > 4 )
	{
		if ( !confirm( 'A large range may make this proccess take longer than normal. Are you sure you want to graph this?' ) )
		{
			return false;
		}
	}
	return true;
}
function zoom( add )
{
	var increment_value = .1;
	var zoom_level = location.http_GET( 'zoom' ) ? location.http_GET( 'zoom' ) : Grapher.zoom_level;
	zoom_level = parseFloat( zoom_level );
	var new_value;
	if ( add )
	{
		if ( zoom_level <= Grapher.max_zoom_level )
		{
			new_value = ( zoom_level + increment_value );
		}
		else
		{
			new_value = Grapher.max_zoom_level;
		}
	}
	else
	{
		if ( zoom_level > Grapher.min_zoom_level )
		{
			new_value = ( zoom_level - increment_value );
		}
		else
		{
			new_value = Grapher.min_zoom_level;
		}
	}
	return location.update( 'zoom=' + new_value.toFixed( 1 ) );
}
function replace_variable( value )
{
	if ( !document.getElementById )
	{
		return false;
	}
	var equation = document.getElementById( 'fx' );
	if ( value == 0 || value == 2 ) /* If for y... */
	{
		equation.value = equation.value.replace( /y\b/gi, 'x' );
	}
	else if ( value == 1 || value == 3 ) /* If for x... */
	{
		equation.value = equation.value.replace( /x\b/gi, 'y' );
	}
}

if ( window.addEventListener )
{
	window.addEventListener( 'load', init, false );
}
else if ( window.attachEvent )
{
	window.attachEvent( 'onload', init );
}
