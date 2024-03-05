<?php
/**
 * Display Video HTML5
 *
 * @package Tutor\Templates
 * @subpackage Single\Video
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$user_id  = get_current_user_id();
$video_info = tutor_utils()->get_video_info();

$poster     = tutor_utils()->avalue_dot( 'poster', $video_info );
$poster_url = $poster ? wp_get_attachment_url( $poster ) : '';
$video_url  = ( $video_info && $video_info->source_video_id ) ? wp_get_attachment_url( $video_info->source_video_id ) : null;

do_action( 'tutor_lesson/single/before/video/html5' );
?>

<?php if ( $video_url ) : 
    $available = 0;
    $current_access_keys = get_user_meta($user_id, 'video_forward', true);
    if($current_access_keys){
        $exists = in_array($video_info->source_video_id, $current_access_keys); 
    }
    if($exists){
        $available =$video_info->source_video_id;
    }

    $post_link = get_permalink(); 
    global $wpdb;

    $poster_post_id = $video_info->poster;

    $guid = $wpdb->get_var($wpdb->prepare("SELECT guid FROM {$wpdb->prefix}posts WHERE ID = %d", $poster_post_id));


       
$continue_watch = get_user_meta($user_id, 'continue_watching', true);

foreach($continue_watch as $element) {
    $video_id = $element['video_id'];
    $seconds = $element['seconds'];
    if($video_id == $video_info->source_video_id ){
        $videoTime = $seconds;
    }
} ?>


    
	<div class="tutor-video-player">
		<input type="hidden" id="tutor_video_tracking_information" value="<?php echo esc_attr( json_encode( $jsonData ?? null ) ); ?>">
		<div class="loading-spinner" area-hidden="true"></div>
		<video poster="<?php echo esc_url( $poster_url ); ?>" id="video_<?php echo $video_info->source_video_id; ?>" class="tutorPlayer" playsinline controls >
			<source src="<?php echo esc_url( $video_url ); ?>" type="<?php echo esc_attr( tutor_utils()->avalue_dot( 'type', $video_info ) ); ?>">
		</video>
    <?php 

  ?>
	</div>
<?php endif; ?>

<?php do_action( 'tutor_lesson/single/after/video/html5' ); ?>


<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
    var video = $('#video_<?php echo $video_info->source_video_id; ?>')[0];
    // var urlParams = new URLSearchParams(window.location.search);
    // var secondsValue = urlParams.get('seconds');
    var videoTime = '<?php echo $videoTime; ?>';
    if(videoTime){
        video.currentTime = videoTime;
    }

    var supposedCurrentTime,forwarding = 0;
    
    var available = '<?php echo $available; ?>';

    if(available == 0 ){
        video.addEventListener('timeupdate', function() {
            if (!video.seeking) {
                supposedCurrentTime = video.currentTime;
            }
        });

        video.addEventListener('seeking', function() {
            var delta = video.currentTime - supposedCurrentTime;
            if (delta > 0.01 && forwarding == 0) {
                video.currentTime = supposedCurrentTime;
            }
        });
 
    video.addEventListener('ended', function() {
        supposedCurrentTime = 0;
        var video_id = '<?php echo $video_info->source_video_id; ?>';
        var user_id = '<?php echo $user_id; ?>';

        var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
        
        // Check if video_id is available in the video_forward array
        if(forwarding == 0){

            jQuery.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'check_video_id_in_array',
                    user_id: user_id,
                    video_id: video_id
                },
                success: function(response) {
                if (response.exists) {

                } else {   

                }
                },
                error: function(error) {
                }
            });

        }
        forwarding = 1;        
    });
    }


    video.addEventListener('pause', function() {
        if (video.currentTime !== video.duration) {
            var video_id = '<?php echo $video_info->source_video_id; ?>';
            var user_id = '<?php echo $user_id; ?>';
            var post_link = '<?php echo $post_link; ?>';
            var post_image = '<?php echo $guid; ?>';
            var seconds = video.currentTime;
            var duration = video.duration;

            var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
            
            jQuery.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'check_continue_watching',
                    user_id: user_id,
                    video_id: video_id,
                    post_link: post_link,
                    post_image: post_image,
                    seconds: seconds,
                    duration: duration
                },
                success: function(response) {
               
                },
                error: function(error) {
                }
            });
        }    
         
    });

    video.addEventListener('play', function() {
        var video_id = '<?php echo $video_info->source_video_id; ?>';
        var user_id = '<?php echo $user_id; ?>';

        var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
        
        jQuery.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'remove_continue_watching',
                user_id: user_id,
                video_id: video_id
            },
            success: function(response) {
          
            },
            error: function(error) {
            }
        });
         
    });
          

});

</script>
