<?php
    get_header();
    global $settingsID;
?>

                                <?php
                            rewind_posts();
                            if (have_posts()) :
                                while(have_posts()) : the_post();
                                    ?>
                                
                                        <p><?php the_title(); ?></p>  
                                        
                                         
                                       
                                        <a href="<?php echo get_permalink(get_the_ID()); ?>" class="learn-more">Read More</a>   
                                   
                              
                               
                                 <?php endwhile;
                              
                                      endif; wp_reset_postdata();?>
                          

                            <div class="pagination">
                                <?php 
                                the_posts_pagination( array(
                                    'mid_size'  => 2,
                                    'prev_text' => __( 'Back', 'textdomain' ),
                                    'next_text' => __( 'Onward', 'textdomain' ),
                                ) );
                            ?>
                               
                            </div>
                        
                      <aside class="blog-sidebar">
                            <?php echo get_template_part('template-parts/blog','section'); ?>
                        </aside>
                    
                    
              
                
                
                


             <?php
                get_footer();
            ?>