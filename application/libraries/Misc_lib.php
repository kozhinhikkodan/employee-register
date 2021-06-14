<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Misc_lib {

	function __construct()
	{
		ini_set('max_execution_time', 5000);
		ini_set("memory_limit", "-1");
		date_default_timezone_set('Asia/Kolkata');

		$CI =& get_instance();
		$this->CI =& get_instance();
		$this->CI->load->library('session');
		$CI->load->model('User_model', 'User');
		$CI->load->model('Settings_model', 'Settings');
	}

	public function send_mail($subject,$body,$files='',$mail_to)
	{
		$CI =& get_instance();

		$mail = new PHPMailer();

		$mail->isSMTP(); 
		$mail->CharSet = "utf-8";		    
		$mail->SMTPDebug = 0;		    
		//$mail->SMTPOptions = array('ssl' => array('verify_peer' => false,'verify_peer_name' => false,'allow_self_signed' => true));
		$mail->SMTPAuth = true; 
		$mail->SMTPSecure = 'ssl';			
		$mail->Host = config_item('smtp_host');
		$mail->Port = config_item('smtp_port'); 
		$mail->Username = config_item('smtp_username');
		$mail->Password = config_item('smtp_password'); 
		$mail->setFrom(config_item('smtp_username'));
		$mail->AddReplyTo(config_item('smtp_username'), config_item('smtp_name'));
		$mail->Subject = $subject;
		$mail->MsgHTML($body);
		$mail->addAddress($mail_to); 

		foreach ($files as $key => $value) {
			$file_name = $value['name'];
			$file_tmp = $value['tmp_name'];
			$ext = $value['field'].'.'.explode(".",$file_name)[1];
			$mail->addAttachment($file_tmp,$ext);			
		}

		if(!$mail->Send()) {
			$mail_result = 0;
		} else {
			$mail_result = 1;
		}
		return $mail_result;
	}
}


