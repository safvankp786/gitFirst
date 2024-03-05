<?php
/**
 * Tutor registration template
 *
 * @package Tutor\Templates
 * @subpackage Dashboard
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.4.3
 */

?>
<?php global $settingsId; ?>
<?php if ( ! get_option( 'users_can_register', false ) ) : ?> 
	<?php
		$args = array(
			'image_path'  => tutor()->url . 'assets/images/construction.png',
			'title'       => __( 'Oooh! Access Denied', 'tutor' ),
			'description' => __( 'You do not have access to this area of the application. Please refer to your system  administrator.', 'tutor' ),
			'button'      => array(
				'text'  => __( 'Go to Home', 'tutor' ),
				'url'   => get_home_url(),
				'class' => 'tutor-btn',
			),
		);
		tutor_load_template( 'feature_disabled', $args );
		?>
<?php else : ?>

	<div id="tutor-registration-wrap">

		<?php do_action( 'tutor_before_student_reg_form' ); ?>

		<form method="post" enctype="multipart/form-data" id="tutor-registration-form" autocomplete="off">
			<input type="hidden" name="tutor_course_enroll_attempt" value="<?php echo isset( $_GET['enrol_course_id'] ) ? (int) $_GET['enrol_course_id'] : ''; ?>">
			<?php do_action( 'tutor_student_reg_form_start' ); ?>

			<?php wp_nonce_field( tutor()->nonce_action, tutor()->nonce ); ?>
			<input type="hidden" value="tutor_register_student" name="tutor_action"/>

			<?php
			$validation_errors = apply_filters( 'tutor_student_register_validation_errors', array() );
			if ( is_array( $validation_errors ) && count( $validation_errors ) ) :
				?>
				<div class="tutor-alert tutor-warning tutor-mb-12">
					<ul class="tutor-required-fields">
						<?php foreach ( $validation_errors as $validation_error ) : ?>
							<li>
								<?php echo esc_html( $validation_error ); ?>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endif; ?>

			<div class="tutor-form-row">
				<div class="tutor-form-col-6">
					<div class="tutor-form-group">
						<label>
							<?php esc_html_e( 'First Name', 'tutor' ); ?>
						</label>

						<input type="text" name="first_name" value="<?php echo esc_attr( tutor_utils()->input_old( 'first_name' ) ); ?>" placeholder="<?php esc_attr_e( 'First Name', 'tutor' ); ?>" required autocomplete="given-name">
					</div>
				</div>

				<div class="tutor-form-col-6">
					<div class="tutor-form-group">
						<label>
							<?php esc_html_e( 'Last Name', 'tutor' ); ?>
						</label>

						<input type="text" name="last_name" value="<?php echo esc_attr( tutor_utils()->input_old( 'last_name' ) ); ?>" placeholder="<?php esc_attr_e( 'Last Name', 'tutor' ); ?>" required autocomplete="family-name">
					</div>
				</div>

			</div>

			<div class="tutor-form-row">
				<div class="tutor-form-col-6" style="display:none;">
					<div class="tutor-form-group">
						<label>
							<?php esc_html_e( 'User Name', 'tutor' ); ?>
						</label>

						<input type="text" name="user_login" id="username" class="tutor_user_name" value="<?php echo esc_attr( tutor_utils()->input_old( 'user_login' ) ); ?>" placeholder="<?php esc_html_e( 'User Name', 'tutor' ); ?>" required autocomplete="username">
					</div>
				</div>

				<div class="tutor-form-col-6">
					<div class="tutor-form-group">
						<label>
							<?php esc_html_e( 'E-Mail', 'tutor' ); ?>
						</label>

						<input type="text" id="email" name="email" value="<?php echo esc_attr( tutor_utils()->input_old( 'email' ) ); ?>" placeholder="<?php esc_html_e( 'E-Mail', 'tutor' ); ?>" required autocomplete="email">
					</div>
				</div>

			</div>

			<div class="tutor-form-row">

				<div class="tutor-form-col-12">
					<div class="tutor-form-group">
						<label>
							<?php _e('Phone Number', 'tutor'); ?>
						</label>

						<input type="text" name="phone_no" value="<?php echo tutor_utils()->input_old('phone_no'); ?>" placeholder="<?php _e('Phone Number', 'tutor'); ?>" required>
					</div>
				</div>

			</div>
			
			<div class="tutor-form-row">

				<div class="tutor-form-col-12">
					<div class="tutor-form-group">
						<label>
							<?php _e('Instituition/Place of Work', 'tutor'); ?>
						</label>

						<input type="text" name="institution" value="<?php echo tutor_utils()->input_old('institution'); ?>" placeholder="<?php _e('Instituition/Place of Work', 'tutor'); ?>">
					</div>
				</div>

			</div>

			<div class="tutor-form-row">

				<div class="tutor-form-col-12">
					<div class="tutor-form-group">
						<label>
							<?php _e('Country of Work', 'tutor'); ?>
						</label>

						<input type="text" name="work_country" value="<?php echo tutor_utils()->input_old('work_country'); ?>" placeholder="<?php _e('Country of Work', 'tutor'); ?>" required>
					</div>
				</div>

			</div>

			<div class="tutor-form-row">
				<div class="tutor-form-col-12">
					<div class="tutor-form-group">
						<label for="speciality"><?php _e('User Speciality', 'tutor'); ?></label>
						<select name="speciality" id="speciality" required>							
							<?php
							if( have_rows('user_specialities_registration',$settingsId) ):                
								while( have_rows('user_specialities_registration',$settingsId) ) : the_row();?>
									<option value="<?php the_sub_field('speciality'); ?>"><?php the_sub_field('speciality'); ?></option>
								<?php endwhile;
							endif;  
							?>
						</select>
					</div>
				</div>
			</div>

			<div class="tutor-form-row">
				<div class="tutor-form-col-12">
					<div class="tutor-form-group">
						<label><?php _e('Interests', 'tutor'); ?></label>
						<?php
						if (have_rows('interests_registration', $settingsId)) :
							while (have_rows('interests_registration', $settingsId)) : the_row();
								$interests = get_sub_field('interest');
								?>
								<div>
									<input type="checkbox" name="interests[]" value="<?php echo esc_attr($interests); ?>">
									<label><?php echo esc_html($interests); ?></label>
								</div>
								<?php
							endwhile;
						endif;
						?>
					</div>
				</div>
			</div>



			<div class="tutor-form-row">
				<div class="tutor-form-col-6">
					<div class="tutor-form-group">
						<label>
							<?php esc_html_e( 'Password', 'tutor' ); ?>
						</label>

						<input type="password" name="password" value="<?php echo esc_attr( tutor_utils()->input_old( 'password' ) ); ?>" placeholder="<?php esc_html_e( 'Password', 'tutor' ); ?>" required autocomplete="new-password">
					</div>
				</div>

				<div class="tutor-form-col-6">
					<div class="tutor-form-group">
						<label>
							<?php esc_html_e( 'Password confirmation', 'tutor' ); ?>
						</label>

						<input type="password" name="password_confirmation" value="<?php echo esc_attr( tutor_utils()->input_old( 'password_confirmation' ) ); ?>" placeholder="<?php esc_html_e( 'Password Confirmation', 'tutor' ); ?>" required autocomplete="new-password">
					</div>
				</div>
			</div>


			<div class="tutor-form-row">
				<div class="tutor-form-col-12">
					<div class="tutor-form-group">						
						<input type="checkbox" id="newsletter" name="newsletter" value="No">
						<label><?php _e('Newsletter Subscription', 'tutor'); ?></label>
					</div>
				</div>
			</div>




			<div class="tutor-form-row">
				<div class="tutor-form-col-12">
					<div class="tutor-form-group">
					<?php
						// providing register_form hook.
						do_action( 'tutor_student_reg_form_middle' );
						do_action( 'register_form' );
					?>
					</div>
				</div>
			</div>    

			<?php do_action( 'tutor_student_reg_form_end' ); ?>

			<?php
				$tutor_toc_page_link = tutor_utils()->get_toc_page_link();
			?>
			<?php if ( null !== $tutor_toc_page_link ) : ?>
				<div class="tutor-mb-24">
					<?php esc_html_e( 'By signing up, I agree with the website\'s', 'tutor' ); ?> <a target="_blank" href="<?php echo esc_url( $tutor_toc_page_link ); ?>" title="<?php esc_html_e( 'Terms and Conditions', 'tutor' ); ?>"><?php esc_html_e( 'Terms and Conditions', 'tutor' ); ?></a>
				</div>
			<?php endif; ?>

			<div>
				<button type="submit" name="tutor_register_student_btn" value="register" class="tutor-btn tutor-btn-primary tutor-btn-block"><?php esc_html_e( 'Register', 'tutor' ); ?></button>
			</div>
			<?php do_action( 'tutor_after_register_button' ); ?>
			
		</form>
		<?php do_action( 'tutor_after_registration_form_wrap' ); ?>
		
	</div>
	<?php do_action( 'tutor_after_student_reg_form' ); ?>
<?php endif; ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script>
$(document).ready(function() {

  $("#email").keyup(function(){
	var email = $('#email');
    var username = email.val();
	$('#username').val(username);
    
  });
  $("#newsletter").on('change', function(){
	  
	  if ($(this).prop('checked')==true){ 
        $('#newsletter').attr('value', 'Yes');
    }
	else{
		$('#newsletter').attr('value', 'No');
	}
  });
});

</script>
