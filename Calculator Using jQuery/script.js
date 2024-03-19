var ResultField = $("#result");

function insertNum(number) {
    var existNum = ResultField.val();
    ResultField.val(existNum + number);
}

function clearNum() {
    ResultField.val('');
}

function Calculate() {
    var Result = eval(ResultField.val());
    ResultField.val(Result);
}

function DeleteNum() {
    var NumberCut = ResultField.val();
    if (NumberCut != '') {
        ResultField.val(NumberCut.slice(0, -1));
    }
}
