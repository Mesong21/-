function handleClick(event) {
  var id = event.target.id;
  var content = document.getElementById("content");
  content.innerHTML = "";
  // 字符串数组
  var home = "resource/";
  var path = [];
  var name = [];
  if (id === "area") {
    path = ["area_1.html"];
    name = ["世界杯主办国所在大洲分布"];
  } else if (id === "history") {
    path = ["history_goals.html", "history_info.html"];
    name = ["历届世界杯进球数", "历届世界杯信息"];
  } else if (id === "teams") {
    path = ["teams_info.html", "teams_top3.html"];
    name = ["队伍进球数和罚牌数", "队伍前三名次数"];
  } else if (id === "person") {
    path = ["person_refree.html", "person_top10player.html"];
    name = ["明星主裁", "明星球员"];
  }

  // 获取所有的a元素
  var links = document.getElementsByTagName("a");

  // 遍历所有的a元素，移除active类
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }

  // 将active类添加到被点击的元素上
  event.target.classList.add("active");
  for (var i = 0; i < path.length; i++) {
    var a = document.createElement("a");
    a.href = home + path[i];
    a.textContent = name[i];
    content.appendChild(a);
  }
}

window.onload = function () {
  var area = document.getElementById("area");
  area.className = "active";
  var content = document.getElementById("content");
  content.innerHTML = ``;
  // 字符串数组
  var home = "resource/";
  var path = [];
  var name = [];
  path = ["area_1.html"];
  name = ["世界杯主办国所在大洲分布"];
  for (var i = 0; i < path.length; i++) {
    var a = document.createElement("a");
    a.href = home + path[i];
    a.textContent = name[i];
    content.appendChild(a);
  }
}