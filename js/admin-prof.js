var aProf ={
	"hr_name":"Meghana Guru",
	"hr_email":"meghana.g@incture.com",
	"alt_hr_name":"Sampada Gupta",
	"alt_hr_email":"sampada.gupta@incture.com",
	"comp_id":"BANG_1266",
	"comp_name":"Incture Technologies",
	"comp_email":"hr@incture.com",
	"comp_desc":"Incture’s constant endeavour is - fresh work-spaces of the future. Through a good mix of challenging work environment, and a culture of sharing and learning, we provide a space for professional excellence."
};

document.getElementById('company_poc_name').value = aProf.hr_name;
document.getElementById('company_poc_email_id').value = aProf.hr_email;
document.getElementById('company_alt_poc_name').value = aProf.alt_hr_name;
document.getElementById('company_alt_poc_email_id').value = aProf.alt_hr_email;
// document.getElementBy	Id('company_id').value = "Company Id : " + aProf.comp_id;
document.getElementById('company_name').value = aProf.comp_name;
document.getElementById('company_email_id').value = aProf.comp_email;
document.getElementById('company_desc').value = aProf.comp_desc;

/*edit or save form*/

function change() {
		if($("#mybutton").val()=="Edit")
			{
				enable();
				$("#mybutton").val("Save");
				$("#mybutton").removeClass("btn-awesome")
			}	
		else
	      {
	      		disable();
	      		localStorage.setItem('hr_name',document.getElementById('company_poc_name').value);
				changeUsername();
				$("#mybutton").val("Edit");	
				$("#mybutton").addClass("btn-awesome");
	      }

}

function enable()
{

	var len=document.getElementsByClassName("info").length;

	// var code=document.getElementsByClassName("info");
	// $code.prop("readonly",false);

	for (var i =0;  i <len; i++) {
		var x=document.getElementsByClassName("info")[i];
		x.readOnly=false;
	}

	// document.getElementByClass("info").read=false;
}

function disable()
{
	var len=document.getElementsByClassName("info").length;

	// var code=document.getElementsByClassName("info");
	// $code.prop("readonly",false);

	for (var i =0;  i <len; i++) {
		var x=document.getElementsByClassName("info")[i];
		x.readOnly=true;
	}
}

// Shows when Written Test is enabled

function writAlt()
{
	if(document.getElementById("cb_wt").checked == false){
		 $(".wt_opts").hide();
	}else {
		$(".wt_opts").show();
	}
    // if($('.cb_wt').is(":checked"))   
    //     $(".wt_opts").show();
    // if($('.cb_wt').is(":unchecked")) 
    //     $(".wt_opts").hide();
}

//Submit form for Create Test
function sub(){
	if(document.getElementById("cb_wt").checked == true){

	}
}

document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};