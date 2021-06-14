<?php
class Employees_model extends CI_Model
{
	function __construct()
	{
		parent::__construct();
	}


	public function select_employees($columns='*',$data='')
	{
		$this->db->select($columns)->from('employees e');
		
		if(!empty($data)){
			$this->db->where($data);
		}

		$query = $this->db->get();
		return $query;
	}

		public function insert_employee($data){
		$query = $this->db->insert('employees', $data);
		$result=array();
		$result['insert_id']=$this->db->insert_id();
		$result['status']=$query;
		return $result;
	}

	
}
?>
