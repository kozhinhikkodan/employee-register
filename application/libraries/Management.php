<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Management {

	function __construct()
	{
		ini_set('max_execution_time', 5000);
		ini_set("memory_limit", "-1");
		date_default_timezone_set('Asia/Kolkata');

		$CI =& get_instance();
		$this->CI =& get_instance();
		$this->CI->load->library('session');
		$CI->load->model('User_model', 'User');
		$CI->load->model('Suppliers_model', 'Suppliers');
		$CI->load->model('Customers_model', 'Customers');
		$CI->load->model('Purchases_model','Purchases');
		$CI->load->model('Sales_model','Sales');		
		$CI->load->model('Materials_model','Materials');
		$CI->load->model('Income_model','Income');		
		$CI->load->model('Expense_model','Expense');
		$CI->load->model('Employees_model','Employees');
		$CI->load->model('Salary_slips_model','Salary_slips');				
	}

	public function calculate_stock_balance($material_id)
	{
		$CI =& get_instance();

		$data2['si.material_id'] = $data1['pi.material_id'] = $data3['material_id'] = $material_id;
		$purchased_quantity = $CI->Purchases->select_purchase_items('COALESCE(SUM(pi.item_qty),0) as purchased_qty',$data1)->row()->purchased_qty;

		$sold_quantity = $CI->Sales->select_sale_items('COALESCE(SUM(si.item_qty),0) as sold_qty',$data2)->row()->sold_qty;
		$data3['available_qty'] = $purchased_quantity - $sold_quantity;

		$CI->Materials->update_material($data3);

		return true;
	}

	public function calculate_purchase_balance($purchase_id)
	{
		$CI =& get_instance();

		$data['p.purchase_id'] = $data2['purchase_id'] = $purchase_id;
		$total_paid_amount = $CI->Purchases->select_purchase_payments('COALESCE(SUM(pp.paid_amount),0) as total_paid_amount',$data)->row()->total_paid_amount;

		$purchase_data = $CI->Purchases->select_purchases('*',array('p.purchase_id'=>$purchase_id))->row();

		$total_advance_returned = $CI->Suppliers->select_supplier_advance_payments_returns('COALESCE(SUM(sapr.returned_amount),0) as total_advance_returned', array('sapr.purchase_id' => $purchase_id ))->row()->total_advance_returned;

		$data2['paid_amount'] = $total_paid_amount + $total_advance_returned;

		$data2['balance_amount'] = $purchase_data->payable_amount - $data2['paid_amount']; 

		if($data2['balance_amount']==0){
			$data2['payment_status'] = 1;
		}elseif ($data2['paid_amount']<$purchase_data->payable_amount && $data2['paid_amount']!=0) {
			$data2['payment_status'] = 2;
		}else {
			$data2['payment_status'] = 0;
		}

		$CI->Purchases->update_purchase($data2);

		return true;
	}

	public function calculate_supplier_balance($supplier_id)
	{
		$CI =& get_instance();

		$data['s.supplier_id'] = $data2['supplier_id'] = $supplier_id;
		$data2['total_amount'] = $CI->Purchases->select_purchases('COALESCE(SUM(p.payable_amount),0) as total_payable_amount',$data)->row()->total_payable_amount;

		$total_purchase_paid = $CI->Purchases->select_purchase_payments('COALESCE(SUM(pp.paid_amount),0) as total_paid_amount',$data)->row()->total_paid_amount;
		
		$total_advance_paid = $CI->Suppliers->select_supplier_advance_payments('COALESCE(SUM(sap.paid_amount),0) as total_advance_paid',$data)->row()->total_advance_paid;
		$total_advance_returned = $CI->Suppliers->select_supplier_advance_payments_returns('COALESCE(SUM(sapr.returned_amount),0) as total_advance_returned',$data)->row()->total_advance_returned;

		$data2['total_paid'] = $total_purchase_paid + $total_advance_paid - $total_advance_returned;

		$data2['balance_amount'] = $data2['total_amount'] - $data2['total_paid'];
		$result = $CI->Suppliers->update_supplier($data2);
	}

	public function get_supplier_balance($supplier_id)
	{
		$CI =& get_instance();

		$data['s.supplier_id'] = $data2['supplier_id'] = $supplier_id;

		if($CI->session->userdata('user_role')=='green'){
			$data['ur.role'] = 'green';
		}else {
			$data['ur.role!='] = 'green';
		}

		$data2['total_amount'] = $CI->Purchases->select_purchases('COALESCE(SUM(p.payable_amount),0) as total_payable_amount',$data)->row()->total_payable_amount;

		$total_purchase_paid = $CI->Purchases->select_purchase_payments('COALESCE(SUM(pp.paid_amount),0) as total_paid_amount',$data)->row()->total_paid_amount;
		
		$total_advance_paid = $CI->Suppliers->select_supplier_advance_payments('COALESCE(SUM(sap.paid_amount),0) as total_advance_paid',$data)->row()->total_advance_paid;

		$total_advance_returned = $CI->Suppliers->select_supplier_advance_payments_returns('COALESCE(SUM(sapr.returned_amount),0) as total_advance_returned',$data)->row()->total_advance_returned;

		$data2['total_paid'] = $total_purchase_paid + $total_advance_paid ;

		$data2['balance_amount'] = $data2['total_amount'] - $data2['total_paid'];
		return $data2;
	}


	public function calculate_sale_balance($sale_id)
	{
		$CI =& get_instance();

		$data['s.sale_id'] = $data2['sale_id'] = $sale_id;
		$total_received_amount = $CI->Sales->select_sale_payments('COALESCE(SUM(sp.received_amount),0) as total_received_amount',$data)->row()->total_received_amount;


		$sale_data = $CI->Sales->select_sales('*',array('s.sale_id'=>$sale_id))->row();

		$data2['received_amount'] = $total_received_amount;
		$data2['balance_amount'] = $sale_data->receivable_amount - $total_received_amount; 
		if($data2['balance_amount']==0){
			$data2['payment_status'] = 1;
		}elseif ($data2['received_amount']<$sale_data->receivable_amount && $data2['received_amount']!=0) {
			$data2['payment_status'] = 2;
		}else {
			$data2['payment_status'] = 0;
		}

		// exit(print_r($data2));

		$CI->Sales->update_sale($data2);

		return true;
	}

	public function calculate_customer_balance($customer_id)
	{
		$CI =& get_instance();

		$data['c.customer_id'] = $data2['customer_id'] = $customer_id;
		$data2['customer_total_amount'] = $CI->Sales->select_sales('COALESCE(SUM(s.receivable_amount),0) as total_receivable_amount',$data)->row()->total_receivable_amount;
		$data2['customer_total_received'] = $CI->Sales->select_sale_payments('COALESCE(SUM(sp.received_amount),0) as total_received_amount',$data)->row()->total_received_amount;
		$data2['customer_balance_amount'] = $data2['customer_total_amount'] - $data2['customer_total_received'];
		$result = $CI->Customers->update_customer($data2);
		return $result;
	}

	public function calculate_income_head_balance($income_head_id)
	{
		$CI =& get_instance();

		$data2['income_head_id'] = $data['i.income_head_id'] = $income_head_id;
		$data2['total_received_amount'] = $CI->Income->select_income('COALESCE(SUM(i.received_amount),0) as total_received_amount',$data)->row()->total_received_amount;

		$result = $CI->Income->update_income_head($data2);
	}

	public function calculate_expense_head_balance($expense_head_id)
	{
		$CI =& get_instance();

		$data2['expense_head_id'] = $data['e.expense_head_id'] = $expense_head_id;
		$data2['total_paid_amount'] = $CI->Expense->select_expenses('COALESCE(SUM(e.paid_amount),0) as total_paid_amount',$data)->row()->total_paid_amount;

		$result = $CI->Expense->update_expense_head($data2);

	}

	public function calculate_employee_pending_salary($employee_id='')
	{
		$data4 = array();
		if($employee_id!=''){
			$data4['e.employee_id'] = $employee_id ;
		}

		$employees_result_array = $this->CI->Employees->select_employees('*',$data4)->result();

		foreach ($employees_result_array as $key => $value1) {
			$joined_date = $value1->joined_date;

			$data2['employee_id'] = $value1->employee_id;
			$data2['created_date'] = date('Y-m-d H:i:s');
			$data2['created_by'] = $this->CI->session->userdata('user_id');

			$period = new DatePeriod(
				new DateTime($joined_date),
				new DateInterval('P1D'),
				new DateTime()
			);

			$data6['ps.employee_id'] = $value1->employee_id;

			$pending_salaries = $this->CI->Salaries->select_pending_salaries('*',$data6)->result();

			foreach ($pending_salaries as $key => $value2) {
				$data7['pending_salary_id'] = $value2->pending_salary_id;
				$data7['delete_status'] = 1;
				$delete_pending_salaries = $this->CI->Salaries->update_pending_salary($data7);
			}


			foreach ($period as $key => $value3) {
				$dates[] = $date = $data['ps.salary_date'] = $data2['salary_date'] = $value3->format('Y-m-d');  

				$days = cal_days_in_month(CAL_GREGORIAN, $value3->format('m'), $value3->format('Y'));

				$data2['salary_amount'] = $employee_salary = $value1->monthly_salary/$days;

				// $count = $this->CI->Expense->select_expenses('e.expense_id',$data)->num_rows();

				// if($count==0){
				$result = $this->CI->Salaries->insert_pending_salary($data2);

				if($result['status'] == 1){

					$this->calculate_salary_balance($value1->employee_id);

				}

				// }
			}

		}

	}

	public function calculate_salary_slip_balance($salary_slip_id)
	{
		$CI =& get_instance();

		$data2['salary_slip_id'] = $data['ssp.salary_slip_id'] = $data3['ss.salary_slip_id'] = $salary_slip_id;
		$salary_slip_data = $CI->Salary_slips->select_salary_slips('ss.total_payable_wage as total,ss.employee_id',$data3)->row();
		$data2['total_payable_wage'] = $salary_slip_data->total;
		$data2['total_paid_amount'] = $CI->Salary_slips->select_salary_slip_payments('COALESCE(SUM(ssp.paid_amount),0) as total_paid_amount',$data)->row()->total_paid_amount;
		$data2['total_balance_amount'] = $data2['total_payable_wage'] - $data2['total_paid_amount'];
		
		if($data2['total_balance_amount']>=0){
			if($data2['total_balance_amount']==0){
				$data2['payment_status'] = 1;
			}else{
				if($data2['total_balance_amount'] == $data2['total_payable_wage']){
					$data2['payment_status'] = 0;
				}else{
					$data2['payment_status'] = 2;
				}
			}
		}else{
			$data2['payment_status'] = 3;
		}
		
		$result = $CI->Salary_slips->update_salary_slip($data2);

		$data5['ss.employee_id'] = $data4['employee_id'] = $salary_slip_data->employee_id;
		$data4['total_wage_amount'] = $CI->Salary_slips->select_salary_slips('COALESCE(SUM(ss.total_payable_wage),0) as total',$data5)->row()->total;
		$data4['total_paid_wage'] = $CI->Salary_slips->select_salary_slip_payments('COALESCE(SUM(ssp.paid_amount),0) as total_paid_amount',$data5)->row()->total_paid_amount;
		$data4['pending_wage'] = $data4['total_wage_amount'] - $data4['total_paid_wage'];
		$result = $CI->Employees->update_employee($data4);

	}

	public function calculate_employee_wage_balance($employee_id)
	{
		$CI =& get_instance();

		$data3['ss.employee_id'] = $data2['employee_id'] = $employee_id;
		$data2['total_wage_amount'] = $CI->Salary_slips->select_salary_slips('COALESCE(SUM(ss.total_payable_wage),0) as total',$data3)->row()->total;
		$data2['total_paid_wage'] = $CI->Salary_slips->select_salary_slip_payments('COALESCE(SUM(ssp.paid_amount),0) as total_paid_amount',$data3)->row()->total_paid_amount;
		$data2['pending_wage'] = $data2['total_wage_amount'] - $data2['total_paid_wage'];
		$result = $CI->Employees->update_employee($data2);

	}

	public function amount_to_words($number)
	{
		$no = floor($number);
		$point = round($number - $no, 2) * 100;
		$hundred = null;
		$digits_1 = strlen($no);
		$i = 0;
		$str = array();
		$words = array('0' => '', '1' => 'one', '2' => 'two',
			'3' => 'three', '4' => 'four', '5' => 'five', '6' => 'six',
			'7' => 'seven', '8' => 'eight', '9' => 'nine',
			'10' => 'ten', '11' => 'eleven', '12' => 'twelve',
			'13' => 'thirteen', '14' => 'fourteen',
			'15' => 'fifteen', '16' => 'sixteen', '17' => 'seventeen',
			'18' => 'eighteen', '19' =>'nineteen', '20' => 'twenty',
			'30' => 'thirty', '40' => 'forty', '50' => 'fifty',
			'60' => 'sixty', '70' => 'seventy',
			'80' => 'eighty', '90' => 'ninety');
		$digits = array('', 'hundred', 'thousand', 'lakh', 'crore');
		while ($i < $digits_1) {
			$divider = ($i == 2) ? 10 : 100;
			$number = floor($no % $divider);
			$no = floor($no / $divider);
			$i += ($divider == 10) ? 1 : 2;
			if ($number) {
				$plural = (($counter = count($str)) && $number > 9) ? 's' : null;
				$hundred = ($counter == 1 && $str[0]) ? ' and ' : null;
				$str [] = ($number < 21) ? $words[$number] .
				" " . $digits[$counter] . $plural . " " . $hundred
				:
				$words[floor($number / 10) * 10]
				. " " . $words[$number % 10] . " "
				. $digits[$counter] . $plural . " " . $hundred;
			} else $str[] = null;
		}
		$str = array_reverse($str);
		$result = implode('', $str);
		$points = ($point) ?
		"." . $words[$point / 10] . " " . 
		$words[$point = $point % 10] : '0';
		return ucfirst($result) ." Rupees  ";
	}
}


