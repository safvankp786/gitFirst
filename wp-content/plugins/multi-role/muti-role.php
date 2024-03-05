<?php 
/**
 * Plugin Name: Multi Role
 * Description:  Handle the basics with this plugin.
 * Version:           1.0
 */
define('WCP_dir',dirname(__FILE__));
add_action('admin_menu','WCP_custom_function1');//tag and callable function
// we use 2 custom functions
function WCP_custom_function1(){
//add_menu_page(
add_menu_page(
		'Multi Role', // Page Title
		'Multi Role', //menu Title
		'manage_options', //capability
		'muti_role', //menu slug
		'custom_function2' //callable function
);
}
function custom_function2(){
	?>
    <h1 class="test">Test</h1>
	
	<?php
}

function my_custom_content() {
    if ( current_user_can( 'subscriber' ) ) {
        echo "subscriber";
    } elseif ( current_user_can( 'editor' ) ) {
        echo "Editor";
    } elseif ( current_user_can( 'administrator' ) ) {
        echo "Administrator";
    } else {
        echo "Default";
    }
}
add_filter( 'the_content', 'my_custom_content' );