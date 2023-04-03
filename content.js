fetch('data.json')
    .then((response) => response.json())
    .then((data) => appendData(data));

function appendData(data) {
    let container1 = document.getElementById('para1');
    let container2 = document.getElementById('para2');
    let container3 = document.getElementById('para3');
    container1.innerHTML = `${data["content"][0]["para1"]}`;
    container2.innerHTML = `${data["content"][0]["para2"]}`;
    container3.innerHTML = `${data["content"][0]["para3"]}`;
}