document.getElementById("presentation-title").oninput = (ev) => {
    document.getElementById("presentation-subject").setAttribute("value","Presentation submission form: "+ev.target.value);
};