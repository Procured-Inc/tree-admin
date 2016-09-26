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

var fName = aProf.hr_name.split(' ')[0];
localStorage.setItem('hr_name',fName);