$(document).ready(function () {
    $("#btnDelete").click(deleteTown);
    $("#btnAdd").click(addTown);
});

function addTown() {
    let townName = $("#townNameForAdd").val();
    $("#townNameForAdd").val("");
    $("#towns").append($("<option>").text(townName));
    $("#result").text(townName + " added.");
}

function deleteTown() {
    let townName = $("#townName").val();
    $("#townName").val("");
    let removed = false;
    for (let option of $("#towns option")) {
        if (option.textContent == townName) {
            removed = true;
            option.remove();
        }
    }
    if (removed) $("#result").text(townName + " deleted.");
    else $("#result").text(townName + " not found.");
}
