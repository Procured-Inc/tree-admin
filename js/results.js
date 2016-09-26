var data = [
	 
  {
    "name":"Prajwal",
    "sid":423,
    "apti":20,
    "psycho":10,
    "tech":30
  },
  {
    "name":"Jyoti",
    "sid":133,
    "apti":40,
    "psycho":40,
    "tech":30
  }
];

// var trow = "<tr>"
// 			+"<td style\"text-align:center\">STUD_ID</td>"
// 			+"<td>STUD_NAME</td>"
// 			+"<td>STUD_ID_SCORE</td>"
// 			+"</tr>";

// function makeTable(){

// }
// makeTable();

var switcher = Boolean(0);
var arr = ["sid","name","apti","psycho","tech","score"];
var chosen;

function compD(b,a){
		switch(chosen){
			case 0: return b.sid-a.sid;
					break;
			case 1: return a.name.localeCompare(b.name);
					break;
			case 2: return b.apti-a.apti;
					break;
			case 3: return b.psycho-a.psycho;
					break;
			case 4: return b.tech-a.tech;
					break;
			case 5: return (b.apti+b.tech+b.psycho)-(a.apti+a.tech+a.psycho);
					break;
		}
		// return a.apti-b.apti;
}
function compA(a,b){
		switch(chosen){
			case 0: return b.sid-a.sid;
					break;
			case 1: return a.name.localeCompare(b.name);
					break;
			case 2: return b.apti-a.apti;
					break;
			case 3: return b.psycho-a.psycho;
					break;
			case 4: return b.tech-a.tech;
					break;
			case 5: return (b.apti+b.tech+b.psycho)-(a.apti+a.tech+a.psycho);
					break;
		}
}

function sortBy(val){
	chosen=val;
	switcher=(!switcher);
	if(switcher){
		data.sort(compD);
	}else{
		data.sort(compA);
	}
	// data.sort(comp);
	var cutoff = localStorage.getItem('cutoff');
	$('#mytable tbody').empty();
	var dataz=[];
	for(var ix in data){
			if(data[ix].apti+data[ix].tech>cutoff){
				dataz.push(data[ix]);
				var trow = "<tr>"
								+"<td>"+data[ix].sid+"</td>"
								+"<td>"+data[ix].name+"</td>"
								+"<td>"+data[ix].apti+"</td>"
								+"<td>"+data[ix].psycho+"</td>"
								+"<td>"+data[ix].tech+"</td>"
								+"<td>"+parseInt(data[ix].apti+data[ix].tech)+"</td>"
								+"</tr>";
						$('#t_body').append(trow);
			}
		}
		graphit(dataz);
		$('#stacked').children()[1].remove();
}

	// for(var ix in data){
	// 	var trow = "<tr>"
	// 					+"<td>"+data[ix].sid+"</td>"
	// 					+"<td>"+data[ix].name+"</td>"
	// 					+"<td>"+data[ix].score+"</td>"
	// 					+"</tr>";
	// 			$('#t_body').append(trow);
	// }

sortBy(0);
// function sortByScore(){
//        var rkl = document.getElementById('t_body').children.length;
//        for(var jx=0;jx<rkl-1;jx++){
//                for(var kx=1;kx<rkl;kx++){
//        				var r_kids = document.getElementById('t_body').children;
//                        var val1 = r_kids[jx].children[2].innerText;
//                        var val2 = r_kids[kx].children[2].innerText;

//                        if(val1<val2){
//                        	// console.log(r_kids.children);

//                                for(var lx in r_kids.children ){
//                                        var temp=document.getElementById('t_body').children[jx].children[lx].innerText;
//                                        document.getElementById('t_body').children[jx].children[lx].innerText=r_kids[kx].children[lx].innerText;
//                                        document.getElementById('t_body').children[kx].children[lx].innerText=temp;
//                                }

//                        }

//                        // console.log(r_kids.children);
//                        document.getElementById('t_body').children=r_kids
//                    }
//                }
//            }

// function sorter(){
//        var kids = document.getElementById('t_body').children;

//        kids.sort(function(a,b){
//        				   var val1 = kids[a].children[2].innerText;
//                        var val2 = kids[b].children[2].innerText;
//                        return val1-val2;
//        });
 
//  		$.each(kids, function(index, row) {
//    			 $('#t_body').children('tbody').append(row);
//   		});

// }

// $("#myTable").tablesorter();

function setCutoff(){

	var cutoff = $('#cutoff').val();
	localStorage.setItem('cutoff',cutoff);

	var dataz=[];
		chosen=2;
		switcher=(!switcher);
		if(switcher){
			data.sort(compD);
		}else{
			data.sort(compA);
		}
		// data.sort(comp);
		$('#mytable tbody').empty();
		for(var ix in data){
			if(data[ix].apti+data[ix].tech>cutoff){
				dataz.push(data[ix]);
				var trow = "<tr>"
								+"<td>"+data[ix].sid+"</td>"
								+"<td>"+data[ix].name+"</td>"
								+"<td>"+data[ix].apti+"</td>"
								+"<td>"+data[ix].psycho+"</td>"
								+"<td>"+data[ix].tech+"</td>"
								+"<td>"+parseInt(data[ix].apti+data[ix].psycho+data[ix].tech)+"</td>"
								+"</tr>";
						$('#t_body').append(trow);
			}
		}

		// $('#stacked').remove();
		graphit(dataz);
		$('#stacked').children()[1].remove();
	

}


function graphit(data){
	var datax = data,
    config = {
      data: datax,
      xkey: 'name',
      ykeys: ['apti','psycho','tech'],
      labels: ['Aptitude','Psychometric','Technical'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','green','red']
  };


	config.element = 'stacked';
	config.stacked = true;
	Morris.Bar(config);
}

// graphit(data);