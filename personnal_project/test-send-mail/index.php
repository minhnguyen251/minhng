<?php
if(isset($_POST['submit'])){
	$toShowed = "info@skering.fr"; // this is your Email address
	$to = "cmnguyen2501@hotmail.com"; // this is your Email address
	$from = $_POST['email']; // this is the sender's Email address
	$first_name = 'Mr/Mme';
	$last_name = 'XXX';
	$subject = "Contact Skering";
	$subject2 = "Contact Skering";
	$message = $from . " a contacté pour être en relation avec Skering";
	$headers = "From:" . $from;
	mail($to,$subject,$message,$headers);
	$successText = "Votre mail " . $from . " a bien été envoyé à ".$toShowed.", nous vous recontactons dès que possible";
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Skering -- Coming soon</title>
	<!--meta charset="UTF-8" /-->
	<meta charset="UTF-8" />
	<meta name="author" content="Skering" />
	<meta name="keywords" content="web designer, responsive webdesign, HTML5, css, html code" />
	<meta name="description" content="ayane est une agence web � taille humaine favorisant un interlocuteur unique et priviligié auprès du client tout au long du projet." />
	<link rel="stylesheet" href="styles/general.css" />
	<!--	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />-->
</head>
<body>
<div class="container">
	<header>
		<hgroup>
			<span><img src="img/logo.png" width="181px" height="38px" alt="Skering" /></span>
			<h1>Coming<br/><span>soon</span><img src="img/sign.png" width="33px" height="50px" alt="" /></h1>
		</hgroup>
		<p>
			L'optimisation du patrimoine Data est la voie pour une performance financière et humaine optimale.<br/><br/>
			Être averti du lancement de la refonte du site !
		</p>

		<form method="post" action="">
			<div class="Demo">
				<label class="Demo-label" for="email">Votre email</label>
				<div class="Demo-marge">
					<div class="Demo-wrap">
						<input class="Demo-input" type="text" id="email" name="email">
					</div>
					<div class="Demo-wrap btn">
						<button type="submit" name="submit" class="Demo-input">NOTIFIEZ-MOI</button>
					</div>
				</div>
			</div>
		</form>
		<p><?php echo $successText ;?></p>

	</header>
	<footer>
		<a href="mailto:info@skering.fr" class="contact">info@skering.fr</a>
		<ul>
			<li class="icon linkedin"><a href="http://www.google.fr" target="blank"></a></li>
			<li class="icon facebook"><a href="http://www.google.fr" target="blank"></a></li>
		</ul>
	</footer>
</div>
</body>
</html>