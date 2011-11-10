<?php
	include_once("classes/FolderPictures.php");
	$pictureArray = FolderPictures::getPictureArrayWithDifferentExtensions('img/slider/', FolderPictures::$fileExtensionArray, false);
	$output = FolderPictures::getHTMLOutputForPictureArray($pictureArray);
	print_r($output);
	
?>