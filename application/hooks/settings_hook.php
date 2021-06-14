<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Settings_hook {

	function __construct()
	{
		
	}
	public function get_seetings()
	{

		if(file_exists(APPPATH.'config/config.php')){
			include(APPPATH.'config/config.php');

			$CI =& get_instance();
			// $CI->CI =& get_instance();
			$CI->load->library('session');
			
			$CI->load->model('Materials_model', 'Materials');
			
			$CI->load->model('Settings_model', 'Settings');
			$CI->load->model('User_model','User');
			$CI->load->model('Feedbacks_model','Feedbacks');


			if(empty($CI->session->userdata('user_id')) && strtolower($CI->router->fetch_class())!='login' && strtolower($CI->router->fetch_class())!='maintanance' && strtolower($CI->router->fetch_class())!='feedback'){
				redirect(base_url(),'refresh');
			}

			$c['setting_group!='] = 'deal';
			$settings = $CI->Settings->select_setting_config('*',$c)->result();

			foreach ($settings as $key => $value) {
				$CI->config->set_item($value->setting_name,$value->value);
			}

			$c2['setting_group'] = 'deal';
			$settings = $CI->Settings->select_setting_config('*',$c2)->result();

			foreach ($settings as $key => $value) {
				$CI->config->set_item('deal_'.$value->setting_name,$value->value);
			}

			$CI->config->set_item('product_categories',array('raw_fruits','ready_to_Eat')); 

			$CI->config->set_item('unread_feedbacks_count',$CI->Feedbacks->select_feedbacks('*',array('marked'=>0))->num_rows());

			$CI->config->set_item('site_url','http://www.fruitvalley.ae/');




		}

	}

}


