<?php

//Default
function learn_theme_support(){
	add_theme_support('menus');
	register_nav_menu( 'primary', 'Primary navigation' );
	register_nav_menu( 'secondary', 'Secondary navigation' );
}

add_action('after_setup_theme', 'learn_theme_support');

add_theme_support('custom-background');
add_theme_support('post-thumbnails');
add_theme_support( 'post-formats', array( 'aside', 'gallery','image' ) );
add_theme_support('html5', array('search-form'));

$settingsId = 40;


//Theme menu
add_action('admin_menu','theme_settings_menu');
function theme_settings_menu(){

	global $settingsId;
    add_menu_page('Settings_Page', 'Theme Settings','manage_options', "/post.php?post=".$settingsId."&action=edit", '','dashicons-admin-generic', 23);
	add_submenu_page("/post.php?post=".$settingsId."&action=edit", 'Menu Page', 'Menus', 'manage_options', '/nav-menus.php' );
}

//Delete restrict
function prevent_default_theme_deletion($allcaps, $caps, $args) {
	global $settingsId;
    $post_id = $settingsId;
    if ( isset( $args[0] ) && isset( $args[2] ) && $args[2] == $post_id && $args[0] == 'delete_post' ) {
        $allcaps[ $caps[0] ] = false;
    }
    return $allcaps;
}
add_filter ('user_has_cap', 'prevent_default_theme_deletion', 10, 3);


//Logo
function my_login_logo_one() { 
?> 
<style type="text/css"> 
	body.login div#login h1 a {
		background-image: url('image url here'); 
		height: 100px;
	    padding-bottom: 0;
	    width: 300px;
	    max-width: 100%;
  	}
  	.login h1 a {
	  background-size: 260px !important;
	} 
</style>
<?php 
} 
add_action( 'login_enqueue_scripts', 'my_login_logo_one' );

if ( !function_exists('tf_wp_admin_login_logo_url') ) :

function tf_wp_admin_login_logo_url() {
	return home_url();
}
add_filter( 'login_headerurl', 'tf_wp_admin_login_logo_url' );

endif;

// hiding settings page
add_filter( 'parse_query', 'exclude_pages_from_admin' );
function exclude_pages_from_admin($query) {
    global $pagenow,$post_type,$settingsId;
    if (is_admin() && $pagenow=='edit.php' && $post_type =='page') {
        $query->query_vars['post__not_in'] = array($settingsId);
    }
}


//adding extra fields to registration page

add_filter('tutor_student_registration_required_fields', 'required_phone_no_callback');
if ( ! function_exists('required_phone_no_callback')){
    function required_phone_no_callback($atts){
        $atts['phone_no'] = 'Phone Number field is required';
		$atts['work_country'] = 'Country field is required';
        return $atts;
    }
}
add_action('user_register', 'add_phone_after_user_register');
add_action('profile_update', 'add_phone_after_user_register');
if ( ! function_exists('add_phone_after_user_register')) {
    function add_phone_after_user_register($user_id){
        if ( ! empty($_POST['phone_no'])) {
            $phone_number = sanitize_text_field($_POST['phone_no']);
            update_user_meta($user_id, 'phone_number', $phone_number);
        }
		if ( ! empty($_POST['institution'])) {
            $institution = sanitize_text_field($_POST['institution']);
            update_user_meta($user_id, 'institution', $institution);
        }
		if ( ! empty($_POST['work_country'])) {
            $work_country = sanitize_text_field($_POST['work_country']);
            update_user_meta($user_id, 'work_country', $work_country);
        }
		if ( ! empty($_POST['speciality'])) {
            $speciality = sanitize_text_field($_POST['speciality']);
            update_user_meta($user_id, 'speciality', $speciality);
        }
		if (!empty($_POST['interests'])) {
			$interests = array_map('sanitize_text_field', $_POST['interests']);
			update_user_meta($user_id, 'interests', $interests);
		}
        if (!empty($_POST['newsletter'])) {
			$newsletter = sanitize_text_field($_POST['newsletter']);
			update_user_meta($user_id, 'newsletter', $newsletter);
		}
    }
}


// adding user to mailchimp 

if ($_POST['newsletter'] == 'Yes') {

    function add_user_to_mailchimp_list($user_id) {

        $return_str = get_template_part('template-parts/mailchimp', 'list');
	    die($return_str);  
    
    }
    
    add_action('user_register', 'add_user_to_mailchimp_list');

}


// video forwarding and disabling functionality

add_action('wp_ajax_check_video_id_in_array', 'check_video_id_in_array_callback');
add_action('wp_ajax_nopriv_check_video_id_in_array', 'check_video_id_in_array_callback');

function check_video_id_in_array_callback() {
    $return_str = get_template_part('template-parts/video', 'forward');
	die($return_str);
}

// Continue Watching functionality

add_action('wp_ajax_check_continue_watching', 'check_continue_watching_callback');
add_action('wp_ajax_nopriv_check_continue_watching', 'check_continue_watching_callback');

function check_continue_watching_callback() {
    $return_str = get_template_part('template-parts/continue', 'watch');
	die($return_str);  
}

// removing continue watching when pause option disabled

add_action('wp_ajax_remove_continue_watching', 'remove_continue_watching_callback');
add_action('wp_ajax_nopriv_remove_continue_watching', 'remove_continue_watching_callback');

function remove_continue_watching_callback() {
    $return_str = get_template_part('template-parts/continue', 'watch-reset');
	die($return_str);  
}

// /**
//  * Add custom role and capabilities.
//  */
// function add_custom_role_and_capabilities() {
//     // Define the custom role slug and display name
//     $role_slug = 'client_admin';
//     $role_name = 'Client Admin';

//     // Add the custom role
//     add_role( $role_slug, $role_name );

//     // Get the Administrator role
//     $admin_role = get_role( 'administrator' );

//     // Assign Administrator capabilities to the custom role
//     foreach ( $admin_role->capabilities as $cap => $value ) {
//         $role = get_role( $role_slug );
//         $role->add_cap( $cap );
//     }
// }
// add_action( 'init', 'add_custom_role_and_capabilities' );


// /**
//  * Add extra role to user at site creation in WordPress multisite.
//  */
// function add_extra_role_to_user_on_site_creation( $blog_id, $user_id, $role, $usermeta ) {
//     // Get the user object
//     $user = get_userdata( $user_id );

//     // Add your custom role slug here
//     $extra_role = 'client_admin';

//     // Add the extra role to the user
//     $user->add_role( $extra_role );
// }
// add_action( 'wpmu_new_blog', 'add_extra_role_to_user_on_site_creation', 10, 4 );

// $user = get_userdata( 31 );
// $extra_role = 'client_admin';

// // Add the extra role to the user
// $user->add_role( $extra_role );


function add_custom_user_field($user_id) {
   
    update_user_meta($user_id, 'test_content', '');
    update_user_meta($user_id, 'test_image', '');

}
add_action('user_register', 'add_custom_user_field');

?>