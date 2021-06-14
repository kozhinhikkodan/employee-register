<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Errors
{
	public function error_404()
	{

		$CI =& get_instance();
		$CI->load->database();
		$CI->load->view('errors/404');
	}
}
?>