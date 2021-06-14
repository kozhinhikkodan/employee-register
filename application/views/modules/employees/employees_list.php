<!--begin::Content-->
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

  <!--begin::Entry-->
  <div class="d-flex flex-column-fluid">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Dashboard-->


      <!--begin::Card-->
      <div class="card card-custom">
        <div class="card-header">
          <div class="card-title">
            <span class="card-icon">

            </span>
            <h3 class="card-label">List of Employees</h3>
          </div>
          <div class="card-toolbar">
            <a data-toggle="modal" data-target="#csv_upload_modal" class="btn btn-dark font-weight-bolder">
              <span class="svg-icon svg-icon-md">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                    <rect fill="#000000" opacity="0.3" x="11" y="2" width="2" height="14" rx="1"/>
                    <path d="M12.0362375,3.37797611 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 L11.2928932,1.29289322 C11.6689749,0.916811528 12.2736364,0.900910387 12.6689647,1.25670585 L17.6689647,5.75670585 C18.0794748,6.12616487 18.1127532,6.75845471 17.7432941,7.16896473 C17.3738351,7.57947475 16.7415453,7.61275317 16.3310353,7.24329415 L12.0362375,3.37797611 Z" fill="#000000" fill-rule="nonzero"/>
                  </g>
                </svg>
              </span>Upload CSV</a>
            </div>
          </div>
          <div class="card-body">
            <!--begin: Datatable-->
            <table class="table table-bordered table-hover table-checkable" id="employees_view_table" style="margin-top: 13px !important">
              <thead>
                <tr>

                  <th width="5%">SL</th>
                  <th width="10%">Employee Code</th>
                  <th width="30%">Employee Name</th>
                  <th width="30%">Department</th>
                  <th width="10%">Age</th>
                  <th width="20%">Exp</th>

                </thead>

              </table>


              <!--end: Datatable-->
            </div>
          </div>
          <!--end::Card-->
        </div>
      </div>
    </div>
    <!--end::Content-->



    <div class="modal fade" id="csv_upload_modal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form autocomplete="off" id="form_alert_import" data-form-type="alert" data-modal-id="csv_upload_modal" method="POST" action="<?= base_url()?>dashboard/upload_csv">
            <div class="modal-header bg-primary">
              <h5 class="modal-title text-white" id="exampleModalLabel">Upload CSV</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <i aria-hidden="true" class="ki ki-close"></i>
              </button>
            </div>
            <div class="modal-body">

              <div class="form_alert_approve_alert alert alert-custom alert-light-warning fade show mb-5 d-none" role="alert">
                <div class="alert-icon"><i class="flaticon-warning"></i></div>
                <div class="alert-text">Some fields missed or filled incorrectly , Please correct and try again!</div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Select File</label>
                    <div></div>
                    <div class="custom-file">
                     <input type="file" class="custom-file-input" id="rule_file" name="csv_file" />
                     <label class="custom-file-label" for="customFile" accept=".csv">Choose file</label>
                     <span class="form-text text-muted">For Sample File click here : <a href="<?= base_url() ?>uploads/sample_csv.csv" download target="_blank">sample_csv.csv</a></span>
                   </div>
                 </div>
               </div>
             </div>

           </div>
           <div class="modal-footer">
            <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary font-weight-bold form_submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div class="modal fade" id="csv_validate_modal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form autocomplete="off" id="form_alert_import" data-form-type="alert" data-modal-id="csv_validate_modal" method="POST" action="<?= base_url()?>dashboard/validate_csv">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white" id="exampleModalLabel">Validate CSV</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i aria-hidden="true" class="ki ki-close"></i>
            </button>
          </div>
          <div class="modal-body">

            <div class="form_alert_approve_alert alert alert-custom alert-light-warning fade show mb-5 d-none" role="alert">
              <div class="alert-icon"><i class="flaticon-warning"></i></div>
              <div class="alert-text">Some fields missed or filled incorrectly , Please correct and try again!</div>
            </div>

            <input type="hidden" name="file_name" id="csv_file_name">

            <div class="row">
              <div class="col-md-6">
               <div class="form-group ">
                <label for="employee_code_select">Employee Code</label>
                <select required style="width: 100%" class="form-control select2 colmn_head_select" id="employee_code_select" name="h1">
                </select>
              </div>
              <label for="employee_code_select" class="error"></label>
            </div>

            <div class="col-md-6">
             <div class="form-group ">
              <label for="employee_name_select">Employee Name</label>
              <select required style="width: 100%" class="form-control select2 colmn_head_select" name="h2" id="employee_name_select">
              </select>
            </div>
            <label for="employee_name_select" class="error"></label>
          </div>

          <div class="col-md-6">
           <div class="form-group ">
            <label for="department_select">Department</label>
            <select required style="width: 100%" class="form-control select2 colmn_head_select" name="h3" id="department_select">
            </select>
          </div>
          <label for="department_select" class="error"></label>
        </div>

        <div class="col-md-6">
         <div class="form-group ">
          <label for="dob_select">Date of Birth</label>
          <select required style="width: 100%" class="form-control select2 colmn_head_select" name="h4" id="dob_select">
          </select>
        </div>
        <label for="dob_select" class="error"></label>
      </div>

      <div class="col-md-6">
       <div class="form-group ">
        <label for="joined_select">Joined Date</label>
        <select required style="width: 100%" class="form-control select2 colmn_head_select" name="h5" id="joined_select">
        </select>
      </div>
      <label for="joined_select" class="error"></label>
    </div>
  </div>

