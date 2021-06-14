<?php if($page!='purchase_add' && $page!='sale_add' && $page!='purchase_edit' && $page!='sale_edit' && $page!='purchase_order_edit' && $page!='purchase_order_add' && $page!='estimate_edit' && $page!='estimate_add') { ?>
	<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.js"></script>
	<script type="text/javascript">
		
		$('.form_submit').click(function(e) {
			e.preventDefault();
			var btn = $(this);
			var form = $(this).closest('form');
			var action = form.attr('action');
			var form_id = form.attr('id');
			var form_location = form.data('form-location');

			form.validate({
				rules: {

				}
			});

			if (!form.valid()) {

				var scroll_to = '.modal';

				if(form_location=='body'){
					var scroll_to = 'html';
				}

				$(scroll_to).animate({
					scrollTop: $('.'+form_id+'_alert').offset().top
				}, 'slow');

				$('.'+form_id+'_alert').removeClass('d-none');

				return false; 

			}else{
				$('.'+form_id+'_alert').addClass('d-none');
			}

			var btn_text = btn.html();
			btn.html('<span class="spinner ml-3"></span>'+btn_text);

			btn.attr('disabled', true);

			form.ajaxSubmit({
				url: action,
				success: function(response, status, xhr, $form) {

					setTimeout(function() {

						var obj = $.parseJSON(response);

						btn.attr("disabled", false);
						btn.html(btn_text);
						$('.form_'+form_id+'_alert').hide();

						if(obj.status==1){

							var modal_id = form.data('modal-id');
							var form_type = form.data('form-type');

							$('#'+modal_id).modal('toggle');
							$('.'+form_id+'_fields').val('');
							$('.'+form_id+'_select').val('').trigger('change');
							$('.'+form_id+'_textarea').html('');

							if(obj.swal!=1){
								employees_view_table.ajax.reload();
								toastr[obj.flashdata_type](obj.flashdata_msg, obj.flashdata_title);

							}else{

								var html = '';

								$.each(obj.swal_item, function(index, value) {
									html += '<a class="btn '+value.button_class+' m-1" href="'+value.redirect+'">'+value.button_text+'</a><br>';
								});

							// if(obj.redirect && obj.redirect2){
							// 	var html = '<a class="btn btn-success m-1" href="'+obj.redirect+'">'+obj.button_text+'</a><br><a class="btn btn-primary" href="'+obj.redirect2+'">'+obj.button_text2+'</a><br>';
							// }else{
							// 	if(obj.redirect){
							// 		var html = '<a class="btn btn-success m-1" href="'+obj.redirect+'">'+obj.button_text+'</a><br>';
							// 	}else{
							// 		var html = '';
							// 	}
							// }

							swal.fire({
								html: html,
								icon: "success",
								allowOutsideClick: false,
								closeOnEsc: false,
								showConfirmButton: false,
								showCancelButton: false,
								confirmButtonText: obj.button_text,
								confirmButtonColor: "#000",

								title: "Success !",

							})

						} 
					}else if(obj.status==2){
						var modal_id = form.data('modal-id');
						$('#'+modal_id).modal('toggle');

						var heads = obj.flashdata_heads.split(',');
						var options = '<option selected disabled>Select</option>';
						$('.colmn_head_select').html('');
						var pos = 0;
						$.each(heads, function(index, value) {
							options += '<option value="'+pos+'">'+value+'</option>';
							pos++;
						});
						$('.colmn_head_select').html(options);

						$('#csv_file_name').val(obj.flashdata_file);
						$('#csv_validate_modal').modal('toggle');

					}else if(obj.status==3){
						var modal_id = form.data('modal-id');
						$('#'+modal_id).modal('toggle');

						$('#csv_file_name_upload').val(obj.flashdata_file);
						$('#csv_head_pos').val(obj.flashdata_head_pos);

						$('#db_update_modal').modal('toggle');

					}else{
						toastr[obj.flashdata_type](obj.flashdata_msg, obj.flashdata_title);
					}
                    // showErrorMsg(form, 'danger', 'Incorrect username or password. Please try again.');
                }, 2000);

				}
			});
		});
	</script>
<?php } ?>
