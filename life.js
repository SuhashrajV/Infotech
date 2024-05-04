 // Function to show content based on clicked item
 function showContent(item) {
    // Hide all content divs
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    // Show content for the clicked item
    document.getElementById(item).style.display = 'block';
  }