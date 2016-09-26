var str="",ix=0;
                        var fullFormat =["Aptitude", "Behavioral", "Psyschometric", "Technical", "Verbal"];
                        var stuff = JSON.parse(localStorage.getItem("quesFormat"));
                        $.each(stuff, function( key,values){
                        if(values=="yes") str+=fullFormat[ix]+" \n"; 
                        ix++;
                        });
                        $('#info').text("\nTest successfully created. \n \nQuestion database created for the following:  \n"+str);

									                        