</div>
<div class="modal-footer">
  <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary font-weight-bold form_submit">Submit</button>
</div>
</form>
</div>
</div>
</div>

<div class="modal fade" id="db_update_modal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form method="post" data-form-type="rule" data-modal-id="db_update_modal" action="<?= base_url()?>dashboard/update_db">
                <div class="modal-body bg-success">
                    <h2 class="modal-title text-white">Are you sure to Update to Database ? </h2>
                    <!-- <h5 class="modal-title text-white">This action can not be reversed</h5> -->
                    <hr>

                    <input type="hidden" id="csv_file_name_upload" name="file_name">
                    <input type="hidden" id="csv_head_pos" name="csv_head_pos">


                    <div class="row">
                        <div class="col-md-5"></div>
                        <button type="button" class="btn btn-white text-dark font-weight-bold mr-1" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-white font-weight-bold text-success form_submit">Update Database</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>


<script type="text/javascript">
  $('.menu-item-active').removeClass('menu-item-active');
  $('#employees_menu').addClass('menu-item-active');

  $('.select2').select2({
    placeholder: 'Select'
  });


</script>


<script type="text/javascript">

 function GetStartDate() { return $('#table_filter_start_date').val();}
 function GetEndDate() { return $('#table_filter_end_date').val(); }
 function GetMarked() { return $('[name=table_filter_feedback_status]:checked').val(); }

 var employees_view_table = $('#employees_view_table').DataTable({

  "ajax":{
    url :"<?= base_url().'dashboard/select_employees' ?>",
    type: "post",
    data: function(d){
        // d.start_date = GetStartDate();
        // d.end_date = GetEndDate();
        // d.marked = GetMarked();
      }
    },

    // serverSide: true,
    // responsive: true,
    // searchDelay: 500,
    // processing: true,
    scrollX:true,
    // dom: 'Bfrtip',
    // buttons: [
    // 'csv', 'excel', 'pdf', 'print'
    // ],
    // buttons:[
    // {
    //   extend: 'csv',
    //   exportOptions: {
    //     columns: [ "thead th:not(.noExport)" ]
    //   }
    // }
    // ,{
    //   extend: 'excel',
    //   exportOptions: {
    //     columns: [ "thead th:not(.noExport)" ]
    //   }
    // },
    // {
    //   extend: 'pdf',
    //   exportOptions: {
    //     columns: [ "thead th:not(.noExport)" ]
    //   }
    // },
    // {
    //   extend: 'print',
    //   exportOptions: {
    //     columns: [ "thead th:not(.noExport)" ]
    //   }
    // }
    // ],

    columnDefs: [
    { 
      orderable: false, 
      targets: [],

    },
    {
      className:'d-none noExport',
      targets:[]
    }
    ]

  });

 $(".table_filters").on("change", function() {
  employees_view_table.ajax.reload();
});

 $('body').on('click', '#mark_btn', function() {
  var row = $(this).closest('tr').children('td');
  var feedback_id = row.eq(5).text();
  $.post("<?= base_url() ?>feedbacks/mark",{'feedback_id':feedback_id},function(data) {
    var obj = $.parseJSON(data);
    console.log(obj);
    toastr[obj.flashdata_type](obj.flashdata_msg, obj.flashdata_title);
    employees_view_table.ajax.reload();
    if(obj.unmarked>0){
      $('#unread_feedbacks_count_div').show();
      $('#unread_feedbacks_count').html(obj.unmarked+' New');
    }else{
      $('#unread_feedbacks_count_div').hide();
    }
  }); 
});

</script>