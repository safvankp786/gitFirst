<?php get_header();?> 
<?php
/*
Template Name: Home
*/
?>
<?php $user_id  = get_current_user_id(); 
// $current_site_id = get_current_blog_id();
// echo "Site Id: " . $current_site_id ;


if($user_id) {?>

<div>
    <h1>Continue Watching Section </h1>

    <?php 
       
        $continue_watch = get_user_meta($user_id, 'continue_watching', true);

        foreach($continue_watch as $element) {
            $video_id = $element['video_id'];
            $post_link = $element['post_link'];
            $post_image = $element['post_image'];
            $seconds = $element['seconds']; 
            $duration = $element['duration']; 
            $percentage = ( $seconds / $duration) * 100;
            // echo $percentage; 
            ?>
            <a href="<?php echo $post_link; ?>"><img style="max-width:100px;" src = "<?php echo $post_image; ?>"></a>
            
        <?php } ?>
</div>


<?php
echo 'test';
// Check if user is logged in
if (is_user_logged_in()) {
  // Get the current logged-in user ID
  $current_user_id = get_current_user_id();
  
  // Get the ACF field value for the current user
  $user_content = get_field('title', 'user_' . $current_user_id);

  // Display user-specific content
  echo 'test';
  if ($user_content) {
    echo 'test'.$user_content;
  } else {
    echo 'Welcome, logged-in user!';
  }

  $custom_description = get_user_meta($current_user_id, 'test_content', true);

    if (!empty($custom_description)) {
        echo '<p>Custom Description: ' . esc_html($custom_description) . '</p>';
    }
    $custom_image_url = get_user_meta($current_user_id, 'test_image', true);

    if (!empty($custom_image_url)) {
        echo '<img src="' . esc_url($custom_image_url) . '" alt="Custom Image">';
    }  
} else {
  echo 'Welcome, visitor!';
}



?>
<form action="" method="post" enctype="multipart/form-data">
    <label for="description">Description:</label><br>
    <textarea id="description" name="description" rows="4" cols="50"></textarea><br>

    <label for="image">Upload Image:</label><br>
    <input type="file" id="image" name="image"><br>

    <input type="submit" name="submit" value="Submit">
</form>
<?php
if (isset($_POST['submit'])) {
    // Check if the user is logged in
    if (is_user_logged_in()) {
        $user_id = get_current_user_id();
        
        // Get the description from the form
        $description = sanitize_text_field($_POST['description']);
        
        // Handle the image upload
        if (!empty($_FILES['image']['name'])) {
            $upload_dir = wp_upload_dir();
            $image_name = $_FILES['image']['name'];
            $image_tmp = $_FILES['image']['tmp_name'];
            $image_path = $upload_dir['path'] . '/' . $image_name;
            move_uploaded_file($image_tmp, $image_path);
            
            // Save the image URL in user meta
            update_user_meta($user_id, 'test_image', $upload_dir['url'] . '/' . $image_name);
        }
        
        // Save the description in user meta
        update_user_meta($user_id, 'test_content', $description);
    }
}
 ?>

<?php  } get_footer();?>
