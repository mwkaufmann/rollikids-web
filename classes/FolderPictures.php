<?php

/**
 *
 * Helper class to read folders and return the containing pictures.
 * @author Team
 *
 */
class FolderPictures {

	private function __constructor() {
	}

	/**
	 * 
	 * Initial picture array :) .
	 * @var array of Strings
	 */
	public static $fileExtensionArray = array(".jpg", ".jpeg", ".png", ".gif");

	/**
	 *
	 * Get an array of all pictures in the given folder.
	 * @param String $relativeFolder
	 * @param String $fileExtensionWithDot
	 * @param Boolean $caseSensitive
	 */
	public static function getPictureArray($relativeFolder, $fileExtensionWithDot, $caseSensitive) {
		$relativeFolder = './' . $relativeFolder;
		$pictureArray = array();
		if (($files = @scandir($relativeFolder)) !== false) {
			foreach ($files as $key => $file) {
				$filePath = $relativeFolder . $file;
				if (is_dir($filePath) === false) {
					// .jpg, .jpeg :)
					$tempFileExtension = substr($file, strlen($fileExtensionWithDot) * -1);
					if ($caseSensitive === true) {
						if (strcmp($tempFileExtension, $fileExtensionWithDot) === 0) {
							$pictureArray[] = $filePath;
						}
					} else {
						if (strcasecmp($tempFileExtension, $fileExtensionWithDot) === 0) {
							$pictureArray[] = $filePath;
						}
					}
				}
			}
		}
		return $pictureArray;
	}

	/**
	 * 
	 * Get an array of all pictures in the given folder with different file extensions.
	 * @param String $relativeFolder
	 * @param Array of Strings $fileExtensionsWithDot
	 * @param Boolean $caseSensitive
	 */
	public static function getPictureArrayWithDifferentExtensions($relativeFolder, $fileExtensionsWithDot, $caseSensitive) {
		$pictureArray = array();
		foreach ($fileExtensionsWithDot as $key => $extension) {
			$pictureArray = array_merge((array)$pictureArray, (array)FolderPictures::getPictureArray($relativeFolder, $extension, $caseSensitive));
		}
		return $pictureArray;
	}
	
	/**
	 * 
	 * This functions converts an array of pictures into an html output.
	 * @param String[] $pictureArray
	 */
	public static function getHTMLOutputForPictureArray($pictureArray) {
		$output = '';
		foreach($pictureArray as $key => $picture) {
			$output .= FolderPictures::getHTMLOutputForPicture($picture);
		}
		return $output;
	}
	
	/**
	 * 
	 * This function converts a picture string into an html output.
	 * @param String $picture
	 */
	public static function getHTMLOutputForPicture($picture) {
		$imagesize = getimagesize($picture);
		$output = '<img src="' . 
				$picture . '" width="' . 
				$imagesize[0] . '" height="' . 
				$imagesize[1] . '" alt="' .
				$picture . '" />';
		return $output;
	}

}

?>