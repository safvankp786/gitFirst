<?php 
$user_id = $_POST['user_id'];
$video_id = $_POST['video_id'];
$post_link = $_POST['post_link'];
$post_image = $_POST['post_image'];
$seconds = $_POST['seconds'];
$duration = $_POST['duration'];

$continue_watch = get_user_meta($user_id, 'continue_watching', true);
$current_watching_keys = is_array($continue_watch) ? $continue_watch : array();
$new_watching_key = array(
    'video_id' => $video_id,
    'post_link' => $post_link,
    'post_image' => $post_image,
    'seconds' => $seconds,
    'duration' => $duration
);

$existing_index = false;
foreach ($current_watching_keys as $index => $existingArray) {
    if (isset($existingArray['video_id']) && $existingArray['video_id'] === $video_id) {
        $existing_index = $index;
        break;
    }
}

if ($existing_index !== false) {
    // Replace the existing array with the new array
    $current_watching_keys[$existing_index] = $new_watching_key;
} else {
    // Add the new array to the main array
    $current_watching_keys[] = $new_watching_key;
}

update_user_meta($user_id, 'continue_watching', $current_watching_keys);


wp_send_json_success();

?>    