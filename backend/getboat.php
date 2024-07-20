<?php
include('db.php');

// SQL query to fetch data from the database
$sql = "SELECT * FROM captains"; // Adjust the query as per your table structure
$result = mysqli_query($conn, $sql);

// Fetch data and convert it to JSON
$captains = array();
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $captains[] = $row;
    }
}

// Return data as JSON
echo json_encode($captains);

// Close the connection
mysqli_close($conn);

