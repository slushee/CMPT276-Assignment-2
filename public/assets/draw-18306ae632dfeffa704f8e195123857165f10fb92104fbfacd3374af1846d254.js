function sortGroups(studentId, groupNum) {
    var groupDiv = document.getElementById("group"+groupNum);
    var studentDiv = document.getElementById("boxId_"+studentId);
    groupDiv.appendChild(studentDiv);
    
}


$(document).ready(function() {
    console.log('foo');
    $('.groupContainers').click(function() {
            $(this).children('.studentBoxes').toggle('slow');
            
    });
});