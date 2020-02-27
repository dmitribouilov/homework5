var dayHours = [];
var timeList = $("#timeList");
var eventList = $("#eventList");

var saveList = $("#saveList");

var toEnd = moment()
  .endOf("day")
  .fromNow()
  .split(" ");
var currentHour = 23 - toEnd[1];
var saveBtn = $(".saveBtn");

$("#currentDay").html(moment().format("MMM Do YYYY"));

for (let index = 1; index < 13; index++) {
  dayHours.push(index + " AM");
}

for (let index = 1; index < 13; index++) {
  dayHours.push(index + " PM");
}

console.log(dayHours);

for (let index = 0; index < dayHours.length; index++) {
  if (currentHour > index) {
    var li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.setAttribute("class", "list-group-item time-block past");
    li.textContent = dayHours[index];
    var button = document.createElement("button");
    button.setAttribute("class", "saveBtn");
    button.setAttribute("data-index", index);
    var input = document.createElement("input");
    input.setAttribute("id", "eventItem" + index);
    button.textContent = "Save";
    document.querySelector("#eventList").appendChild(li);
    li.appendChild(input);
    li.appendChild(button);
  } else if (currentHour == index) {
    var li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.setAttribute("id", "eventItem" + index);
    li.setAttribute("class", "list-group-item time-block present");
    li.textContent = dayHours[index];
    var button = document.createElement("button");
    button.setAttribute("class", "saveBtn");
    button.setAttribute("data-index", index);
    var input = document.createElement("input");
    input.setAttribute("id", "eventItem" + index);
    button.textContent = "Save";
    document.querySelector("#eventList").appendChild(li);
    li.appendChild(input);
    li.appendChild(button);
  } else {
    var li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.setAttribute("id", "eventItem" + index);
    li.setAttribute("class", "list-group-item time-block future");
    li.textContent = dayHours[index];
    var button = document.createElement("button");
    button.setAttribute("class", "saveBtn");
    button.setAttribute("data-index", index);
    var input = document.createElement("input");
    input.setAttribute("id", "eventItem" + index);
    button.textContent = "Save";
    document.querySelector("#eventList").appendChild(li);
    li.appendChild(input);
    li.appendChild(button);
  }
}

renderLastSaved();

eventList.on("click", function() {
  event.preventDefault();

  if (event.target.className === "saveBtn") {
    console.log(event);

    var eventToSave = $("#eventItem" + event.target.dataset.index).val();
    console.log(eventToSave);

    localStorage.setItem(event.target.dataset.index, eventToSave);
  }
});

function renderLastSaved() {
  for (let index = 0; index < 24; index++) {
    console.log(localStorage.getItem(index));

    $("#eventItem" + index).attr("placeholder", localStorage.getItem(index));
  }
}
