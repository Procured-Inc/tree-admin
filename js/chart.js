var datax = [
   {
    name:"Nuzha",
    sid:123,
    apti:34,
    tech:43
  },
  {
    name:"Vikash",
    sid:911,
    apti:73,
    tech:73
  },
  {
    name:"Prajwal",
    sid:423,
    apti:54,
    tech:56
  },
  {
    name:"Shubham",
    sid:523,
    apti:64,
    tech:34
  },
  {
    name:"Jyoti",
    sid:023,
    apti:74,
    tech:73
  },
  {
    name:"Debapriya",
    sid:451,
    apti:46,
    tech:93
  },{
    name:"Manogna",
    sid:144,
    apti:100,
    tech:100
  },
  {
    name:"Sujit",
    sid:346,
    apti:35,
    tech:73
  },
  {
    name:"Ashish",
    sid:745,
    apti:88,
    tech:73
  },
  {
    name:"Amarya",
    sid:534,
    apti:35,
    tech:72
  },
  {
    name:"Freya",
    sid:235,
    apti:36,
    tech:73
  }
],
    config = {
      data: datax,
      xkey: 'name',
      ykeys: ['apti','tech'],
      labels: ['Aptitude','Technical'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','red']
  };


config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);