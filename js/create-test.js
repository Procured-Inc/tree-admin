var ct = {
	"college":"",
	"date_of_test":"",
	"crit_10":"",
	"crit_12":"",
	"cgpa":"",
	"test_format":"",
	"ctc":"",
	"bond_time":"",
	"bond_amt":"",
	"reqs":"",
	"test_id":"TI_ID"
}

var json = {
colleges: [
     {
	"name": "Nitte Meenakshi Institute of Technology",
	"city": "Bangalore",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}, {
	"name": "National Institute of Technology - Surat",
	"city": "Surat",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}, {
	"name": "Maulana Azad National Institute of Technology",
	"city": "Bhopal",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}, {
	"name": "International Institute of Information Technology",
	"city": "Bhubaneswar",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}
   ]
};

// $(document).ready(function()
// {
//          $.each(json.colleges,function(key,value)
//          {
//              var option = "<option value=\""+value.name+ "\"> "+value.name+"</option>";
// 			 $("#ddCollege").append(option);
//          });
// });

function getColleges(){
	var colleges={};
									$.ajax({
											"url":"http://178.33.132.20:20000/admin/college/details/all",
											"method" :"GET",
											"contentType":"application/json",
											"data" : colleges ,
											// "processData": false,
											"dataType" : "json",
									       	
										success: function(colleges) {
												console.log(colleges);
												console.log("SUCCESS");

												$.each(colleges,function(key,value)
										         {
										             var option = "<option value=\""+value.college_id+ "\"> "+value.college_name+"</option>";
													 $("#ddCollege").append(option);
         										});


										},error: function(d) {
											console.log(d);
											console.log("FAILURE");
										}
									});
}
getColleges();


function getFormat(){

	var apti = document.getElementById('cb_wt_apti');
	var bev = document.getElementById('cb_wt_bev');
	var psycho = document.getElementById('cb_wt_psycho');
	var tech = document.getElementById('cb_wt_tech');
	var verb = document.getElementById('cb_wt_verb');

	var format =[apti, bev, psycho, tech, verb];

	var ques= {"apti":"no", "bev":"no", "psycho":"no", "tech":"no", "verb":"no"};

	for(var ix in format){
		var str = format[ix].value;
		if(format[ix].checked){
			ques[str] = "yes";
		}
	}

	localStorage.setItem("quesFormat",JSON.stringify(ques));
	localStorage.setItem("qfix",0);

	return ques;

}

//verify date

// function func(){
// 	var sel = new Date ($(".md-datepicker-input").val());
// 	var now = new Date();
// 	now.setHours(0,0,0,0);
// 	if(sel<now){
// 		alert("NO!");
// 	}
// }

function onSubmit(){
	ct.college= $("#ddCollege").val();
	ct.date_of_test=$(".md-datepicker-input").val();
	ct.crit_10 = $("#range10").text();
	ct.crit_12 = $("#range12").text();
	ct.cgpa = $("#range16").text();
	ct.test_format = getFormat();
	ct.ctc = $("#ctc").val();
	ct.bond_time = $("#bond_time").val();
	ct.bond_amt = $("#bond_amt").val();
	ct.reqs = $("#reqs").val();

	localStorage.setItem('ct',JSON.stringify(ct));

	doit();

	window.location.href = "create-qs.html";
}

function doit(){
var ct = JSON.parse(localStorage.getItem('ct'));
									var info={
									    "company_id": "inc01",
									    "college_id":ct.college,
									    "test_det":"nitd",
									    "test_date":ct.date_of_test,
									    "test_users":500,
									    "test_duration":9,
									    "test_details":{
											"crit_10":ct.crit_10,
											"crit_12":ct.crit_12,
											"cgpa":ct.cgpa,
											"test_format":ct.test_format,
											"ctc":ct.ctc,
											"bond_time":ct.bond_time,
											"bond_amt":ct.bond_amt,
											"reqs":ct.reqs,
											"test_id":"TI_ID"
										}
									  };
console.log("in");
console.log(info);
									$.ajax({
											"url":"http://178.33.132.20:20000/admin/test/create",
											"method" :"POST",
											"contentType":"application/json",
											"data" : JSON.stringify(info),
											"processData": false,
											"dataType" : "json",
									       	
										success: function(data) {
												console.log(data);
												// if(data[0].testid){
												// sessionStorage.setItem('testid',data.testid);

												// }
												// else{
												// 	sessionStorage.setItem('testid', null);
												// }
												console.log("SUCCESS");
												// alert(data);

										},error: function(d) {
											console.log(d);
											console.log("FAILURE");
										}
									});
									// alert(info);
}