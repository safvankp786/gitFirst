<!DOCTYPE html>
<html>
  <head>
    <?php wp_head();
    global $settingsId;?>
   
  </head>
    <?php
            $menu = array(
                'menu' => 'main-menu',
                'container' => ''
            );
            wp_nav_menu($menu);

            
        ?>
  
