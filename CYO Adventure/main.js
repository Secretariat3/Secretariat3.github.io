var a = document.getElementById("a"); //option a radio button
var b = document.getElementById("b"); //option b radio button
var scenario = document.getElementById("scenario"); //senario text
var go = document.getElementById("submit"); //submit button
var optionA = document.getElementById("optionA"); //text for option a 
var optionB = document.getElementById("optionB"); //text for option b
go.onclick = function() {
    if (a.checked) {
        a.checked = false;
        b.checked = false;
        scenario.innerHTML = "You ran away from the bear only to find a canoe in the middle of a lake. You..."
        optionA.innerHTML = "Run twords the dense part of the forest.";
        optionB.innerHTML = "Swim twords the canoe in the lake.";

        go.onclick = function() {
            if (b.checked) {
                a.checked = false;
                b.checked = false;
                scenario.innerHTML = "You swim twords the cannoe in the middle of the lake. It has a few holes in it, but it is otherwise useable. there are 2 paths to row down the lake. You..."
                optionA.innerHTML = "Take the left stream";
                optionB.innerHTML = "Take the right stream";

                go.onclick = function() {
                    if (a.checked) {
                        a.checked = false;
                        b.checked = false;
                        scenario.innerHTML = "You take the left stream, it opens up into a cave. You live out the rest of your life as a caveman."
                        optionA.innerHTML = "You WIN";
                        optionB.innerHTML = "Goodjob. (go leads twords your death, but click it if you want, I don't care.)";
                    }
                    else {
                        scenario.innerHTML = "You take the right stream, which leads to a roaring waterfall. You wonder why you didn't see this before as you plummet to your death.";
                        go.innerHTML = "Try Again";
                        optionA.innerHTML = "";
                        optionB.innerHTML = "";
                        document.getElementById("aspan").innerHTML = "";
                        document.getElementById("bspan").innerHTML = "";
                        a.remove();
                        b.remove();
                        go.onclick = function() {
                            window.location.reload();
                        };
                    }

                };

            }
            else {
                scenario.innerHTML = "You ran twords the dense part of the forest only to be faced with angy rabbid spiders? You died a horrible death.";
                go.innerHTML = "Try Again";
                optionA.innerHTML = "";
                optionB.innerHTML = "";
                document.getElementById("aspan").innerHTML = "";
                document.getElementById("bspan").innerHTML = "";
                a.remove();
                b.remove();
                go.onclick = function() {
                    window.location.reload();
                };
            }

        };

    }
    else {
        scenario.innerHTML = "The bear caught up and took you to a 5 star resturat! Bad news, you were the meal...";
        go.innerHTML = "Try Again";
        optionA.innerHTML = "";
        optionB.innerHTML = "";
        document.getElementById("aspan").innerHTML = "";
        document.getElementById("bspan").innerHTML = "";
        a.remove();
        b.remove();
        go.onclick = function() {
            window.location.reload();
        };
    }

};
