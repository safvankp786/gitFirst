<?php
$api_key = '50b305daa6d9941d183a1c83cebcbfaf-us6';
$list_id = 'aa0e17e178';
$datacenter = 'us6';

$user = get_userdata($user_id);
$email = $user->user_email;
$first_name = $user->first_name;
$last_name = $user->last_name;


// API endpoint
$endpoint = 'https://' . $datacenter . '.api.mailchimp.com/3.0/lists/' . $list_id . '/members';

// Request data
$data = array(
    'email_address' => $email,
    'status' => 'subscribed',
    'merge_fields' => array(
        'FNAME' => $first_name,
        'LNAME' => $last_name
    )
);

// cURL request
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// // Check response
// if ($httpCode === 200) {
//     // User added successfully
//     echo 'User added to the Mailchimp list.';
// } else {
//     // Error occurred
//     echo 'Failed to add user to the Mailchimp list. Error: ' . $response;
// }


?>