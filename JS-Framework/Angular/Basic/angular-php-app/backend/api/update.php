<?php
require './database.php';

// Get the posted data.
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
    // Extract the data.
    $request = json_decode($postdata);

    // Validate
    if((int)$request->id < 1 || trim($request->number) == '' || (float)$request->amount < 0)
    {
        return http_response_code(400);
    }

    // Sanitize
    $id = mysqli_real_escape_string($con, (int)$request->id);
    $number = mysqli_real_escape_string($con, trim($request->number));
    $amount = mysqli_real_escape_string($con, (float)$request->amount);

    // Update
    $sql = "UPDATE `policies` SET `number`='$number',`amount`='$amount' WHERE `id`='{$id}' LIMIT 1";
    $data = mysqli_query($con, $sql);

    if($data)
    {
        http_response_code(201);
        $policy = [
            'number' => $number,
            'amount' => $amount,
            'id' => $id
        ];
        echo json_encode($policy);
    }
    else
    {
        return http_response_code(422);
    }
}