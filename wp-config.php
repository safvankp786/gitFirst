<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tijozoondia_db_2023' );

/** Database username */
define( 'DB_USER', 'tijozoondia_2023' );

/** Database password */
define( 'DB_PASSWORD', 'DOnJ(R6Qs&Ql' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tcQzrh84^b4%W<>:1]o5xs 24Rj,8 <LpFIS+Rx3?4zcU,;ONsr#6YE2mjhSysf^' );
define( 'SECURE_AUTH_KEY',  '7;zXZ8rH@`uX:6Bw>PQs#HMrpHCyINk/a<zW2o0$?H/yA9i)HFYFP3fc_/KS[Q**' );
define( 'LOGGED_IN_KEY',    '[WU92RuJ3dD0X}}`;b*B(is,%.}?qAr.o,4pAMyz?s@Oa5nKq.qtf36|K(:EyydT' );
define( 'NONCE_KEY',        'I<.o5$TC;X04x@2!PLz<kxH2+9YH~:{cK]K*7,x#uz{9RwPFuOmo3 4.=}NshE++' );
define( 'AUTH_SALT',        '493U`f6(uj=1X9H6zNQ5B:c33`  *J#g*<4hk=Y7*ZwC2t-7&`M#G4`LRy6l,Q;c' );
define( 'SECURE_AUTH_SALT', 'ec.ql)Ct(|9QK `mD**NpzvXim+*X~-)XbYnUen[^#NwTz-jA?=[1kNUTJ?ffh9V' );
define( 'LOGGED_IN_SALT',   '7UevhOp9kcr%pp]HP<KxihNt9y#WIv7{cf%Y/G{I/dl&pl5m&W21:PjC,F<ZCjn#' );
define( 'NONCE_SALT',       'xM: (qJ,%At7*QC8o4 ]81.B}a~QaKDOx@ecqQ?8[sS{X!j2NM5l5I3sIOfD:1FT' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */


// define('WP_ALLOW_MULTISITE', true);
// define( 'MULTISITE', true );
// define( 'SUBDOMAIN_INSTALL', true );
// define( 'DOMAIN_CURRENT_SITE', 'tijo.zoondia.org' );
// define( 'PATH_CURRENT_SITE', '/' );
// define( 'SITE_ID_CURRENT_SITE', 1 );
// define( 'BLOG_ID_CURRENT_SITE', 1 );

define('WP_MEMORY_LIMIT', '256M');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
