<?php
    $user_id = $_POST['user_id'];
    $video_id = $_POST['video_id'];

    $get_access_keys_from_wp = get_user_meta($user_id, 'video_forward', true);
    $current_access_keys = $get_access_keys_from_wp ? $get_access_keys_from_wp : array();
    $new_access_keys = array($video_id);
    
    if($current_access_keys){
        $current_access_keys = get_user_meta($user_id, 'video_forward', true);
        $response = array(
            'exists' => in_array($video_id, $current_access_keys),
        );
    } else {
        $current_access_keys = get_user_meta($user_id, 'video_forward', true);
        $response = array(
            'exists' => false
        );
    }
   
    
    foreach ($current_access_keys as $value) {
        $new_access_keys[] = $value;
    }

    delete_user_meta($user_id, 'video_forward');
    update_user_meta($user_id, 'video_forward', $new_access_keys);
    
    wp_send_json($response);
 ?>