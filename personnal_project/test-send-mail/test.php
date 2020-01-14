<?php
if(isset($_POST['submit'])){
	$to = "cmnguyen2501@gmail.com"; // this is your Email address
	$from = $_POST['email']; // this is the sender's Email address
	$first_name = 'Mr/Mme';
	$last_name = 'XXX';
	$subject = "Contact Skering";
	$subject2 = "Contact Skering";
	$message = $from . " a contacté pour être en relation avec Skering";

	$headers = "From:" . $from;
	mail($to,$subject,$message,$headers);
	echo "Message envoyé, je vous recontacte dès que possible";
}
?>

<!DOCTYPE html>
<head>
	<title>Form submission</title>
</head>
<body>

<form action="" method="post">
	Email: <input type="text" name="email"><br>
	<input type="submit" name="submit" value="Submit">
</form>

</body>
</html>