<?php 
$user_id = $_POST['user_id'];
$video_id = $_POST['video_id'];

$continue_watch = get_user_meta($user_id, 'continue_watching', true);
$current_watching_keys = is_array($continue_watch) ? $continue_watch : array();

// Find the index of the array with the specified video_id
$index = array_search($video_id, array_column($current_watching_keys, 'video_id'));

if ($index !== false) {
    // Remove the array with the specified video_id
    unset($current_watching_keys[$index]);

    // Reset array keys to maintain a continuous numeric index
    $current_watching_keys = array_values($current_watching_keys);

    // Update the continue_watching meta data
    update_user_meta($user_id, 'continue_watching', $current_watching_keys);
}

wp_send_json_success();
?>