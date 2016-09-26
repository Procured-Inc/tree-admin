var ques = {
	apti : [],
	bev:[],
	psycho:[],
	tech:[],
	verb:[]
};

var format =["apti", "bev", "psycho", "tech", "verb"];
var fullFormat =["Aptitude", "Behavioral", "Psyschometric", "Technical", "Verbal"];
var ques1 = JSON.parse(localStorage.getItem("quesFormat"));
var qfix = localStorage.getItem("qfix");
if(qfix==0) document.getElementById("fa_left").style.color = "gainsboro";
//Current Topic
function getCur(){
	qfix=localStorage.getItem('qfix');
	if(ques1[format[qfix]]=="yes") return format[qfix];
	else if(ques1[format[qfix]]=="no"){
		qfix++;
		if(qfix>4) endCreateQb();
		else{
			localStorage.setItem("qfix",qfix);
			return getCur();
		}
	}
}
var fin = getCur();
localStorage.setItem('fin',fin);
var cur = ques1[fin];
$("#topic").text(fullFormat[qfix]);

function endCreateQb(){		var ct = JSON.parse(localStorage.getItem('ct'));
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
											"data" : JSON.stringify(info) ,
											"processData": false,
											"dataType" : "json",
									       	
										success: function(data) {
												// alert(data.testid);
												// localStorage.setItem('testid',data.testid);
												console.log("SUCCESS");

										},error: function(d) {
											console.log(d);
											console.log("FAILURE");
										}
									});

	window.location.href="qb-done.html";
	// console.log("End wb");

}


// Populate previous questions
// var ok;
function popTable(obj,arr){
	// console.log("here"+obj);
	// console.log("here_"+arr[0]);
	var TI_ID = "TI_ID";
	var qrow= '<tr>'
				+'<td width=\"10%\">'+TI_ID+'</td>'
				+'<td width=\"50%\">'+obj.ques+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+arr[0]+'\">'+arr[0]+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+arr[1]+'\">'+arr[1]+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+arr[2]+'\">'+arr[2]+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+arr[3]+'\">'+arr[3]+'</td>'
				+'</tr>';

				$("#q_body").prepend(qrow);
				document.getElementsByName(TI_ID+'_'+obj.correct)[0].style.backgroundColor = "#dff0d8";
				document.getElementsByName(TI_ID+'_'+obj.correct)[0].style.fontWeight = "bold";
				document.getElementsByName(TI_ID+'_'+obj.correct)[0].style.color = "#666B85";
}

function getQues(){

			var data;
			fin=localStorage.getItem('fin');
									$.ajax({
											"url":"http://178.33.132.20:30000/questions/"+fin,
											"method" :"GET",
											"contentType":"application/json",
											"data" : data ,
											// "processData": false,
											"dataType" : "json",
									       	
										success: function(data) {
												console.log(data);
												console.log("SUCCESS");
												for(var lx in data){
													// ok=data[lx].answers;
													// console.log("here"+ok);
													popTable(data[lx], data[lx].answers);
												}


										},error: function(d) {
											console.log(d);
											console.log("FAILURE");
										}
									});
}

getQues();

localStorage.setItem('qid',0);

