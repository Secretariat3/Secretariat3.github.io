function sayThatWasEasy() {
var thatwaseasy=new Audio("that_was_easy.mp3");
thatwaseasy.play();
}
$("#easy").on("click", sayThatWasEasy);