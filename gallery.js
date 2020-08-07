/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image

    2) Change the text  of the div with the id = "image"
    to the alt text of the preview image

"url (" + str(previewPic.src) + ")"
    */


    document.getElementById('image').style.backgroundImage="url('"+previewPic.src+"')";
    document.getElementById('image').innerHTML= previewPic.alt;
  }

function unDo(){

    document.getElementById('image').style.backgroundImage= "url( )";
    document.getElementById('image').innerHTML= "Hover an image bellow to display here";
}
