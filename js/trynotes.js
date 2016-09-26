$(function() {
  var $title = $('#title');
  var $list = $('#toDo');

  // Add a thing
  $('#addThing').on('submit', function(e) {
    var $thing = $('#addText').val();
    $thing = $.trim($thing);

    if ($thing) {
      var html = '<li class="done">';
      // html += '<i class="fa fa-square-o"></i> ';
      html += '<i class="fa fa-close"></i>';
      html += $thing;
      html += '</li>';
      $list.prepend(html);
      //Add it to the student's JSON
      var ix = parseInt(window.localStorage.getItem('cur_stud'));
      studs[ix].comments.push($thing);
    }

    // updateTitle($list, $title);

    $('#addText').val('');

    return false;
  });

  // List items
  $list.on('click', 'li', function(e) {
    var $this = $(this);
    var $target = $(e.target);

    
    if ($target.hasClass('fa-close')) {
      // If clicked delete
      $target.parent('li').remove();
    } 
    /*else {
      // If clicked item
      $this.toggleClass('done');
      $this.find('.fa-square-o, .fa-check-square-o')
        .toggleClass('fa-square-o fa-check-square-o');
      
      var $item = $this.detach();
      
      if($this.hasClass('done')){
        // If marked as done, move to bottom
        $item.appendTo($list);
      } else {
        // If marked back to do, move to top
        $item.prependTo($list);
      }
    }*/

    //updateTitle($list, $title);
    return false;
  });

});