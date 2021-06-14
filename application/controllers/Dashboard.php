<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		
		ini_set('max_execution_time', 5000);
		ini_set("memory_limit", "-1");
		date_default_timezone_set('Asia/Kolkata');
		$this->load->library('session');

		$this->load->model('Employees_model','Employees');

		$this->data['folder']='employees';

	}

	public function index()
	{
		$this->data['page']='employees_list';
		$this->load->view('Index',$this->data);
	}

	public function select_employees(){

		$json_data=array();
		$j=0;

		$data=array();

  //       if(isset($_POST['start_date']) && $_POST['start_date']!='' && $_POST['start_date']!='all'){
		// 	$data['created_date>='] = date('Y-m-d 00:00:00',strtotime($_POST['start_date']));
		// }

		// if(isset($_POST['end_date']) && $_POST['end_date']!='' && $_POST['end_date']!='all'){
		// 	$data['created_date<='] = date('Y-m-d 23:59:59',strtotime($_POST['end_date']));
		// }

		// if(isset($_POST['marked']) && $_POST['marked']!='' && $_POST['marked']!='all'){
		// 	$data['marked'] = $_POST['marked'];
		// }

		$result	= $this->Employees->select_employees("*,TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age,TIMESTAMPDIFF(YEAR, joined_date, CURDATE()) AS exp_year,TIMESTAMPDIFF(MONTH, joined_date, CURDATE()) AS exp_month ",$data);
		$result_array=$result->result();

		$json_data['draw']=5;
		$json_data['recordsTotal']=$result->num_rows();
		$json_data['recordsFiltered']=$result->num_rows();
		$array=array();

		foreach($result_array as $row):

			$array[$j][]=$j+1;
			$array[$j][]=$row->employee_code;
			$array[$j][]=$row->employee_name;
			$array[$j][]=$row->department;
			$array[$j][]=$row->age;
			$months = $row->exp_month%12;
			$array[$j][]=$row->exp_year.' years and '.$months.' months';



			$j++;
		endforeach;

		$json_data['data']=$array;
		echo json_encode($json_data);
	}

	public function upload_csv()
	{
		

		$handle = fopen($_FILES['csv_file']['tmp_name'], "r");
		$full_rows = file($_FILES['csv_file']['tmp_name'], FILE_SKIP_EMPTY_LINES);
		$rows = sizeof($full_rows)-1;
		if($rows>=5 and $rows<=20 ){

			$column_heads = $full_rows[0];

			$config['upload_path'] = './uploads/csv/';
			$config['allowed_types'] = 'csv';
			$config['max_size'] = 10000;
			$config['file_name'] = 'csv_'.date('d_m_y_h_i_s'); 

			$this->load->library('upload', $config);

			if (!$this->upload->do_upload('csv_file')) {
				$error = $this->upload->display_errors();
				$flash_data['flashdata_msg'] = $error;
				$flash_data['flashdata_type'] = 'error';
				$flash_data['alert_type'] = 'danger';
				$flash_data['flashdata_title'] = 'Upload Error !!';
			}else{
				$flash_data['status'] = '2';
				$flash_data['flashdata_file'] = $config['file_name'];
				$flash_data['flashdata_heads'] = $column_heads;
				$flash_data['flashdata_msg'] = 'Uploaded';
				$flash_data['flashdata_type'] = 'success';
				$flash_data['alert_type'] = 'success';
				$flash_data['flashdata_title'] = 'Success !!';
			}

		}else{
			$flash_data['flashdata_msg'] = 'File must contains 5 to 20 Rows';
			$flash_data['flashdata_type'] = 'warning';
			$flash_data['alert_type'] = 'warning';
			$flash_data['flashdata_title'] = 'Failed !!';
		}

		echo json_encode($flash_data);

	}

	public function validate_csv()
	{
		$file_name = $this->security->xss_clean($this->input->post('file_name'));

		// Column Heads posistions
		$h1 = $this->security->xss_clean($this->input->post('h1')); // Employee Code
		$h2 = $this->security->xss_clean($this->input->post('h2')); // Employee Name
		$h3 = $this->security->xss_clean($this->input->post('h3')); // Department
		$h4 = $this->security->xss_clean($this->input->post('h4')); // Date Of Birth
		$h5 = $this->security->xss_clean($this->input->post('h5')); // Joined Date

		if(isset($file_name) && isset($h1) && isset($h2) && isset($h3) && isset($h4) && isset($h5)){

			$row = 1;
			if (($handle = fopen('./uploads/csv/'.$file_name.'.csv', "r")) !== FALSE) {

				$validation_status = 0;
				$validation_message = '';

				while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {

					if($row>1){ // Ignoring Column Heads

						$entry_no = $row-1;

						// Validate Employee Code
						// * no special charecters allowed
						$employee_code = $data[$h1];
						if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $employee_code)){
							$validation_status = 1;
							$validation_message .= $entry_no.'th Entry - Employee Code conatins not allowed charecters<br>';
						}

						// Validate Employee Name
						// * no special charecters allowed
						$employee_name = $data[$h2];
						if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $employee_name)){
							$validation_status = 1;
							$validation_message .= $entry_no.'th Entry - Employee Name conatins not allowed charecters<br>';
						}

						// Validate Department
						// * no special charecters allowed
						$dept = $data[$h3];
						if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $dept)){
							$validation_status = 1;
							$validation_message .= $entry_no.'th Entry - Department conatins not allowed charecters<br>';
						}

						// Validate Date of Birth
						// * must be a valid date
						$dob = explode('/', $data[$h4]);
						if ($this->check_valid_date($dob[0], $dob[1], $dob[2])){
							$validation_status = 1;
							$validation_message .= $entry_no.'th Entry - Date of Birth is not a valid date<br>';
						}

						// Validate Joined Date
						// * must be a valid date
						$joined_date = explode('/', $data[$h5]);
						if ($this->check_valid_date($joined_date[0], $joined_date[1], $joined_date[2])){
							$validation_status = 1;
							$validation_message .= $row.'th Entry - Joined Date is not a valid date<br>';
						}



						if($validation_message==''){

							$flash_data['flashdata_head_pos'] = $h1.','.$h2.','.$h3.','.$h4.','.$h5;
							$flash_data['status'] = '3';
							$flash_data['flashdata_file'] = $file_name;
							$flash_data['flashdata_msg'] = 'Valid CSV !';
							$flash_data['flashdata_type'] = 'success';
							$flash_data['alert_type'] = 'success';
							$flash_data['flashdata_title'] = 'Success !!';
						}else{
							$flash_data['flashdata_msg'] = $validation_message;
							$flash_data['flashdata_type'] = 'error';
							$flash_data['alert_type'] = 'error';
							$flash_data['flashdata_title'] = 'Failed !!';
						}

					}

					$row++;

				}

				fclose($handle);

			}else{
				$flash_data['status'] = '1';
				$flash_data['flashdata_msg'] = 'File can not be opened, Please re-upload and try again !';
				$flash_data['flashdata_type'] = 'warning';
				$flash_data['alert_type'] = 'warning';
				$flash_data['flashdata_title'] = 'Failed !!';
			}

		}else{
			$flash_data['flashdata_msg'] = 'Required Parameters missing !';
			$flash_data['flashdata_type'] = 'warning';
			$flash_data['alert_type'] = 'warning';
			$flash_data['flashdata_title'] = 'Failed !!';
		}
		echo json_encode($flash_data);

	}

	public function check_valid_date($day,$month,$year) // validate date funnction
	{
		$r = false;
		if($day<1 && $day>31){
			$r = true;
		}

		if($month<1 && $month>12){
			$r = true;
		}

		if($year<1 && $day>32767){
			$r = true;
		}

		return $r; // return true if not valid
	}


	public function update_db()
	{
		$file_name = $this->security->xss_clean($this->input->post('file_name'));
		$csv_head_pos = explode(',', $this->security->xss_clean($this->input->post('csv_head_pos')));

		$h1 = $csv_head_pos[0];
		$h2 = $csv_head_pos[1];
		$h3 = $csv_head_pos[2];
		$h4 = $csv_head_pos[3];
		$h5 = $csv_head_pos[4];
		
		$row = 1;
		if (($handle = fopen('./uploads/csv/'.$file_name.'.csv', "r")) !== FALSE) {

			$validation_status = 0;
			$validation_message = '';
			$error = '';
			while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {

					if($row>1){ // Ignoring Column Heads


						$entry_no = $row-1;

						$data_1 = array();
						$data_1['employee_code'] = $data[$h1];
						$data_1['employee_name'] = $data[$h2];
						$data_1['department'] = $data[$h3];
						$data_1['dob'] = date('Y-m-d',strtotime(str_replace('/', '-', $data[$h4])));
						$data_1['joined_date'] = date('Y-m-d',strtotime(str_replace('/', '-', $data[$h5])));

						$count = $this->Employees->select_employees('*',$data_1)->num_rows();


						if($count == 0 ){

							$add = $this->Employees->insert_employee($data_1);

							if($add['status']!=1){
								$error .= $entry_no.'th entry adding to database failed !<br>';

							}

						}else{
							$error .= $entry_no.'th entry is duplicate , the data already exists in the system !<br>';
						}

					}

					$row++;

				}

				if($error==''){
					$flash_data['status'] = 1;
					$flash_data['flashdata_type'] = 'success';
					$flash_data['alert_type'] = 'info';
					$flash_data['flashdata_title'] = 'Success !';
					$flash_data['flashdata_msg'] = "Employees Added Successfully!";
				}else{
					$flash_data['status'] = 1;
					$flash_data['flashdata_type'] = 'warning';
					$flash_data['alert_type'] = 'warning';
					$flash_data['flashdata_title'] = 'Error !';
					$flash_data['flashdata_msg'] = $error;
				}

			}else{
				$flash_data['status'] = '1';
				$flash_data['flashdata_msg'] = 'File can not be opened, Please re-upload and try again !';
				$flash_data['flashdata_type'] = 'warning';
				$flash_data['alert_type'] = 'warning';
				$flash_data['flashdata_title'] = 'Failed !!';
			}

			echo json_encode($flash_data);


		}

	}