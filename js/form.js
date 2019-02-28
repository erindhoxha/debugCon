document.getElementById("presentation-title").oninput = function (ev) {
    document.getElementById("presentation-subject").setAttribute("value","Presentation submission form: "+ev.target.value);
};