function addQues(){

	clearErr();

	// var x=0;

	// var tr=document.createElement('tr');

	// tr.innerHTML='<td>TI_ID</td>'+'<td>'+$('#ques').val()+'</td>'+'<td>'+$('#q_1').val()+'</td>'+'<td>'+$('#q_2').val()+'</td>'+'<td>'+$('#q_3').val()+'</td>'+'<td>'+$('#q_4').val()+'</td>';
	var in_ques = document.getElementById('ques');
	var in_q_1 = document.getElementById('q_1');
	var in_q_2 = document.getElementById('q_2');
	var in_q_3 = document.getElementById('q_3');
	var in_q_4 = document.getElementById('q_4');

	var flag=-1;

		if(in_ques.value.trim()=="" || in_ques.value==null){
			flag=0;
	    	$('#ques').parent('td').addClass('has-error');
	    }else if(in_q_1.value.trim()=="" || in_q_1.value==null){
	    	flag=1;
	    	$('#q_1').parent('td').addClass('has-error');
	    }else if(in_q_2.value.trim()=="" || in_q_2.value==null){
	    	flag=2;
	    	$('#q_2').parent('td').addClass('has-error');
	    }else if(in_q_3.value.trim()=="" || in_q_3.value==null){
	    	flag=3;
	    	$('#q_3').parent('td').addClass('has-error');
	    }else if(in_q_4.value.trim()=="" || in_q_4.value==null){
	    	flag=4;
	    	$('#q_4').parent('td').addClass('has-error');
	    }
	    if(flag<0){

	    		var TI_ID = "TI_ID";

	    		var corAnsCSS = " style=\"background:#dff0d8; font-weight:bold;\" ";
				var qrow= '<tr>'
				+'<td width=\"10%\">'+TI_ID+'</td>'
				+'<td width=\"50%\">'+$('#ques').val()+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+$('#q_1').val()+'\">'+$('#q_1').val()+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+$('#q_2').val()+'\">'+$('#q_2').val()+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+$('#q_3').val()+'\">'+$('#q_3').val()+'</td>'
				+'<td width=\"10%\" name=\"'+TI_ID+'_'+$('#q_4').val()+'\">'+$('#q_4').val()+'</td>'
				+'</tr>';

				var corAns = document.querySelector('input[type="radio"]:checked').parentElement.parentElement.nextElementSibling.children[0].value;

				var test = {
					"testID": "TI_ID",
    				"qID": localStorage.getItem('qid')+1,
					"ques": $('#ques').val(),
					"correct": corAns,
					"answers": [
						$('#q_1').val(),
						$('#q_2').val(),
						$('#q_3').val(),
						$('#q_4').val()
					]
				};

				$("#q_body").prepend(qrow);
				document.getElementsByName(TI_ID+'_'+corAns)[0].style.backgroundColor = "#dff0d8";
				document.getElementsByName(TI_ID+'_'+corAns)[0].style.fontWeight = "bold";
				document.getElementsByName(TI_ID+'_'+corAns)[0].style.color = "#666B85";
				

				ques[fin].push(test);

							$('#ques').val('');
							$('#q_1').val('');
							$('#q_2').val('');
							$('#q_3').val('');
							$('#q_4').val('');

							clearErr();

								// AJAX

								// var JSONObject = {
								// "candidateGenDto" : {
								// "email" : uname,
								// "password" : passwrd
								// }
								// };
					// 			console.log(test);
					fin=localStorage.getItem('fin');

									$.ajax({
											"url":"http://178.33.132.20:30000/questions/"+fin,
											"method" :"POST",
											"contentType":"application/json",
											"data" : JSON.stringify(test) ,
											"processData": false,
											"dataType" : "json",
									       	
										success: function(data) {
										console.log(data);
												console.log("SUCCESS");

										},error: function(d) {
											console.log(d);
											console.log("FAILURE");
										}
									});
	    }

}

function clearErr(){
	$('#ques').parent('td').removeClass('has-error');
	$('#q_1').parent('td').removeClass('has-error');
	$('#q_2').parent('td').removeClass('has-error');
	$('#q_3').parent('td').removeClass('has-error');
	$('#q_4').parent('td').removeClass('has-error');
}

function nextqb(){
	// console.log("Hello");
	if(qfix<4) {
		if(qfix==0) document.getElementById("fa_left").style.color = "rgb(40, 63, 113)";
		localStorage.setItem('qfix',++qfix);
		var fin = getCur();
		localStorage.setItem('fin',fin);
		var cur = ques1[fin];
		$("#topic").text(fullFormat[qfix]);
		getQues();
	}else endCreateQb();
}

function prevqb(){
	// console.log("Hello");
	if(qfix<1) {
		localStorage.setItem('qfix',--qfix);
		var fin = getCur();
		localStorage.setItem('fin',fin);
		var cur = ques1[fin];
		$("#topic").text(fullFormat[qfix]);
		getQues();
	}else document.getElementById("fa_left").style.color = "gainsboro";
}